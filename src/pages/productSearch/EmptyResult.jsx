import styles from "../../style";

function EmptyResult({ word }) {
  return (
    <section className={`${styles.flexCenter} ${styles.sectionLayout}`}>
      <article className="mt-[150px]">
        <strong className="font-spoqaMedium ss:text-[28px] text-[20px] text-accentText">
          '{word}' 에 대한 검색결과가 없습니다.
        </strong>
        <div className="flex flex-col sm:gap-[10px] gap-[20px] mt-[40px] font-spoqa ss:text-[16px] text-[12px] text-subText">
          <p>- 단어의 철자가 정확한지 확인해 보세요</p>
          <p>- 한글을 영어로 혹은 영어를 한글로 입력했는지 확인해 보세요.</p>
          <p>
            - 검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해
            보세요.
          </p>
          <p>- 두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 보세요.</p>
        </div>
      </article>
    </section>
  );
}

export default EmptyResult;
