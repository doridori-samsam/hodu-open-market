import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import AuthHeader from "./AuthHeader";
import AuthBox from "./AuthBox";
import MediumButton from "../../components/buttons/MediumButton";
import MainButton from "../../components/buttons/MainButton";
import styles from "../../style";

function SignUp() {
  const url = "https://openmarket.weniv.co.kr/";
  const navigate = useNavigate();
  const checkUserName = useMutation(checkUserNameValid, {
    onSuccess: (res) =>
      setValidUserName({ checked: true, message: res.data.Success }),
    onError: (error) =>
      setValidUserName({
        fail: true,
        message: error.response.data.FAIL_Message,
      }),
  });

  const checkBusinessNum = useMutation(checkBusinessNumValid, {
    onSuccess: (res) =>
      setValidBusinessNum({
        checked: true,
        message: res.data.Success,
      }),
    onError: (error) =>
      setValidBusinessNum({
        fail: true,
        message: error.response.data.FAIL_Message,
      }),
  });

  const joinMutation = useMutation(clickSignUp, {
    onSuccess: () => navigate("/login"),
    onError: (error) => {
      if (error.response.data.phone_number) {
        setValidPhoneNumber({
          fail: true,
          message: error.response.data.phone_number,
        });
      }
      if (error.response.data.username) {
        setValidUserName({
          fail: true,
          message: error.response.data.username,
        });
      }
      if (error.response.data.company_registration_number) {
        setValidBusinessNum({
          fail: true,
          message: error.response.data.company_registration_number,
        });
      }
      if (err.response.data.store_name) {
        setValidStoreName({
          fail: true,
          message: error.response.data.store_name,
        });
      }
    },
  });

  /**회원가입 타입 가져오기*/
  const [joinType, setJoinType] = useState("BUYER");
  function getType(type) {
    setJoinType(type);
  }

  /**회원가입 입력 정보 */
  const [newUserInfo, setNewUserInfo] = useState({
    username: "",
    password: "",
    passwordCheck: "",
    name: "",
    phoneNumber: ["010", "", ""],
    email: ["", ""],
    consent: false,
    businessNumber: "",
    storeName: "",
  });

  /**아이디 유효 검사 */
  const [validUserName, setValidUserName] = useState({
    fail: false,
    checked: false,
    message: "",
  });

  /**아이디 유효 검사 정규표현 */
  const regUserName = /^[a-zA-Z0-9]{2,20}$/i;

  /** 비밀번호 유효 검사 */
  const [validPassword, setValidPassword] = useState({
    fail: false,
    message: "",
  });

  /**비밀번호 유효 검사 정규표현 */
  const regPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;

  /**사용자 이름 유효 검사 */
  const [validName, setValidName] = useState({
    fail: false,
    message: "",
  });

  /**휴대폰 번호 유효 검사 */
  const [validPhoneNumber, setValidPhoneNumber] = useState({
    fail: false,
    message: "",
  });

  /**휴대폰 번호 유효 검사 정규표현 */
  const regPhoneNumber = /^[0-9]{3,4}$/i;

  /**이메일 유효 검사 */
  const [validEmail, setValidEmail] = useState({
    fail: false,
    message: "",
  });

  /**이메일 아이디 유효 검사 정규표현 */
  const regEmail = /^[a-zA-Z0-9+-\_.]+$/i;

  /**이메일 아이디 도메인 유효 검사 정규표현*/
  const regDomain = /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

  /**사업자 등록번호 유효 검사 정규표현 */
  const regBusinessNum = /^[0-9]{10}$/;

  /**사업자 등록번호 유효 검사 */
  const [validBusinessNum, setValidBusinessNum] = useState({
    fail: false,
    checked: false,
    message: "",
  });

  /**스토어 이름 유효 검사 */
  const [validStoreName, setValidStoreName] = useState({
    fail: false,
    message: "",
  });

  /**아이디 입력 */
  function handleUserName(e) {
    if (e.target.value === "") {
      setValidUserName({ fail: true, message: "필수 정보입니다" });
    }
    setNewUserInfo({ ...newUserInfo, username: e.target.value });
  }

  /**아이디 중복확인 함수 */
  async function checkUserNameValid() {
    if (newUserInfo.username) {
      if (regUserName.test(newUserInfo.username)) {
        const res = await axios.post(url + "accounts/signup/valid/username/", {
          username: newUserInfo.username,
        });
        return res;
      } else {
        setValidUserName({
          fail: true,
          message: "20자 이내 영대소문자, 숫자만 입력가능합니다",
        });
        setNewUserInfo({
          ...newUserInfo,
          username: false,
        });
      }
    } else {
      setValidUserName({ fail: true, message: "아이디를 입력해주세요" });
    }
  }

  /**비밀번호 입력*/
  function handlePassword(e) {
    if (e.target.value !== "" && !regPassword.test(e.target.value)) {
      setValidPassword({
        fail: true,
        message: "8자 이상의 영대소문자, 숫자, 특수문자를 사용하세요",
      });
    } else if (e.target.value === "") {
      setValidPassword({
        fail: true,
        message: "필수 정보입니다",
      });
    } else {
      setNewUserInfo({ ...newUserInfo, password: e.target.value });
      setValidPassword({ fail: !regPassword.test(e.target.value) });
    }
  }

  /**비밀번호 재입력*/
  function handleCheckPassword(e) {
    if (newUserInfo.password === "" && validPassword.message === "") {
      setValidPassword({
        fail: true,
        message: "필수 정보입니다",
      });
    }
    if (e.target.value === "" || e.target.value !== newUserInfo.password) {
      setNewUserInfo({ ...newUserInfo, passwordCheck: false });
    } else {
      setNewUserInfo({ ...newUserInfo, passwordCheck: e.target.value });
    }
  }

  /**사용자 이름 입력 */
  function handleName(e) {
    if (e.target.value === "") {
      setValidName({ fail: true, message: "필수 정보입니다." });
      setNewUserInfo({ ...newUserInfo, name: "" });
    } else {
      setNewUserInfo({ ...newUserInfo, name: e.target.value });
      setValidName({ fail: false, message: "" });
    }
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

  /**휴대폰 번호 입력2 */
  function handlePhoneNumber2(e) {
    if (e.target.value) {
      if (regPhoneNumber.test(e.target.value)) {
        setNewUserInfo({
          ...newUserInfo,
          phoneNumber: [
            newUserInfo.phoneNumber[0],
            e.target.value,
            newUserInfo.phoneNumber[2],
          ],
        });
        setValidPhoneNumber({
          fail: false,
          message: "",
        });
        if (!newUserInfo.phoneNumber[2]) {
          setValidPhoneNumber({
            fail: true,
            message: "유효하지 않은 번호입니다",
          });
        }
        if (newUserInfo.phoneNumber[2] === "") {
          setValidPhoneNumber({
            fail: true,
            message: "필수 정보입니다",
          });
        }
      } else {
        setNewUserInfo({
          ...newUserInfo,
          phoneNumber: [
            newUserInfo.phoneNumber[0],
            false,
            newUserInfo.phoneNumber[2],
          ],
        });
        setValidPhoneNumber({
          fail: true,
          message: "유효하지 않은 번호입니다",
        });
      }
    } else if (e.target.value === "") {
      setNewUserInfo({
        ...newUserInfo,
        phoneNumber: [
          newUserInfo.phoneNumber[0],
          "",
          newUserInfo.phoneNumber[2],
        ],
      });
      setValidPhoneNumber({
        fail: true,
        message: "필수 정보입니다",
      });
    }
  }

  /**휴대폰 번호 입력3 */
  function handlePhoneNumber3(e) {
    if (e.target.value) {
      if (regPhoneNumber.test(e.target.value)) {
        setNewUserInfo({
          ...newUserInfo,
          phoneNumber: [
            newUserInfo.phoneNumber[0],
            newUserInfo.phoneNumber[1],
            e.target.value,
          ],
        });
        setValidPhoneNumber({
          fail: false,
          message: "",
        });
        if (!newUserInfo.phoneNumber[1]) {
          setValidPhoneNumber({
            fail: true,
            message: "유효하지 않은 번호입니다",
          });
        }
        if (newUserInfo.phoneNumber[1] === "") {
          setValidPhoneNumber({
            fail: true,
            message: "필수 정보입니다",
          });
        }
      } else {
        setNewUserInfo({
          ...newUserInfo,
          phoneNumber: [
            newUserInfo.phoneNumber[0],
            newUserInfo.phoneNumber[1],
            false,
          ],
        });
        setValidPhoneNumber({
          fail: true,
          message: "유효하지 않은 번호입니다",
        });
      }
    } else if (e.target.value === "") {
      setNewUserInfo({
        ...newUserInfo,
        phoneNumber: [
          newUserInfo.phoneNumber[0],
          newUserInfo.phoneNumber[1],
          "",
        ],
      });
      setValidPhoneNumber({
        fail: true,
        message: "필수 정보입니다",
      });
    }
  }

  /**이메일 입력 */
  function handleEmail1(e) {
    if (e.target.value) {
      if (regEmail.test(e.target.value)) {
        setNewUserInfo({
          ...newUserInfo,
          email: [e.target.value, newUserInfo.email[1]],
        });
        setValidEmail({
          fail: false,
          message: "",
        });
        if (!newUserInfo.email[1]) {
          setValidEmail({
            fail: true,
            message: "유효하지 않은 이메일입니다",
          });
        }
        if (newUserInfo.email[1] === "") {
          setValidEmail({
            fail: true,
            message: "필수 정보입니다",
          });
        }
      } else {
        setNewUserInfo({
          ...newUserInfo,
          email: [false, newUserInfo.email[1]],
        });
        setValidEmail({
          fail: true,
          message: "유효하지 않은 이메일입니다",
        });
      }
    } else if (e.target.value === "") {
      setNewUserInfo({
        ...newUserInfo,
        email: ["", newUserInfo.email[1]],
      });
      setValidEmail({
        fail: true,
        message: "필수 정보입니다",
      });
    }
  }

  /**이메일 입력2 */
  function handleEmail2(e) {
    if (e.target.value) {
      if (regDomain.test(e.target.value)) {
        setNewUserInfo({
          ...newUserInfo,
          email: [newUserInfo.email[0], e.target.value],
        });
        setValidEmail({
          fail: false,
          message: "",
        });
        if (!newUserInfo.email[0]) {
          setValidEmail({
            fail: true,
            message: "유효하지 않은 이메일입니다",
          });
        }
        if (newUserInfo.email[0] === "") {
          setValidEmail({
            fail: true,
            message: "필수 정보입니다",
          });
        }
      } else {
        setNewUserInfo({
          ...newUserInfo,
          email: [newUserInfo.email[0], false],
        });
        setValidEmail({
          fail: true,
          message: "유효하지 않은 이메일입니다",
        });
      }
    } else if (e.target.value === "") {
      setNewUserInfo({
        ...newUserInfo,
        email: [newUserInfo.email[0], ""],
      });
      setValidEmail({
        fail: true,
        message: "필수 정보입니다",
      });
    }
  }

  /**사업자 등록번호 입력 */
  function handleBusinessNum(e) {
    if (regBusinessNum.test(e.target.value)) {
      setNewUserInfo({
        ...newUserInfo,
        businessNumber: e.target.value,
      });
      setValidBusinessNum({
        fail: false,
        checked: true,
        message: "",
      });
    } else {
      setNewUserInfo({
        ...newUserInfo,
        businessNumber: "",
      });
      setValidBusinessNum({
        fail: true,
        message: "유효하지 않은 번호입니다",
      });
    }
  }

  /**사업자 등록번호 검증 클릭 */
  async function checkBusinessNumValid() {
    if (!validBusinessNum.fail) {
      const res = await axios.post(
        url + "accounts/signup/valid/company_registration_number/",
        {
          company_registration_number: newUserInfo.businessNumber,
        }
      );

      return res;
    }
  }

  /**스토어 이름 입력 */
  function handleStoreName(e) {
    if (e.target.value === "") {
      setNewUserInfo({
        ...newUserInfo,
        storeName: "",
      });
      setValidStoreName({
        fail: true,
        message: "필수 정보입니다",
      });
    } else {
      setNewUserInfo({
        ...newUserInfo,
        storeName: e.target.value,
      });
      setValidStoreName({
        fail: false,
        mesage: "",
      });
    }
  }

  /**동의 체크 클릭 */
  function clickConsent() {
    setNewUserInfo({ ...newUserInfo, consent: !newUserInfo.consent });
  }

  /**버튼 activate */
  function buttonActivate() {
    let result;
    let validData = Object.values(newUserInfo);
    if (joinType === "BUYER") {
      result =
        validUserName.checked &&
        validData.reduce((prev, cur) => {
          if (validData.indexOf(cur) === 7 || validData.indexOf(cur) === 8) {
            cur = true;
          }
          if (typeof cur === "object") {
            cur = cur.reduce((prev, cur) => {
              return prev && cur;
            });
          }
          return prev && cur;
        });
    } else if (joinType === "SELLER") {
      result =
        validBusinessNum.checked &&
        validData.reduce((prev, cur) => {
          if (typeof cur === "object") {
            cur = cur.reduce((prev, cur) => {
              return prev && cur;
            });
          }
          return prev && cur;
        });
    }
    return result;
  }

  /**회원가입  */
  async function clickSignUp() {
    if (joinType === "BUYER") {
      const res = await axios.post(url + "accounts/signup/", {
        username: newUserInfo.username,
        password: newUserInfo.password,
        password2: newUserInfo.passwordCheck,
        phone_number: newUserInfo.phoneNumber.join(""),
        name: newUserInfo.name,
      });
      return res;
    } else {
      const res = await axios.post(url + "accounts/signup_seller/", {
        username: newUserInfo.username,
        password: newUserInfo.password,
        password2: newUserInfo.passwordCheck,
        phone_number: newUserInfo.phoneNumber.join(""),
        name: newUserInfo.name,
        company_registration_number: newUserInfo.businessNumber,
        store_name: newUserInfo.storeName,
      });
      return res;
    }
  }

  return (
    <main className={`${styles.mainLayout} items-center flex-col`}>
      <AuthHeader />
      <section className="ss:mt-[70px] mt-[40px]">
        <AuthBox passType={getType}>
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
              onClick={checkUserName.mutate}
              style="w-[80px] ss:h-[54px] h-[35px] sm:w-[122px] ss:my-0 mt-[15px] bg-primary text-[14px]"
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
                validPassword.fail ? "focus:border-accentText" : null
              } sm:w-[480px] bg-[center_right_5px] ss:bg-[top_13px_right_13px]`}
            ></input>
            <span className="block mt-[10px] font-spoqa text-[14px] ss:text-[16px] text-accentText">
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
              onBlur={handleCheckPassword}
              className={`${styles.signUpInput} ${
                !validPassword.fail && newUserInfo.passwordCheck
                  ? "icon-icon-check-on"
                  : "icon-icon-check-off"
              } ${
                newUserInfo.passwordCheck === false
                  ? "focus:border-accentText"
                  : null
              } sm:w-[480px] bg-[center_right_5px] ss:bg-[top_13px_right_13px]`}
            ></input>

            <span className="block mt-[10px] mb-[20px] font-spoqa text-[16px] text-accentText leading-[20px]">
              {newUserInfo.passwordCheck === false
                ? "비밀번호가 일치하지 않습니다"
                : null}
            </span>

            <label
              htmlFor="user-name"
              className={`${styles.grayText} block mt-[50px]`}
            >
              이름
            </label>
            <input
              type="text"
              id="user-name"
              onBlur={handleName}
              className={`${styles.signUpInput} ${
                validName.fail ? "focus:border-accentText" : null
              } sm:w-[480px]`}
            ></input>
            <span
              className="block mt-[10px] font-spoqa text-[14px] ss:text-[16px] text-accentText 
              "
            >
              {validName.message}
            </span>

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
            </select>
            <input
              type="text"
              id="user-phone"
              onBlur={handlePhoneNumber2}
              className={`${styles.signUpInput} ${
                validPhoneNumber.fail ? "focus:border-accentText" : null
              } pl-0 w-[84px] ss:w-[116px] sm:w-[152px] mr-[9px] ss:mr-[11px] sm:mr-[12px] text-center`}
            ></input>
            <input
              type="text"
              onBlur={handlePhoneNumber3}
              className={`${styles.signUpInput} ${
                validPhoneNumber.fail ? "focus:border-accentText" : null
              } pl-0 w-[84px] ss:w-[116px] sm:w-[152px] text-center`}
            ></input>
            <span className="block mt-[10px] font-spoqa text-[14px] ss:text-[16px] text-accentText">
              {validPhoneNumber.message}
            </span>
            <label
              htmlFor="user-email"
              className={`${styles.grayText} block mt-[16px]`}
            >
              이메일
            </label>
            <input
              type="text"
              onBlur={handleEmail1}
              className={`${styles.signUpInput} w-[115px] ss:w-[165px] sm:w-[220px]`}
            ></input>
            <span className="mx-[12px] font-spoqa">@</span>
            <input
              type="text"
              onBlur={handleEmail2}
              className={`${styles.signUpInput} w-[115px] ss:w-[165px] sm:w-[220px]`}
            ></input>
            <span className="block mt-[10px] font-spoqa text-[14px] ss:text-[16px] text-accentText">
              {validEmail.fail ? validEmail.message : null}
            </span>
            {joinType === "SELLER" ? (
              <>
                <label
                  htmlFor="business-num"
                  className={`${styles.grayText} block mt-[50px]`}
                >
                  사업자 등록번호
                </label>
                <input
                  type="text"
                  id="business-num"
                  onBlur={handleBusinessNum}
                  className={`${styles.signUpInput} ${
                    validBusinessNum.fail ? "focus:border-accentText" : null
                  } ss:w-[280px] sm:w-[346px] mr-[10px] sm:mr-[12px]`}
                ></input>
                <MediumButton
                  isActive
                  type="button"
                  onClick={checkBusinessNum.mutate}
                  style="w-[80px] ss:h-[54px] h-[35px] sm:w-[122px] ss:my-0 mt-[15px] bg-primary text-[14px]"
                >
                  인증
                </MediumButton>
                <span
                  className={`block mt-[10px] font-spoqa text-[14px] ss:text-[16px]  ${
                    validBusinessNum.fail ? "text-accentText" : "text-primary"
                  }`}
                >
                  {validBusinessNum.message}
                </span>
                <label
                  htmlFor="store-name"
                  className={`${styles.grayText} block mt-[16px]`}
                >
                  스토어 이름
                </label>
                <input
                  type="text"
                  id="store-name"
                  onBlur={handleStoreName}
                  className={`${styles.signUpInput} ${
                    validStoreName.fail ? "focus:border-accentText" : null
                  } sm:w-[480px]`}
                ></input>
                <span className="block mt-[10px] font-spoqa text-[14px] ss:text-[16px] text-accentText">
                  {validStoreName.message}
                </span>
              </>
            ) : null}
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
      <MainButton
        large
        isActive={buttonActivate()}
        type="submit"
        onClick={joinMutation.mutate}
      >
        가입하기
      </MainButton>
    </main>
  );
}

export default SignUp;
