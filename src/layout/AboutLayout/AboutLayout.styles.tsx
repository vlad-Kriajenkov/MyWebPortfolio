import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
import { NavLink } from 'react-router-dom';

export const Conatainer = styled.div`
  display: flex;
  height: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${myColor.border.primary};
`;

export const Link = styled(NavLink)`
  color: ${myColor.link.active};
  padding: 1rem 1.5rem;
  &.active {
    color: ${myColor.link.defoult};
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
