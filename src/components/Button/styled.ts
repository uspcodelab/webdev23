import styled from 'styled-components';
import CenteredFlexBox from '../CenteredFlexBox';

interface StyledButtonProps {
  disabled?: boolean;
  primary?: boolean;
}

export const StyledButton = styled(CenteredFlexBox)<StyledButtonProps>`
  background-color: ${(props) =>
    props.primary ? (props.disabled ? 'gray' : 'black') : 'inherit'};
  color: ${(props) =>
    props.primary ? 'white' : props.disabled ? 'gray' : 'black'};
  border: 0;
  border-radius: 6px;

  min-width: 80px;
  font-weight: bold;
  font-size: inherit;
  padding: 8px;

  cursor: ${(props) => !props.disabled && 'pointer'};
`;
