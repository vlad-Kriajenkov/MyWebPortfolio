import styled from '@emotion/styled';

export const CardWrap = styled.div`
  padding: 1.25rem;
  width: fit-content;
  /* 	background: rgba(22, 37, 41, 0.7); */
  background: radial-gradient(
    circle at bottom right,
    rgba(127, 73, 99, 0.6) 0,
    rgba(34, 62, 76, 0.5) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  border-right: 1px solid rgba(152, 152, 152, 0.18);
  border-left: 1px solid rgba(43, 43, 43, 0.3);
  border-bottom: 1px solid rgba(43, 43, 43, 0.3);
  border-radius: 0.75rem;
`;
