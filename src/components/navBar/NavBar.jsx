import styles from "../../style";
import SearchBox from "./SearchBox";

function NavBar() {
  return (
    <header className="w-full sm:h-[60px] fixed top-0 border-[1px] bg-white">
      <div className="px-[2%] h-[40px] sm:px-[5%] sm:h-[60px] flex items-center align-center justify-between">
        <SearchBox />
        <div className="hidden sm:block shrink-0">
          <button className="w-[52px] h-[50px] mr-[26px]">
            <div className="w-[32px] h-[32px] icon-icon-shopping-cart mx-auto " />
            <span className="block mt-[6px] text-[12px] leading-[14px] font-spoqa text-subText">
              장바구니
            </span>
          </button>
          <button className="w-[60px] h-[50px]">
            <div className="w-[32px] h-[32px] icon-icon-user mx-auto " />
            <span className="block mt-[6px] text-[12px] leading-[14px] font-spoqa text-subText">
              로그인
            </span>
          </button>
        </div>
        <div className="icon-menu w-[25px] h-[25px] bg-cover sm:hidden hover:cursor-pointer" />
      </div>
    </header>
  );
}

export default NavBar;
