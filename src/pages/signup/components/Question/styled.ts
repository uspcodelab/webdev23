import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0 };
  to { opacity: 1 };
`;

const FadeOut = keyframes`
  from { opacity: 1 };
  to { opacity: 0 };
`;

interface StyledFaderProps {
  show?: boolean;
}

export const StyledFader = styled.div<StyledFaderProps>`
  opacity: ${(props) => (props.show ? 0 : 1)};
  animation: ${(props) => (props.show ? FadeIn : FadeOut)} ease-in 0.3s forwards;
`;

export const StyledWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
`;

export const StyledTitle = styled(StyledFader)`
  font-size: 2.8em;
  font-weight: bold;
`;
