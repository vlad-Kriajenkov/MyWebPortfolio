import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 17.99rem 1fr;
  flex-grow: 1;
  @media screen and (max-width: 426px) {
    grid-template-columns: none;
  }
`;

export const WrapperFilter = styled.div`
  border-right: 1px solid ${myColor.border.primary};
`;

export const WrapperCgeckBox = styled.div`
  padding: 1rem;
  @media screen and (max-width: 426px) {
    border-bottom: 1px solid ${myColor.border.primary};
  }
`;
export const WrapperProject = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 426px) {
    grid-template-columns: 1fr;
  }
`;
export const Box = styled.div`
  padding: 1rem;
  flex-direction: row-reverse;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${myColor.text.seconder};
`;
