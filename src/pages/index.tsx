import SignUpContainer from '@/containers/SignUp';
import Head from 'next/head';

const AboutUs = () => (
  <>
    <Head>
      <title>Webdev</title>
      <meta
        name="description"
        content="Domine a web"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    <SignUpContainer />
  </>
);

export default AboutUs;
