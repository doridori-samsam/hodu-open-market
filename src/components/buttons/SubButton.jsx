import styles from "../../style";

function SubButton({ children, style, type, onClick, isActive }) {
  return (
    <button
      type={type}
      className={`${styles.subButton} ${style}`}
      onClick={onClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
}

export default SubButton;
