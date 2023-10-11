import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
export const Conatainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100dvh;
  background-color: ${myColor.backGraund.main};
  border: 1px solid ${myColor.border.primary};
  border-radius: 10px;

  main {
    /* display: flex; */
    
    display: grid;
    flex: 1 0 auto;
  }
`;
 