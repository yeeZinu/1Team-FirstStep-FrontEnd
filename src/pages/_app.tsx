import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/Theme/theme";
import Nav from "components/Nav";
import Footer from "components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
