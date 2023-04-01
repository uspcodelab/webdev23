import { useRouter } from 'next/router';
import { StyledLink, StyledWrapper } from './styled';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <StyledWrapper>
      <StyledLink
        href="/"
        selected={pathname === '/'}
      >
        Sobre nós
      </StyledLink>
      <StyledLink
        href="/leasons"
        selected={pathname === '/leasons'}
      >
        Aulas
      </StyledLink>
      <StyledLink
        href="/signup"
        selected={pathname === '/signup'}
      >
        Inscreva-se
      </StyledLink>
    </StyledWrapper>
  );
};

export default Header;
