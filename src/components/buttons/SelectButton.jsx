import { useRef } from "react";

function SelectButton({ style, checked, value, clickCheck }) {
  const button = useRef();

  return (
    <>
      <input
        id="check"
        type="checkbox"
        value={value}
        defaultChecked={checked}
        onClick={clickCheck}
        className={`${style} text-center align-middle appearance-none border-[2px] border-primary w-[20px] h-[20px] rounded-[10px] cursor-pointer checked:after:content-[''] checked:after:inline-block checked:after:mb-[4px] checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-[12px] checked:after:bg-primary`}
        ref={button}
      ></input>
    </>
  );
}

export default SelectButton;
