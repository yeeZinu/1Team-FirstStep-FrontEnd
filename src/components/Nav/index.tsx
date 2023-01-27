/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { css, Theme } from "@emotion/react";
import NavLink from "components/Nav/NavLink";

function Nav() {
  return (
    <nav css={navWrapper}>
      <Link href="/">
        <h1 css={logo}>첫걸음</h1>
      </Link>
      <div>
        <NavLink path="/Post" category="게시글" />
        <NavLink path="/" category="궁금해요" />
      </div>
      <div css={buttonWrapper}>
        <Link href="/Register/logIn">
          <button css={button}>로그인</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

const navWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 3.5rem 4.7rem;
`;

const logo = css`
  font-size: 1.8rem;
  margin-right: 3rem;
`;

const buttonWrapper = css`
  position: absolute;
  right: 0;
  padding: 0rem 4.7rem;
`;

const button = (theme: Theme) => css`
  color: ${theme.color.white};
  border: 1px solid ${theme.color.black};
  background-color: ${theme.color.black};
  min-width: 7.5rem;
  height: 2.5rem;
  padding: 0 1.2rem;
  border-radius: 1.3rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 13px;
`;
