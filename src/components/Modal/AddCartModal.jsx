import { useNavigate } from "react-router-dom";
import ModalPortal from "./ModalPortal";
import styles from "../../style";

function AddCartModal({ open, close, existItem }) {
  const navigate = useNavigate();
  return (
    <>
      {open ? (
        <>
          <ModalPortal close={close}>
            <div
              className={`${styles.smallModalBox} flex flex-col items-center gap-[15px]`}
            >
              <button
                onClick={close}
                className={`${styles.closeButton} self-end`}
              />
              <div className="text-center text-[16px] font-spoqa">
                {existItem ? (
                  <>
                    <p>이미 장바구니에 있는 상품입니다.</p>
                    <p>장바구니로 이동하시겠습니까?</p>
                  </>
                ) : (
                  <>
                    <p>상품이 장바구니에 추가 되었습니다.</p>
                    <p>장바구니로 이동하시겠습니까?</p>
                  </>
                )}
              </div>
              <div className="flex w-full justify-center gap-[10px]">
                <button
                  onClick={close}
                  className={`${styles.ModalWhiteButton}`}
                >
                  아니오
                </button>
                <button
                  className={`${styles.ModalBasicButton}`}
                  onClick={() => navigate("/cart")}
                >
                  예
                </button>
              </div>
            </div>
          </ModalPortal>
        </>
      ) : null}
    </>
  );
}

export default AddCartModal;
