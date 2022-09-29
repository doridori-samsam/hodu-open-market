import { useState, useContext, useEffect } from "react";
import { useQuery, useQueries, useQueryClient } from "react-query";
import axios from "axios";
import UserContext from "../../context/UserContext";
import MyCartList from "./MyCartList";
import MyCartEmpty from "./MyCartEmpty";
import MyCartSumUp from "./MyCartSumUp";
import NavBar from "../../components/navBar/NavBar";
import SubButton from "../../components/buttons/SubButton";
import SelectButton from "../../components/buttons/SelectButton";
import NowLoading from "../../components/NowLoading";
import styles from "../../style";

function MyCart() {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(true);

  const { data, status } = useQuery(["cart-list", token], getCartList, {
    cacheTime: 30000,
  });
  const listDetails = useQueries(
    !!data
      ? data.map((item) => {
          return {
            queryKey: ["info", item.product_id],
            queryFn: () => getDetails(item.product_id),
          };
        })
      : []
  );

  /**장바구니 목록 가져오기 */
  async function getCartList() {
    const res = await axios.get(url + "cart/", {
      headers: { Authorization: `JWT ${token}` },
    });
    return res.data.results;
  }

  /**장바구니 리스트에서 뽑은 product_id로 상품 상세정보 가져오기 */
  async function getDetails(id) {
    const res = await axios.get(url + "products/" + id + "/");
    return res.data;
  }
  const loadingFinishAll = listDetails.every((item) => item.isSuccess);

  useEffect(() => {
    function getTotalPrice() {
      if (isAllChecked) {
        let totalPriceArr = data.map((item, idx) => {
          return item.quantity * listDetails[idx].data.price;
        });
        setTotalPrice(
          totalPriceArr.reduce((prev, cur) => {
            return prev + cur;
          }, 0)
        );
        let shippingFeeArr = listDetails.map((list, idx) => {
          return list.data.shipping_fee;
        });
        setShippingFee(
          shippingFeeArr.reduce((prev, cur) => {
            return prev + cur;
          }, 0)
        );
      }
    }
    data && loadingFinishAll && getTotalPrice();
  }, [data, listDetails]);

  if (status === "loading") {
    return <NowLoading />;
  }

  console.log(data, "장바구니 리스트");
  console.log(listDetails, "상품 상세정보");

  /**장바구니 상품 전체 선택 */
  function selectAllItem(e) {
    setIsAllChecked(!isAllChecked);
  }
  /**장바구니 상품 개별 checkbox 선택 함수 */
  function selectItem(e) {
    setIsAllChecked(false);
    setTotalPrice(0);
    if (e.target.checked) {
      const itemQuantity = data[e.target.value].quantity;
      const itemPrice = listDetails[e.target.value].data.price;
      const total = itemQuantity * itemPrice;
      setTotalPrice(total);
    }
  }

  console.log(totalPrice);

  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout}`}>
        <section className={`${styles.flexCenter} flex-col w-[95%] md:w-[85%]`}>
          <h1 className="font-spoqaBold text-[36px] my-[52px]">장바구니</h1>
          <div className="grid items-center grid-cols-[12%_minmax(30%,_40%)_1fr_1fr] w-full h-[50px] px-[30px] mb-[35px] rounded-[10px] bg-background text-center">
            <SelectButton checked={isAllChecked} clickCheck={selectAllItem} />
            <span className="font-spoqa text-[18px] leading-[30px]">
              상품정보
            </span>
            <span className="font-spoqa text-[18px] leading-[30px]">수량</span>
            <span className="font-spoqa text-[18px] leading-[30px]">
              상품금액
            </span>
          </div>
          {data && data.length === 0 ? (
            <MyCartEmpty />
          ) : (
            <>
              <ul className="flex flex-col w-full gap-[10px]">
                {loadingFinishAll &&
                  data &&
                  data.map((item, idx) => (
                    <MyCartList
                      key={item.product_id}
                      productId={item.product_id}
                      itemId={item.cart_item_id}
                      itemInfo={listDetails}
                      defaultQty={item.quantity}
                      index={idx}
                    >
                      <SelectButton
                        value={idx}
                        checked={isAllChecked}
                        clickCheck={selectItem}
                      />
                    </MyCartList>
                  ))}
              </ul>
              {data && loadingFinishAll && (
                <MyCartSumUp
                  totalPrice={totalPrice}
                  discountPrice={0}
                  shippingFee={shippingFee}
                />
              )}
              <SubButton style="w-[220px] h-[68px] mt-[40px] font-spoqaBold text-[24px]">
                주문하기
              </SubButton>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default MyCart;