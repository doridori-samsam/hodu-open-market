import { useNavigate } from "react-router-dom";
import styles from "../../style";

function SearchBox() {
  const navigate = useNavigate();
  function clickLogo() {
    navigate("/");
  }
  return (
    <div className="h-full flex items-center">
      <div
        className="hidden sm:inline-block w-[124px] h-[38px] md:mr-[30px] mr-[15px] icon-Logo-hodu bg-contain cursor-pointer"
        onClick={clickLogo}
      >
        <span className="a11y-hidden">호두마켓 로고</span>
      </div>
      <div className="flex items-center justify-between w-[275px] h-[30px] ss:w-[380px] ss:h-[35px] sm:w-[400px] sm:h-[46px] px-[22px] border-[1px] border-primary rounded-[50px]">
        <input
          type="text"
          placeholder="상품을 검색해보세요!"
          className={`border-none ${styles.inputBox} basis-4/5 text-[12px] ss:text-[16px]`}
        ></input>
        <button className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] bg-cover icon-search"></button>
      </div>
    </div>
  );
}

export default SearchBox;
