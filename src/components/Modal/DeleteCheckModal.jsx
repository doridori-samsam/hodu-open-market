import ModalPortal from "./ModalPortal";
import styles from "../../style";

function DeleteCheckModal({ open, close, clickConfirm }) {
  return (
    <>
      {open ? (
        <ModalPortal close={close}>
          <div className={`${styles.smallModalBox}`}>
            <button
              onClick={close}
              className={`${styles.closeButton} self-end`}
            />
            <div className="text-center text-[16px] font-spoqa h-[40px]">
              <p>상품을 삭제하시겠습니까?</p>
            </div>
            <div className="flex w-full justify-center gap-[10px]">
              <button onClick={close} className={`${styles.ModalWhiteButton}`}>
                취소
              </button>
              <button
                onClick={clickConfirm}
                className={`${styles.ModalBasicButton}`}
              >
                확인
              </button>
            </div>
          </div>
        </ModalPortal>
      ) : null}
    </>
  );
}

export default DeleteCheckModal;
