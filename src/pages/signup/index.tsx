import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LoadingProvider } from '../../components/Loading';
import Content from './components/Content';
import { SignUpProvider } from './context';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <SignUpProvider>
          <Content />
        </SignUpProvider>
      </LoadingProvider>
    </QueryClientProvider>
  </>
);

export default SignUp;
