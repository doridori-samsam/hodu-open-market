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
      onSettled: (data) => {
        let findIndex = sellerMenu.findIndex(
          (menu) => menu.menuTitle === "판매중인 상품"
        );
        let copiedMenu = [...sellerMenu];
        copiedMenu[findIndex].menuContent = (
          <SellerProductsList products={data} />
        );
        setSellerMenu(copiedMenu);
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

  return (
    <>
      <SellerCenterHeader />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        <div className="flex md:w-[85%] w-[95%] justify-between items-center">
          <h1 className="font-spoqaBold sl:text-[36px] ss:text-[30px] text-[26px]">
            대시보드
            <span className="block sl:inline-block sl:ml-[16px] ss:text-[24px] text-[20px] sl:text-[36px] font-spoqaMedium text-primary">
              {isSuccess && data.length === 0 ? null : data[0].store_name}
            </span>
          </h1>
          <SubButton
            isActive={true}
            onClick={() => navigate("upload")}
            style={
              "ss:w-[168px] ss:h-[54px] w-[50px] h-[50px] ss:rounded-[5px] rounded-[50px] font-spoqaMedium ss:text-[18px] text-[12px]"
            }
          >
            <div className="ss:w-[30px] w-[25px] ss:h-[30px] h-[25px] inline-block icon-icon-plus bg-cover align-top"></div>
            <span className="ss:inline hidden ml-[9px] leading-[30px]">
              상품 업로드
            </span>
          </SubButton>
        </div>
        <section
          className={`${styles.sectionLayout} flex-col sl:flex-row flex gap-[30px] mt-[38px]`}
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
