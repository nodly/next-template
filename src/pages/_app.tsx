import '@/styles/global.css';

import type { AppPropsWithLayout } from '@/types/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default CustomApp;
