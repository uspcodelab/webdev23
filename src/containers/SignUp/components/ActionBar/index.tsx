import Button from '../../../../components/Button';
import useStep from '../../hooks/useStep';
import { StyledWrapper } from './styled';

interface ActionBarProps {
  currentStep: number;
}

const ActionBar = ({ currentStep }: ActionBarProps) => {
  const { onNext, onPrevious, disabled } = useStep();
  return (
    <StyledWrapper>
      <Button
        onClick={onNext}
        disabled={disabled}
        primary
      >
        Continuar
      </Button>
      {currentStep != 0 && <Button onClick={onPrevious}>Voltar</Button>}
    </StyledWrapper>
  );
};

export default ActionBar;
