function SellerProductsList({ products }) {
  return (
    <>
      <header className="flex items-center w-full h-[60px] border-b-[1px] border-disabled bg-white font-spoqa text-[18px] text-center">
        <span className="basis-[50%]">상품정보</span>
        <span className="basis-[28%]">판매가격</span>
        <span className="basis-[15%]">수정</span>
        <span className="basis-[7%]">삭제</span>
      </header>
      <ul className="w-full bg-white font-spoqa">
        {products?.map((item, idx) => {
          return (
            <li key={item.product_id}>
              <div className={`inline-block w-[70px] h-[70px]`}></div>
              <span>{item.product_name}</span>
              <span></span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SellerProductsList;
