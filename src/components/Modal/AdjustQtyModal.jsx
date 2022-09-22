import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import ModalPortal from "./ModalPortal";
import OrderQtyButton from "../buttons/OrderQtyButton";
import styles from "../../style";

function AdjustQtyModal({ open, stock, defaultQty, close }) {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  async function adjustQty() {
    try {
      const res = await axios.put(
        url + "cart/" + carId + "/",
        {
          product_id: productId,
          quantity: defaultQty,
          is_active: true,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch {}
  }
  return (
    <>
      {open ? (
        <>
          <ModalPortal close={close}>
            <div
              className={`${styles.smallModalBox} flex flex-col items-center gap-[15px]`}
            >
              <button
                onClick={close}
                className={`${styles.closeButton} self-end`}
              />
              <div className="text-center text-[16px] font-spoqa">
                <OrderQtyButton stock={stock} defaultQty={defaultQty} />
              </div>
              <div className="flex w-full justify-center gap-[10px]">
                <button
                  onClick={close}
                  className={`${styles.ModalWhiteButton}`}
                >
                  취소
                </button>
                <button
                  onClick={() => console.log(defaultQty)}
                  className={`${styles.ModalBasicButton}`}
                >
                  수정
                </button>
              </div>
            </div>
          </ModalPortal>
        </>
      ) : null}
    </>
  );
}

export default AdjustQtyModal;
