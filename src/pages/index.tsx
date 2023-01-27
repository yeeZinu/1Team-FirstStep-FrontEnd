/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import LottieWrapper from "components/Common/LottieWrapper";
import mainFlyingData from "assets/lottieJSON/mainFlying.json";
import mainSelfData from "assets/lottieJSON/mainSelf.json";
import mainShare from "assets/lottieJSON/mainShare.json";
import mainWorld from "assets/lottieJSON/mainWorld.json";
import OneLineContent from "components/Text/OneLineContent";
import BottomContent from "components/Main/BottomContent";
import Section from "components/Text/Section";
import { defaultFadeInUpVariants } from "constants/motion";
import { motion } from "framer-motion";
import Footer from "components/Footer";
import Nav from "components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <main css={wrapper}>
        <Section
          title="👣 첫걸음"
          summary="MZ세대가 주목하는 ‘첫걸음’ … 물건 나눔이 아닌 경험 나눔!"
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInUpVariants}
          viewport={{ once: false }}
          exit="exit"
          css={cardWrapper}
        >
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={mainFlyingData} />
          </div>
          <div css={contentWrapper}>
            <p css={title}>가보지 않은 길을 두려워하지 않습니다.</p>
            <div css={summaryWrapper}>
              <OneLineContent summary="사회에 나오니 두렵고 막막해, 뭐를 어떻게 시작하면 좋을까?" />
              <OneLineContent
                summary="  가보지 않은 길은 실패의 위험이 따르지만 그에서 오는 경험은 그
              무엇보다 값집니다."
              />
              <OneLineContent
                highlight="“두려움이 아닌 희망과 꿈의 조언을 구하라”"
                summary=" 이것이 저희 서비스의
              목적입니다."
              />
              <OneLineContent
                summary="“첫걸음” 에서 자신이 가진 두려움을 떨치고 자신감과 사회인으로서의
              길을 찾는 것에 집중합니다."
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInUpVariants}
          viewport={{ once: false }}
          exit="exit"
          css={cardWrapper}
        >
          <div css={contentWrapper}>
            <p css={title}>스스로 주도적이어야 합니다.</p>
            <div css={summaryWrapper}>
              <OneLineContent highlight="“남들은 이랬다는데, 나도 그래야 되는 거겠지?”, “남처럼 못되면 어떡하지?”" />
              <OneLineContent summary="“첫걸음”에서 가장 먼저 알아야 하는 내용입니다. 우리의 삶은 스스로 만들어냅니다. 인생 선배의 경험은 참고할 뿐 언제나 자신이 스스로 생각하고, 질문하고, 움직입니다." />
            </div>
          </div>
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={mainSelfData} />
          </div>
        </motion.div>

        <div css={subcribeWrapper}>
          <span css={subcribeContent}>
            “첫걸음”의 다양한 소식을 구독해보세요!
          </span>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInUpVariants}
          viewport={{ once: false }}
          exit="exit"
          css={cardWrapper}
        >
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={mainShare} />
          </div>
          <div css={contentWrapper}>
            <p css={title}>누구나 경험을 공유하고 받을 수 있습니다.</p>
            <div css={summaryWrapper}>
              <OneLineContent highlight="“첫걸음”은 나이가 한정된 서비스가 아닙니다. 이 공존하는 서비스를 만들겠습니다." />
              <OneLineContent summary="20살 이상이라면 누구나 공유가 가능하며 공유 받을 수도 있습니다." />
              <OneLineContent summary="다양한 경험이 공존하는 서비스를 만들겠습니다." />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInUpVariants}
          viewport={{ once: false }}
          exit="exit"
          css={cardWrapper}
        >
          <div css={contentWrapper}>
            <p css={title}>세상을 선하게 만들고자 노력합니다.</p>
            <div css={summaryWrapper}>
              <OneLineContent highlight="“비도덕적인 이야기를 보게 되는 거 아냐?”" />
              <OneLineContent summary="저희는 직접 선별 후 게시글이 올라가게 됩니다." />
              <OneLineContent summary="정해진 기준에 어긋날 경우 게시글 업로드가 안 되도록 구성함으로써 깨끗하고 유익한 서비스가 되도록 합니다." />
              <OneLineContent summary="저희는 모두에게 의미있는 도움이 되기 위해 최선을 다합니다." />
              <OneLineContent summary="서비스 하나에도 그런 생각과 노력들이 담겨있습니다. " />
            </div>
          </div>
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={mainWorld} />
          </div>
        </motion.div>
        <div>
          <BottomContent />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;

const wrapper = css`
  margin: 2.5rem 0;
`;

const lottieWrapper = css`
  width: 100%;
  height: 100%;
`;

const cardWrapper = css`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 68rem;
  height: 28.5rem;
  margin: 4.5rem auto 0;
  border-radius: 15px;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 7%);
  text-align: left;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 3.5rem 6rem;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 2.5rem;
`;

const summaryWrapper = css`
  margin: 1.2rem 0;
`;

const subcribeWrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  align-items: center;
  height: 13rem;
  background-color: ${theme.color.grey100};
  margin: 4rem 0;
`;

const subcribeContent = (theme: Theme) => css`
  font-size: 2.3rem;
  padding: 0 3rem;
  font-weight: ${theme.fontWeight.bold};
`;
