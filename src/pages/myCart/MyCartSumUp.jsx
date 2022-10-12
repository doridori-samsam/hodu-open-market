import styles from "../../style";
function MyCartSumUp({ totalPrice, discountPrice, shippingFee }) {
  return (
    <div className="flex items-center w-full sm:h-[150px] h-[100px] sm:mt-[80px] mt-[50px] rounded-[10px] bg-background">
      <div className={`grow ${styles.flexCenter} flex-col`}>
        <p className="font-spoqa sm:text-[16px] text-[12px] sm:mb-[12px]">
          총 상품금액
        </p>
        <p className="font-spoqa sm:text-[16px] text-[12px]">
          <span className="font-spoqaBold sm:text-[24px] text-[14px]">
            {totalPrice.toLocaleString()}
          </span>{" "}
          원
        </p>
      </div>
      <div className="sm:w-[34px] w-[23px] sm:h-[34px] h-[23px] rounded-[20px] bg-white icon-icon-minus-line bg-center sl:bg-auto bg-[length:12px_12px]"></div>
      <div className={`grow ${styles.flexCenter} flex-col`}>
        <p className="font-spoqa sm:text-[16px] text-[12px] sm:mb-[12px]">
          상품할인
        </p>
        <p className="font-spoqa sm:text-[16px] text-[12px]">
          <span className="font-spoqaBold sm:text-[24px] text-[14px]">
            {discountPrice.toLocaleString()}
          </span>{" "}
          원
        </p>
      </div>
      <div className="sm:w-[34px] w-[23px] sm:h-[34px] h-[23px] rounded-[20px] bg-white icon-icon-plus-line bg-center sl:bg-auto bg-[length:12px_12px]"></div>
      <div className={`grow ${styles.flexCenter} flex-col`}>
        <p className="font-spoqa sm:text-[16px] text-[12px] sm:mb-[12px]">
          배송비
        </p>
        <p className="font-spoqa sm:text-[16px] text-[12px]">
          <span className="font-spoqaBold sm:text-[24px] text-[14px]">
            {shippingFee.toLocaleString()}
          </span>{" "}
          원
        </p>
      </div>
      <div className={`grow ${styles.flexCenter} flex-col`}>
        <p className="font-spoqaBold sm:text-[18px] text-[12px]">
          결제 예정 금액
        </p>
        <p className="font-spoqa sm:text-[16px] text-[12px]">
          <span className="font-spoqaBold sm:text-[36px] text-[14px] sm:leading-[45px] text-accentText">
            {(totalPrice - discountPrice + shippingFee).toLocaleString()}
          </span>
          원
        </p>
      </div>
    </div>
  );
}

export default MyCartSumUp;
