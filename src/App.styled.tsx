import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
export const Container = styled.div`
  background-color: ${myColor.backGraund.body};
  width: 100vw;
  height: 100dvh;

  padding: 2rem;
  @media screen and (max-width: 420px) {
    padding: 0.4rem;
  }
`;
