import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactNode, ReactElement } from 'react';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout<P = Record<string, unknown>> = AppProps<P> & {
  Component: NextPageWithLayout;
};
