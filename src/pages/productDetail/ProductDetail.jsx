import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";
import ProductOverview from "./ProductOverview";
import ProductMoreInfo from "./ProductMoreInfo";
import NowLoading from "../../components/NowLoading";
import NotFound from "../../components/NotFound";
import styles from "../../style";

function ProductDetail() {
  const url = "https://openmarket.weniv.co.kr/";
  const { productId } = useParams();
  const location = useLocation();
  const productDetail = location.state.product;

  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        {productDetail ? (
          <>
            <ProductOverview
              productdata={productDetail}
              productId={productId}
            />
            <ProductMoreInfo detailInfo={productDetail.product_info} />
          </>
        ) : null}
      </main>
    </>
  );
}

export default ProductDetail;
