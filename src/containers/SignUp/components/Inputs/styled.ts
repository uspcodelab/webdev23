import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface StyledInputProps {
  error?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: calc(100% - 16px);
  font-size: inherit;
  padding: 8px;
  ${(props) => props.error && 'border-color: red'}
`;

export const StyledTextArea = styled.textarea`
  width: calc(100% - 16px);
  font: inherit;
  font-size: inherit;
  padding: 8px;
`;

export const StyledErrorMessage = styled.div`
  font-size: 0.8em;
  color: red;
`;
