import { useState } from "react";
import ProductDetailTabButton from "../../components/buttons/ProductDetailTabButton";
import styles from "../../style";

function ProductMoreInfo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabContent, setTabContent] = useState([
    {
      tabTitle: "상세 페이지",
      tabContent: "상세 페이지 내용",
    },
    {
      tabTitle: "리뷰",
      tabContent: "리뷰 내용",
    },
    {
      tabTitle: "Q&A",
      tabContent: "Q&A 내용",
    },
    {
      tabTitle: "반품/교환정보",
      tabContent: "반품/교환정보 내용",
    },
  ]);

  function clickTabMenu(index) {
    setActiveIndex(index);
  }

  return (
    <section
      className={`${styles.flexCenter} mt-[100px] flex-col md:w-[85%] w-[95%]`}
    >
      <ProductDetailTabButton
        onClick={clickTabMenu}
        content={tabContent}
        active={activeIndex}
      />
      <article>{tabContent[activeIndex].tabContent}</article>
    </section>
  );
}

export default ProductMoreInfo;
