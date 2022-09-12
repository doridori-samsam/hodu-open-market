function NavMyCart({ onClick }) {
  return (
    <button onClick={onClick} className="w-[56px] h-[50px]">
      <div
        className={`inline-block w-[35px] h-[32px] icon-icon-shopping-cart mx-auto`}
      />
      <span className="block ml-[2px] text-[12px] leading-[12px] font-spoqa text-subText">
        장바구니
      </span>
    </button>
  );
}

export default NavMyCart;
