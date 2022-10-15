import axios from "axios";
import { useEffect, useState } from "react";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useInView } from "react-intersection-observer";
import ProductCarousel from "./ProductCarousel";
import ProductList from "./ProductList";
import NowLoading from "../../components/NowLoading";
import SmNowLoading from "../../components/SmNowLoading";
import styles from "../../style";

function Products() {
  const url = "https://openmarket.weniv.co.kr/";
  const [ref, inView] = useInView();
  const queryClient = useQueryClient();
  const [dataLength, setDataLength] = useState();

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
    setDataLength(Math.ceil(result.count / 15));
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
  }, [inView, hasNextPage]);

  useEffect(() => {
    for (let i = 1; i < dataLength + 1; i++) {
      queryClient.prefetchQuery(["allItems", `Arr${i}`], () => getAllItems(i), {
        staleTime: Infinity,
        cacheTime: 86000000,
      });
    }
  }, [dataLength]);

  async function getAllItems(i) {
    const res = await axios.get(url + "products/?page=" + i);
    return res.data.results;
  }
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
      {isFetchingNextPage && <SmNowLoading />}
    </>
  );
}

export default Products;
