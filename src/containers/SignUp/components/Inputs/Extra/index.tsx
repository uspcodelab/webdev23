import Select from '../../../../../components/Select';
import useAnswers from '../../../hooks/useAnswers';
import { StyledTextArea, StyledWrapper } from '../styled';

const Extra = () => {
  const { onExpectationChange, onKnowledgeSelect, expectation, knowledge } =
    useAnswers();

  return (
    <StyledWrapper>
      <div>Qual o seu nível com Desenvolvimento Web?</div>
      <Select<1 | 2 | 3>
        options={[
          { value: 1, label: 'Não faço nem ideia' },
          { value: 2, label: 'Sei o que é' },
          { value: 3, label: 'Manjo muito' }
        ]}
        selectedValue={knowledge}
        onChange={onKnowledgeSelect}
      />
      <div style={{ marginTop: '16px' }}>
        O que você espera aprender no curso?
      </div>
      <StyledTextArea
        value={expectation}
        onChange={onExpectationChange}
        rows={5}
      />
    </StyledWrapper>
  );
};

export default Extra;
