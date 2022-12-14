import MediumButton from "../../components/buttons/MediumButton";

function PaymentSumUp({
  productPrice,
  shippingFee,
  total,
  consent,
  clickConsent,
  isPayActive,
  clickPay,
}) {
  return (
    <div className="md:w-[37%] sm:w-[50%]">
      <h2 className="mb-[18px] font-spoqaMedium sm:text-[24px] text-[20px]">
        최종결제 정보
      </h2>
      <div
        className={`h-[350px] border-[2px] rounded-[10px] ${
          isPayActive ? "border-primary" : "border-disabled"
        }`}
      >
        <div className="flex flex-col p-[20px] gap-[10px] pb-[10px] border-b-[1px] border-disabled font-spoqa text-[16px]">
          <p className="flex justify-between">
            <span>- 상품금액</span>
            <span className="font-spoqaBold text-[18px]">
              {productPrice.toLocaleString()}{" "}
              <span className="font-spoqa text-[14px] text-subText">원</span>
            </span>
          </p>
          <p className="flex justify-between">
            <span>- 할인금액</span>
            <span className="font-spoqaBold text-[18px]">
              0 <span className="font-spoqa text-[14px] text-subText">원</span>
            </span>
          </p>
          <p className="flex justify-between">
            <span>- 배송비</span>
            <span className="font-spoqaBold text-[18px]">
              {shippingFee.toLocaleString()}{" "}
              <span className="font-spoqa text-[14px] text-subText">원</span>
            </span>
          </p>
        </div>
        <p className="p-[20px] flex justify-between items-center">
          <span className="font-spoqa">- 결제금액</span>
          <span className="font-spoqaBold text-[24px] text-accentText">
            {`${total.toLocaleString()}원`}
          </span>
        </p>
        <div className="w-full h-[138px] pt-[20px] pb-[12px] px-[20px] flex flex-col justify-between items-center bg-background z-[-100] rounded-b-lg">
          <div>
            <button
              className={`mb-[3px] mr-[10px] w-[16px] h-[16px] align-middle ${
                consent ? "icon-check-fill-box" : "icon-check-box"
              }`}
              onClick={clickConsent}
            ></button>
            <span className="font-spoqa text-[15px]">
              주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
            </span>
          </div>
          <MediumButton
            isActive={isPayActive}
            onClick={clickPay}
            style="sm:text-[20px] sm:w-[200px] w-[120px] h-[40px]"
          >
            결제하기
          </MediumButton>
        </div>
      </div>
    </div>
  );
}

export default PaymentSumUp;
