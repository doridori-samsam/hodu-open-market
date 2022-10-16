import styles from "../../style";

function MediumButton({ children, style, isActive, type, onClick }) {
  return (
    <button
      disabled={!isActive}
      className={`${style} ${styles.mediumButton} 
    ${isActive ? "bg-primary" : "bg-disabled"}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default MediumButton;
