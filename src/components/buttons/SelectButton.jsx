function SelectButton({
  value,
  defaultChecked,
  checked,
  clickCheck,
  onChange,
}) {
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
        className="relative appearance-none text-center align-middle border-[2px] border-primary sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] rounded-[10px] cursor-pointer checked:after:content-[''] checked:after:inline-block checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:translate-x-[-50%] checked:after:translate-y-[-50%] sm:checked:after:w-[12px] checked:after:w-[9px] sm:checked:after:h-[12px] checked:after:h-[9px] checked:after:rounded-[12px] checked:after:bg-primary"
      ></input>
    </>
  );
}

export default SelectButton;
