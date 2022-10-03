import React from "react";

function OrderList() {
  return (
    <li className="grid grid-cols-[minmax(30%,_45%)_1fr_1fr_1fr] items-center w-full h-[120px] pb-[12px] border-b-[1px] border-disabled">
      <div className="flex items-center gap-[30px]">
        <img
          src={`${data.image}`}
          alt="주문상품 이미지"
          className="w-[100px] h-[100px] rounded-[10px] object-cover"
        />
        <div className="flex flex-col justify-center font-spoqa gap-[10px]">
          <p className="text-[14px] text-subText">
            {data.store_name}
            <p className="text-[18px] text-mainText">{data.product_name}</p>
          </p>
          <span className="text-[14px] text-subText">{`수량: 1개`}</span>
        </div>
      </div>
      <span className="text-center">-</span>
      <span className="text-center font-spoqa text-[18px] text-subText">
        {data.shipping_fee === 0
          ? "무료배송"
          : data.shipping_fee.toLocaleString()}
      </span>
      <span className="text-center font-spoqaBold text-[18px]">
        {data.price.toLocaleString()}원
      </span>
    </li>
  );
}

export default OrderList;
