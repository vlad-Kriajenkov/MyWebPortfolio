import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Button = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  width: 10rem;

  border-right: 1px solid ${myColor.border.primary};
  background: none;
  color: ${myColor.text.white};
`;

export const Name = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 0.4rem 0.8rem;
  text-align: left;
`;
export const WrapperIcon = styled.div`
  font-size: 1rem;
  text-align: end;
  padding-right: 0.8rem;
`;
