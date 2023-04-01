import { ReactComponent as Logo } from './error-icon.svg';
import { StyledWrapper, StyledTitle } from './styled';

const Error = () => (
  <StyledWrapper>
    <Logo
      style={{
        transform: 'scale(.3)',
        fill: 'rgb(255, 120, 37)',
        margin: '-256px',
        marginTop: '-320px'
      }}
    />
    <StyledTitle>Tivemos algum problema</StyledTitle>
    <div>Tente de novo mais tarde</div>
  </StyledWrapper>
);

export default Error;
