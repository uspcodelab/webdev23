import { QueryClient, QueryClientProvider } from 'react-query';
import { LoadingProvider } from '../../components/Loading';
import Content from './components/Content';
import { SignUpProvider } from './context';

const queryClient = new QueryClient();

const SignUp = () => (
  <QueryClientProvider client={queryClient}>
    <LoadingProvider>
      <SignUpProvider>
        <Content />
      </SignUpProvider>
    </LoadingProvider>
  </QueryClientProvider>
);

export default SignUp;
