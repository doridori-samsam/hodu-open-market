import React from "react";

function sellerCenterMenu({ content, onClick, active }) {
  return (
    <ul className="basis-1/6 flex flex-col w-full h-[300px] justify-between">
      {content.map((item, idx) => {
        return (
          <li
            key={idx}
            onClick={() => onClick(idx)}
            className={`w-[250px] h-[50px] rounded-[5px] pl-[20px] ${
              active === idx
                ? "bg-primary text-white"
                : "bg-white text-mainText hover:bg-[#EFFFF3]"
            } font-spoqaMedium sm:text-[16px] text-[14px] leading-[54px] cursor-pointer`}
          >
            {item.menuTitle}
          </li>
        );
      })}
    </ul>
  );
}

export default sellerCenterMenu;
