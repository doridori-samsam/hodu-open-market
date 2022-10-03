import { useContext } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";
import NavBar from "../../components/navBar/NavBar";
import OrderList from "./OrderList";
import OrderInfoInput from "./OrderInfoInput";
import PaymentSumUp from "./PaymentSumUp";
import styles from "../../style";

function Payment() {
  const location = useLocation();
  const selectedItems = location.state.items;
  const itemPrice = location.state.totalPrice;
  const shippingFee = location.state.shippingFee;

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
            {selectedItems.map((item, idx) => {
              return (
                <OrderList
                  key={idx}
                  quantity={item.quantity}
                  productId={item.product_id}
                />
              );
            })}
          </ul>
          <div className="self-end mt-[30px]">
            <span className="mr-[10px] font-spoqaMedium text-[18px]">
              총 주문금액
            </span>
            <span className="font-spoqaBold text-accentText text-[24px]">
              {`${(itemPrice + shippingFee).toLocaleString()}원`}
            </span>
          </div>
        </section>
        <OrderInfoInput>
          <PaymentSumUp
            productPrice={itemPrice}
            shippingFee={shippingFee}
            total={itemPrice + shippingFee}
          />
        </OrderInfoInput>
      </main>
    </>
  );
}

export default Payment;
