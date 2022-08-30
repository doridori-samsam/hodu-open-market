import styles from "../../style";
import SearchBox from "./SearchBox";
import NavIcon from "./NavIcon";
import MyPageMenu from "./MyPageMenu";

function NavBar() {
  return (
    <>
      <header className="w-full sm:h-[60px] fixed top-0 border-[1px] bg-white">
        <div className="h-[40px] px-[7%] sm:h-[60px] flex items-center align-center justify-between">
          <SearchBox />
          <NavIcon />
          <div className="icon-menu w-[25px] h-[25px] bg-cover sm:hidden hover:cursor-pointer" />
        </div>
      </header>
    </>
  );
}

export default NavBar;
