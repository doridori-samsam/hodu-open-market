import { useLocation } from "react-router-dom";

function NavMyCart({ onClick }) {
  const location = useLocation();

  return (
    <button onClick={onClick} className="w-[56px] h-[50px]">
      <div
        className={`inline-block w-[35px] h-[32px] ${
          location.pathname === "/cart"
            ? "icon-icon-shopping-cart-2"
            : "icon-icon-shopping-cart"
        } mx-auto`}
      />
      <span
        className={`block ml-[2px] text-[12px] leading-[12px] font-spoqa ${
          location.pathname === "/cart" ? "text-primary" : "text-subText"
        }`}
      >
        장바구니
      </span>
    </button>
  );
}

export default NavMyCart;
