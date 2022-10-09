import SubButton from "../../components/buttons/SubButton";
import styles from "../../style";

function OrderInfoInput({
  children,
  singleInput,
  handlePhoneNumber,
  variousInputOnBlur,
  clickPostCode,
  addressVal1,
  addressVal2,
}) {
  return (
    <section className={`${styles.sectionLayout} mt-[80px]`}>
      <h2 className="pb-[15px] border-b-[2px] border-disabled font-spoqaMedium text-[24px]">
        배송정보
      </h2>
      <div className="mt-[40px]">
        <p className="pb-[8px] font-spoqaMedium text-[18px] border-b-[2px] border-disabled">
          주문자 정보
        </p>
        <div className="flex items-center gap-[130px] border-b-[1px] border-disabled">
          <label
            htmlFor="buyer_name"
            className="basis-1/12 font-spoqa text-[16px]"
          >
            이름
          </label>
          <input
            type="text"
            id="buyer_name"
            name="buyer_name"
            onChange={singleInput}
            className={`${styles.inputBox} w-[330px] h-[40px] my-[8px] border-[1px] px-[10px]`}
          />
        </div>
        <div className="flex items-center gap-[130px] border-b-[1px] border-disabled">
          <label
            htmlFor="buyer_phone"
            className="basis-1/12 font-spoqa text-[16px]"
          >
            휴대폰
          </label>
          <div className="flex items-center justify-between w-[330px]">
            <input
              type="text"
              id="buyer_phone"
              name="buyer_phone_number1"
              maxLength={4}
              onChange={handlePhoneNumber}
              onBlur={variousInputOnBlur}
              className={`${styles.inputBox} w-[80px] h-[40px] my-[8px] border-[1px] px-[10px]`}
            />
            -
            <input
              type="text"
              id="buyer_phone2"
              name="buyer_phone_number2"
              maxLength={4}
              onChange={handlePhoneNumber}
              onBlur={variousInputOnBlur}
              className={`${styles.inputBox} w-[100px] h-[40px] my-[8px] border-[1px] px-[10px]`}
            />
            -
            <input
              type="text"
              id="buyer_phone3"
              name="buyer_phone_number3"
              maxLength={4}
              onChange={handlePhoneNumber}
              onBlur={variousInputOnBlur}
              className={`${styles.inputBox} w-[100px] h-[40px] my-[8px] border-[1px] px-[10px]`}
            />
          </div>
        </div>
        <div className="flex items-center gap-[130px] border-b-[1px] border-disabled">
          <label
            htmlFor="buyer_email"
            className="basis-1/12 font-spoqa text-[16px]"
          >
            이메일
          </label>
          <input
            type="text"
            id="buyer_email"
            name="buyer_email"
            onChange={singleInput}
            className={`${styles.inputBox} w-[330px] h-[40px] my-[8px] border-[1px] px-[10px]`}
          />
        </div>
      </div>
      <div className="mt-[40px]">
        <p className="pb-[8px] font-spoqaMedium text-[18px] border-b-[2px] border-disabled">
          배송지 정보
        </p>
        <div className="flex items-center gap-[130px] border-b-[1px] border-disabled">
          <label
            htmlFor="receiver_name"
            className="basis-1/12 font-spoqa text-[16px]"
          >
            수령인
          </label>
          <input
            type="text"
            id="receiver_name"
            name="receiver"
            onChange={singleInput}
            className={`${styles.inputBox} w-[330px] h-[40px] my-[8px] border-[1px] px-[10px]`}
          />
        </div>
        <div className="flex items-center gap-[130px] border-b-[1px] border-disabled">
          <label
            htmlFor="receiver_phone"
            className="basis-1/12 font-spoqa text-[16px]"
          >
            휴대폰
          </label>
          <div className="flex items-center justify-between w-[330px]">
            <input
              type="text"
              id="receiver_phone"
              name="receiver_phone_number1"
              maxLength={4}
              onChange={handlePhoneNumber}
              onBlur={variousInputOnBlur}
              className={`${styles.inputBox} w-[80px] h-[40px] my-[8px] border-[1px] px-[10px]`}
            />
            -
            <input
              type="text"
              id="receiver_phone2"
              name="receiver_phone_number2"
              maxLength={4}
              onChange={handlePhoneNumber}
              onBlur={variousInputOnBlur}
              className={`${styles.inputBox} w-[100px] h-[40px] my-[8px] border-[1px] px-[10px]`}
            />
            -
            <input
              type="text"
              id="receiver_phone3"
              name="receiver_phone_number3"
              maxLength={4}
              onChange={handlePhoneNumber}
              onBlur={variousInputOnBlur}
              className={`${styles.inputBox} w-[100px] h-[40px] my-[8px] border-[1px] px-[10px]`}
            />
          </div>
        </div>
        <div className="flex items-center gap-[130px] border-b-[1px] border-disabled">
          <label
            htmlFor="address"
            className="basis-1/12 self-start mt-[18px] font-spoqa text-[16px]"
          >
            배송주소
          </label>
          <div className="flex flex-col">
            <div className="flex items-center gap-[10px]">
              <input
                type="text"
                id="address"
                name="address1"
                value={addressVal1}
                readOnly
                className={`${styles.inputBox} w-[170px] h-[40px] my-[8px] border-[1px] px-[10px]`}
              />
              <SubButton
                onClick={clickPostCode}
                isActive="true"
                style="w-[154px] h-[40px] font-spoqaMedium"
              >
                우편번호 조회
              </SubButton>
            </div>
            <input
              type="text"
              id="address2"
              name="address2"
              value={addressVal2}
              readOnly
              className={`${styles.inputBox} w-[600px] h-[40px] border-[1px] px-[10px]`}
            />
            <input
              type="text"
              id="address3"
              name="address"
              onBlur={variousInputOnBlur}
              className={`${styles.inputBox} w-[600px] h-[40px] my-[8px] border-[1px] px-[10px]`}
            />
          </div>
        </div>
        <div className="flex items-center gap-[130px] border-b-[1px] border-disabled">
          <label
            htmlFor="deliver-msg"
            className="basis-1/12 font-spoqa text-[16px]"
          >
            배송 메시지
          </label>
          <input
            type="text"
            id="deliver-msg"
            name="address_message"
            onChange={singleInput}
            className={`${styles.inputBox} w-[600px] h-[40px] my-[8px] border-[1px] px-[10px]`}
          />
        </div>
      </div>
      <div className="mt-[70px] w-full flex flex-row justify-between">
        <div className="w-[59%]">
          <h2 className="mb-[18px] font-spoqaMedium text-[24px]">결제수단</h2>
          <div className="h-[56px] flex items-center justify-between border-y-[2px] border-disabled">
            <div className="flex shrink-0 gap-[8px]">
              <input
                type="radio"
                id="card"
                name="payment_method"
                value="CARD"
                onChange={singleInput}
                className="appearance-none align-bottom text-center border-[2px] border-disabled w-[20px] h-[20px] rounded-[20px] cursor-pointer checked:border-primary checked:after:content-[''] checked:after:inline-block checked:after:align-[4.2px] checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-[12px] checked:after:bg-primary"
              />
              <label
                htmlFor="card"
                className="font-spoqaMedium text-[16px] leading-[20px]"
              >
                신용/체크카드
              </label>
            </div>
            <div className="flex shrink-0 gap-[8px]">
              <input
                type="radio"
                id="deposit"
                name="payment_method"
                value="DEPOSIT"
                onChange={singleInput}
                className="appearance-none align-bottom text-center border-[2px] border-disabled w-[20px] h-[20px] rounded-[20px] cursor-pointer checked:border-primary checked:after:content-[''] checked:after:inline-block checked:after:align-[4.2px] checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-[12px] checked:after:bg-primary"
              />
              <label
                htmlFor="deposit"
                className="font-spoqaMedium text-[16px] leading-[20px]"
              >
                무통장 입금
              </label>
            </div>
            <div className="flex shrink-0 gap-[8px]">
              <input
                type="radio"
                id="mobile-pay"
                name="payment_method"
                value="PHONE_PAYMENT"
                onChange={singleInput}
                className="appearance-none align-bottom text-center border-[2px] border-disabled w-[20px] h-[20px] rounded-[20px] cursor-pointer checked:border-primary checked:after:content-[''] checked:after:inline-block checked:after:align-[4.3px] checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-[12px] checked:after:bg-primary"
              />
              <label
                htmlFor="mobile-pay"
                className="font-spoqaMedium text-[16px] leading-[20px]"
              >
                휴대폰 결제
              </label>
            </div>
            <div className="flex shrink-0 gap-[8px]">
              <input
                type="radio"
                id="naver-pay"
                name="payment_method"
                value="NAVERPAY"
                onChange={singleInput}
                className="appearance-none align-bottom text-center border-[2px] border-disabled w-[20px] h-[20px] rounded-[20px] cursor-pointer checked:border-primary checked:after:content-[''] checked:after:inline-block checked:after:align-[4.3px] checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-[12px] checked:after:bg-primary"
              />
              <label
                htmlFor="naver-pay"
                className="font-spoqaMedium text-[16px] leading-[20px]"
              >
                네이버페이
              </label>
            </div>
            <div className="flex shrink-0 gap-[8px]">
              <input
                type="radio"
                id="kakao-pay"
                name="payment_method"
                value="KAKAOPAY"
                onChange={singleInput}
                className="appearance-none align-bottom text-center border-[2px] border-disabled w-[20px] h-[20px] rounded-[20px] cursor-pointer checked:border-primary checked:after:content-[''] checked:after:inline-block checked:after:align-[4.3px] checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-[12px] checked:after:bg-primary"
              />
              <label
                htmlFor="kakao-pay"
                className="font-spoqaMedium text-[16px] leading-[20px]"
              >
                카카오페이
              </label>
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export default OrderInfoInput;