import ModalPortal from "./ModalPortal";
import styles from "../../style";

function CancelProductUploadModal({ close, open }) {
  return (
    <>
      {open ? (
        <ModalPortal close={close}>
          <div
            className={`${styles.smallModalBox} flex flex-col items-center gap-[15px]`}
          >
            <button
              onClick={close}
              className={`${styles.closeButton} self-end`}
            />
            <div className="text-center text-[16px] font-spoqa h-[45px]">
              <p>상품 등록을 취소하시겠습니까?</p>
            </div>
            <div className="flex w-full justify-center gap-[10px]">
              <button onClick={close} className={`${styles.ModalWhiteButton}`}>
                취소
              </button>
              <button type="reset" className={`${styles.ModalBasicButton}`}>
                확인
              </button>
            </div>
          </div>
        </ModalPortal>
      ) : null}
    </>
  );
}

export default CancelProductUploadModal;
