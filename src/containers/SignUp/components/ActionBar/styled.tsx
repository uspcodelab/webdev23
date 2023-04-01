import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 550px;
  height: 48px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  padding: 12px 24px;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 561px) {
    width: calc(100vw - 48px);
   }
`;
