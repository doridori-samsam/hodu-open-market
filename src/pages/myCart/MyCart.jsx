import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueries } from "react-query";
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
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [checkList, setCheckList] = useState({});
  const [isAllChecked, setIsAllChecked] = useState(true);

  /**주문 페이지에 넘겨질 선택된 상품 */
  const [selectedItems, setSelectedItems] = useState([]);
  const { data, status } = useQuery(["cart-list", token], getCartList, {
    cacheTime: 1000000,
    onSuccess: (data) => {
      setIsAllChecked(true);
      let checkObj = data.reduce((newObj, idx) => {
        newObj["check" + data.indexOf(idx)] = true;
        return newObj;
      }, {});
      setCheckList(checkObj);
    },
  });

  const listDetails = useQueries(
    !!data
      ? data.map((item) => {
          return {
            queryKey: ["info", item.product_id],
            queryFn: () => getDetails(item.product_id),
            cacheTime: 1000000,
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
      let priceSum = 0;
      let feeSum = 0;
      let checkedArr = Object.values(checkList);
      for (let i in checkedArr) {
        if (checkedArr[i]) {
          priceSum += data[i].quantity * listDetails[i].data.price;
          feeSum += listDetails[i].data.shipping_fee;
        }
      }
      setTotalPrice(priceSum);
      setShippingFee(feeSum);
    }
    data && loadingFinishAll && getTotalPrice();
  }, [data, listDetails, checkList]);

  useEffect(() => {
    function getSelectedItems() {
      let checkedArr = Object.values(checkList);
      let copiedCheckedArr = [];
      for (let i in checkedArr) {
        if (checkedArr[i]) {
          copiedCheckedArr.push(data[i]);
        }
      }
      setSelectedItems(copiedCheckedArr);
    }
    getSelectedItems();
  }, [checkList]);

  if (status === "loading") {
    return <NowLoading />;
  }

  /**장바구니 상품 전체 선택 */
  function selectAllItem(e) {
    setIsAllChecked(!isAllChecked);
    if (e.target.checked) {
      for (let key in checkList) {
        setCheckList((cur) => {
          let copiedCheck = { ...cur };
          copiedCheck[key] = true;
          return copiedCheck;
        });
      }
    } else {
      for (let key in checkList) {
        setCheckList((cur) => {
          let copiedCheck = { ...cur };
          copiedCheck[key] = false;
          return copiedCheck;
        });
      }
    }
  }

  /**장바구니 상품 개별 checkbox 선택 함수 */
  function selectItem(e) {
    setIsAllChecked(false);
    setCheckList({
      ...checkList,
      [`check${e.target.value}`]: !checkList[`check${e.target.value}`],
    });
  }

  /**주문하기 버튼 활성화 함수 */
  function orderButtonActivate() {
    const checkedArr = Object.values(checkList);
    let result = checkedArr.some((check) => {
      return check === true;
    });
    return result;
  }

  /**단일 상품 주문하기 버튼 함수 */
  function singleItemOrder(item, idx) {
    navigate("/order", {
      state: {
        items: [item],
        totalPrice: listDetails[idx].data.price * item.quantity,
        shippingFee: listDetails[idx].data.shipping_fee,
        orderKind: "cart_one_order",
      },
    });
  }

  console.log(data, "장바구니 데이터");
  console.log(listDetails, "상품 상세정보");

  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        <h1 className="font-spoqaBold text-[36px] mb-[52px]">장바구니</h1>
        <section className={`${styles.flexCenter} flex-col w-[95%] md:w-[85%]`}>
          <div className="grid items-center grid-cols-[12%_minmax(30%,_40%)_1fr_1fr] w-full h-[50px] px-[30px] mb-[35px] rounded-[10px] bg-background text-center">
            <SelectButton checked={isAllChecked} onChange={selectAllItem} />
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
                      cartInfo={item}
                      stockActive={item.is_active}
                      clickSingleOrder={() => {
                        singleItemOrder(item, idx);
                      }}
                    >
                      <SelectButton
                        value={idx}
                        checked={checkList[`check${idx}`]}
                        onChange={selectItem}
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
              <SubButton
                isActive={orderButtonActivate()}
                onClick={() =>
                  navigate("/order", {
                    state: {
                      items: selectedItems,
                      totalPrice: totalPrice,
                      shippingFee: shippingFee,
                      orderKind: "cart_order",
                    },
                  })
                }
                style="w-[220px] h-[68px] mt-[40px] font-spoqaBold text-[24px]"
              >
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
