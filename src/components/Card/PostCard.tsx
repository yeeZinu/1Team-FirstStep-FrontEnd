/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";

function PostCard() {
  const {
    query: { id },
  } = useRouter();

  return (
    <Link href={`/Detail/${id}`}>
      <div css={wrapper}>
        <div css={contentWrapper}>
          <span css={subTitle}>👣</span>
          <span css={title}>제목이에용</span>
        </div>
        <div css={colorBg}></div>
      </div>
    </Link>
  );
}

export default PostCard;

const wrapper = css`
  overflow: hidden;
  position: relative;
  width: 18rem;
  height: 15rem;
  margin-top: 2.25rem;
  border-radius: 14px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
`;

const subTitle = css`
  font-size: 0.8rem;
  margin: 0.2rem 0;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.6rem;
  letter-spacing: 0.5px;
`;

const colorBg = (theme: Theme) => css`
  position: absolute;
  bottom: 0;
  background-color: ${theme.color.skyblue};
  width: 100%;
  height: 50px;
`;
