import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import UserContext from "../../context/UserContext";
import NavBar from "../../components/navBar/NavBar";
import OrderInfoInput from "./OrderInfoInput";
import PaymentSumUp from "./PaymentSumUp";
import styles from "../../style";

function Payment() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["info", 44]);
  console.log(data);

  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        <h1 className="font-spoqaBold text-[36px] mb-[52px]">주문/결제하기</h1>
        <section className={`${styles.flexCenter} flex-col w-[95%] md:w-[85%]`}>
          <div className="grid items-center grid-cols-[45%_1fr_1fr_1fr] w-full h-[50px] mb-[16px] rounded-[10px] bg-background text-center">
            <span className="font-spoqa text-[18px]">상품정보</span>
            <span className="font-spoqa text-[18px]">할인</span>
            <span className="font-spoqa text-[18px]">배송비</span>
            <span className="font-spoqa text-[18px]">주문금액</span>
          </div>
          <ul className="flex flex-col w-full">
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
                    <p className="text-[18px] text-mainText">
                      {data.product_name}
                    </p>
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
            <li className="w-full h-[120px] border-b-[1px] border-disabled">
              리스트2
            </li>
          </ul>
          <div className="self-end mt-[30px]">
            <span className="font-spoqaMedium text-[18px]">총 주문금액</span>
            &nbsp;
            <span className="font-spoqaBold text-accentText text-[24px]">
              46,500
            </span>
            <span className="font-spoqaBold text-accentText text-[24px]">
              원
            </span>
          </div>
        </section>
        <OrderInfoInput>
          <PaymentSumUp />
        </OrderInfoInput>
      </main>
    </>
  );
}

export default Payment;
