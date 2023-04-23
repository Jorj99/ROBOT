import { NextIntlProvider } from "next-intl";
import { AppProps } from "next/app";
import "regenerator-runtime/runtime";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Layout from "../components/layout/layout";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  );
}

export default App;
