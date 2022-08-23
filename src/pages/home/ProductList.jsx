import React from "react";
import styles from "../../style";

function ProductList({ mapdata }) {
  return (
    <section
      className={`${styles.flexCenter} w-full px-[60px] py-[60px] bg-white`}
    >
      <ul className="grid grid-cols-[repeat(3,1fr)] gap-x-[70px] gap-y-[78px]">
        {mapdata.map((list, idx) => {
          let image = list.image;
          return (
            <li key={list.product_id}>
              <div
                className={`w-[380px] h-[380px] rounded-[10px] border-[1px]  bg-center bg-cover`}
                style={{ backgroundImage: `url(${list.image})` }}
              ></div>

              <span className="text-[16px] text-subText font-spoqa">
                {list.product_name}
              </span>
              <br />
              <span className="text-[18px] text-mainText font-spoqa">
                {list.product_info}
              </span>
              <br />
              <span className="text-[24px] text-mainText font-spoqaBold">
                {list.price}
              </span>
              <span>원</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProductList;
