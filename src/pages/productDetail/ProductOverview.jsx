import styles from "../../style";
import OrderQtyButton from "../../components/buttons/OrderQtyButton";

function ProductOverview() {
  return (
    <section
      className={`${styles.flexCenter} sm:flex-row flex-col md:w-[85%] w-[95%] md:gap-[60px] sm:gap-[40px] xs:gap-[30px] border-[1px] border-purple-600`}
    >
      <img
        src="https://i.pinimg.com/originals/02/2a/30/022a30bce7a71560acf18d5ec7357c90.jpg"
        className="sm:basis-1/2 basis-1/3 md:w-[530px] sl:w-[380px] sm:w-[320px] md:h-[530px] sl:h-[380px] sm:h-[320px] w-[320px] h-[320px] object-cover"
        alt="상품 이미지"
      />

      <div className="sm:basis-1/2 basis-2/3 w-full md:h-[530px] sl:h-[380px] sm:h-[320px] h-[230px] flex flex-col justify-between">
        <div className="flex flex-col md:gap-[16px] gap-[2px]">
          <p className="font-spoqa text-subText md:text-[18px] sm:text-[14px] text-[16px]">
            잠실 프론트엔더
          </p>
          <p className="font-spoqa text-mainText md:text-[36px] sm:text-[24px] text-[28px] md:leading-[45px]">
            스쿠비두비두 선물가방
          </p>
          <p className="font-spoqaBold text-mainText md:text-[36px] sm:text-[24px] text-[28px] md:leading-[45px]">
            12,300
            <span className="font-spoqa text-mainText md:text-[18px] sm:text-[14px] text-[16px] ml-[2px] align-middle ">
              원
            </span>
          </p>
        </div>
        <div>
          <p className="md:mb-[20px] sm:mb-[5px] mb-[10px] font-spoqa text-subText md:text-[16px] sm:text-[12px] text-[14px]">
            택배배송 / 무료배송
          </p>
          <div className="flex items-center md:h-[100px] sl:h-[80px] sm:h-[45px] sl:border-y-[2px] sl:border-disabled">
            <OrderQtyButton />
          </div>
          <div className="md:my-[20px] sm:my-[10px] my-[30px] flex items-center justify-between">
            <span className="font-spoqaMedium md:text-[18px] sm:text-[14px] text-[16px]">
              총 상품금액
            </span>
            <div className="flex items-center">
              <span className="font-spoqa text-subText md:text-[18px] sm:text-[14px] text-[16px] after:content-[''] after:inline-block md:after:h-[17px] after:h-[15px] after:border-disabled after:border-r-[2px] after:align-middle after:mb-[4px] after:ml-[12px] after:mr-[12px]">
                총 수량
                <span className="font-spoqaBold text-primary">1</span>개
              </span>
              <span className="font-spoqaBold text-primary md:text-[36px] sm:text-[22px] text-[28px] md:leading-[45px]">
                17,500
                <span className="ml-[2px] font-spoqa text-primary md:text-[18px] sm:text-[14px] text-[16px]">
                  원
                </span>
              </span>
            </div>
          </div>
          <div className="flex gap-[14px]">
            <button className="md:basis-3/4 basis-1/2 md:h-[60px] sl:h-[50px] sm:h-[40px] h-[50px] rounded-[5px] bg-primary font-spoqaBold sl:text-[18px] sm:text-[14px] text-[16px] text-white">
              바로 구매
            </button>
            <button className="md:basis-1/4 basis-1/2 md:h-[60px] sl:h-[50px] sm:h-[40px] h-[50px] rounded-[5px] bg-subText font-spoqaBold sl:text-[18px] sm:text-[14px] text-[16px] text-white">
              장바구니
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductOverview;
