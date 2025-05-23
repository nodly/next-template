import '@/global.css';

import type { Metadata, Viewport } from 'next';

import { Inter } from 'next/font/google';

import { Layout } from '@/components/layout';
import { cn } from '@/lib/utils';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Nodly Next Template',
  description: 'Generated by @nodly/next-template',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn('tabular-nums', 'antialiased', 'font-sans', inter.variable)}
    >
      <body className="min-h-screen bg-white text-gray-900">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
