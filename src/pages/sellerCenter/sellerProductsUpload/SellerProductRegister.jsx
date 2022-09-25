import SellerCenterHeader from "../SellerCenterHeader";
import UploadWarning from "./UploadWarning";
import styles from "../../../style";

function SellerProductRegister() {
  return (
    <>
      <SellerCenterHeader />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        <div className="flex md:w-[85%] w-[95%] justify-between">
          <h1 className="font-spoqaBold text-[36px]">상품 등록</h1>
        </div>
        <section
          className={`${styles.sectionLayout} flex gap-[60px] mt-[38px]`}
        >
          <UploadWarning />
          <form
            method="post"
            id="product-form"
            className="border-[1px] border-pink-500"
          >
            <div>
              <p className="font-spoqa text-subText text-[16px]">상품 이미지</p>

              <div className="w-[360px] h-[360px] bg-disabled">
                <label htmlFor="choose-img">
                  <div className="icon-icon-img w-[50px] h-[50px]"></div>
                </label>
              </div>

              <input
                type="file"
                name={name}
                id="choose-img"
                accept="image/*"
                className="hidden"
              ></input>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default SellerProductRegister;
