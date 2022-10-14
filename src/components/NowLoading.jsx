import styles from "../style";
import spinner from "../assets/loading_spin.svg";

function NowLoading() {
  return (
    <main className={`${styles.mainLayout} h-[600px] items-center`}>
      <img
        src={spinner}
        className="sm:w-[230px] sm:h-[230px] w-[180px] h-[180px]"
      />
    </main>
  );
}

export default NowLoading;
