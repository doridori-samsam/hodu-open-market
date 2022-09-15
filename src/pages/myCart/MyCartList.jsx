import styles from "../../style";
import SubButton from "../../components/buttons/SubButton";

function MyCartList() {
  return (
    <ul className="flex flex-col w-full gap-[10px]">
      <li className="flex justify-between items-center w-full h-[200px] border-[1px] border-disabled rounded-[10px]">
        <button className="border-[2px] border-primary w-[20px] h-[20px] mx-[30px] rounded-[10px] "></button>

        <div className="shrink-0 w-[160px] h-[160px] border-[1px] border-disabled rounded-[10px] bg-[url('https://i.pinimg.com/736x/36/54/c2/3654c26ba91eceb871a7a69e4854a8f7.jpg')] bg-cover"></div>
        <div className="basis-[27%] flex flex-col h-[160px] justify-between">
          <div>
            <span className="font-spoqa text-subText">백엔드글로벌</span>
            <p className="font-spoqa text-mainText text-[18px]">
              안티 바보 머그컵
            </p>
            <strong className="font-spoqa text-mainText text-[18px] ">
              17,500원
            </strong>
          </div>
          <span className="font-spoqa text-subText">택배배송/ 무료배송</span>
        </div>
        <div className="basis-[20%]">
          <div className="mx-auto flex w-[150px] h-[50px] border-[1px] border-disabled rounded-[5px]">
            <button className="basis-1/3 border-r-[1px] border-disabled icon-icon-minus-line bg-center"></button>
            <span className="basis-1/3 text-center my-auto font-spoqa text-[18px]">
              1
            </span>
            <button className="basis-1/3 border-l-[1px] border-disabled icon-icon-plus-line bg-center"></button>
          </div>
        </div>
        <div className="basis-[15%] flex flex-col items-center gap-[26px]">
          <p className="font-spoqaBold text-[18px] text-accentText">17,500원</p>
          <SubButton style="w-[130px] h-[40px] font-spoqaMedium text-[16px]">
            주문하기
          </SubButton>
        </div>
        <button className="w-[22px] h-[22px] self-start m-[18px] icon-icon-delete"></button>
      </li>
      <li className="h-[200px] border-[1px] border-disabled rounded-[10px]">
        내용2
      </li>
    </ul>
  );
}

export default MyCartList;
