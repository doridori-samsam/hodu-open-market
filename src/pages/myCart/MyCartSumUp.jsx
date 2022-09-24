import styles from "../../style";
function MyCartSumUp({ totalPrice, discountPrice, shippingFee }) {
  return (
    <div className="flex items-center w-full h-[150px] mt-[80px] rounded-[10px] bg-background">
      <div className={`grow ${styles.flexCenter} flex-col`}>
        <p className="font-spoqa text-[16px] mb-[12px]">총 상품금액</p>
        <p className="font-spoqa text-[16px]">
          <span className="font-spoqaBold text-[24px]">
            {totalPrice.toLocaleString()}
          </span>{" "}
          원
        </p>
      </div>
      <div className="w-[34px] h-[34px] rounded-[20px] bg-white icon-icon-minus-line bg-center"></div>
      <div className={`grow ${styles.flexCenter} flex-col`}>
        <p className="font-spoqa text-[16px] mb-[12px]">상품할인</p>
        <p className="font-spoqa text-[16px]">
          <span className="font-spoqaBold text-[24px]">
            {discountPrice.toLocaleString()}
          </span>{" "}
          원
        </p>
      </div>
      <div className="w-[34px] h-[34px] rounded-[20px] bg-white icon-icon-plus-line bg-center"></div>
      <div className={`grow ${styles.flexCenter} flex-col`}>
        <p className="font-spoqa text-[16px] mb-[12px]">배송비</p>
        <p className="font-spoqa text-[16px]">
          <span className="font-spoqaBold text-[24px]">
            {shippingFee.toLocaleString()}
          </span>{" "}
          원
        </p>
      </div>
      <div className={`grow ${styles.flexCenter} flex-col`}>
        <p className="font-spoqaBold text-[18px]">결제 예정 금액</p>
        <p className="font-spoqa text-[16px]">
          <span className="font-spoqaBold text-[36px] leading-[45px] text-accentText">
            {(totalPrice - discountPrice + shippingFee).toLocaleString()}
          </span>
          원
        </p>
      </div>
    </div>
  );
}

export default MyCartSumUp;
