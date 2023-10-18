import '@/styles/global.css';

import { Inter } from 'next/font/google';
import { Layout } from '@/components';
import { Metadata } from 'next';
import clsx from 'clsx';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '@nodly/next-template',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
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
        inter.variable,
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
