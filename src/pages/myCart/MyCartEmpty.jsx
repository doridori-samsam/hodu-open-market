import styles from "../../style";

function MyCartEmpty() {
  return (
    <div className={`${styles.flexCenter} flex-col h-[300px] gap-[17px]`}>
      <h1 className="font-spoqaBold text-[18px]">
        장바구니에 담긴 상품이 없습니다.
      </h1>
      <p className="font-spoqa text-[14px] text-subText">
        원하는 상품을 장바구니에 담아보세요.
      </p>
    </div>
  );
}

export default MyCartEmpty;
