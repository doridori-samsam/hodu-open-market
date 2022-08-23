import styles from "../../style";

function SearchBox() {
  return (
    <div className="flex items-center">
      <div className="hidden sm:inline-block w-[124px] h-[38px] mr-[30px] icon-Logo-hodu bg-contain">
        <span className="a11y-hidden">호두마켓 로고</span>
      </div>
      <div className="flex items-center justify-between w-[275px] h-[30px] ss:w-[380px] ss:h-[35px] sm:w-[400px] sm:h-[46px] px-[22px] border-[1px] border-primary rounded-[50px]">
        <input
          type="text"
          placeholder="상품을 검색해보세요!"
          className={`${styles.inputBox} basis-4/5 font-spoqa text-[12px] ss:text-[16px]`}
        ></input>
        <button className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] bg-cover icon-search"></button>
      </div>
    </div>
  );
}

export default SearchBox;
