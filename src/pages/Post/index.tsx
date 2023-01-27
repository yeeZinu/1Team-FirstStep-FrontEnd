/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PostCard from "components/Card/PostCard";
import Circle from "components/Category/Circle";
import Footer from "components/Footer";
import Nav from "components/Nav";
import Section from "components/Text/Section";

function Post() {
  const categoryArray = [
    { category: "전체", path: "/" },
    { category: "진로", path: "/" },
    { category: "사회", path: "/" },
    { category: "경제", path: "/" },
    { category: "건강", path: "/" },
    { category: "연애", path: "/" },
    { category: "뷰티", path: "/" },
    { category: "대학", path: "/" },
    { category: "유흥", path: "/" },
  ];
  return (
    <>
      <Nav />
      <div css={wrapper}>
        <Section title="Post" summary="당신의 오늘을 변화시키는 첫걸음" />
        <div css={categoryWrapper}>
          {categoryArray.map((category, index) => {
            return (
              <Circle
                key={index}
                path={category.path}
                category={category.category}
              />
            );
          })}
          <PostCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Post;

const wrapper = css`
  width: 100%;
  height: 100vh;
`;

const categoryWrapper = css`
  margin: 1rem 4.7rem;
`;
