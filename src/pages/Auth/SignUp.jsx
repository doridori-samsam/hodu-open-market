import AuthHeader from "../../components/AuthHeader";
import AuthBox from "../../components/AuthBox";
import MediumButton from "../../components/buttons/MediumButton";
import MainButton from "../../components/buttons/MainButton";
import styles from "../../style";

function SignUp() {
  return (
    <main className={`${styles.flexCenter} w-full flex-col`}>
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
              className={`${styles.signUpInput} w-[346px] mr-[12px]`}
            ></input>
            <MediumButton isActive style="w-[122px] bg-primary">
              중복확인
            </MediumButton>
            <span className="block mt-[10px] font-spoqa text-primary">
              멋진 아이디네요! :)
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
              className={`${styles.signUpInput} w-[480px] icon-icon-check-off bg-[top_13px_right_13px]`}
            ></input>

            <label
              htmlFor="verify-pwd"
              className={`${styles.grayText} block mt-[12px]`}
            >
              비밀번호 재확인
            </label>
            <input
              type="password"
              id="verify-pwd"
              className={`${styles.signUpInput} w-[480px] icon-icon-check-off bg-[top_13px_right_13px]`}
            ></input>

            <span className="block mt-[10px] mb-[20px] font-spoqa text-[16px] text-accentText leading-[20px]">
              비밀번호가 일치하지 않습니다.
            </span>

            <label htmlFor="user-name" className={`${styles.grayText} block`}>
              이름
            </label>
            <input
              type="text"
              id="user-name"
              className={`${styles.signUpInput} w-[480px]`}
            ></input>

            <label
              htmlFor="user-phone"
              className={`${styles.grayText} block mt-[16px]`}
            >
              휴대폰번호
            </label>
            <select
              className={`${styles.signUpInput} pl-[0px] w-[152px] mr-[12px] bg-white text-center`}
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
              className={`${styles.signUpInput} w-[152px] mr-[12px]`}
            ></input>
            <input
              type="text"
              className={`${styles.signUpInput} w-[152px]`}
            ></input>

            <label
              htmlFor="user-email"
              className={`${styles.grayText} block mt-[16px]`}
            >
              이메일
            </label>
            <input
              type="text"
              className={`${styles.signUpInput} w-[220px]`}
            ></input>
            <span className="mx-[12px] font-spoqa">@</span>
            <input
              type="text"
              className={`${styles.signUpInput} w-[220px]`}
            ></input>
          </div>
        </AuthBox>
      </section>
      <div className="my-[34px] font-spoqa text-[16px] text-subText">
        <label
          htmlFor="consent-check"
          className="w-[16px] h-[16px] inline-block align-middle icon-check-box"
        ></label>
        <input type="checkbox" id="consent-check" className="hidden"></input>
        호두샵의 <span>이용약관</span> 및 <span>개인정보처리방침</span>에 대한
        내용을 확인하였고 동의합니다.
      </div>
      <MainButton large isActve={false} type="submit">
        가입하기
      </MainButton>
    </main>
  );
}

export default SignUp;
