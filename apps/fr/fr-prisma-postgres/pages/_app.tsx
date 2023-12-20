/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Provider, useCreateStore } from 'fr/fr-stated';

function CustomApp({ Component, pageProps }: AppProps) {
  const createStore: any = useCreateStore(pageProps.initialZustandState);
  return (
    <Provider createStore={createStore}>
      <Head>
        <title>Welcome to prisma-graphql!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default CustomApp;
