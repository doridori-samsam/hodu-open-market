import NavBar from "../../components/navBar/NavBar";
import styles from "../../style";

function MyCart() {
  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout}`}>
        <section
          className={`${styles.flexCenter} flex-col w-[88%] border-2 border-pink-500`}
        >
          <h1 className="font-spoqaBold text-[36px] my-[52px]">장바구니</h1>
          <div className="flex items-center justify-between w-full h-[50px] px-[30px] rounded-[10px] bg-background text-center">
            <button className="border-[2px] border-primary w-[20px] h-[20px] rounded-[10px]"></button>
            <ul className="flex gap-[200px] font-spoqa text-[18px]">
              <li className="inline-block">상품정보</li>
              <li className="inline-block">수량</li>
              <li className="inline-block">상품금액</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default MyCart;
