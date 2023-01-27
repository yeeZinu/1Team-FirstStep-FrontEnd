import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/Theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
