import Select from '../../../../../components/Select';
import useAnswers from '../../../hooks/useAnswers';
import { StyledInput, StyledWrapper } from '../styled';
import { COURSE_OPTIONS, YEAR_OPTIONS } from './constants';
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
            options={COURSE_OPTIONS}
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
        options={YEAR_OPTIONS}
      />
    </StyledWrapper>
  );
};

export default Course;
