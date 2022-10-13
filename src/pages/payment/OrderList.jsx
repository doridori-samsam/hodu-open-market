import styles from "../../style";
function OrderList({ productData, quantity }) {
  return (
    <li className="grid ss:grid-cols-[minmax(30%,_45%)_1fr_1fr_1fr] grid-cols-[30%_1fr_1fr_1fr] items-center w-full ss:h-[120px] h-[180px] border-b-[1px] border-disabled">
      <div className="flex ss:items-center ss:flex-row flex-col ss:gap-[30px] gap-[15px]">
        <img
          src={`${productData.image}`}
          alt="주문상품 이미지"
          className="sm:w-[100px] w-[75px] sm:h-[100px] h-[75px] rounded-[10px] object-cover"
        />
        <div className="flex flex-col justify-center font-spoqa ss:gap-[10px] gap-[5px]">
          <div className="sm:text-[14px] text-[12px] text-subText">
            <p>{productData.store_name}</p>
            <p className="sm:text-[18px] text-[14px] text-mainText">
              {productData.product_name}
            </p>
          </div>
          <span className="sm:text-[14px] text-[12px] text-subText">{`수량: ${quantity}개`}</span>
        </div>
      </div>
      <span className="text-center font-spoqa text-[18px] text-subText ">
        -
      </span>
      <span className="text-center font-spoqa sm:text-[18px] text-[14px] text-subText">
        {productData.shipping_fee === 0
          ? "무료배송"
          : productData.shipping_fee.toLocaleString()}
      </span>
      <span className="text-center font-spoqaBold sm:text-[18px] text-[14px]">
        {(productData.price * quantity).toLocaleString()}원
      </span>
    </li>
  );
}

export default OrderList;
