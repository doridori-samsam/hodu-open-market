import { useRef, forwardRef } from "react";

function SelectButton(
  { style, value, defaultChecked, checked, clickCheck, onChange },
  ref
) {
  return (
    <>
      <input
        id="check"
        type="checkbox"
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        onClick={clickCheck}
        onChange={onChange}
        ref={ref}
        className={`${style} appearance-none text-center align-middle border-[2px] border-primary w-[20px] h-[20px] rounded-[10px] cursor-pointer checked:after:content-[''] checked:after:inline-block checked:after:mb-[4px] checked:after:w-[12px] checked:after:h-[12px] checked:after:rounded-[12px] checked:after:bg-primary`}
      ></input>
    </>
  );
}

export default forwardRef(SelectButton);
