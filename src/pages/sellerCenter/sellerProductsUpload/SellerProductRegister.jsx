import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import UserContext from "../../../context/UserContext";
import SellerCenterHeader from "../SellerCenterHeader";
import UploadWarning from "./UploadWarning";
import EditorArea from "./EditorArea";
import WhiteButton from "../../../components/buttons/WhiteButton";
import SubButton from "../../../components/buttons/SubButton";
import CancelProductUploadModal from "../../../components/Modal/CancelProductUploadModal";
import styles from "../../../style";

function SellerProductRegister() {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const [productInfo, setProductInfo] = useState({
    product_name: "",
    image: "",
    price: "",
    shipping_method: "",
    shipping_fee: "",
    stock: "",
    product_info: "",
    token: token,
  });

  const [imgPreview, setImgPreview] = useState("");
  const [nameInputFocused, setNameInputFocused] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const imgRef = useRef();
  const uploadProduct = useMutation(postProductInfo);

  async function postProductInfo() {
    const res = await axios.post(url + "products/", productInfo, {
      header: {
        Authorization: `JWT ${token}`,
      },
    });
    console.log(res);
  }

  /**이미지 파일 업로드 함수 */
  function handleImgInput(e) {
    let loadImg = e.target.files;
    const formData = new FormData();
    formData.append("image", loadImg[0]);
    preview(loadImg);
    console.log(formData.get("image"), "폼데이터");
    setProductInfo({
      ...productInfo,
      image: formData,
    });
    getImgString(formData);
  }

  console.log(productInfo);
  /**이미지 파일 미리보기 */
  function preview(loadImg) {
    const reader = new FileReader();
    reader.readAsDataURL(loadImg[0]);
    reader.onload = () => {
      setImgPreview(reader.result);
    };
  }

  async function getImgString(formData) {
    try {
      const res = await axios.post(url + "products/", productInfo, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(productInfo);
  /**상품명 input handle 함수 */
  function handleProductNameInput(e) {
    if (e.target.value) {
      setProductInfo({ ...productInfo, product_name: e.target.value });
    } else {
      setProductInfo({ ...productInfo, product_name: "" });
    }
  }

  /**판매가 input handle 함수 */
  function handlePriceInput(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // 입력값이 숫자가 아니면 공백
    e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setProductInfo({
      ...productInfo,
      price: Number(e.target.value.replace(",", "")),
    });
  }

  /**배송방법 value 가져오기 함수 */
  function getShippingMethod(e) {
    if (e.target.checked) {
      setProductInfo({ ...productInfo, shipping_method: e.target.value });
    }
  }

  /**기본 배송비 input handle 함수 */
  function handleShippingFeeInput(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setProductInfo({
      ...productInfo,
      shipping_fee: Number(e.target.value.replace(",", "")),
    });
  }

  /**재고 input handle 함수 */
  function handleStockInput(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    setProductInfo({ ...productInfo, stock: Number(e.target.value) });
  }

  /**제품 상세 정보 handle 함수 */
  function handleProductInfoEdit(cont) {
    setProductInfo({ ...productInfo, products_info: cont });
  }

  /**저장 버튼 activate 함수 */
  function saveButtonActivate() {
    let infoList = Object.values(productInfo);
    let result;
    result = infoList.reduce((prev, cur) => {
      return prev && cur;
    });
    return result;
  }

  /**취소 버튼 클릭 함수 */
  function openCancelModal(e) {
    e.preventDefault();
    setIsCancelModalOpen(true);
  }

  /**이미지 파일 submit 함수 */
  function clickSaveButton(e) {
    e.preventDefault();
    uploadProduct.mutate;
  }

  console.log(uploadProduct);
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
                <div
                  style={
                    imgPreview
                      ? { backgroundImage: `url(${imgPreview})` }
                      : { backgroundColor: "#c4c4c4" }
                  }
                  className={`w-[430px] h-[430px] mt-[10px] flex justify-center items-center bg-cover bg-center`}
                >
                  <label htmlFor="upload-img">
                    <div className="icon-icon-img w-[50px] h-[50px] cursor-pointer"></div>
                  </label>
                  <input
                    type="file"
                    id="upload-img"
                    accept="image/*"
                    onChange={handleImgInput}
                    ref={imgRef}
                    className="hidden"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col justify-between w-full">
                <label
                  htmlFor="item-name"
                  className="font-spoqa text-subText text-[16px]"
                >
                  상품명
                </label>
                <div
                  className={`w-full flex justify-between items-center h-[50px] px-[12px] border-[1px] rounded-[5px] ${
                    styles.inputBox
                  } ${nameInputFocused && "border-primary"}`}
                >
                  <input
                    id="item-name"
                    type="text"
                    maxLength="20"
                    defaultValue={productInfo.product_name}
                    onChange={handleProductNameInput}
                    onFocus={() => setNameInputFocused(true)}
                    onBlur={() => setNameInputFocused(false)}
                    className="w-[93%] h-full outline-none"
                  ></input>
                  <span className="text-[14px] text-disabled">{`${productInfo.product_name.length}/20`}</span>
                </div>
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
                    defaultValue={productInfo.price}
                    onChange={handlePriceInput}
                    maxLength="10"
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
                      value="PARCEL"
                      type="radio"
                      onClick={getShippingMethod}
                      className="peer hidden"
                    ></input>
                    <label
                      htmlFor="parcel"
                      className="flex items-center justify-center w-[210px] h-[50px] rounded-[5px] border-[1px] border-disabled font-spoqaMedium text-subText text-[16px] cursor-pointer peer-checked:bg-primary peer-checked:border-none peer-checked:text-white"
                    >
                      택배, 소포, 등기
                    </label>
                  </div>
                  <div className="inline-block">
                    <input
                      id="delivery"
                      name="deliver-method"
                      value="DELIVERY"
                      type="radio"
                      onClick={getShippingMethod}
                      className="peer hidden"
                    ></input>
                    <label
                      htmlFor="delivery"
                      className="flex items-center justify-center w-[210px] h-[50px] rounded-[5px] border-[1px] border-disabled font-spoqaMedium text-subText text-[16px] cursor-pointer peer-checked:bg-primary peer-checked:border-none peer-checked:text-white"
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
                    maxLength="10"
                    defaultValue={productInfo.shipping_fee}
                    onChange={handleShippingFeeInput}
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
                    maxLength="5"
                    defaultValue={productInfo.stock}
                    onChange={handleStockInput}
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
            <EditorArea passContent={handleProductInfoEdit} />
            <div className="w-full mt-[50px] text-right">
              <WhiteButton
                style={"w-[200px] h-[50px] text-[18px] mr-[14px]"}
                onClick={openCancelModal}
              >
                취소
              </WhiteButton>
              <SubButton
                isActive={saveButtonActivate()}
                type="button"
                onClick={postProductInfo}
                style={`w-[200px] h-[50px] font-spoqaBold text-[18px] ${
                  saveButtonActivate() ? "bg-primary" : "bg-disabled"
                }`}
              >
                저장
              </SubButton>
            </div>
          </form>
        </section>
      </main>
      <CancelProductUploadModal
        open={isCancelModalOpen}
        close={() => setIsCancelModalOpen(false)}
        clickConfirm={() => window.location.reload()}
      />
    </>
  );
}

export default SellerProductRegister;
