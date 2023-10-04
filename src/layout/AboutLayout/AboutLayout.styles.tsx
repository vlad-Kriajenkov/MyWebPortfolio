import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
import { NavLink } from 'react-router-dom';

export const Conatainer = styled.div`
  display: flex;
  flex-grow: 1;
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-rows: 50px 50px;
  flex-direction: column;
  border-right: 1px solid ${myColor.border.primary};

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    border-right: none;
    border-bottom: 1px solid ${myColor.border.primary};
  }
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

  @media screen and (max-width: 420px) {
    text-align: center;
    padding: 0.25rem 0rem;
    :first-of-type {
      border-right: 1px solid ${myColor.border.primary};
    }
  }
`;
