import React from "react";

function UploadWarning() {
  return (
    <div>
      <span className="font-spoqaMedium text-accentText text-[16px]">
        *상품 등록 주의사항
      </span>
      <div className="flex flex-col mt-[10px] gap-[15px] py-[20px] px-[20px] w-[250px] font-spoqa text-[14px] bg-[#FFEFEB]">
        <p>- 너무 귀여운 사진은 심장이 아파올 수 있습니다.</p>
        <p>
          - 광고성,사행성, 선정적인 사진 및 게시글은 사전 통보 없이 삭제될 수
          있으며 서비스 이용이 제한될 수 있습니다.
        </p>
        <p>
          - 허위 매물 등록 및 사기 거래는 서비스 이용 제재 및 법적 처벌을 받을
          수도 있습니다.
        </p>
      </div>
    </div>
  );
}

export default UploadWarning;
