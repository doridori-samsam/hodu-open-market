import SearchBox from "./SearchBox";
import NavIcon from "./NavIcon";

function NavBar() {
  return (
    <>
      <header className="flex justify-center items-center w-full sm:h-[60px] fixed top-0 border-[1px] bg-white">
        <div className="w-[88%] h-[40px] sm:h-[60px] justify-between flex items-center align-center">
          <SearchBox />
          <NavIcon />
          <div className="icon-menu w-[25px] h-[25px] bg-cover sm:hidden hover:cursor-pointer" />
        </div>
      </header>
    </>
  );
}

export default NavBar;
