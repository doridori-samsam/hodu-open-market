import { useContext } from "react";
import { useMutation } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import axios from "axios";

function MobileNav({ isShow, closeNavBar }) {
  const url = "https://openmarket.weniv.co.kr/";
  const { token, userType, changeToken, changeUserType } =
    useContext(UserContext);
  const navigate = useNavigate();
  const logOut = useMutation(clickLogOut, {
    onSuccess: () => window.location.replace("/"),
    onError: (error) => console.log(error),
  });

  /**로그아웃 함수 */
  async function clickLogOut() {
    const res = await axios.post(url + "accounts/logout/");
    changeToken("");
    changeUserType("");
    return res;
  }

  return (
    <nav
      className={`w-full flex flex-col items-center  fixed sm:top-[70px] top-[50px] bg-white rounded-b-lg shadow-md transition-[height] ease-out duration-300 ${
        isShow ? "h-[10rem] pt-[20px] sl:hidden" : "h-0"
      }`}
    >
      <ul
        className={`md:w-[85%] w-[95%] flex flex-col items-center justify-center gap-[12px] ${
          isShow ? null : "hidden"
        }`}
      >
        {token ? (
          <>
            {userType === "BUYER" ? (
              <Link to="/cart">
                <li className="h-[30px] font-spoqa text-[14px] leading-[30px] hover:border-b-[2px] border-primary hover:text-primary  hover:cursor-pointer ">
                  장바구니
                </li>
              </Link>
            ) : (
              <Link to="/seller_center">
                <li className="h-[30px] font-spoqa text-[14px] leading-[30px] hover:border-b-[2px] border-primary hover:text-primary  hover:cursor-pointer ">
                  판매자 센터
                </li>
              </Link>
            )}

            <li
              onClick={logOut.mutate}
              className="h-[30px] font-spoqa text-[14px] leading-[30px] hover:text-primary hover:border-b-[2px] border-primary hover:cursor-pointer align-middle"
            >
              로그아웃
            </li>
          </>
        ) : (
          <Link to="/login">
            <li className="h-[30px] font-spoqa text-[14px] leading-[30px] hover:border-b-[2px] border-primary hover:text-primary  hover:cursor-pointer ">
              로그인
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default MobileNav;
