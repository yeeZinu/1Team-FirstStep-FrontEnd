/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import Footer from "components/Footer";
import Nav from "components/Nav";
import Section from "components/Text/Section";
import Faq from "components/Text/Faq";

function FAQ() {
  return (
    <>
      <Nav />
      <div css={wrapper}>
        <div css={SectionWrapper}>
          <Section title="자주 묻는 질문" summary="궁금해요!" />
        </div>
        <div css={detailsWrapper}>
          <Faq
            title="20살들에게 무슨 얘기를 하면 좋을까요?"
            summary="유익한 이야기를 해주세용"
          />
          <Faq
            title="저도 글을 작성하고 싶어요!"
            summary="20살 이하일 경우 궁금한 사항을 작성할 수 있고 21살 이상일 경우 글을 작성하실 수 있습니다."
          />
          <Faq
            title="진실된 내용이 아닐 경우 그냥 믿을 수밖에 없는 건가요?"
            summary="저희 서비스에서 정해진 규칙에 따라 검열하고 있으나 모든 글을 모두 믿는 것은 저희 서비스 취지와 어긋나는 일입니다."
          />
          <Faq
            title="만 나이로 따지나요?"
            summary="네, 만 나이로 구별합니다!"
          />
          <Faq
            title="사용자들과 메세지를 주고받고 싶어요!"
            summary="메시지 기능은 준비 중입니다."
          />
          <Faq
            title="닉네임을 바꾸고 싶어요."
            summary="마이페이지에서 변경 가능합니다."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQ;

const SectionWrapper = (theme: Theme) => css`
  padding-bottom: 3rem;
  border-bottom: 1px solid ${theme.color.grey100};
`;

const wrapper = css`
  margin: 2.5rem 0;
`;

const detailsWrapper = css`
  margin: 1rem 4.7rem;
`;
