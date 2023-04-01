import Select from '../../../../../components/Select';
import useAnswers from '../../../hooks/useAnswers';
import { StyledInput, StyledWrapper } from '../styled';
import { StyledCaption } from './styled';

const Course = () => {
  const {
    onCourseChange,
    onYearSelect,
    onCourseSelect,
    switchCourseInput,
    isOpenCourseInput,
    course,
    year
  } = useAnswers();

  return (
    <StyledWrapper>
      <div>Qual o seu curso?</div>
      <div style={{ minHeight: '46px' }}>
        {isOpenCourseInput ? (
          <StyledInput
            value={course}
            onChange={onCourseChange}
          />
        ) : (
          <Select<string>
            selectedValue={course}
            onChange={onCourseSelect}
            options={[
              { value: 'BCC', label: 'BCC' },
              { value: 'BMAC', label: 'BMAC' },
              { value: 'LIC', label: 'LIC' },
              { value: 'ESTAT', label: 'ESTAT' }
            ]}
          />
        )}
      </div>
      <StyledCaption onClick={switchCourseInput}>
        {isOpenCourseInput
          ? 'Voltar para as opções'
          : 'Seu curso não está aqui?'}
      </StyledCaption>
      <div>Em que ano do curso você está?</div>
      <Select<1 | 2 | 3 | 4>
        selectedValue={year}
        onChange={onYearSelect}
        options={[
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 4, label: '4+' }
        ]}
      />
    </StyledWrapper>
  );
};

export default Course;
