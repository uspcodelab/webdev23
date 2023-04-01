import ActionBar from '../ActionBar';
import Inputs from '../Inputs';
import { useQuestion } from './hook';
import { StyledFader, StyledTitle, StyledWrapper } from './styled';

const QUESTIONS = [
  {
    title: 'Conte-nos um pouco sobre você',
    Input: Inputs.Identifiers
  },
  {
    title: 'E a facul?',
    Input: Inputs.Course
  },
  {
    title: 'Só por curiosidade...',
    Input: Inputs.Extra
  }
];

const Question = () => {
  const { currentStep, show, updateStep } = useQuestion();
  const { title, Input } = QUESTIONS[currentStep];

  return (
    <StyledWrapper>
      <StyledTitle show={show}>{title}</StyledTitle>
      <StyledFader
        show={show}
        onAnimationEnd={() => !show && updateStep()}
      >
        <Input />
      </StyledFader>
      <ActionBar currentStep={currentStep} />
    </StyledWrapper>
  );
};

export default Question;
