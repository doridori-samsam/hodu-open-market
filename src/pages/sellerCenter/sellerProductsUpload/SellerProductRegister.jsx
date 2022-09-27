import SellerCenterHeader from "../SellerCenterHeader";
import UploadWarning from "./UploadWarning";
import EditorArea from "./EditorArea";
import WhiteButton from "../../../components/buttons/WhiteButton";
import SubButton from "../../../components/buttons/SubButton";
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
          className={`${styles.sectionLayout} flex gap-[50px] mt-[38px]`}
        >
          <UploadWarning />
          <form method="post" id="product-form" className="w-full">
            <div className="flex gap-[30px] w-full">
              <div>
                <p className="font-spoqa text-subText text-[16px] ">
                  상품 이미지
                </p>
                <div className="w-[430px] h-[430px] mt-[10px] flex justify-center items-center bg-disabled">
                  <label htmlFor="choose-img">
                    <div className="icon-icon-img w-[50px] h-[50px] cursor-pointer"></div>
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
              <div className="flex flex-col justify-between w-full">
                <label
                  htmlFor="item-name"
                  className="font-spoqa text-subText text-[16px]"
                >
                  상품명
                </label>
                <input
                  id="item-name"
                  type="text"
                  placeholder="13/20"
                  className={`w-full h-[50px] px-[12px] border-[1px] rounded-[5px] ${styles.inputBox} placeholder:text-[14px] placeholder:text-right placeholder:text-disabled`}
                ></input>

                <label
                  htmlFor="item-price"
                  className="block font-spoqa text-subText text-[16px]"
                >
                  판매가
                </label>
                <div>
                  <input
                    id="item-price"
                    type="text"
                    className={`w-[160px] h-[50px] px-[12px] border-y-[1px] border-l-[1px] rounded-l-[5px] ${styles.inputBox}`}
                  ></input>
                  <div
                    className={`inline-flex ${styles.flexCenter} w-[50px] h-[50px] rounded-r-[5px] align-top bg-disabled font-spoqa text-[16px] text-white`}
                  >
                    원
                  </div>
                </div>
                <p className="inline font-spoqa text-subText text-[16px]">
                  배송방법
                </p>
                <div>
                  <div className="inline-block mr-[10px]">
                    <input
                      id="parcel"
                      name="deliver-method"
                      type="radio"
                      className="peer hidden"
                    ></input>
                    <label
                      htmlFor="parcel"
                      className="flex items-center justify-center w-[200px] h-[50px] rounded-[5px] border-[1px] border-disabled font-spoqaMedium text-subText text-[16px] cursor-pointer peer-checked:bg-primary peer-checked:border-none peer-checked:text-white"
                    >
                      택배, 소포, 등기
                    </label>
                  </div>
                  <div className="inline-block">
                    <input
                      id="delivery"
                      name="deliver-method"
                      type="radio"
                      className="peer hidden"
                    ></input>
                    <label
                      htmlFor="delivery"
                      className="flex items-center justify-center w-[200px] h-[50px] rounded-[5px] border-[1px] border-disabled font-spoqaMedium text-subText text-[16px] cursor-pointer peer-checked:bg-primary peer-checked:border-none peer-checked:text-white"
                    >
                      직접배송(화물배달)
                    </label>
                  </div>
                </div>
                <label
                  htmlFor="shipping-fee"
                  className="block font-spoqa text-subText text-[16px]"
                >
                  기본 배송비
                </label>
                <div>
                  <input
                    id="shipping-fee"
                    type="text"
                    className={`w-[160px] h-[50px] px-[12px] border-y-[1px] border-l-[1px] rounded-l-[5px] ${styles.inputBox}`}
                  ></input>
                  <div
                    className={`inline-flex ${styles.flexCenter} w-[50px] h-[50px] rounded-r-[5px] align-top bg-disabled font-spoqa text-[16px] text-white`}
                  >
                    원
                  </div>
                </div>
                <label
                  htmlFor="stock"
                  className="block font-spoqa text-subText text-[16px]"
                >
                  재고
                </label>
                <div>
                  <input
                    id="stock"
                    type="text"
                    className={`w-[160px] h-[50px] px-[12px] border-y-[1px] border-l-[1px] rounded-l-[5px] ${styles.inputBox}`}
                  ></input>
                  <div
                    className={`inline-flex ${styles.flexCenter} w-[50px] h-[50px] rounded-r-[5px] align-top bg-disabled font-spoqa text-[16px] text-white`}
                  >
                    개
                  </div>
                </div>
              </div>
            </div>
            <EditorArea />
            <div className="w-full mt-[50px] text-right">
              <WhiteButton style={"w-[200px] h-[50px] text-[18px] mr-[14px]"}>
                취소
              </WhiteButton>
              <SubButton
                style={"w-[200px] h-[50px] font-spoqaBold text-[18px]"}
              >
                저장
              </SubButton>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default SellerProductRegister;
