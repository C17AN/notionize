import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer/footer";
import { Provider } from "next-auth/client";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      {router.pathname !== "/instruction" && <Footer />}
    </Provider>
  );
}
export default MyApp;
