import Link from 'next/link';
import styled from 'styled-components';
import CenteredFlexBox from '../CenteredFlexBox';

export const HEADET_HEIGHT = '88px';

export const StyledWrapper = styled(CenteredFlexBox)`
  width: 100vw;
  height: ${HEADET_HEIGHT};
  gap: 88px;

  background-color: white;
  font-weight: bold;
`;

interface StyledLinkProps {
  selected?: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: ${(props) => (props.selected ? '#FF690A' : 'black')};
  font-size: ${(props) => (props.selected ? '1.5em' : '1.1em')};
  transition: 0.3s;
`;
