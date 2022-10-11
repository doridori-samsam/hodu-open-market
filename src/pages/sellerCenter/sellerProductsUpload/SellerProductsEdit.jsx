import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const modifyProduct = location.state.modifyData;
  const [productInfo, setProductInfo] = useState({
    product_name: modifyProduct.product_name,
    image: modifyProduct.image,
    price: modifyProduct.price,
    shipping_method: modifyProduct.shipping_method,
    shipping_fee: modifyProduct.shipping_fee,
    stock: modifyProduct.stock,
    product_info: modifyProduct.product_info,
    token: token,
  });

  const myImageUrl = modifyProduct.image;
  console.log(myImageUrl);
  const getBlobFromUrl = (myImageUrl) => {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open("GET", myImageUrl, true);
      request.responseType = "blob";
      request.onload = () => {
        resolve(request.response);
      };
      request.onerror = reject;
      request.send();
    });
  };
  const getDataFromBlob = (myBlob) => {
    console.log(myBlob);
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(myBlob);
    });
  };

  const convertUrlToImageData = async (myImageUrl) => {
    try {
      let myBlob = await getBlobFromUrl(myImageUrl);
      console.log(myBlob);
      let myImageData = await getDataFromBlob(myBlob);
      console.log(myImageData, "데이터");
      const formData = new FormData();
      formData.append("image", myImageData);
      console.log(formData.get("image"));
      return myImageData;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  console.log(convertUrlToImageData());
  console.log(modifyProduct.image);
  const [imgPreview, setImgPreview] = useState(modifyProduct.image);
  const [nameInputFocused, setNameInputFocused] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const EditProduct = useMutation(postProductInfo);

  async function postProductInfo() {
    const res = await axios.put(
      url + "products/" + modifyProduct.product_id + "/",
      productInfo,
      {
        headers: {
          Authorization: `JWT ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  }

  /**이미지 파일 업로드 함수 */
  function handleImgInput(e) {
    const formData = new FormData();
    let loadImg = e.target.files;
    formData.append("image", loadImg[0]);
    preview(loadImg);
    setProductInfo({
      ...productInfo,
      image: formData.get("image"),
    });
  }

  /**이미지 파일 미리보기 */
  function preview(loadImg) {
    const reader = new FileReader();
    reader.readAsDataURL(loadImg[0]);
    reader.onload = () => {
      setImgPreview(reader.result);
    };
  }

  /**상품 정보 set input handle 함수 */
  function setInputValues(e) {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
    if (name === "product_name") {
      setNameInputFocused(false);
    }
  }

  /**가격 표시 input handle 함수 */
  function handlePriceInput(e) {
    const { name, value } = e.target;
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // 입력값이 숫자가 아니면 공백
    e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setProductInfo({
      ...productInfo,
      [name]: parseInt(value.replace(",", "")),
    });
  }

  /**재고 input 입력양식 handle 함수 */
  function handleStockInput(e) {
    const { name, value } = e.target;
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    setProductInfo({ ...productInfo, [name]: parseInt(value, 10) });
  }

  /**저장 버튼 activate 함수 */
  function saveButtonActivate() {
    let infoList = Object.values(productInfo);
    let result;
    result = infoList.reduce((prev, cur) => {
      if (cur === 0) {
        return (cur = true);
      }
      return prev && cur;
    });
    return result;
  }

  /**취소 버튼 클릭 함수 */
  function openCancelModal(e) {
    e.preventDefault();
    setIsCancelModalOpen(true);
  }

  /**상품 정보 submit 함수 */
  function clickSaveButton(e) {
    e.preventDefault();
    EditProduct.mutate(postProductInfo, {
      onSuccess: () => {
        navigate("/seller_center");
      },
    });
  }

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
          <form
            method="post"
            id="product-form"
            className="w-full"
            onSubmit={clickSaveButton}
          >
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
                    required
                    maxLength="20"
                    id="item-name"
                    name="product_name"
                    defaultValue={productInfo.product_name}
                    onFocus={() => setNameInputFocused(true)}
                    onChange={setInputValues}
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
                    type="text"
                    id="item-price"
                    name="price"
                    defaultValue={productInfo.price.toLocaleString()}
                    onChange={handlePriceInput}
                    required
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
                      type="radio"
                      id="parcel"
                      name="shipping_method"
                      value="PARCEL"
                      defaultChecked={productInfo.shipping_method === "PARCEL"}
                      onClick={setInputValues}
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
                      type="radio"
                      id="delivery"
                      name="shipping_method"
                      value="DELIVERY"
                      defaultChecked={
                        productInfo.shipping_method === "DELIVERY"
                      }
                      onClick={setInputValues}
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
                    type="text"
                    required
                    maxLength="10"
                    id="shipping-fee"
                    name="shipping_fee"
                    defaultValue={productInfo.shipping_fee.toLocaleString()}
                    onChange={handlePriceInput}
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
                    type="text"
                    required
                    maxLength="5"
                    id="stock"
                    name="stock"
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
            <EditorArea
              handleEditorArea={setInputValues}
              defaultValue={productInfo.product_info}
            />
            <div className="w-full mt-[50px] text-right">
              <WhiteButton
                style={"w-[200px] h-[50px] text-[18px] mr-[14px]"}
                onClick={openCancelModal}
              >
                취소
              </WhiteButton>
              <SubButton
                isActive={saveButtonActivate()}
                type="submit"
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
