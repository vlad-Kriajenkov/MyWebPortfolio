import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
  width: 100%;
  @media screen and (max-width: 425px) {
    border-top: 1px solid ${myColor.border.primary};
  }
`;

export const WrapperCard = styled.div`
  padding: 20px;
  display: grid;
  border-top: 1px solid ${myColor.border.primary};
  grid-template-columns: 1fr 1fr;
  div {
    margin: 10px;
  }
  @media screen and (max-width: 830px) {
    grid-template-columns: 1fr;
  }
`;
