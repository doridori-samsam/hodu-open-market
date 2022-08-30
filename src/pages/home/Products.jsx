import { useState, useEffect } from "react";
import axios from "axios";
import ProductCarousel from "./ProductCarousel";
import ProductList from "./ProductList";

function Products() {
  const url = "https://openmarket.weniv.co.kr/";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await axios.get(url + "products/");
        setProduct(res.data.results);
      } catch (err) {
        console.error(err);
      }
    }
    getProduct();
  }, []);

  return (
    <main className="mt-[40px] sm:mt-[60px] bg-background">
      <ProductCarousel />
      <ProductList mapdata={product} />
    </main>
  );
}

export default Products;
