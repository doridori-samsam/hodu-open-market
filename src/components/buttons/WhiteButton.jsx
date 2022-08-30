import styles from "../../style";

function WhiteButton({ type, onClick, style, children }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${style} ${styles.whiteButton}`}
    >
      {children}
    </button>
  );
}

export default WhiteButton;
