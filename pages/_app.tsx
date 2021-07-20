import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer/footer";
import { useRouter } from "next/router";
import { AuthContextProvider } from "../store/authContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Notionize</title>
      </Head>
      <AuthContextProvider>
        <>
          <Header />
          <Component {...pageProps} />
          {router.pathname !== "/instruction" && <Footer />}
        </>
      </AuthContextProvider>
    </>
  );
}
export default MyApp;
