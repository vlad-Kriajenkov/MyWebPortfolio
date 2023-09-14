import styled from '@emotion/styled';
// import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
  width: 100%;
`;

export const WrapperCard = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  div {
    width: calc((100% - 20px) / 2);
  }
`;
