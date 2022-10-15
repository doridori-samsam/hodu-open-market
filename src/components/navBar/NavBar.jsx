import { useState } from "react";
import SearchBox from "./SearchBox";
import NavIcon from "./NavIcon";
import MobileNav from "./MobileNav";
import styles from "../../style";

function NavBar({ defaultWord, giveKeyword }) {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const display = window.outerWidth;
  console.log(display);
  return (
    <>
      <header className="flex justify-center items-center w-full h-[50px] sm:h-[70px] fixed top-0 border-[1px] bg-white">
        <div className="md:w-[85%] w-[95%] h-full justify-between flex items-center align-center">
          <SearchBox
            defaultValue={defaultWord}
            giveKeyword={giveKeyword}
            hideSearch={isMenuShow}
          />
          <NavIcon />

          <button
            onClick={() => setIsMenuShow(!isMenuShow)}
            className={`${
              isMenuShow
                ? styles.closeButton
                : "icon-menu w-[25px] h-[25px] bg-cover"
            } sl:hidden hover:cursor-pointer`}
          ></button>
        </div>
      </header>
      <MobileNav isShow={isMenuShow} />
    </>
  );
}

export default NavBar;
