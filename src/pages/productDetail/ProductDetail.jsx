import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";
import ProductOverview from "./ProductOverview";
import ProductMoreInfo from "./ProductMoreInfo";
import styles from "../../style";

function ProductDetail() {
  const url = "https://openmarket.weniv.co.kr/";
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProductDetail() {
      try {
        const res = await axios.get(url + "products/" + productId + "/");
        console.log(res.data);
        setProduct([res.data]);
      } catch (err) {
        console.error(err);
      }
    }
    getProductDetail();
  }, []);

  console.log(product);
  return (
    <>
      <NavBar />
      <main className={`${styles.mainLayout} flex-col items-center`}>
        <ProductOverview productdata={product} />
        <ProductMoreInfo />
      </main>
    </>
  );
}

export default ProductDetail;
