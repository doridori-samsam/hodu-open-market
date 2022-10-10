import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";
import ProductOverview from "./ProductOverview";
import ProductMoreInfo from "./ProductMoreInfo";
import NowLoading from "../../components/NowLoading";
import styles from "../../style";

function ProductDetail() {
  const url = "https://openmarket.weniv.co.kr/";
  const { productId } = useParams();
  const { data, status } = useQuery("product-detail", getProductDetail);

  console.log(data);
  /**상품 디테일 정보 불러오기 */
  async function getProductDetail() {
    const res = await axios.get(url + "products/" + productId + "/");
    return res.data;
  }

  if (status === "loading") {
    return <NowLoading />;
  }

  if (status === "error") {
    console.log("에러");
  }

  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        {data ? (
          <>
            <ProductOverview productdata={data} productId={productId} />
            <ProductMoreInfo detailInfo={data.product_info} />
          </>
        ) : null}
      </main>
    </>
  );
}

export default ProductDetail;
