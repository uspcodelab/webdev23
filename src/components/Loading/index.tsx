import { CSSProperties } from 'react';
import { LoadingProvider, useLoading } from './context';
import { StyledEllipsis, StyledWrapper } from './styled';

interface LoadingProps {
  style?: CSSProperties;
}

const Loading = (props: LoadingProps) => {
  const { isLoading } = useLoading();
  if (!isLoading) return null;

  return (
    <StyledWrapper {...props}>
      <StyledEllipsis>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyledEllipsis>
    </StyledWrapper>
  );
};

export { useLoading, LoadingProvider };
export default Loading;
