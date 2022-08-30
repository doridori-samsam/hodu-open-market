import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthHeader from "../../components/AuthHeader";
import AuthBox from "../../components/AuthBox";
import MainButton from "../../components/buttons/MainButton";
import UserContext from "../../context/UserContext";
import styles from "../../style";

function LogIn() {
  const { userType, setUserType } = useContext(UserContext);
  const url = "https://openmarket.weniv.co.kr/";
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [failMsg, setFailMsg] = useState("");
  const idInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  function handleId(e) {
    setId(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(type) {
    if (id === "") {
      setFailMsg("아이디를 입력해주세요.");
      idInput.current.focus();
    } else if (password === "") {
      setFailMsg("비밀번호를 입력해주세요.");
      passwordInput.current.focus();
    } else {
      logIn(type);
    }
  }

  //로그인 api 전송
  async function logIn(type) {
    try {
      const res = await axios.post(url + "accounts/login/", {
        username: id,
        password: password,
        login_type: type,
      });
      localStorage.setItem("token", res.data.token);
      setFailMsg("");
      window.location.replace("/");
    } catch (err) {
      console.error(err.response.data);
      if (
        err.response.data.FAIL_Message === "로그인 정보가 없습니다." ||
        err.response.data.FAIL_Message ===
          "로그인 정보가 없습니다. 로그인 유형을 학인해주세요."
      ) {
        setFailMsg("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    }
    console.log(userType);
  }

  return (
    <main className={`${styles.flexCenter} flex-col h-full`}>
      <AuthHeader />
      <section className="ss:mt-[70px] mt-[40px]">
        <AuthBox giveType={handleSubmit}>
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
