import React from "react";

function SellerCenterMenuETC({ content }) {
  return (
    <header className="flex items-center w-full sm:h-[60px] h-[35px] sm:px-[28px] px-[10px] border-b-[1px] border-disabled bg-white font-spoqa sm:text-[18px] text-[14px] text-center">
      <h1>{content}</h1>
    </header>
  );
}

export default SellerCenterMenuETC;
