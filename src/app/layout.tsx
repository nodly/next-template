import '@/styles/global.css';

import { Layout } from '@/components';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="tabular-nums antialiased">
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
