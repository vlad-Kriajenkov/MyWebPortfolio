import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-grow: 1;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;

  border-right: 1px solid red;
`;
export const Number = styled.ul`
  color: ${myColor.text.primary};
  margin-right: 15px;
  li {
    font-size: 1.2rem;
  }
`;
export const Title = styled.h2`
  font-size: 1.2rem;
  color: ${myColor.text.accent};
  margin-bottom: 20px;
`;
export const Text = styled.p`
  font-size: 1.2rem;
  color: ${myColor.text.seconder};
`;

export const List = styled.ul`
  margin-bottom: 20px;
  li {
    font-size: 1.2rem;
    color: ${myColor.text.seconder};
  }
`;
