import { useState } from "react";
import styles from "../../style";

function ProductDetailTabButton({ onClick, content, active }) {
  return (
    <ul className="flex w-full h-[60px] items-center">
      {content.map((item, idx) => {
        return (
          <li
            key={idx}
            onClick={() => onClick(idx)}
            className={`basis-1/4 box-border border-b-[6px] ${
              active === idx ? "border-primary" : "border-tabGray"
            } text-center font-spoqaBold text-primary sm:text-[18px] text-[15px] leading-[54px] cursor-pointer`}
          >
            {item.tabTitle}
          </li>
        );
      })}
    </ul>
  );
}

export default ProductDetailTabButton;
