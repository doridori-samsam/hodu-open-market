import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../style";

function SearchBox({ defaultValue, giveKeyword, hideSearch }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  function clickLogo() {
    window.location.replace("/");
  }
  function getKeyword(e) {
    setKeyword(e.target.value);
  }

  function clickSearch() {
    navigate("/search");
    sessionStorage.setItem("search-word", keyword);
    giveKeyword(keyword);
  }

  function pressEnterKey(e) {
    if (e.key === "Enter") {
      clickSearch();
    }
  }
  return (
    <div className="h-full flex items-center">
      <div
        className={`${
          hideSearch ? "inline-block " : "hidden sm:inline-block"
        }  sm:w-[124px] w-[100px] sm:h-[38px] h-[30px] md:mr-[30px] mr-[15px] icon-Logo-hodu bg-contain cursor-pointer`}
        onClick={clickLogo}
      >
        <span className="a11y-hidden">호두마켓 로고</span>
      </div>
      <div
        className={`${
          hideSearch ? "hidden sl:flex" : "flex"
        } items-center justify-between w-[275px] h-[30px] ss:w-[380px] ss:h-[35px] sm:w-[400px] sm:h-[46px] sm:px-[22px] px-[15px] border-[1px] border-primary rounded-[50px]`}
      >
        <input
          defaultValue={defaultValue}
          type="text"
          placeholder="상품을 검색해보세요!"
          onChange={getKeyword}
          onKeyDown={pressEnterKey}
          className={`border-none ${styles.inputBox} basis-4/5 text-[12px] sm:text-[16px]`}
        ></input>
        <button
          disabled={!keyword}
          onClick={clickSearch}
          className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] bg-cover bg-center icon-search"
        ></button>
      </div>
    </div>
  );
}

export default SearchBox;
