import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";

function MyPageMenu({ open, menuClose }) {
  const { token, setToken, setUserType } = useContext(UserContext);
  const url = "https://openmarket.weniv.co.kr/";
  //로그아웃 함수
  async function LogOut() {
    try {
      const res = await axios.post(url + "accounts/logout/");
      setToken(localStorage.setItem("token", ""));
      setUserType("");
      //window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
    menuClose();
  }

  return (
    <>
      <div
        className={`${
          !open ? "hidden" : ""
        } absolute box-border z-100 w-[115px] h-[98px] right-[-30px] top-[70px] p-0 bg-white rounded-[10px] shadow-[0_1px_4px_0_rgba(0,0,0,0.16)] after:content-[''] after:absolute after:top-3 after:left-[55%] after:border-solid after:border-[12px] after:border-transparent after:border-b-[#fff] after:border-t-0 after:ml-[-20px] after:mt-[-20px] after:z-0`}
      >
        <ul className="flex flex-col text-center text-[14px] mt-4 font-spoqa text-subText px-[10px]">
          <li className="leading-[30px] mb-[10px] hover:text-mainText hover:outline hover:outline-1 hover:rounded-sm hover:cursor-pointer align-middle">
            마이페이지
          </li>
          <li
            className="leading-[30px] hover:text-mainText hover:outline hover:outline-1 hover:rounded-sm hover:cursor-pointer align-middle"
            onClick={LogOut}
          >
            로그아웃
          </li>
        </ul>
      </div>
    </>
  );
}

export default MyPageMenu;
