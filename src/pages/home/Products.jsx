import { useState, useEffect } from "react";
import axios from "axios";
import ProductCarousel from "./ProductCarousel";
import ProductList from "./ProductList";
import styles from "../../style";

function Products() {
  const url = "https://openmarket.weniv.co.kr/";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await axios.get(url + "products/");
        setProduct(res.data.results);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getProduct();
  }, []);

  return (
    <>
      <ProductCarousel />
      <main className={`${styles.mainLayout}`}>
        <ProductList mapdata={product} />
      </main>
    </>
  );
}

export default Products;
