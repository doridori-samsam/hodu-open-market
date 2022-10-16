import ModalPortal from "./ModalPortal";
import DaumPostCode from "react-daum-postcode";

function PostCodeModal({ open, close, onComplete }) {
  const themeObj = {
    bgColor: "#F9F9F9", //바탕 배경색
    pageBgColor: "#FFFFFF", //페이지 배경색
    postcodeTextColor: "#21BF48", //우편번호 글자색
    emphTextColor: "#EB5757", //강조 글자색
    outlineColor: "#21BF48", //테두리
  };

  const postCodeStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "450px",
    height: "470px",
  };

  return (
    <>
      {open ? (
        <>
          <ModalPortal close={close}>
            <aside className="flex w-[200px] h-[300px] borer-[1px] border-pink-500">
              <DaumPostCode
                onComplete={onComplete}
                theme={themeObj}
                style={postCodeStyle}
              />
            </aside>
          </ModalPortal>
        </>
      ) : null}
    </>
  );
}

export default PostCodeModal;
