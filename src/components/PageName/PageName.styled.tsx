import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Cotainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${myColor.border.primary};
`;
export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  border-right: 1px solid ${myColor.border.primary};
  svg {
    cursor: pointer;
    color: #fff;
  }
`;
export const Page = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 0.55rem 0.86rem;

  width: fit-content;

  color: ${myColor.text.accent};
`;
