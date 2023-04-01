import Loading from '../../../../components/Loading';
import { useSignUpContext } from '../../context';
import Feedback from '../Feedback';
import Question from '../Question';
import { StyledWrapper, StyledModal } from './styled';

const Content = () => {
  const { step } = useSignUpContext();

  return (
    <StyledWrapper>
      <StyledModal>
        {step !== 3 ? <Feedback /> : <Question />}
        <Loading
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: '10px'
          }}
        />
      </StyledModal>
    </StyledWrapper>
  );
};

export default Content;
