import ErrorIcon from './ErrorIcon';
import { StyledWrapper, StyledTitle } from './styled';

const Error = () => (
  <StyledWrapper>
    <ErrorIcon
      style={{
        transform: 'scale(.3)',
        fill: 'rgb(255, 120, 37)',
        margin: '-256px',
        marginTop: '-320px'
      }}
    />
    <StyledTitle>Tivemos algum problema</StyledTitle>
    <div>Tente de novo mais tarde</div>
    <div>Se o erro persistir entre em contato com a gente:</div>
    <div>codelab@ime.usp.br</div>
  </StyledWrapper>
);

export default Error;
