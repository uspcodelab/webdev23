import { ReactComponent as Logo } from '../../../../../logo.svg';
import { StyledWrapper, StyledTitle } from './styled';

const Success = () => (
  <StyledWrapper>
    <Logo
      style={{ transform: 'scale(.5)', margin: '-64px', marginTop: '-128px' }}
    />
    <StyledTitle>Muito obrigado, você foi cadastrado!</StyledTitle>
    <div>Entraremos em contato pelo seu email em breve</div>
    <div>As aulas começam dia 14/03 às 14h na B03</div>
  </StyledWrapper>
);

export default Success;
