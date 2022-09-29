import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import UserContext from "../../context/UserContext";
import SubButton from "../../components/buttons/SubButton";
import WhiteButton from "../../components/buttons/WhiteButton";
import DeleteCheckModal from "../../components/Modal/DeleteCheckModal";

function SellerProductsList({ products }) {
  const url = "https://openmarket.weniv.co.kr/";
  const { token } = useContext(UserContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const removeProduct = useMutation(
    (id) =>
      axios.delete(url + "products/" + id + "/", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }),
    {
      onSuccess: () => {
        setIsDelModalOpen(false);
        queryClient.invalidateQueries("seller-products");
      },
      onError: () => {
        console.log("삭제 실패");
      },
    }
  );

  /**삭제 버튼 클릭 함수 */
  function openDelModal(id) {
    setIsDelModalOpen(true);
    setProductId(id);
  }

  /**판매 상품 삭제 mutate function */
  function clickDeleteProduct() {
    removeProduct.mutate(productId);
  }

  return (
    <>
      <header className="flex items-center w-full h-[60px] px-[28px] border-b-[1px] border-disabled bg-white font-spoqa text-[18px] text-center">
        <span className="basis-[50%]">상품정보</span>
        <span className="basis-[35%]">판매가격</span>
        <div className="flex gap-[40px]">
          <span className="w-[80px]">수정</span>
          <span className="w-[80px]">삭제</span>
        </div>
      </header>
      <ul className="w-full bg-white font-spoqa">
        {products?.map((item, idx) => {
          return (
            <li
              key={item.product_id}
              className="flex items-center h-[100px] px-[28px] border-b-[1px] border-disabled"
            >
              <div className="flex items-center basis-[50%]">
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className={`inline-block w-[70px] h-[70px] rounded-[100px] shrink-0 bg-cover`}
                ></div>
                <div className="pl-[28px] w-full">
                  <p className="font-spoqa text-[18px]">{item.product_name}</p>
                  <p className="font-spoqa text-[15px] text-subText">
                    재고 : {item.stock}개
                  </p>
                </div>
              </div>
              <span className="basis-[34%] font-spoqa text-[18px] text-center">
                {item.price.toLocaleString()}원
              </span>
              <div className="basis-[19%] flex gap-[40px] ">
                <SubButton
                  onClick={() => navigate(`upload/${item.product_id}`)}
                  style={"w-[80px] h-[40px]"}
                >
                  수정
                </SubButton>
                <WhiteButton
                  style={"w-[80px] h-[40px] font-spoqa"}
                  onClick={() => openDelModal(item.product_id)}
                >
                  삭제
                </WhiteButton>
              </div>
            </li>
          );
        })}
      </ul>
      <DeleteCheckModal
        open={isDelModalOpen}
        close={() => setIsDelModalOpen(false)}
        clickConfirm={clickDeleteProduct}
      />
    </>
  );
}

export default SellerProductsList;
