import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";
import ProductOverview from "./ProductOverview";
import ProductDetailTabButton from "../../components/buttons/ProductDetailTabButton";
import styles from "../../style";

function ProductDetail() {
  const url = "https://openmarket.weniv.co.kr/";

  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        <ProductOverview />

        <ProductDetailTabButton />
      </main>
    </>
  );
}

export default ProductDetail;
