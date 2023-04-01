import styled from 'styled-components';

interface ProgressProps {
  value: number;
}

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 72px;
  left: 0;
`

const StyledBar = styled.div<ProgressProps>`
  border: 2px black solid;
  width: calc(594px * ${(props) => props.value});
  transition: .6s;

  @media screen and (max-width: 561px) {
    width: calc(98vw * ${(props) => props.value});
   }
`

const Progress = ({value}: ProgressProps) => (
  <StyledWrapper>
    <StyledBar value={value} />
  </StyledWrapper>
)

export default Progress;
