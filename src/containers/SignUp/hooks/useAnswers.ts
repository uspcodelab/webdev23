import { ChangeEvent, useCallback, useState } from 'react';
import { useSignUpContext } from '../context';

const useAnswers = () => {
  const {
    answers,
    emailError,
    setEmailError,
    setName,
    setEmail,
    setYear,
    setCourse,
    setExpectation,
    setKnowledge
  } = useSignUpContext();

  const onNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    [setName]
  );
  const onEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmailError('');
      setEmail(e.target.value);
    },
    [setEmail, setEmailError]
  );

  const [isOpenCourseInput, setIsOpenCourseInput] = useState<boolean>(false);
  const onYearSelect = useCallback(
    (value: 1 | 2 | 3 | 4) => setYear(value),
    [setYear]
  );
  const onCourseSelect = useCallback(
    (value: string) => {
      setIsOpenCourseInput(false);
      setCourse(value);
    },
    [setCourse, setIsOpenCourseInput]
  );
  const switchCourseInput = useCallback(() => {
    setIsOpenCourseInput((prev) => !prev);
    setCourse('');
  }, [setIsOpenCourseInput, setCourse]);
  const onCourseChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setCourse(e.target.value),
    [setCourse]
  );

  const onKnowledgeSelect = useCallback(
    (value: 1 | 2 | 3) => setKnowledge(value),
    [setKnowledge]
  );
  const onExpectationChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setExpectation(e.target.value),
    [setExpectation]
  );

  return {
    ...answers,
    emailError,
    onNameChange,
    onEmailChange,
    onYearSelect,
    onCourseSelect,
    onCourseChange,
    switchCourseInput,
    isOpenCourseInput,
    onKnowledgeSelect,
    onExpectationChange
  };
};

export default useAnswers;
