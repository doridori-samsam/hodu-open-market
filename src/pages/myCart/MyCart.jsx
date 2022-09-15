import { useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import MyCartList from "./MyCartList";
import NavBar from "../../components/navBar/NavBar";
import SubButton from "../../components/buttons/SubButton";
import styles from "../../style";
import Footer from "../../components/footer/Footer";

function MyCart() {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);

  useEffect(() => {
    async function getCartList() {
      try {
        const res = await axios.get(url + "cart/", {
          headers: { Authorization: `JWT ${token}` },
        });
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getCartList();
  }, [MyCartList]);

  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout}`}>
        <section className={`${styles.flexCenter} flex-col w-[88%]`}>
          <h1 className="font-spoqaBold text-[36px] my-[52px]">장바구니</h1>
          <div className="flex gap-[210px] items-center w-full h-[50px] pl-[30px] pr-[62px] mb-[35px] rounded-[10px] bg-background text-center">
            <button className="shrink-0 border-[2px] border-primary w-[20px] h-[20px] rounded-[10px]"></button>
            <ul className="flex items-center justify-between w-full">
              <li className="basis-[39%] font-spoqa text-[18px]">상품정보</li>
              <li className="basis-[30%] inline-block font-spoqa text-[18px]">
                수량
              </li>
              <li className="basis-[32%] inline-block font-spoqa text-[18px]">
                상품금액
              </li>
            </ul>
          </div>
          <MyCartList />
          <div className="flex items-center w-full h-[150px] mt-[80px] rounded-[10px] bg-background">
            <div className={`grow ${styles.flexCenter} flex-col`}>
              <p className="font-spoqa text-[16px] mb-[12px]">총 상품금액</p>
              <p className="font-spoqa text-[16px]">
                <span className="font-spoqaBold text-[24px]">46,500</span> 원
              </p>
            </div>
            <div className="w-[34px] h-[34px] rounded-[20px] bg-white icon-icon-minus-line bg-center"></div>
            <div className={`grow ${styles.flexCenter} flex-col`}>
              <p className="font-spoqa text-[16px] mb-[12px]">상품할인</p>
              <p className="font-spoqa text-[16px]">
                <span className="font-spoqaBold text-[24px]">0</span> 원
              </p>
            </div>
            <div className="w-[34px] h-[34px] rounded-[20px] bg-white icon-icon-plus-line bg-center"></div>
            <div className={`grow ${styles.flexCenter} flex-col`}>
              <p className="font-spoqa text-[16px] mb-[12px]">배송비</p>
              <p className="font-spoqa text-[16px]">
                <span className="font-spoqaBold text-[24px]">0</span> 원
              </p>
            </div>
            <div className={`grow ${styles.flexCenter} flex-col`}>
              <p className="font-spoqaBold text-[18px]">결제 예정 금액</p>
              <p className="font-spoqa text-[16px]">
                <span className="font-spoqaBold text-[36px] leading-[45px] text-accentText">
                  46,500
                </span>
                원
              </p>
            </div>
          </div>
          <SubButton style="w-[220px] h-[68px] mt-[40px] font-spoqaBold text-[24px]">
            주문하기
          </SubButton>
        </section>
      </main>
    </>
  );
}

export default MyCart;
