import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
// import "@swiper/components/pagination/pagination.scss";
// import "@swiper/components/scrollbar/scrollbar.scss";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp
