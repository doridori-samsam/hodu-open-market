import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import UserContext from "../../context/UserContext";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";
import ProductOverview from "./ProductOverview";
import ProductMoreInfo from "./ProductMoreInfo";
import LogInModal from "../../components/Modal/LogInModal";
import AddCartModal from "../../components/Modal/AddCartModal";
import styles from "../../style";

function ProductDetail() {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const { productId } = useParams();
  const { data, status } = useQuery("product-detail", getProductDetail);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**상품 디테일 정보 불러오기 */
  async function getProductDetail() {
    const res = await axios.get(url + "products/" + productId + "/");
    return res.data;
  }

  if (status === "loading") {
    console.log("로딩 중...");
  }

  if (status === "error") {
    console.log("에러");
  }

  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        {data ? (
          <ProductOverview productdata={data} productId={productId} />
        ) : null}
        <ProductMoreInfo />
      </main>
    </>
  );
}

export default ProductDetail;
