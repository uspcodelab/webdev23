import { useContext } from 'react';
import { SignUpActions } from './models';
import { SignUpContext } from './SignUpContext';

export const useSignUpContext = () => {
  const { state, dispatch } = useContext(SignUpContext);

  const setStep = (step: number) =>
    dispatch({
      type: SignUpActions.SET_STEP,
      data: { step }
    });

  const setEmail = (email: string) =>
    dispatch({
      type: SignUpActions.SET_EMAIL,
      data: { email }
    });
  const setEmailError = (emailError: string) =>
    dispatch({
      type: SignUpActions.SET_EMAIL_ERROR,
      data: { emailError }
    });
  const setName = (name: string) =>
    dispatch({
      type: SignUpActions.SET_NAME,
      data: { name }
    });

  const setYear = (year: 1 | 2 | 3 | 4) =>
    dispatch({
      type: SignUpActions.SET_YEAR,
      data: { year }
    });
  const setCourse = (course: string) =>
    dispatch({
      type: SignUpActions.SET_COURSE,
      data: { course }
    });

  const setKnowledge = (knowledge: 1 | 2 | 3) =>
    dispatch({
      type: SignUpActions.SET_KNOWLEDGE,
      data: { knowledge }
    });
  const setExpectation = (expectation: string) =>
    dispatch({
      type: SignUpActions.SET_EXPECTATION,
      data: { expectation }
    });

  return {
    ...state,
    setStep,
    setEmail,
    setEmailError,
    setName,
    setCourse,
    setYear,
    setExpectation,
    setKnowledge
  };
};
