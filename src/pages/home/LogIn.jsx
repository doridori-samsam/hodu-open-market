import AuthBox from "../../components/AuthBox";
import styles from "../../style";

function LogIn() {
  return (
    <main className={`${styles.flexCenter} flex-col`}>
      <header className="ss:mt-[100px] mt-[70px]">
        <h1 className="a11y-hidden">로그인페이지</h1>
        <div className="ss:w-[238px] ss:h-[74px] w-[180px] h-[60px] icon-Logo-hodu bg-contain" />
      </header>
      <section className="ss:mt-[70px] mt-[40px]">
        <AuthBox />
      </section>
      <div className="mt-[30px] font-spoqa ss:text-[16px] text-[12px] text-[#333333]">
        <span className="pr-[14px] align-middle leading-[20px]">회원가입</span>

        <div className=" inline-block align-middle border-[#333333] border-r-[1px] w-[1px] h-[15px]"></div>
        <span className="pl-[14px] align-middle leading-[20px]">
          비밀번호 찾기
        </span>
      </div>
    </main>
  );
}

export default LogIn;
