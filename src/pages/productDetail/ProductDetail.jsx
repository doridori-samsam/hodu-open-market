import { useParams, useLocation } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import ProductOverview from "./ProductOverview";
import ProductMoreInfo from "./ProductMoreInfo";
import styles from "../../style";

function ProductDetail() {
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
