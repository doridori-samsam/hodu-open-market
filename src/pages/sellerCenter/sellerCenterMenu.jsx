import React from "react";

function sellerCenterMenu({ content, onClick, active }) {
  console.log(content);
  return (
    <ul className="basis-1/6 flex sl:flex-col w-full sl:h-[300px] justify-between">
      {content.map((item, idx) => {
        return (
          <li
            key={idx}
            onClick={() => onClick(idx)}
            className={`sl:w-[250px] sl:h-[50px] rounded-[5px] pl-[20px] ${
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
