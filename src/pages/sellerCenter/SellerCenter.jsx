import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import UserContext from "../../context/UserContext";
import SellerCenterHeader from "./SellerCenterHeader";
import SellerCenterMenu from "./sellerCenterMenu";
import SellerCenterMenuETC from "./SellerCenterMenuETC";
import SellerProductsList from "./SellerProductsList";
import NowLoading from "../../components/NowLoading";
import SubButton from "../../components/buttons/SubButton";
import Footer from "../../components/footer/Footer";
import styles from "../../style";

function SellerCenter() {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sellerMenu, setSellerMenu] = useState([
    {
      menuTitle: "판매중인 상품",
      menuContent: <SellerProductsList />,
    },
    {
      menuTitle: "주문/배송",
      menuContent: <SellerCenterMenuETC content={"주문/배송 리스트"} />,
    },
    {
      menuTitle: "문의/리뷰",
      menuContent: <SellerCenterMenuETC content={"문의/리뷰 리스트"} />,
    },
    {
      menuTitle: "통계",
      menuContent: <SellerCenterMenuETC content={"통계"} />,
    },
    {
      menuTitle: "스토어 설정",
      menuContent: <SellerCenterMenuETC content={"스토어 설정"} />,
    },
  ]);

  const { data, status, isSuccess } = useQuery(
    ["seller-products", token],
    getSellerProducts,
    {
      onSuccess: (data) => {
        setSellerMenu([
          ...sellerMenu,
          (sellerMenu[0].menuContent = <SellerProductsList products={data} />),
        ]);
        return data;
      },
    }
  );

  async function getSellerProducts() {
    const res = await axios.get(url + "seller/", {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
    return res.data.results;
  }

  if (status === "loading") {
    return <NowLoading />;
  }

  function clickTabMenu(index) {
    setActiveIndex(index);
  }

  console.log(data, status);

  return (
    <>
      <SellerCenterHeader />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        <div className="flex md:w-[85%] w-[95%] justify-between">
          <h1 className="font-spoqaBold text-[36px]">
            대시보드
            <span className="ml-[16px] font-spoqaMedium text-primary">
              {isSuccess && data.length === 0 ? null : data[0].store_name}
            </span>
          </h1>
          <SubButton
            onClick={() => navigate("upload")}
            style={"w-[168px] h-[54px] font-spoqaMedium text-[18px]"}
          >
            <div className="w-[30px] h-[30px] inline-block icon-icon-plus bg-cover align-top"></div>
            <span className="ml-[9px] leading-[30px]">상품 업로드</span>
          </SubButton>
        </div>
        <section
          className={`${styles.sectionLayout} flex gap-[30px] mt-[38px]`}
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
