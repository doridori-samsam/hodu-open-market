import styles from "../../style";

function MainButton({ children, large, isActive, type, onClick }) {
  return (
    <button
      className={`${large ? styles.largeButton : styles.basicButton} ${
        isActive ? "bg-primary" : "bg-disabled"
      }`}
      type={type}
      onClick={onClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
}

export default MainButton;
