import React from "react";

function EditorArea({ handleEditorArea, defaultValue }) {
  return (
    <div className="block mt-[40px]">
      <p className="font-spoqa text-subText text-[16px]">상품 상세 정보</p>
      <textarea
        placeholder="에디터 영역"
        maxLength="50"
        name="product_info"
        defaultValue={defaultValue}
        onChange={handleEditorArea}
        className="w-full h-[400px] mt-[10px] p-[30px] border-[1px] outline-subText border-disabled rounded-[5px] bg-[#f1f0f0] font-spoqa placeholder:text-center placeholder:leading-[335px] placeholder:text-[48px] placeholder:text-disabled"
      ></textarea>
    </div>
  );
}

export default EditorArea;
