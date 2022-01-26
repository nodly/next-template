import '@/styles/global.css';
import type { AppProps } from 'next/app';

function NextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default NextApp;
