import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import NavMyCart from "./NavMyCart";
import NavMyPage from "./NavMyPage";
import NavLogIn from "./NavLogIn";
import LogInModal from "../Modal/LogInModal";
import MediumButton from "../buttons/MediumButton";

function NavIcon() {
  const { token, userType } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  /** 장바구니 클릭 함수 */
  function clickMyCart() {
    if (!token) {
      setModalOpen(!modalOpen);
    } else if (token) {
      navigate("/cart");
    }
  }

  /** 마이페이지 클릭 메뉴 오픈 함수 */
  function clickMyPage(e) {
    setIsOpen(!isOpen);
  }

  /** 모달 확인 버튼 클릭 함수 */
  function clickModalConfirm() {
    navigate("/login");
    setModalOpen(!modalOpen);
  }

  return (
    <div className="hidden sl:flex sm:gap-[26px] items-center shrink-0 h-full">
      {token ? (
        userType === "BUYER" ? (
          <>
            <NavMyCart onClick={clickMyCart} />
            <NavMyPage isOpen={isOpen} onClick={clickMyPage} />
          </>
        ) : (
          <>
            <NavMyPage isOpen={isOpen} onClick={clickMyPage} />
            <MediumButton
              isActive
              style="inline-block w-[150px] sm:h-[48px] text-[16px]"
            >
              <div className="inline-block align-middle w-[30px] h-[33px] icon-icon-shopping-bag"></div>
              <span className="ml-[12px] align-middle">판매자 센터</span>
            </MediumButton>
          </>
        )
      ) : (
        <>
          <NavMyCart onClick={clickMyCart} />
          <Link to="/login">
            <NavLogIn />
          </Link>
          <LogInModal
            open={modalOpen}
            close={() => {
              setModalOpen(false);
            }}
            onConfirm={clickModalConfirm}
          />
        </>
      )}
    </div>
  );
}
export default NavIcon;
