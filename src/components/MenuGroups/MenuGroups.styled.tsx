import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 420px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  border-right: 1px solid ${myColor.border.primary};
  @media screen and (max-width: 420px) {
    border-right: none;
  }
`;
