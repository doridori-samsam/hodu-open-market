import React from "react";

function sellerCenterMenu({ content, onClick, active }) {
  return (
    <ul className="basis-1/6 flex sl:flex-col w-full sl:h-[300px] sl:justify-between gap-[5px]">
      {content.map((item, idx) => {
        return (
          <li
            key={idx}
            onClick={() => onClick(idx)}
            className={`sl:w-[250px] sl:h-[50px] h-[40px] sl:basis-0 basis-1/5 rounded-[5px] sl:pl-[20px] ${
              active === idx
                ? "bg-primary text-white"
                : "bg-white text-mainText hover:bg-[#EFFFF3]"
            } font-spoqaMedium sl:text-justify text-center sm:text-[16px] text-[12px] sl:leading-[50px] leading-[40px] cursor-pointer`}
          >
            {item.menuTitle}
          </li>
        );
      })}
    </ul>
  );
}

export default sellerCenterMenu;
