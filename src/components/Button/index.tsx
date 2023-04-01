import React from 'react';
import { StyledButton } from './styled';

interface ButtonProps extends React.PropsWithChildren {
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
}

const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
