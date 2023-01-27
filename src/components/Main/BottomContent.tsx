/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants, FadeInScaleVariants } from "constants/motion";

function BottomContent() {
  return (
    <div css={wrapper}>
      <h3 css={titleContent}>
        경험의 다양한 이야기는
        <motion.span
          initial="initial"
          whileInView="animate"
          variants={FadeInScaleVariants}
          viewport={{ once: false }}
          exit="exit"
          css={highlight}
        >
          “첫걸음”
        </motion.span>
        에서
      </h3>
      <motion.p
        initial="initial"
        whileInView="animate"
        variants={defaultFadeInUpVariants}
        viewport={{ once: false }}
        exit="exit"
        css={summaryContent}
      >
        사회의 첫걸음 이제 “첫걸음”과 함께 하세요!
      </motion.p>
    </div>
  );
}

export default BottomContent;

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35rem;
  margin: 2rem 0;
`;

const titleContent = css`
  font-size: 3rem;
`;

const summaryContent = (theme: Theme) => css`
  margin: 1.6rem 0;
  font-weight: ${theme.fontWeight.light};
  font-size: 1.6rem;
`;

const highlight = (theme: Theme) => css`
  color: ${theme.color.yellow};
  font-size: 3.2rem;
`;
