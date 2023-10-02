import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
  flex-grow: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const WrapperSlider = styled.div`
  padding: 2rem;
  border-right: 1px solid ${myColor.border.primary};
`;
export const WrapperInfo = styled.div`
  padding: 2rem;
`;
