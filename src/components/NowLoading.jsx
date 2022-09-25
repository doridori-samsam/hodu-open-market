import styles from "../style";
import spinner from "../assets/loading_spin.svg";

function NowLoading() {
  return (
    <main className={`${styles.mainLayout} h-[600px] items-center`}>
      <img src={spinner} className="w-[230px] h-[230px]" />
    </main>
  );
}

export default NowLoading;
