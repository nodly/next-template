import '@/styles/global.css';

import Head from 'next/head';
import type { AppPropsWithLayout } from '@/types/app';

function NodlyApp({ Component, pageProps }: AppPropsWithLayout) {
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

export default NodlyApp;
