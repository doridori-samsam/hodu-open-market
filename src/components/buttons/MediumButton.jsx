import styles from "../../style";

function MediumButton({ children, style, isActive, type, onClick }) {
  return (
    <button
      className={`${styles.mediumButton} ${style}
    ${isActive ? "bg-primary" : "bg-disabled"}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default MediumButton;
