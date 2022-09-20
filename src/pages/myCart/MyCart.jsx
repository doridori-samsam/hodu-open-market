import { useEffect, useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import UserContext from "../../context/UserContext";
import MyCartList from "./MyCartList";
import NavBar from "../../components/navBar/NavBar";
import SubButton from "../../components/buttons/SubButton";
import SelectButton from "../../components/buttons/SelectButton";
import styles from "../../style";

function MyCart() {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const { data, status } = useQuery("cart-list", getCartList);
  async function getCartList() {
    const res = await axios.get(url + "cart/", {
      headers: { Authorization: `JWT ${token}` },
    });
    console.log(res.data.results);
    return res.data.results;
  }

  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout}`}>
        <section className={`${styles.flexCenter} flex-col w-[95%] md:w-[85%]`}>
          <h1 className="font-spoqaBold text-[36px] my-[52px]">장바구니</h1>
          <div className="grid items-center grid-cols-[12%_minmax(30%,_40%)_1fr_1fr] w-full h-[50px] px-[30px] mb-[35px] rounded-[10px] bg-background text-center">
            <SelectButton />
            <span className="font-spoqa text-[18px] leading-[30px]">
              상품정보
            </span>
            <span className="font-spoqa text-[18px] leading-[30px]">수량</span>
            <span className="font-spoqa text-[18px] leading-[30px]">
              상품금액
            </span>
          </div>
          <ul className="flex flex-col w-full gap-[10px]">
            {data &&
              data.map((id, idx) => (
                <MyCartList key={id.product_id} listdata={id.product_id} />
              ))}
          </ul>

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
