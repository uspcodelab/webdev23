import { useCallback, useEffect, useState } from 'react';
import { useSignUpContext } from '../../context';
import useStep from '../../hooks/useStep';

export const useQuestion = () => {
  const { step } = useSignUpContext();
  const { onNext, onPrevious, disabled } = useStep();
  const [currentStep, setCurrentStep] = useState<number>(step);
  const [show, setShow] = useState<boolean>(true);
  const [initialRender, setInitialRender] = useState<boolean>(true);

  useEffect(
    () => (initialRender ? setInitialRender(false) : setShow(false)),
    [step, initialRender]
  );

  const updateStep = useCallback(() => {
    setCurrentStep(step);
    setShow(true);
  }, [step, setCurrentStep, setShow]);

  return {
    show,
    onNext,
    onPrevious,
    disabled,
    currentStep,
    updateStep
  };
};
