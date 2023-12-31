import styled from '@emotion/styled';

import { myColor } from 'assets/colors/colors';

export const Control = styled.button`
  font-size: 1rem;
  font-weight: 400;

  display: flex;
  align-items: center;

  width: 100%;

  background: none;

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

  &.primer {
    padding: 0.4rem 0rem;
    border-bottom: 1px solid #686a77;
  }

  &.defoult {
    border-bottom: none;
    margin: 0.25rem 0rem;
    padding-left: 1rem;
  }
`;

export const BoxTitlePageIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
  }
`;
