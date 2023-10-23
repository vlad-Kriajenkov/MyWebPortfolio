import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
  width: 18rem;
  border-right: 1px solid ${myColor.border.primary};
  @media screen and (max-width: 426px) {
    width: 100%;
    display: block;
    border-right: none;
  }
`;
