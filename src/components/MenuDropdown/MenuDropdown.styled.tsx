import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Root = styled.div``;
export const Control = styled.button`
  font-size: 1rem;
  font-weight: 400;

  display: flex;
  align-items: center;

  background: none;
  border: none;
  color: ${myColor.link.defoult};
  svg {
    margin-right: 5px;
    color: ${myColor.folder.primary};
  }
  :hover {
    color: ${myColor.text.seconder};
  }
  &.active {
    color: ${myColor.text.seconder};
  }
`;

export const Backdrop = styled.div``;
