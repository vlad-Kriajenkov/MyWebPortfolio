import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Container = styled.footer`
  font-size: 0.9rem;
  font-weight: 400;

  display: flex;
  border-top: 1px solid ${myColor.border.primary};
`;
export const ListMedia = styled.ul`
  display: flex;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    border-right: 1px solid ${myColor.border.primary};
    padding: 10px;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 1rem;
  color: ${myColor.text.accent};
  border-right: 1px solid ${myColor.border.primary};
`;

export const Link = styled.a`
  display: block;
  color: ${myColor.link.defoult};

  svg {
    width: 2rem;
    height: 2rem;

    :hover {
      fill: white;
    }
  }
`;
