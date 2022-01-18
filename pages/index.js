import Head from 'next/head';
import { Fragment } from 'react';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Edgar | FE Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          {/* .... */}
        </main>
      </Layout>
    </Fragment>
  );
}
