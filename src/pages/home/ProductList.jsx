import React from "react";
import styles from "../../style";

function ProductList({ mapdata }) {
  return (
    <section className={`${styles.flexCenter}  bg-white`}>
      <ul className="w-fit grid md:grid-cols-[repeat(3,1fr)] ss:grid-cols-[repeat(2,1fr)] grid-rows-[auto] sm:py-[52px] py-[30px] gap-x-[70px] gap-y-[78px]">
        {mapdata.map((list, idx) => {
          return (
            <li key={list.product_id}>
              <div
                className={`md:w-[380px] md:h-[380px] w-[250px] h-[250px] rounded-[10px] border-[1px]  bg-center bg-cover`}
                style={{ backgroundImage: `url(${list.image})` }}
              ></div>

              <span className="inline-block mb-[10px] text-[16px] text-subText font-spoqa">
                {list.product_name}
              </span>
              <br />
              <span className="inline-block mb-[10px] text-[18px] text-mainText font-spoqa">
                {list.product_info}
              </span>
              <br />
              <span className="text-[24px] text-mainText font-spoqaBold">
                {list.price.toLocaleString()}
              </span>
              <span className="text-mainText font-spoqa"> 원</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProductList;
