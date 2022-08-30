import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import MyPageMenu from "./MyPageMenu";
import LogInModal from "../Modal/LogInModal";
import MediumButton from "../buttons/MediumButton";
import UserContext from "../../context/UserContext";

function NavIcon() {
  const { token, userType, setUserType } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  /** 장바구니 클릭 함수 */
  function clickMyCart() {
    if (!token) {
      setModalOpen(!modalOpen);
    } else if (token) {
      console.log(userType);
    }
  }

  /** 마이페이지 클릭 메뉴 오픈 함수 */
  function clickMyPage() {
    setIsOpen(!isOpen);
  }

  /** 모달 확인 버튼 클릭 함수 */
  function clickModalConfirm() {
    navigate("/login");
    setModalOpen(!modalOpen);
  }

  return (
    <div className="hidden sm:block shrink-0 h-full relative">
      <button onClick={clickMyCart} className="w-[52px] h-[52px] mr-[26px]">
        <div
          className={`inline-block w-[35px] h-[32px] icon-icon-shopping-cart mx-auto`}
        />
        <span className="block ml-[2px] text-[12px] leading-[12px] font-spoqa text-subText">
          장바구니
        </span>
      </button>
      {token ? (
        <>
          <button className="w-[60px] h-[50px]" onClick={clickMyPage}>
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
          </button>
          <MyPageMenu open={isOpen} menuClose={clickMyPage} />
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="w-[60px] h-[50px]">
              <div className="inline-block w-[32px] h-[32px] icon-icon-user mx-auto " />
              <span className="block text-[12px] leading-[12px] font-spoqa text-subText">
                로그인
              </span>
            </button>
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
  // if (true) {
  //   if (userType === "BUYER") {
  //     return (
  //       <div className="hidden sm:block shrink-0 h-full relative">
  //         <button onClick={clickMyCart} className="w-[52px] h-[52px] mr-[26px]">
  //           <div
  //             className={`inline-block w-[35px] h-[32px] icon-icon-shopping-cart mx-auto`}
  //           />
  //           <span className="block ml-[2px] text-[12px] leading-[12px] font-spoqa text-subText">
  //             장바구니
  //           </span>
  //         </button>
  //         <button className="w-[60px] h-[50px]" onClick={clickMyPage}>
  //           <div
  //             className={`inline-block w-[32px] h-[32px] ${
  //               isOpen ? "icon-icon-user-2" : "icon-icon-user"
  //             } mx-auto`}
  //           />
  //           <span
  //             className={`block text-[12px] leading-[12px] font-spoqa ${
  //               isOpen ? "text-primary" : "text-subText"
  //             }`}
  //           >
  //             마이페이지
  //           </span>
  //         </button>
  //         <MyPageMenu open={isOpen} menuClose={clickMyPage} />
  //       </div>
  //     );
  //   } else if (userType === "SELLER") {
  //     return (
  //       <div className="hidden sm:block shrink-0 h-full relative">
  //         <button className="w-[60px] h-[50px]" onClick={clickMyPage}>
  //           <div
  //             className={`inline-block w-[32px] h-[32px] ${
  //               isOpen ? "icon-icon-user-2" : "icon-icon-user"
  //             } mx-auto`}
  //           />
  //           <span
  //             className={`block text-[12px] leading-[12px] font-spoqa ${
  //               isOpen ? "text-primary" : "text-subText"
  //             }`}
  //           >
  //             마이페이지
  //           </span>
  //         </button>
  //         <MyPageMenu open={isOpen} menuClose={clickMyPage} />
  //         <MediumButton
  //           isActive
  //           style="mb-[3px] nline-block w-[158px] h-[46px] text-[16px]"
  //         >
  //           <div className="inline-block align-middle w-[30px] h-[35px] icon-icon-shopping-bag"></div>
  //           <span className="ml-[12px]">판매자 센터</span>
  //         </MediumButton>
  //       </div>
  //     );
  //   }
  // } else {
  //   return (
  //     <div className="hidden sm:block shrink-0 h-full relative">
  //       <button onClick={clickMyCart} className="w-[52px] h-[52px] mr-[26px]">
  //         <div
  //           className={`inline-block w-[35px] h-[32px] icon-icon-shopping-cart mx-auto`}
  //         />
  //         <span className="block ml-[2px] text-[12px] leading-[12px] font-spoqa text-subText">
  //           장바구니
  //         </span>
  //       </button>
  //       <Link to="/login">
  //         <button className="w-[60px] h-[50px]">
  //           <div className="w-[32px] h-[32px] icon-icon-user mx-auto " />
  //           <span className="block mt-[6px] text-[12px] leading-[14px] font-spoqa text-subText">
  //             로그인
  //           </span>
  //         </button>
  //       </Link>
  //       <LogInModal
  //         open={modalOpen}
  //         close={() => {
  //           setModalOpen(false);
  //         }}
  //         onConfirm={clickModalConfirm}
  //       />
  //     </div>
  //   );
  // }
}

export default NavIcon;
