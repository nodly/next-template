import '@/styles/global.css';

import { Layout } from '@/components';
import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import clsx from 'clsx';

interface RootLayoutProps {
  children: React.ReactNode;
}

const OpenSans = Open_Sans({
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '@nodly/next-template',
  };
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={clsx(
        'tabular-nums',
        'antialiased',
        'font-sans',
        OpenSans.variable,
      )}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
