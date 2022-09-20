import { useState } from "react";

function OrderQtyButton({ stock }) {
  const [orderQty, setOrderQty] = useState(1);
  const [isActive, setIsActive] = useState(true);

  function addQty() {
    if (orderQty >= stock) {
      setIsActive(false);
    } else {
      setOrderQty(orderQty + 1);
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

  return (
    <div className="flex md:w-[150px] md:h-[50px] sl:w-[120px] sl:h-[40px] w-[100px] h-[35px] border-[1px] border-disabled rounded-[5px]">
      <button
        onClick={subtractQty}
        className="basis-1/3 border-r-[1px] border-disabled icon-icon-minus-line bg-center"
      ></button>
      <span className="basis-1/3 text-center my-auto font-spoqa md:text-[18px] text-[14px]">
        {orderQty}
      </span>
      <button
        disabled={!isActive}
        onClick={addQty}
        className={`basis-1/3 border-l-[1px] ${
          isActive ? null : null
        } border-disabled icon-icon-plus-line bg-center`}
      ></button>
    </div>
  );
}

export default OrderQtyButton;
