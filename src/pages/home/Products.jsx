import axios from "axios";
import { useQuery } from "react-query";
import ProductCarousel from "./ProductCarousel";
import ProductList from "./ProductList";
import styles from "../../style";

function Products() {
  const url = "https://openmarket.weniv.co.kr/";
  const { data, status } = useQuery("products", getProduct);

  async function getProduct() {
    const res = await axios.get(url + "products/");
    return res.data.results;
  }

  if (status === "loading") {
    return console.log("로딩중");
  }

  if (status === "error") {
    console.error(error);
  }

  return (
    <>
      <ProductCarousel />
      <main className={`${styles.mainLayout}`}>
        <ProductList listdata={data} />
      </main>
    </>
  );
}

export default Products;
