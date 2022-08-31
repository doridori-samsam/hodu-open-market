import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";

function AuthBox({ children, giveType }) {
  const { userType, setUserType } = useContext(UserContext);
  const location = useLocation();

  const [logInType, setLogInType] = useState({
    type: "BUYER",
    byBorder: "border-b-0",
    byColor: "",
    slBorder: "",
    slColor: "bg-background",
  });

  function clickBuyerLogIn() {
    setLogInType({
      type: "BUYER",
      byBorder: "border-b-0",
      byColor: "",
      slBorder: "",
      slColor: "bg-background",
    });
  }

  function clickSellerLogIn() {
    setLogInType({
      type: "SELLER",
      byBorder: "",
      byColor: "bg-background",
      slBorder: "border-b-0",
      slColor: "",
    });
  }

  //로그인 함수 실행함수 상위 컴포넌트에 전달
  function logInSubmit(e) {
    e.preventDefault();
    giveType(logInType.type);
    setUserType(logInType.type);
  }

  return (
    <div className="sm:w-[550px] ss:w-[440px] w-[340px]">
      <div
        onClick={clickBuyerLogIn}
        className={`${logInType.byColor} ${logInType.byBorder} cursor-pointer inline-block w-[50%] h-[60px] border-[1px] rounded-b-none rounded-[10px] border-disabled sm:text-[18px] text-[15px] text-center font-spoqaMedium leading-[60px]`}
      >
        {location.pathname === "/join" ? "구매회원가입" : "구매회원 로그인"}
      </div>
      <div
        onClick={clickSellerLogIn}
        className={`${logInType.slColor} ${logInType.slBorder} cursor-pointer inline-block w-[50%] h-[60px] border-[1px] rounded-b-none rounded-[10px] border-disabled sm:text-[18px] text-[15px] text-center font-spoqaMedium leading-[60px]`}
      >
        {location.pathname === "/join" ? "판매회원가입" : "판매회원 로그인"}
      </div>

      <form
        className="flex flex-col justify-between min-h-[292px] py-[34px] px-[34px]  border-[1px] border-t-0 rounded-[10px] rounded-t-none border-disabled
        "
        method="post"
        onSubmit={logInSubmit}
      >
        {children}
      </form>
    </div>
  );
}

export default AuthBox;
