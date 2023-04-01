import { useQuery } from 'react-query';
import { Answers } from '../pages/SignUp/context/models';
import { postSignup } from './googleSpreadsheets';

export const useSignUpPost = (props: Answers) =>
  useQuery({
    queryKey: Object.values(props),
    queryFn: () => postSignup(props)
  });
