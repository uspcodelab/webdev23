import styled from 'styled-components';
// import { HEADET_HEIGHT } from '../../../../components/Header/styled';

export const StyledWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #ffbd59, #c68fca);
  background-color: #fed4e7;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const StyledModal = styled.div`
  height: 480px;
  width: 550px;
  background-color: white;
  padding: 24px;
  margin-top: 120px;
  position: absolute;

  @media screen and (max-width: 561px) {
    width: calc(100vw - 48px);
    height: calc(100vh - 120px - 48px);
  }
`;
