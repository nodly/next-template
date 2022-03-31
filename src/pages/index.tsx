import Head from 'next/head';
import type { NextPageWithLayout } from '@/types/app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>@nodly/next-template</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">@nodly/next-template</h1>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <div className="page-layout">{page}</div>;
};

export default Home;
