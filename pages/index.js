import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Niño. I’m a Web Development student at the University of the Assumption. My hobbies include watching Western TV series, especially action and sitcoms. My favorite type of music is rhythm and blues (R&B), and one of my favorite comfort foods is kare-kare. In five years, I see myself becoming a Cloud Engineer, hopefully, or possibly a Network Engineer.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
