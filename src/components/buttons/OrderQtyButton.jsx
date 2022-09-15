import React from "react";

function OrderQtyButton() {
  return (
    <div className="flex md:w-[150px] md:h-[50px] sl:w-[120px] sl:h-[40px] w-[100px] h-[35px] border-[1px] border-disabled rounded-[5px]">
      <button className="basis-1/3 border-r-[1px] border-disabled icon-icon-minus-line bg-center"></button>
      <span className="basis-1/3 text-center my-auto font-spoqa md:text-[18px] text-[14px]">
        1
      </span>
      <button className="basis-1/3 border-l-[1px] border-disabled icon-icon-plus-line bg-center"></button>
    </div>
  );
}

export default OrderQtyButton;
