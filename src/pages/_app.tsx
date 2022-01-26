import '@/styles/global.css';
import type { AppProps } from 'next/app';

function NodlyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default NodlyApp;
