import SignUpContainer from '@/containers/SignUp/';
import Head from 'next/head';

const SignUp = () => (
  <>
    <Head>
      <title>Inscreva-se</title>
      <meta
        name="description"
        content="Se inscreva no Webdev, curso de desenvolvimento web"
      />
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    <SignUpContainer />
  </>
);

export default SignUp;
