import { useEffect } from 'react';
import { useLoading } from '../../../../components/Loading';
import { useSignUpPost } from '../../../../services/hooks';
import { useSignUpContext } from '../../context';

export const useFeedback = () => {
  const { answers } = useSignUpContext();
  const { isLoading, isError, isSuccess } = useSignUpPost(answers);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  return { isError, isSuccess };
};
