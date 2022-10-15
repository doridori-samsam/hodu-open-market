import { useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";

function MobileNav({ isShow }) {
  const { token, userType, changeToken, changeUserType } =
    useContext(UserContext);
  const navigate = useNavigate();

  return (
    <nav
      className={`w-full h-[10rem] pt-[20px] fixed sm:top-[70px] top-[50px] bg-white border-[1px] border-t-0 border-disabled ${
        isShow ? "inline-block sl:hidden" : "hidden"
      } flex flex-col items-center`}
    >
      <ul className="md:w-[85%] w-[95%] flex flex-col items-center justify-center gap-[12px]">
        {token ? (
          <>
            <li className="h-[30px] font-spoqa text-[14px] leading-[30px] hover:border-b-[2px] border-primary hover:text-primary  hover:cursor-pointer ">
              장바구니
            </li>
            <li className="h-[30px] font-spoqa text-[14px] leading-[30px] hover:text-primary hover:border-b-[2px] border-primary hover:cursor-pointer align-middle">
              로그아웃
            </li>
          </>
        ) : (
          <li className="h-[30px] font-spoqa text-[14px] leading-[30px] hover:border-b-[2px] border-primary hover:text-primary  hover:cursor-pointer ">
            로그인
          </li>
        )}
      </ul>
    </nav>
  );
}

export default MobileNav;
