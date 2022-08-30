import { useNavigate } from "react-router-dom";
import styles from "../style";
import MediumButton from "./buttons/MediumButton";
import WhiteButton from "./buttons/WhiteButton";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className={`${styles.flexCenter} w-full h-screen`}>
      <article className="flex flex-col items-center md:flex-row gap-[52px]">
        <div className="icon-icon-404 w-[276px] h-[236px]" />
        <div className="">
          <h1 className="mb-[20px] text-[24px] ss:text-[36px] font-spoqaBold">
            페이지를 찾을 수 없습니다.
          </h1>
          <span className="text-subText font-spoqa">
            페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.
          </span>
          <br />
          <span className="text-subText font-spoqa">
            웹 주소가 올바른지 확인해 주세요.
          </span>
          <div className="mt-[40px]">
            <MediumButton
              type="button"
              isActive={true}
              onClick={() => navigate("/")}
              style="w-full h-[50px] ss:w-[200px] ss:h-[60px] text-[18px] mb-[14px] ss:mb-0 mr-[14px]"
            >
              메인으로
            </MediumButton>
            <WhiteButton
              type="button"
              onClick={() => navigate(-1)}
              style="w-full h-[50px] ss:w-[200px] ss:h-[60px] text-[18px]"
            >
              이전 페이지
            </WhiteButton>
          </div>
        </div>
      </article>
    </main>
  );
}

export default NotFound;
