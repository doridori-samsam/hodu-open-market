import { useQueryClient, useQuery } from "react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/navBar/NavBar";
import SearchResult from "./SearchResult";
import styles from "../../style";
import EmptyResult from "./EmptyResult";

function ProductSearch() {
  const url = "https://openmarket.weniv.co.kr/";
  const queryClient = useQueryClient();
  const [word, setWord] = useState(sessionStorage.getItem("search-word"));
  /**prefetch로 캐쉬된 모든 상품 데이터 */
  const givenData = queryClient.getQueriesData("allItems");
  const allProductList = givenData.map((item, idx) => item[1]).flat();

  /**검색 키워드에 따른 상품 리스트 filtering */
  const filterList = allProductList.filter(
    (item, idx) =>
      item.product_name.includes(word) ||
      item.product_info.includes(word) ||
      item.store_name.includes(word)
  );

  /**SearchBox 컴포넌트에서 입력한 keyword 가져오기 */
  function getKeyword(keyword) {
    setWord(keyword);
  }

  return (
    <>
      <NavBar
        defaultWord={sessionStorage.getItem("search-word")}
        giveKeyword={getKeyword}
      />
      <main className={`${styles.mainLayout}`}>
        {!!filterList.length ? (
          <SearchResult listdata={filterList} />
        ) : (
          <EmptyResult word={word} />
        )}
        {/* <SearchResult listdata={filterList} /> */}
      </main>
    </>
  );
}

export default ProductSearch;
