import { useState } from "react";
import OrderQtyButton from "../../components/buttons/OrderQtyButton";
import SelectButton from "../../components/buttons/SelectButton";
import SubButton from "../../components/buttons/SubButton";
import AdjustQtyModal from "../../components/Modal/AdjustQtyModal";
import styles from "../../style";

function MyCartList({ itemInfo, defaultQty, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantityNum, setQuantityNum] = useState(defaultQty);

  function openQtyModal() {
    setIsModalOpen(!isModalOpen);
  }

  function getQuantity(num) {
    setQuantityNum(num);
  }

  return (
    <>
      <li className="grid grid-cols-[5%_minmax(30%,_43%)_1.5fr_1fr_5%] items-center pl-[30px] w-full h-[200px] border-[1px] border-disabled rounded-[10px]">
        <div className="">
          <SelectButton />
        </div>
        <div className="flex gap-[30px]">
          <img
            src={itemInfo[index].data.data.image}
            alt="상품 이미지"
            className="w-[160px] h-[160px] rounded-[10px] border-[1px] border-disabled object-cover"
          />
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-spoqa text-subText">
                {itemInfo[index].data.data.store_name}
              </span>
              <p className="font-spoqa text-mainText text-[18px]">
                {itemInfo[index].data.data.product_name}
              </p>
              <strong className="font-spoqa text-mainText text-[18px] ">
                {itemInfo[index].data.data.price.toLocaleString()}원
              </strong>
            </div>
            <div>
              <p className="font-spoqa text-[14px] text-subText">
                택배배송/ 무료배송
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <OrderQtyButton
            defaultQty={defaultQty}
            openModal={openQtyModal}
            passQuantity={() => null}
          />
        </div>
        <div className="basis-2/12 flex flex-col items-center gap-[26px]">
          <p className="font-spoqaBold text-[18px] text-accentText">
            {(defaultQty * itemInfo[index].data.data.price).toLocaleString()}원
          </p>
          <SubButton style="w-[130px] h-[40px] font-spoqaMedium text-[16px]">
            주문하기
          </SubButton>
        </div>
        <button
          className={`${styles.closeButton} self-start m-[10px]`}
        ></button>
      </li>
      <AdjustQtyModal
        open={isModalOpen}
        defaultQty={defaultQty}
        close={() => {
          setIsModalOpen(false);
        }}
        passQuantity={getQuantity}
      />
    </>
  );
}

export default MyCartList;
