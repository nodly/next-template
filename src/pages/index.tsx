import Head from 'next/head';

const Home = () => {
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

export default Home;
