import { useState } from "react";
import axios from "axios";
import AuthHeader from "../../components/AuthHeader";
import AuthBox from "../../components/AuthBox";
import MediumButton from "../../components/buttons/MediumButton";
import MainButton from "../../components/buttons/MainButton";
import styles from "../../style";

function SignUp() {
  const url = "https://openmarket.weniv.co.kr/";
  const [newUserInfo, setNewUserInfo] = useState({
    username: "",
    password: "",
    passwordCheck: "",
    name: "",
    phoneNumber: [],
    email: [],
    consent: false,
  });

  /** 아이디 중복 state */
  const [validUserName, setValidUserName] = useState({
    fail: false,
    message: "",
  });

  /**아이디 입력 */
  function handleUserName(e) {
    if (e.target.value === "") {
      setValidUserName({ fail: true, message: "필수 정보입니다." });
    }
    setNewUserInfo({ ...newUserInfo, username: e.target.value });
  }

  /**아이디 유효검사 정규표현식 */
  const regUserName = /^[a-zA-Z0-9]{2,20}$/i;

  /**아이디 중복확인 클릭 */
  async function checkUserNameValid() {
    if (newUserInfo.username) {
      if (regUserName.test(newUserInfo.username)) {
        try {
          const res = await axios.post(url + "accounts/signup/valid/", {
            username: newUserInfo.username,
          });
          console.log(res);
          setValidUserName({ message: "멋진 아이디네요 :)" });
        } catch (err) {
          console.error(err);
          setValidUserName({
            fail: true,
            message: err.response.data.FAIL_Message,
          });
        }
      } else {
        setValidUserName({
          fail: true,
          message: "20자 이내 영대소문자, 숫자만 입력가능합니다.",
        });
      }
    } else {
      setValidUserName({ fail: true, message: "아이디를 입력해주세요." });
    }
  }

  /**비밀번호 유효검사 정규표현식 */
  const regPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;

  const [validPassword, setValidPassword] = useState({
    fail: false,
    message: "",
  });

  /**비밀번호 입력*/
  function handlePassword(e) {
    if (!regPassword.test(e.target.value)) {
      setValidPassword({
        fail: true,
        message: "8자 이상의 영대소문자, 숫자, 특수문자를 사용하세요",
      });
    } else {
      setNewUserInfo({ ...newUserInfo, password: e.target.value });
      setValidPassword({ fail: !regPassword.test(e.target.value) });
    }
  }

  /**비밀번호 재입력*/
  function handleCheckPassword(e) {
    setNewUserInfo({ ...newUserInfo, passwordCheck: e.target.value });
  }

  /**사용자 이름 입력 */
  function handleName(e) {
    setNewUserInfo({ ...newUserInfo, name: e.target.value });
  }

  /**휴대폰 번호 입력 */
  function handlePhoneNumber1(e) {
    setNewUserInfo({
      ...newUserInfo,
      phoneNumber: [
        e.target.value,
        newUserInfo.phoneNumber[1],
        newUserInfo.phoneNumber[2],
      ],
    });
  }

  function handlePhoneNumber2(e) {
    setNewUserInfo({
      ...newUserInfo,
      phoneNumber: [
        newUserInfo.phoneNumber[0],
        e.target.value,
        newUserInfo.phoneNumber[2],
      ],
    });
  }

  function handlePhoneNumber3(e) {
    setNewUserInfo({
      ...newUserInfo,
      phoneNumber: [
        newUserInfo.phoneNumber[0],
        newUserInfo.phoneNumber[1],
        e.target.value,
      ],
    });
  }

  /**이메일 입력 */
  function handleEmail1(e) {
    setNewUserInfo({
      ...newUserInfo,
      email: [e.target.value, newUserInfo.email[1]],
    });
  }

  function handleEmail2(e) {
    setNewUserInfo({
      ...newUserInfo,
      email: [newUserInfo.email[0], e.target.value],
    });
  }

  /**동의 체크 클릭 */
  function clickConsent() {
    setNewUserInfo({ ...newUserInfo, consent: !newUserInfo.consent });
  }
  console.log(validPassword.fail);
  return (
    <main className={`${styles.flexCenter} w-full flex-col pb-[20px]`}>
      <AuthHeader />
      <section className="ss:mt-[70px] mt-[40px]">
        <AuthBox>
          <div className="w-full">
            <label htmlFor="user-id" className={`${styles.grayText} block`}>
              아이디
            </label>
            <input
              type="text"
              id="user-id"
              onBlur={handleUserName}
              className={`${styles.signUpInput} ${
                validUserName.fail ? "focus:border-accentText" : null
              } ss:w-[280px] sm:w-[346px] mr-[10px] sm:mr-[12px]`}
            ></input>
            <MediumButton
              isActive
              type="button"
              onClick={checkUserNameValid}
              style="w-[80px] h-[35px] sm:w-[122px] ss:my-0 mt-[15px] bg-primary text-[14px]"
            >
              중복확인
            </MediumButton>
            <span
              className={`block mt-[10px] font-spoqa text-[14px] ss:text-[16px] ${
                validUserName.fail ? "text-accentText" : "text-primary"
              }`}
            >
              {validUserName.message}
            </span>
            <label
              htmlFor="user-pwd"
              className={`${styles.grayText} block mt-[12px]`}
            >
              비밀번호
            </label>
            <input
              type="password"
              id="user-pwd"
              onBlur={handlePassword}
              className={`${styles.signUpInput} ${
                !validPassword.fail && newUserInfo.password !== ""
                  ? "icon-icon-check-on"
                  : "icon-icon-check-off"
              } ${
                newUserInfo.password !== "" && validPassword.fail
                  ? "focus:border-accentText"
                  : null
              } sm:w-[480px] bg-[center_right_5px] ss:bg-[top_13px_right_13px]`}
            ></input>
            <span
              className={`block mt-[10px] font-spoqa text-[14px] ss:text-[16px] text-accentText`}
            >
              {validPassword.message}
            </span>
            <label
              htmlFor="verify-pwd"
              className={`${styles.grayText} block mt-[12px]`}
            >
              비밀번호 재확인
            </label>
            <input
              type="password"
              id="verify-pwd"
              onChange={handleCheckPassword}
              className={`${styles.signUpInput} ${
                !validPassword.fail &&
                newUserInfo.passwordCheck !== "" &&
                newUserInfo.password === newUserInfo.passwordCheck
                  ? "icon-icon-check-on"
                  : "icon-icon-check-off"
              } ${
                newUserInfo.passwordCheck !== "" &&
                newUserInfo.password !== newUserInfo.passwordCheck
                  ? "focus:border-accentText"
                  : null
              } sm:w-[480px] bg-[center_right_5px] ss:bg-[top_13px_right_13px]`}
            ></input>

            <span className="block mt-[10px] mb-[20px] font-spoqa text-[16px] text-accentText leading-[20px]">
              {newUserInfo.passwordCheck !== "" &&
              newUserInfo.password !== newUserInfo.passwordCheck
                ? "비밀번호가 일치하지 않습니다"
                : null}
            </span>

            <label htmlFor="user-name" className={`${styles.grayText} block`}>
              이름
            </label>
            <input
              type="text"
              id="user-name"
              onBlur={handleName}
              className={`${styles.signUpInput} sm:w-[480px]`}
            ></input>

            <label
              htmlFor="user-phone"
              className={`${styles.grayText} block mt-[16px]`}
            >
              휴대폰번호
            </label>
            <select
              onChange={handlePhoneNumber1}
              className={`${styles.signUpInput} pl-[0px] w-[84px] ss:w-[116px] sm:w-[152px] mr-[9px] ss:mr-[11px] sm:mr-[12px] bg-white text-center`}
            >
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
              <option value="050">050</option>
              <option value="070">070</option>
            </select>
            <input
              type="text"
              id="user-phone"
              onChange={handlePhoneNumber2}
              className={`${styles.signUpInput} pl-0 w-[84px] ss:w-[116px] sm:w-[152px] mr-[9px] ss:mr-[11px] sm:mr-[12px] text-center`}
            ></input>
            <input
              type="text"
              onChange={handlePhoneNumber3}
              className={`${styles.signUpInput} pl-0 w-[84px] ss:w-[116px] sm:w-[152px] text-center`}
            ></input>

            <label
              htmlFor="user-email"
              className={`${styles.grayText} block mt-[16px]`}
            >
              이메일
            </label>
            <input
              type="text"
              onChange={handleEmail1}
              className={`${styles.signUpInput} w-[115px] ss:w-[165px] sm:w-[220px]`}
            ></input>
            <span className="mx-[12px] font-spoqa">@</span>
            <input
              type="text"
              onChange={handleEmail2}
              className={`${styles.signUpInput} w-[115px] ss:w-[165px] sm:w-[220px]`}
            ></input>
          </div>
        </AuthBox>
      </section>
      <div className="my-[34px] px-[30px] sm:px-0 font-spoqa text-[14px] sm:text-[16px] text-subText">
        <button
          className={`mb-[3px] mr-[10px] w-[16px] h-[16px] align-middle ${
            newUserInfo.consent ? "icon-check-fill-box" : "icon-check-box"
          }`}
          onClick={clickConsent}
        ></button>
        호두샵의 <u className="font-spoqaBold">이용약관</u> 및{" "}
        <u className="font-spoqaBold">개인정보처리방침</u>에 대한 내용을
        확인하였고 동의합니다.
      </div>
      <MainButton large isActve={false} type="submit">
        가입하기
      </MainButton>
    </main>
  );
}

export default SignUp;
