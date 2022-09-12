import MyPageMenu from "./MyPageMenu";

function NavMyPage({ isOpen, open, onClick }) {
  return (
    <button className="relative w-[56px] h-[50px]" onClick={onClick}>
      <div
        className={`inline-block w-[32px] h-[32px] ${
          isOpen ? "icon-icon-user-2" : "icon-icon-user"
        } mx-auto`}
      />
      <span
        className={`block text-[12px] leading-[12px] font-spoqa ${
          isOpen ? "text-primary" : "text-subText"
        }`}
      >
        마이페이지
      </span>
      <MyPageMenu open={isOpen} menuClose={onClick} />
    </button>
  );
}

export default NavMyPage;
