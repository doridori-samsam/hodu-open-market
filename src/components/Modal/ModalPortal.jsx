import ReactDOM from "react-dom";
import { useRef } from "react";
import styles from "../../style";

function ModalPortal({ close, children }) {
  const background = useRef();
  const modalRoot = document.getElementById("modal-root");

  function clickBackground(e) {
    if (background.current === e.target) {
      close();
    }
  }
  return ReactDOM.createPortal(
    <>
      <div
        ref={background}
        onClick={clickBackground}
        className={`${styles.modalOverlay}`}
      >
        {children}
      </div>
    </>,
    modalRoot
  );
}
export default ModalPortal;
