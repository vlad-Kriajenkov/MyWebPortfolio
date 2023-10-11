import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 14rem 1fr;
  @media screen and (max-width: 426px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  border-right: 1px solid ${myColor.border.primary};
  @media screen and (max-width: 426px) {
    border-right: none;
  }
`;
