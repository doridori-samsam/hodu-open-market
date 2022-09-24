import { useNavigate } from "react-router-dom";
import ModalPortal from "./ModalPortal";
import styles from "../../style";
import MediumButton from "../buttons/MediumButton";

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
              <div className="w-[124px] h-[40px] icon-Logo-hodu"></div>
              <div className="text-center">
                <strong className="text-[18px] text-mainText font-spoqaBold">
                  로그인이 필요한 서비스입니다.
                </strong>
                <span className="block text-[16px] font-spoqa">
                  로그인 페이지로 이동합니다.
                </span>
              </div>
              <MediumButton
                onClick={clickModalConfirm}
                isActive={true}
                style="w-[240px] text-[24px]"
              >
                확인
              </MediumButton>
            </div>
          </ModalPortal>
        </>
      ) : null}
    </>
  );
}

export default LogInModal;
