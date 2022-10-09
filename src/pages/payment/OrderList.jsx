function OrderList({ productData, quantity }) {
  return (
    <li className="grid grid-cols-[minmax(30%,_45%)_1fr_1fr_1fr] items-center w-full h-[120px] border-b-[1px] border-disabled">
      <div className="flex items-center gap-[30px]">
        <img
          src={`${productData.image}`}
          alt="주문상품 이미지"
          className="w-[100px] h-[100px] rounded-[10px] object-cover"
        />
        <div className="flex flex-col justify-center font-spoqa gap-[10px]">
          <p className="text-[14px] text-subText">
            {productData.store_name}
            <p className="text-[18px] text-mainText">
              {productData.product_name}
            </p>
          </p>
          <span className="text-[14px] text-subText">{`수량: ${quantity}개`}</span>
        </div>
      </div>
      <span className="text-center font-spoqa text-[18px] text-subText ">
        -
      </span>
      <span className="text-center font-spoqa text-[18px] text-subText">
        {productData.shipping_fee === 0
          ? "무료배송"
          : productData.shipping_fee.toLocaleString()}
      </span>
      <span className="text-center font-spoqaBold text-[18px]">
        {(productData.price * quantity).toLocaleString()}원
      </span>
    </li>
  );
}

export default OrderList;