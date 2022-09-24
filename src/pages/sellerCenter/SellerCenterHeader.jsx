import { useNavigate } from "react-router-dom";
function SellerCenterHeader() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-center items-center w-full h-[50px] sm:h-[70px] fixed top-0 border-[1px] bg-white">
      <div className="md:w-[85%] w-[95%] h-full flex items-center justify-between align-center">
        <div className="flex items-center gap-[15px]">
          <div
            onClick={() => navigate("/")}
            className="inline-block w-[80px] h-[24px] icon-Logo-hodu bg-contain cursor-pointer"
          >
            <span className="a11y-hidden">호두마켓 로고</span>
          </div>
          <span className="font-spoqaMedium leading-[28px] ss:text-[28px] text-[20px]">
            판매자 센터
          </span>
        </div>
        <div className="icon-menu w-[25px] h-[25px] bg-cover sl:hidden hover:cursor-pointer" />
      </div>
    </header>
  );
}

export default SellerCenterHeader;
