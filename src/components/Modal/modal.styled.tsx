import styled from '@emotion/styled';

export const Blackdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(100%, 100%);
  z-index: 100;

  /* overflow-x: hidden; */
  width: 100%;
  height: 100%;

  opacity: 1;
  background: rgba(16, 26, 35, 0.95);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    transform: translate(-50%, -50%);
  }
`;
