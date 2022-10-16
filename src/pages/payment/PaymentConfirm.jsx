import { useNavigate } from "react-router-dom";
import styles from "../../style";

function PaymentConfirm() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/", { replace: true });
  }, 3000);
  return (
    <main className={`${styles.mainLayout} flex-col items-center gap-[20px]`}>
      <div className="w-[225px] h-[120px] bg-contain icon-Logo-hodu"></div>
      <h1 className="font-spoqaBold text-[28px]">주문이 완료되었습니다! :)</h1>
      <p className="font-spoqa text-[18px]">곧 메인 페이지로 이동합니다.</p>
    </main>
  );
}

export default PaymentConfirm;
