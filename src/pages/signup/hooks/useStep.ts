import { useCallback, useMemo } from 'react';
import { useLoading } from '../../../components/Loading';
import { getSignupByEmail } from '../../../services/googleSpreadsheets';
import { useSignUpContext } from '../context';

const checkEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const useStep = () => {
  const { step, answers, setStep, setEmailError, emailError } =
    useSignUpContext();
  const { setIsLoading } = useLoading();

  const conditions = useMemo(
    () => [
      () => answers.name && answers.email && !emailError,
      () => answers.year && answers.course
    ],
    [answers, emailError]
  );

  const onNext = useCallback(async () => {
    if (step == 0 && answers.email) {
      if (!checkEmail(answers.email)) {
        setEmailError('Email inválido');
        return;
      }
      setIsLoading(true);
      const signupsWithEmail = await getSignupByEmail(answers.email);
      if (signupsWithEmail.length > 0) {
        setEmailError('Email já cadastrado');
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    }
    setStep(step + 1);
  }, [step, setStep]);
  const onPrevious = useCallback(() => setStep(step - 1), [step, setStep]);

  return {
    onNext,
    onPrevious,
    disabled: conditions[step] && !conditions[step]()
  };
};
export default useStep;
