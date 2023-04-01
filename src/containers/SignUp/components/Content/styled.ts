import styled from 'styled-components';
import { HEADET_HEIGHT } from '../../../../components/Header/styled';

export const StyledWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #ffbd59, #c68fca);
  background-color: #fed4e7;
  height: calc(100vh - ${HEADET_HEIGHT});
  display: flex;
  justify-content: center;
`;

export const StyledModal = styled.div`
  height: 480px;
  width: 550px;
  background-color: white;
  border-radius: 10px;
  padding: 24px;
  margin-top: 120px;
  position: absolute;
`;
