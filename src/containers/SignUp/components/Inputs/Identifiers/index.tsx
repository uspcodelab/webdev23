import useAnswers from '../../../hooks/useAnswers';
import { StyledInput, StyledWrapper } from '../styled';

const Identifiers = () => {
  const { onNameChange, onEmailChange, name, email, emailError } = useAnswers();

  return (
    <StyledWrapper>
      <div>Qual o seu nome?</div>
      <StyledInput
        value={name}
        onChange={onNameChange}
      />
      <div>Qual o seu email USP?</div>
      <StyledInput
        error={!!emailError}
        value={email}
        onChange={onEmailChange}
      />
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
    </StyledWrapper>
  );
};

export default Identifiers;
