import { useState, useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import UserContext from "../../context/UserContext";
import axios from "axios";
import ModalPortal from "./ModalPortal";
import OrderQtyButton from "../buttons/OrderQtyButton";
import styles from "../../style";

function AdjustQtyModal({ productId, cartId, open, stock, defaultQty, close }) {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const queryClient = useQueryClient();
  const [quantityNum, setQuantityNum] = useState(defaultQty);

  const adjustQuantity = useMutation(sendAdjustQty, {
    onSuccess: (res) => {
      queryClient.invalidateQueries("cart-list");
    },
    onError: (error) => {
      console.error(error);
    },
  });
  async function sendAdjustQty() {
    const res = await axios.put(
      url + "cart/" + cartId + "/",
      {
        product_id: productId,
        quantity: quantityNum,
        is_active: true,
      },
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );
    close();
    return res;
  }

  function getQuantity(num) {
    setQuantityNum(num);
  }

  return (
    <>
      {open ? (
        <>
          <ModalPortal close={close}>
            <div className={`${styles.smallModalBox}`}>
              <button
                onClick={close}
                className={`${styles.closeButton} self-end`}
              />
              <div className="text-center text-[16px] font-spoqa">
                <OrderQtyButton
                  stock={stock}
                  defaultQty={defaultQty}
                  passQuantity={getQuantity}
                />
              </div>
              <div className="flex w-full justify-center gap-[10px]">
                <button
                  onClick={close}
                  className={`${styles.ModalWhiteButton}`}
                >
                  취소
                </button>
                <button
                  onClick={adjustQuantity.mutate}
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
