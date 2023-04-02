import styled from 'styled-components';

interface StyledOptionsProps {
  selected?: boolean;
}

export const StyledOptions = styled.button<StyledOptionsProps>`
  font-size: inherit;
  font-weight: bold;

  background-color: ${(props) => (props.selected ? 'black' : 'inherit')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border: 2px black solid;
  border-radius: 22px;

  padding: 8px;
  min-width: 42px;

  transition: 0.3s;
  cursor: pointer;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
