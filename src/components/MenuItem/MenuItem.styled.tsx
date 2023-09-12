import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
    margin: 5px 0px 5px 20px;

`

export const Link = styled(NavLink)`
  color: ${myColor.link.defoult};
  :hover {
    color: ${myColor.link.active};
  }
  .active {
    color: ${myColor.link.active};
  }
`;
