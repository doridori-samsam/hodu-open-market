import React from "react";

function SellerCenterMenu({ content, onClick, active }) {
  return (
    <ul className="basis-1/6 flex shrink-1 sl:flex-col sl:h-[300px] sl:justify-between gap-[5px]">
      {content.map((item, idx) => {
        return (
          <li
            key={idx}
            onClick={() => onClick(idx)}
            className={`md:w-[250px] w-full sl:h-[50px] h-[40px] sl:basis-0 basis-1/5 rounded-[5px] md:pl-[20px] ${
              active === idx
                ? "bg-primary text-white"
                : "bg-white text-mainText hover:bg-[#EFFFF3]"
            } font-spoqaMedium md:text-justify text-center sm:text-[16px] ss:text-[14px] text-[11px] sl:leading-[50px] leading-[40px] cursor-pointer`}
          >
            {item.menuTitle}
          </li>
        );
      })}
    </ul>
  );
}

export default SellerCenterMenu;
