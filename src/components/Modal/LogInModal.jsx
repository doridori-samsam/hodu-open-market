import { useNavigate } from "react-router-dom";
import ModalPortal from "./ModalPortal";
import styles from "../../style";
import SubButton from "../buttons/SubButton";

function LogInModal({ open, close }) {
  const navigate = useNavigate();

  function clickModalConfirm() {
    navigate("/login");
  }

  return (
    <>
      {open ? (
        <>
          <ModalPortal close={close}>
            <div
              className={`${styles.modalBox} flex flex-col items-center justify-between`}
            >
              <div className="sl:w-[124px] w-[100px] sl:h-[40px] h-[35px] icon-Logo-hodu bg-contain bg-center"></div>
              <div className="text-center">
                <strong className="sl:text-[18px] text-[16px] text-mainText font-spoqaBold">
                  로그인이 필요한 서비스입니다.
                </strong>
                <span className="block sl:text-[16px] text-[14px] font-spoqa">
                  로그인 페이지로 이동합니다.
                </span>
              </div>
              <SubButton
                onClick={clickModalConfirm}
                isActive={true}
                style="w-[240px] sl:h-[60px] h-[40px] text-[16px] sl:text-[22px] font-spoqa
                "
              >
                확인
              </SubButton>
            </div>
          </ModalPortal>
        </>
      ) : null}
    </>
  );
}

export default LogInModal;
