import { Link } from "react-router-dom";
import styles from "../../style";

function ProductList({ listdata }) {
  return (
    <section className={`${styles.flexCenter} md:w-[85%] w-[95%] bg-white`}>
      <ul className="w-full border-[1px] border-red-700 grid lg:grid-cols-[repeat(3,350px)] md:grid-cols-[repeat(3,300px)] sl:grid-cols-[repeat(3,220px)] sm:grid-cols-[repeat(2, 220px)] ss:grid-cols-[repeat(2,200px)] grid-cols-[repeat(2,150px)] gap-y-[50px] justify-between">
        {listdata.map((list, idx) => {
          return (
            <li key={list.product_id}>
              <Link to={`/products/${list.product_id}`}>
                <div
                  className={`lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] sl:w-[220px] sl:h-[220px] ss:w-[200px] ss:h-[200px] w-[150px] h-[150px] rounded-[10px] border-[1px]  bg-center bg-cover`}
                  style={{ backgroundImage: `url(${list.image})` }}
                ></div>
              </Link>
              <span className="inline-block md:text-[16px] sm:text-[14px] text-[11px] text-subText font-spoqa">
                {list.store_name}
              </span>
              <span
                className={`w-full md:text-[18px] sm:text-[16px] text-[13px] text-mainText font-spoqa ${styles.textEllipsis}`}
              >
                {list.product_name}
              </span>
              <span className="inline-block md:text-[24px] sm:text-[22px] text-[14px] text-mainText font-spoqaBold">
                {list.price.toLocaleString()}
              </span>
              <span className="inline sm:text-[16px] text-[13px] text-mainText font-spoqa">
                {" "}
                원
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProductList;
