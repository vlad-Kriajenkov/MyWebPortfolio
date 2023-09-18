import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
export const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;

  background-color: ${myColor.backGraund.main};
  border-radius: 10px;
  border: 1px solid ${myColor.border.primary};
`;
