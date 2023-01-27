/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";

function Footer() {
  return (
    <footer css={wrapper}>
      <span css={content}>© 2023 첫걸음 ALL RIGHTS RESERVED</span>
    </footer>
  );
}

export default Footer;

const wrapper = (theme: Theme) => css`
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: ${theme.color.grey100};
`;

const content = (theme: Theme) => css`
  padding: 1rem 3.5rem;
  font-size: 0.8rem;
  font-weight: ${theme.fontWeight.bold};
  opacity: 0.9;
`;
