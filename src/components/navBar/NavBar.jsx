import SearchBox from "./SearchBox";
import NavIcon from "./NavIcon";

function NavBar() {
  return (
    <>
      <header className="flex justify-center items-center w-full h-[50px] sm:h-[70px] fixed top-0 border-[1px] bg-white">
        <div className="md:w-[85%] w-[95%] h-full justify-between flex items-center align-center">
          <SearchBox />
          <NavIcon />
          <div className="icon-menu w-[25px] h-[25px] bg-cover sl:hidden hover:cursor-pointer" />
        </div>
      </header>
    </>
  );
}

export default NavBar;
