import axios from "axios";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import ProductCarousel from "./ProductCarousel";
import ProductList from "./ProductList";
import NowLoading from "../../components/NowLoading";
import styles from "../../style";

function Products() {
  const url = "https://openmarket.weniv.co.kr/";
  const [ref, inView] = useInView();
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("products", ({ pageParam = 1 }) => getProduct(pageParam), {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage.isLast) {
          return lastPage.nextPage;
        } else {
          return undefined;
        }
      },
    });

  async function getProduct(pageParam) {
    const res = await axios.get(url + "products/?page=" + pageParam);
    const result = res.data;

    return {
      result: result.results,
      nextPage: pageParam + 1,
      isLast: !res.data.next,
    };
  }

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView && hasNextPage]);

  if (status === "loading") {
    return <NowLoading />;
  }

  return (
    <>
      <ProductCarousel />
      <main className={`${styles.mainLayout}`}>
        {data && (
          <ProductList
            lastItemRef={ref}
            listdata={data.pages.map((item, idx) => item.result).flat()}
          />
        )}
      </main>
    </>
  );
}

export default Products;
