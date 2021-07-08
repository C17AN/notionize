import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/header";
import { useEffect } from "react";
import AOS from "aos";
import Footer from "../components/Footer/footer";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
