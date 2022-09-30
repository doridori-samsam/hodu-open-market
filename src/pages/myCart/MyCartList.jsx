import { useState, useContext, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import UserContext from "../../context/UserContext";
import OrderQtyButton from "../../components/buttons/OrderQtyButton";
import SelectButton from "../../components/buttons/SelectButton";
import SubButton from "../../components/buttons/SubButton";
import AdjustQtyModal from "../../components/Modal/AdjustQtyModal";
import DeleteCheckModal from "../../components/Modal/DeleteCheckModal";
import styles from "../../style";

function MyCartList({
  itemInfo,
  defaultQty,
  index,
  itemId,
  productId,
  children,
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
        console.log("삭제 실패");
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
      <li className="grid grid-cols-[5%_minmax(30%,_43%)_1.5fr_1fr_3%] items-center pl-[30px] w-full h-[200px] border-[1px] border-disabled rounded-[10px]">
        <div className="">{children}</div>
        <div className="flex gap-[30px]">
          <img
            src={itemInfo[index].data.image}
            alt="상품 이미지"
            className="w-[160px] h-[160px] rounded-[10px] border-[1px] border-disabled object-cover"
          />
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-spoqa text-subText">
                {itemInfo[index].data.store_name}
              </span>
              <p className="font-spoqa text-mainText text-[18px]">
                {itemInfo[index].data.product_name}
              </p>
              <strong className="font-spoqa text-mainText text-[18px] ">
                {itemInfo[index].data.price.toLocaleString()}원
              </strong>
            </div>
            <div>
              <p className="font-spoqa text-[14px] text-subText">
                {`택배배송 / ${
                  itemInfo[index].data.shipping_fee === 0
                    ? `무료배송`
                    : itemInfo[index].data.shipping_fee.toLocaleString() + "원"
                } `}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <OrderQtyButton
            defaultQty={defaultQty}
            openModal={openQtyModal}
            passQuantity={getQuantity}
            stock={itemInfo[index].data.stock}
            blockAdjust={true}
          />
        </div>
        <div className="flex flex-col items-center gap-[26px]">
          <p className="font-spoqaBold text-[18px] text-accentText">
            {(defaultQty * itemInfo[index].data.price).toLocaleString()}원
          </p>
          <SubButton style="w-[130px] h-[40px] font-spoqaMedium text-[16px]">
            주문하기
          </SubButton>
        </div>
        <button
          onClick={openDelModal}
          className={`${styles.closeButton} self-start mt-[10px] text-right`}
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
