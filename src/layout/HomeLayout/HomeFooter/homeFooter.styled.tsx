import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Conatiner = styled.div`
  font-size: 0.9rem;
  font-weight: 400;

  display: flex;
  border-top: 1px solid ${myColor.border.primary};
`;
export const ListMedia = styled.ul`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  padding: 0.75rem 1rem;
  border-right: 1px solid ${myColor.border.primary};
`;

export const Link = styled.a`
  display: block;
  color: ${myColor.text.primary};
  border-right: 1px solid ${myColor.border.primary};
  padding: 0px 10px;
  svg {
    width: 2rem;
    height: 2rem;
    :hover {
      fill: white;
    }
  }
`;
