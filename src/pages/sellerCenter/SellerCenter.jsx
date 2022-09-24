import { useState, useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import UserContext from "../../context/UserContext";
import SellerCenterHeader from "./SellerCenterHeader";
import SellerCenterMenu from "./sellerCenterMenu";
import SellerProductsList from "./SellerProductsList";
import SubButton from "../../components/buttons/SubButton";
import Footer from "../../components/footer/Footer";
import styles from "../../style";

function SellerCenter() {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const { data, status, isSuccess } = useQuery(
    ["seller-products", token],
    getSellerProducts
  );

  console.log(data, status);

  const [activeIndex, setActiveIndex] = useState(0);
  const [sellerMenu, setSellerMenu] = useState([
    {
      menuTitle: "판매중인 상품",
      menuContent: <SellerProductsList products={data && data} />,
    },
    {
      menuTitle: "주문/배송",
      menuContent: "주문/배송 리스트",
    },
    {
      menuTitle: "문의/리뷰",
      menuContent: "문의/리뷰 리스트",
    },
    {
      menuTitle: "통계",
      menuContent: "통계 화면",
    },
    {
      menuTitle: "스토어 설정",
      menuContent: "스토어 설정 화면",
    },
  ]);

  async function getSellerProducts() {
    const res = await axios.get(url + "seller/", {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return res.data.results;
  }

  function clickTabMenu(index) {
    setActiveIndex(index);
  }
  console.log(status);
  return (
    <>
      <SellerCenterHeader />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        <div className="flex w-[85%] justify-between">
          <h1 className="font-spoqaBold text-[36px]">
            대시보드
            <span className="ml-[16px] font-spoqaMedium text-primary">
              백엔드글로벌
            </span>
          </h1>
          <SubButton style={"w-[168px] h-[54px] font-spoqaMedium text-[18px]"}>
            <div className="w-[30px] h-[30px] inline-block icon-icon-plus bg-cover align-top"></div>
            <span className="ml-[9px] leading-[30px]">상품 업로드</span>
          </SubButton>
        </div>
        <section
          className={`${styles.sectionLayout} flex gap-[30px] mt-[38px] border-[2px] border-blue-400`}
        >
          <SellerCenterMenu
            content={sellerMenu}
            onClick={clickTabMenu}
            active={activeIndex}
          />
          <article className="basis-5/6 bg-disabled border-[1px] border-disabled h-[884px]">
            {sellerMenu[activeIndex].menuContent}
          </article>
        </section>
      </main>
    </>
  );
}

export default SellerCenter;
