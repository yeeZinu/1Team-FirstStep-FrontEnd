import { Global, Theme, css } from "@emotion/react";

function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

export default GlobalStyle;

const globalStyle = (theme: Theme) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
  }

  html,
  body {
    background-color: ${theme.color.white};
    color: ${theme.color.black};
  }

  button,
  img,
  a {
    all: unset;
    cursor: pointer;
  }
`;
