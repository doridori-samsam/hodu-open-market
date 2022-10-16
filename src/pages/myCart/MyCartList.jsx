import { useState, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import UserContext from "../../context/UserContext";
import OrderQtyButton from "../../components/buttons/OrderQtyButton";
import SubButton from "../../components/buttons/SubButton";
import AdjustQtyModal from "../../components/Modal/AdjustQtyModal";
import DeleteCheckModal from "../../components/Modal/DeleteCheckModal";
import styles from "../../style";

function MyCartList({
  cartInfo,
  itemInfo,
  defaultQty,
  index,
  itemId,
  productId,
  children,
  stockActive,
  clickSingleOrder,
}) {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const queryClient = useQueryClient();
  const [isQtyModalOpen, setIsQtyModalOpen] = useState(false);
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const [quantityNum, setQuantityNum] = useState(defaultQty);
  const deleteItem = useMutation(
    (itemId) =>
      axios.delete(url + "cart/" + itemId + "/", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }),
    {
      onSuccess: () => {
        setIsDelModalOpen(false);
        queryClient.invalidateQueries("cart-list");
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  /**장바구니 리스트 삭제 mutate function */
  function clickDeleteItem() {
    deleteItem.mutate(itemId);
  }

  /**장바구니 아이템 수량 수정 모달창 띄우기*/
  function openQtyModal() {
    setIsQtyModalOpen(true);
  }

  /**장바구니 아이템 삭제 확인 모달창 띄우기 */
  function openDelModal() {
    setIsDelModalOpen(!isDelModalOpen);
  }

  function getQuantity(num) {
    setQuantityNum(num);
  }

  return (
    <>
      <li className="grid sm:grid-cols-[5%_minmax(30%,_43%)_1.5fr_1fr_4%] grid-cols-[7%_33%_34%_20%_5%] items-center md:pl-[30px] pl-[10px] w-full sm:h-[200px] h-[180px] border-[1px] border-disabled rounded-[10px]">
        <div className="">{children}</div>
        <div className="flex sm:flex-row flex-col sm:gap-[30px] gap-[5px]">
          <img
            src={itemInfo[index].data.image}
            alt="상품 이미지"
            className="sl:w-[160px] sm:w-[100px] w-[70px] sl:h-[160px] sm:h-[100px] h-[70px] shrink-0 my-auto rounded-[10px] border-[1px] border-disabled object-cover"
          />
          <div className="w-full flex flex-col justify-between shrink">
            <div>
              <span className="font-spoqa text-subText sl:text-[16px] sm:text-[14px] text-[12px]">
                {itemInfo[index].data.store_name}
              </span>
              <p
                className={`${styles.textEllipsis} sm:whitespace-normal text-ellipsis font-spoqa text-mainText sl:text-[18px] sm:text-[15px] text-[13px]`}
              >
                {itemInfo[index].data.product_name}
              </p>
              <strong className="font-spoqa text-mainText sl:text-[18px] sm:text-[15px] text-[13px] ">
                {itemInfo[index].data.price.toLocaleString()}원
              </strong>
            </div>
            <div>
              <p className="font-spoqa sm:text-[14px] text-[11px] text-subText">
                {`${
                  itemInfo[index].data.shipping_method === "PARCEL"
                    ? `택배배송`
                    : `직접배송`
                } / ${
                  itemInfo[index].data.shipping_fee === 0
                    ? `무료배송`
                    : itemInfo[index].data.shipping_fee.toLocaleString() + "원"
                } `}
              </p>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:justify-center">
          <OrderQtyButton
            defaultQty={defaultQty}
            openModal={openQtyModal}
            passQuantity={getQuantity}
            stock={itemInfo[index].data.stock}
            blockAdjust={true}
          />
        </div>
        <div className="sm:w-full w-fit flex flex-col items-center sm:gap-[26px] gap-[10px]">
          <p className="font-spoqaBold sl:text-[18px] sm:text-[16px] text-[14px] text-accentText">
            {(defaultQty * itemInfo[index].data.price).toLocaleString()}원
          </p>
          <SubButton
            isActive={stockActive}
            onClick={clickSingleOrder}
            style={`sl:w-[130px] sm:w-[100px] w-[70px] sm:h-[40px] h-[30px] font-spoqaMedium sm:text-[16px] text-[12px] ${
              stockActive ? "bg-primary" : "bg-disabled"
            }`}
          >
            주문하기
          </SubButton>
        </div>
        <button
          onClick={openDelModal}
          className={`${styles.closeButton} self-start mx-auto mt-[10px]`}
        ></button>
      </li>
      <AdjustQtyModal
        open={isQtyModalOpen}
        defaultQty={defaultQty}
        close={() => {
          setIsQtyModalOpen(false);
        }}
        passQuantity={getQuantity}
        stock={itemInfo[index].data.stock}
        cartId={itemId}
        productId={productId}
      />
      <DeleteCheckModal
        close={() => {
          setIsDelModalOpen(false);
        }}
        clickConfirm={clickDeleteItem}
        open={isDelModalOpen}
      />
    </>
  );
}

export default MyCartList;
