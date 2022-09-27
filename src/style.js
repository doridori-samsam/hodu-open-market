const styles = {
  flexCenter: "flex justify-center items-center",
  mainLayout:
    "flex justify-center h-full w-full mt-[40px] sm:mt-[70px] pt-[40px] pb-[60px] bg-white",
  sectionLayout: "md:w-[85%] w-[95%] bg-white",
  basicButton:
    "w-[220px] h-[68px] rounded-[5px] font-spoqaBold text-[24px] text-white",
  mediumButton:
    "ss:h-[60px] rounded-[5px] font-spoqaMedium ss:text-[16px] text-white",
  largeButton:
    "sm:w-[480px] ss:w-[370px] sm:h-[60px] ss:h-[52px] w-[270px] h-[45px] rounded-[5px] font-spoqaBold text-[18px] text-white",
  whiteButton:
    "border-[1px] border-disabled bg-white rounded-[5px] text-subText font-spoqaBold hover:border-mainText hover:text-mainText",
  subButton: "rounded-[5px] text-white bg-primary",
  closeButton: "w-[22px] h-[22px] icon-icon-delete",
  ModalWhiteButton:
    "w-[100px] h-[40px] border-[1px] border-disabled rounded-[5px] font-spoqa text-subText text-[16px]",
  ModalBasicButton:
    "w-[100px] h-[40px] rounded-[5px] bg-primary font-spoqa text-white text-[16px]",
  modalBox:
    "fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[400px] h-[280px] p-[30px] bg-white border-[1px] border-disabled rounded-[10px] z-[100]",
  smallModalBox:
    "fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[360px] h-[200px] p-[20px] bg-white border-[1px] border-disabled z-[100] ",
  modalOverlay: "fixed top-0 bottom-0 right-0 left-0 bg-[#000000]/50",
  inputBox: "border-disabled outline-none font-spoqa focus:border-primary",
  signUpInput:
    "w-full h-[40px] ss:h-[54px] mt-[10px] pl-[16px] border-[1px] rounded-[5px] border-disabled outline-none font-spoqa focus:border-primary",
  footerList:
    "inline mr-[14px] sm:text-[14px] text-[12px] font-spoqa after:content-[''] after:inline-block after:h-[13px] after:border-mainText after:border-r-[1.6px] after:align-middle after:mb-[3px] after:ml-[14px]",
  footerIcon:
    "inline-block sm:w-[32px] sm:h-[32px] w-[24px] h-[24px] mr-[14px] align-middle bg-center bg-contain",
  grayText: "font-spoqa text-[16px] text-subText",
  textEllipsis: "inline-block overflow-hidden whitespace-nowrap text-ellipsis",
};

export default styles;
