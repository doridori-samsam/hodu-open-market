import styles from "../../style";

function SubButton({ children, style, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.subButton} ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SubButton;
