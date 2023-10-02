import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;
export const WrapperProject = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
`;
export const Box = styled.div`
  width: calc((100% - 30px) / 3);
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${myColor.text.seconder};
`;
