import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  button {
    p {
      padding: 0.4rem 0.08rem;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  border-top: 1px solid ${myColor.border.primary};
  @media screen and (max-width: 426px) {
    border-top: 1px solid ${myColor.border.primary};
    display: flex;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  :first-of-type {
    border-right: 1px solid ${myColor.border.primary};
  }
  @media screen and (max-width: 426px) {
    :first-of-type {
      border-right: none;
      border-bottom: 1px solid ${myColor.border.primary};
    }
  }
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
