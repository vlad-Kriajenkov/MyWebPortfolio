import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
import { NavLink } from 'react-router-dom';

export const Conatainer = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  @media screen and (max-width: 426px) {
    grid-template-columns: none;
    grid-template-rows: 2rem 1fr;
  }
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-rows: 50px 50px;
  flex-direction: column;
  border-right: 1px solid ${myColor.border.primary};

  @media screen and (max-width: 426px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    border-right: none;
    border-bottom: 1px solid ${myColor.border.primary};
  }
`;

export const Link = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;


  color: ${myColor.link.active};
  padding: 1rem 1rem;
  &.active {
    color: ${myColor.link.defoult};
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media screen and (max-width: 426px) {
    text-align: center;
    height: 100%;
    padding: 0rem;
    :first-of-type {
      border-right: 1px solid ${myColor.border.primary};
    }
  }
`;
