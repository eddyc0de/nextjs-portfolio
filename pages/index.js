import Head from 'next/head';
import { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';
import Stack from '../components/stack/Stack';
import Projects from '../components/projects/Projects'; 
import Contact from '../components/contact/Contact'; 

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Edgar | FE Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <Hero />
          <Stack />
          <Projects />
          <Contact />
        </main>
      </Layout>
    </Fragment>
  );
}
