import SearchBox from "./SearchBox";
import NavIcon from "./NavIcon";

function NavBar({ defaultWord, giveKeyword }) {
  return (
    <>
      <header className="flex justify-center items-center w-full h-[50px] sm:h-[70px] fixed top-0 border-[1px] bg-white">
        <div className="md:w-[85%] w-[95%] h-full justify-between flex items-center align-center">
          <SearchBox defaultValue={defaultWord} giveKeyword={giveKeyword} />
          <NavIcon />
          <div
            onClick={() => console.log("클릭")}
            className="icon-menu w-[25px] h-[25px] bg-cover sl:hidden hover:cursor-pointer"
          />
        </div>
      </header>
    </>
  );
}

export default NavBar;
