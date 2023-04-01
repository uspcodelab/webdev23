import CenteredFlexBox from '../../../../components/CenteredFlexBox';
import { useFeedback } from './hooks';
import { Success, Error } from './states';

const Feedback = () => {
  const { isError, isSuccess } = useFeedback();

  return (
    <CenteredFlexBox style={{ height: '100%' }}>
      {isError && <Error />}
      {isSuccess && <Success />}
    </CenteredFlexBox>
  );
};

export default Feedback;
