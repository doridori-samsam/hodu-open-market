import { useState, useEffect } from "react";

function OrderQtyButton({
  stock,
  defaultQty,
  openModal,
  passQuantity,
  blockAdjust,
}) {
  const [orderQty, setOrderQty] = useState(defaultQty);
  const [isActive, setIsActive] = useState(true);

  function addQty() {
    setOrderQty(orderQty + 1);
    if (orderQty === stock - 1) {
      setIsActive(false);
    }
  }

  function subtractQty() {
    if (orderQty === 1) {
      null;
    } else {
      setOrderQty(orderQty - 1);
      setIsActive(true);
    }
  }

  useEffect(() => {
    setOrderQty(defaultQty);
  }, [defaultQty]);

  useEffect(() => {
    passQuantity(orderQty);
  }, [orderQty]);

  return (
    <div
      onClick={openModal}
      className={`flex md:w-[150px] sl:w-[120px] w-[85px] md:h-[50px] sl:h-[40px] h-[32px] border-[1px] border-disabled rounded-[5px] ${
        blockAdjust && "cursor-pointer"
      }`}
    >
      <button
        onClick={subtractQty}
        className={`basis-1/3 border-r-[1px] border-disabled icon-icon-minus-line bg-center sl:bg-auto bg-[length:12px_12px] ${
          blockAdjust && "pointer-events-none"
        }`}
      ></button>
      <span className="basis-1/3 text-center my-auto font-spoqa md:text-[18px] sm:text-[14px] text-[12px]">
        {orderQty}
      </span>
      <button
        disabled={!isActive}
        onClick={addQty}
        className={`basis-1/3 border-l-[1px] ${
          isActive ? null : "bg-subText"
        } border-disabled icon-icon-plus-line bg-center sl:bg-auto bg-[length:12px_12px] ${
          blockAdjust && "pointer-events-none"
        }`}
      ></button>
    </div>
  );
}

export default OrderQtyButton;
