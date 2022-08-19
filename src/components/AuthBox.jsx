import { useState } from "react";
import MainButton from "./buttons/MainButton";
import styles from "../style";

function AuthBox() {
  const [loginType, setLoginType] = useState({
    type: "buyer",
    byBorder: "border-b-0",
    byColor: "",
    slBorder: "",
    slColor: "bg-background",
  });

  function clickBuyerLogIn() {
    console.log("구매회원");
  }

  function clickSellerLogIn() {
    console.log("판매회원");
  }

  return (
    <div className="sm:w-[550px] ss:w-[440px] w-[340px] h-[352px]">
      <div
        onClick={clickBuyerLogIn}
        className={`${loginType.byColor} cursor-pointer inline-block w-[50%] h-[60px] border-[1px] border-b-0 rounded-b-none rounded-[10px] border-disabled sm:text-[18px] text-[15px] text-center font-spoqaMedium leading-[60px]`}
      >
        구매회원 로그인
      </div>
      <div
        onClick={clickSellerLogIn}
        className="cursor-pointer inline-block w-[50%] h-[60px] border-[1px] rounded-b-none rounded-[10px] border-disabled sm:text-[18px] text-[15px] text-center font-spoqaMedium leading-[60px] bg-background "
      >
        판매회원 로그인
      </div>

      <form
        className={`${styles.flexCenter} flex-col justify-between py-[34px] px-[34px] h-[292px] border-[1px] border-t-0 rounded-[10px] rounded-t-none border-disabled`}
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("클릭");
        }}
      >
        <div className="w-full">
          <input
            type="text"
            placeholder="아이디"
            className={`w-full sm:h-[60px] ss:h-[52px] h-[45px] border-b-[1px] ${styles.inputBox}`}
          ></input>
          <input
            type="password"
            placeholder="비밀번호"
            className={`w-full sm:h-[60px] ss:h-[52px] h-[45px] sm:mt-[6px] ss:mt-[15px] mt-[20px] border-b-[1px] ${styles.inputBox}`}
          ></input>
        </div>
        <MainButton large isActive={true} type="submit">
          로그인
        </MainButton>
      </form>
    </div>
  );
}

export default AuthBox;
