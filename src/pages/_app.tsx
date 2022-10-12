import '@/styles/global.css';

import Head from 'next/head';
import type { AppPropsWithLayout } from '@/types/app';

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default CustomApp;
