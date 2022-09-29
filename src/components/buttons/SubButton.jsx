import styles from "../../style";

function SubButton({ children, style, onClick, isActive }) {
  return (
    <button
      type="button"
      className={`${styles.subButton} ${style}`}
      onClick={onClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
}

export default SubButton;
