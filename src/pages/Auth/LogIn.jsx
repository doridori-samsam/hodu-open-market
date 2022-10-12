import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import UserContext from "../../context/UserContext";
import AuthHeader from "./AuthHeader";
import AuthBox from "./AuthBox";
import MainButton from "../../components/buttons/MainButton";
import styles from "../../style";

function LogIn() {
  const { changeUserType, changeUserName } = useContext(UserContext);
  const url = "https://openmarket.weniv.co.kr/";

  /**로그인 회원타입 가져오기 */
  const [logInType, setLogInType] = useState("BUYER");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [failMsg, setFailMsg] = useState("");
  const idInput = useRef();
  const passwordInput = useRef();
  const logInMutation = useMutation(logIn, {
    onSuccess: () => window.location.replace("/"),
    onError: (error) => {
      console.log("실패했어요.");
      if (
        error.response.data.FAIL_Message === "로그인 정보가 없습니다." ||
        error.response.data.FAIL_Message ===
          "로그인 정보가 없습니다. 로그인 유형을 학인해주세요."
      ) {
        setFailMsg("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    },
  });

  function getType(type) {
    setLogInType(type);
  }

  function handleId(e) {
    setId(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (id === "") {
      setFailMsg("아이디를 입력해주세요.");
      idInput.current.focus();
    } else if (password === "") {
      setFailMsg("비밀번호를 입력해주세요.");
      passwordInput.current.focus();
    } else {
      logInMutation.mutate();
    }
  }

  //로그인 api 전송
  async function logIn() {
    const res = await axios.post(url + "accounts/login/", {
      username: id,
      password: password,
      login_type: logInType,
    });
    localStorage.setItem("token", res.data.token);
    changeUserType(logInType);
    setFailMsg("");
    return res;
  }

  return (
    <main className={`${styles.mainLayout} flex-col items-center h-full`}>
      <AuthHeader />
      <section className="ss:mt-[70px] mt-[40px]">
        <AuthBox passType={getType} onSubmit={handleSubmit}>
          <div>
            <input
              ref={idInput}
              onBlur={handleId}
              type="text"
              placeholder="아이디"
              className={`w-full sm:h-[60px] ss:h-[52px] h-[45px] border-b-[1px] ${styles.inputBox}`}
            ></input>
            <input
              ref={passwordInput}
              onBlur={handlePassword}
              type="password"
              placeholder="비밀번호"
              className={`w-full sm:h-[60px] ss:h-[52px] h-[45px] sm:mt-[6px] ss:mt-[15px] mt-[20px] border-b-[1px] ${styles.inputBox}`}
            ></input>
            <span className="block mt-[26px] mb-[26px] font-spoqaMedium ss:text-[16px] text-[12px] text-accentText">
              {failMsg}
            </span>
          </div>

          <MainButton large isActive={true} type="submit">
            로그인
          </MainButton>
        </AuthBox>
      </section>
      <div className="mt-[30px] font-spoqa ss:text-[16px] text-[12px] text-[#333333]">
        <Link to="/join">
          <span className="pr-[14px] align-middle leading-[20px]">
            회원가입
          </span>
        </Link>
        <div className=" inline-block align-middle border-[#333333] border-r-[1px] w-[1px] h-[15px]"></div>
        <span className="pl-[14px] align-middle leading-[20px]">
          비밀번호 찾기
        </span>
      </div>
    </main>
  );
}

export default LogIn;
