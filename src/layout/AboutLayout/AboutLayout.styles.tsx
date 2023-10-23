import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Conatainer = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  @media screen and (max-width: 426px) {
    grid-template-columns: none;
    border-right: none;
  }
`;

export const Nav = styled.div`
  border-right: 1px solid ${myColor.border.primary};
  @media screen and (max-width: 426px) {
    border-right: none;
  }
`;
