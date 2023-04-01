import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  console.log(process.env);
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
