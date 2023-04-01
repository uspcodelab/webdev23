import { Answers } from '@/containers/SignUp/context/models';
import { useQuery } from 'react-query';
import { postSignup } from './googleSpreadsheets';

export const useSignUpPost = (props: Answers) =>
  useQuery({
    queryKey: Object.values(props),
    queryFn: () => postSignup(props)
  });
