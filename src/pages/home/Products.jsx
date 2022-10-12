import axios from "axios";
import { useQuery } from "react-query";
import ProductCarousel from "./ProductCarousel";
import ProductList from "./ProductList";
import NowLoading from "../../components/NowLoading";
import styles from "../../style";

function Products() {
  const url = "https://openmarket.weniv.co.kr/";
  const { data, status } = useQuery("products", getProduct);
  const { data: secondPage, status: secondStatus } = useQuery(
    "secondProducts",
    () => axios.get("https://openmarket.weniv.co.kr/products/?limit=10&page=2"),
    {
      onSuccess: (res) => console.log(res, "둘째"),
    }
  );
  async function getProduct() {
    const res = await axios.get(url + "products/?limit=10");
    console.log(res, "첫째");
    return res.data.results;
  }

  if (status === "loading") {
    return <NowLoading />;
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
