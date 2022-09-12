import styles from "../../style";

function Footer() {
  return (
    <footer
      className={`w-full sm:h-[298px] h-[200px] ${styles.flexCenter} flex-col md:py-[60px] sm:py-[40px] py-[10px] bg-background`}
    >
      <div className="w-[88%] h-full flex flex-col justify-around">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-[10px]">
          <ul>
            <li className={`${styles.footerList}`}>호두샵 소개</li>
            <li className={`${styles.footerList}`}>이용약관</li>
            <li className={`${styles.footerList}`}>개인정보처리방침</li>
            <li className={`${styles.footerList}`}>전자금융거래약관</li>
            <li className={`${styles.footerList}`}>청소년보호정책</li>
            <li className={`${styles.footerList} after:hidden`}>제휴문의</li>
          </ul>
          <ul className="self-start md:self-center">
            <div className={`${styles.footerIcon} icon-icon-insta`}></div>
            <div className={`${styles.footerIcon} icon-icon-fb`}></div>
            <div className={`${styles.footerIcon} mr-0 icon-icon-yt`}></div>
          </ul>
        </div>
        <div className="w-full h-[1px] border-t-[1px] border-disabled" />
        <div className="font-spoqa sm:text-[14px] text-[12px] text-subText">
          <strong className="font-spoqaBold sm:leading-[24px]">
            (주)HODU SHOP
          </strong>
          <p className="sm:leading-[24px]">
            제주특별자치도 제주시 동광고 137 제주코딩베이스캠프
          </p>
          <p className="sm:leading-[24px]">
            사업자 번호 : 000-0000-000 | 통신판매업
          </p>
          <p className="sm:leading-[24px]">대표 : 김호두</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
