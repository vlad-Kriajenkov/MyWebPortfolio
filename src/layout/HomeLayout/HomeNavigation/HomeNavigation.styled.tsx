import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { myColor } from 'assets/colors/colors';
export const Wrapper = styled.div`
  display: flex;

  border-bottom: 1px solid ${myColor.border.primary};
  border-top: 1px solid ${myColor.border.primary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Name = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  border-left: 1px solid ${myColor.border.primary};

  border-top-left-radius: 10px;
  width: 18.125rem;
  padding: 0.75rem 1rem;
`;
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  & :nth-of-type(3) {
    border-right: 1px solid ${myColor.border.primary};
  }
  & :last-child {
    margin-left: auto;
    border-top-right-radius: 10px;
  }
`;
export const Link = styled(NavLink)`
  font-size: 0.9rem;;
  font-weight: 400;
  display: inline-block;
  text-align: center;
  color: #607b96;
  width: 10rem;
  padding: 0.75rem 1rem;
  border-left: 1px solid ${myColor.border.primary};
  &.active {
    color: #fff;
    border-bottom: 3px solid ${myColor.border.active};
  }
`;
