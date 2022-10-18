import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import UserContext from "../../context/UserContext";
import SubButton from "../../components/buttons/SubButton";
import WhiteButton from "../../components/buttons/WhiteButton";
import DeleteCheckModal from "../../components/modal/DeleteCheckModal";

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
      onError: (error) => {
        console.error(error);
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
      <header className="flex items-center w-full sm:h-[60px] h-[35px] sm:px-[28px] px-[10px] ss:gap-0 border-b-[1px] border-disabled bg-white font-spoqa sm:text-[18px] text-[14px] text-center">
        <span className="sm:basis-[50%] basis-[54%] pl-[30px]">상품정보</span>
        <span className="sm:basis-[35%] basis-[22%]">판매가격</span>
        <div className="flex gap-[40px]">
          <span className="sm:inline-block hidden w-[80px]">수정</span>
          <span className="sm:inline-block hidden w-[80px]">삭제</span>
        </div>
      </header>
      <ul className="w-full bg-white font-spoqa">
        {products?.map((item, idx) => {
          return (
            <li
              key={item.product_id}
              className="w-full flex items-center h-[100px] sm:px-[28px] px-[10px] border-b-[1px] border-disabled"
            >
              <div className="flex items-center basis-[50%]">
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className={`inline-block sm:w-[70px] w-[48px] sm:h-[70px] h-[48px] rounded-[100px] shrink-0 bg-cover`}
                ></div>
                <div className="pl-[28px] w-full">
                  <p className="font-spoqa md:text-[18px] text-[14px]">
                    {item.product_name}
                  </p>
                  <p className="font-spoqa md:text-[15px] text-[12px] text-subText">
                    재고 : {item.stock}개
                  </p>
                </div>
              </div>
              <span className="basis-[34%] font-spoqa md:text-[18px] text-[13px] text-center">
                {item.price.toLocaleString()}원
              </span>
              <div className="basis-[19%] flex items-center sm:flex-row flex-col sm:gap-[40px] gap-[10px] ">
                <SubButton
                  isActive="true"
                  onClick={() =>
                    navigate(`upload/${item.product_id}`, {
                      state: {
                        modifyData: item,
                      },
                    })
                  }
                  style={
                    "sm:w-[80px] w-[60px] sm:h-[40px] h-[30px] sm:text-[16px] text-[14px]"
                  }
                >
                  수정
                </SubButton>
                <WhiteButton
                  style={
                    "sm:w-[80px] w-[60px] sm:h-[40px] h-[30px] font-spoqa sm:text-[16px] text-[14px]"
                  }
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
