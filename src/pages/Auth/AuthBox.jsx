import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";

function AuthBox({ children, onSubmit, passType }) {
  const location = useLocation();

  const [logInType, setLogInType] = useState("BUYER");

  function clickBuyerLogIn() {
    setLogInType("BUYER");
    passType("BUYER");
  }

  function clickSellerLogIn() {
    setLogInType("SELLER");
    passType("SELLER");
  }

  return (
    <div className="sm:w-[550px] ss:w-[440px] w-[340px]">
      <div
        onClick={clickBuyerLogIn}
        className={`${
          logInType === "BUYER" ? "border-b-0" : "bg-background"
        } cursor-pointer inline-block w-[50%] h-[60px] border-[1px] rounded-b-none rounded-[10px] border-disabled sm:text-[18px] text-[15px] text-center font-spoqaMedium leading-[60px]`}
      >
        {location.pathname === "/join" ? "구매회원가입" : "구매회원 로그인"}
      </div>
      <div
        onClick={clickSellerLogIn}
        className={`${
          logInType === "SELLER" ? "border-b-0" : "bg-background"
        } cursor-pointer inline-block w-[50%] h-[60px] border-[1px] rounded-b-none rounded-[10px] border-disabled sm:text-[18px] text-[15px] text-center font-spoqaMedium leading-[60px]`}
      >
        {location.pathname === "/join" ? "판매회원가입" : "판매회원 로그인"}
      </div>

      <form
        className="flex flex-col justify-between min-h-[292px] py-[34px] px-[34px]  border-[1px] border-t-0 rounded-[10px] rounded-t-none border-disabled
        "
        method="post"
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
}

export default AuthBox;
