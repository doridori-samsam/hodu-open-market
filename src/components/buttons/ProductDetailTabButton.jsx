import { useState } from "react";
import styles from "../../style";

function ProductDetailTabButton() {
  const [isActive, setIsActive] = useState(0);
  const [tabContent, setTabContent] = useState({
    tab1: "상세 페이지",
    tab2: "리뷰",
    tab3: "Q&A",
    tab4: "반품/교환정보",
  });

  return (
    <section
      className={`${styles.flexCenter} m-0 flex-col md:w-[85%] w-[95%] border-[1px] border-purple-600`}
    >
      <ul className="flex w-full items-center">
        <li className="basis-1/4 text-center">상세 페이지</li>
        <li className="basis-1/4 text-center">리뷰</li>
        <li className="basis-1/4 text-center">Q*A</li>
        <li className="basis-1/4 text-center">반품/교환정보</li>
      </ul>
    </section>
  );
}

export default ProductDetailTabButton;
