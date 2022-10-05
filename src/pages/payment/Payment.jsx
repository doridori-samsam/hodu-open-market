import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import UserContext from "../../context/UserContext";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";
import OrderList from "./OrderList";
import OrderInfoInput from "./OrderInfoInput";
import PaymentSumUp from "./PaymentSumUp";
import PostCodeModal from "../../components/Modal/PostCodeModal";
import PaymentConfirm from "./PaymentConfirm";
import styles from "../../style";
import { useEffect } from "react";

function Payment() {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  /**이전 장바구니 페이지에서 선택한 아이템 정보 가져오기 */
  const location = useLocation();
  const selectedItems = location.state.items;
  const itemPrice = location.state.totalPrice;
  const shippingFee = location.state.shippingFee;
  const orderType = location.state.orderKind;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [mainAddress, setMainAddress] = useState("");
  const [variousValue, setVariousValue] = useState({});
  const [consent, setConsent] = useState(false);
  const [buyerData, setBuyerData] = useState({
    buyer_name: "",
    buyer_phone_number: "",
    buyer_email: "",
  });
  const [deliveryData, setDeliveryData] = useState({
    total_price: itemPrice + shippingFee,
    order_kind: orderType,
    receiver: "",
    receiver_phone_number: "",
    address: "",
    address_message: "",
    payment_method: "",
  });

  /**하나의 value인 multiple input 관리 */
  function variousInputOnBlur(e) {
    const { id, value } = e.target;
    setVariousValue({
      ...variousValue,
      [id]: value,
    });
  }

  /**휴대폰 번호 input 값 제한 */
  function handlePhoneNumberInput(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }

  /**주문자 및 배송지 정보 입력 input value 관리 */
  function handleSingleInput(e) {
    const { name, value } = e.target;
    if (name.includes("buyer")) {
      setBuyerData({
        ...buyerData,
        [name]: value,
      });
    } else {
      setDeliveryData({
        ...deliveryData,
        [name]: value,
      });
    }
  }

  /**우편번호 조회 버튼 클릭 시 모달 창 띄우기 */
  function openPostCodeModal() {
    setIsModalOpen(true);
  }

  /**우편번호 검색 후 선택 완료*/
  function setPostCode(data) {
    setZipCode(data.zonecode);
    setMainAddress(data.address);
    setIsModalOpen(false);
  }

  /**결제버튼 활성화 함수 */
  function payButtonActivate() {
    let passed;
    const allInfo = Object.values(buyerData).concat(
      Object.values(deliveryData)
    );
    passed = allInfo.reduce((prev, cur) => {
      return Boolean(prev && cur);
    });
    return passed && consent;
  }

  /**결제 mutate 함수 */
  const purchaseItems = useMutation(
    () =>
      axios.post(url + "order/", deliveryData, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }),
    {
      onSuccess: () => {
        return <PaymentConfirm />;
      },
      onError: (error) => console.error(error),
    }
  );
  useEffect(() => {
    function combineVariousValue() {
      setDeliveryData({
        ...deliveryData,
        address: zipCode + mainAddress + variousValue.address3,
        receiver_phone_number:
          variousValue.receiver_phone +
          variousValue.receiver_phone2 +
          variousValue.receiver_phone3,
      });
      setBuyerData({
        ...buyerData,
        buyer_phone_number:
          variousValue.buyer_phone +
          variousValue.buyer_phone2 +
          variousValue.buyer_phone3,
      });
    }
    combineVariousValue();
  }, [variousValue]);

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
        <OrderInfoInput
          singleInput={handleSingleInput}
          handlePhoneNumber={handlePhoneNumberInput}
          variousInputOnBlur={variousInputOnBlur}
          clickPostCode={openPostCodeModal}
          addressVal1={zipCode}
          addressVal2={mainAddress}
        >
          <PaymentSumUp
            productPrice={itemPrice}
            shippingFee={shippingFee}
            total={itemPrice + shippingFee}
            consent={consent}
            clickConsent={() => setConsent(!consent)}
            isPayActive={payButtonActivate()}
            clickPay={() => purchaseItems.mutate()}
          />
        </OrderInfoInput>
      </main>
      <PostCodeModal
        open={isModalOpen}
        close={() => setIsModalOpen(false)}
        onComplete={setPostCode}
      />
    </>
  );
}

export default Payment;
