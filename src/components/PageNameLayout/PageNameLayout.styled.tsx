import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Container = styled.div`
  width: 15.9rem;
  border-right: 1px solid ${myColor.border.primary};
`;

export const Title = styled.div`
  display: flex;
  font-size: 0.9rem;
  font-weight: 400;

  color: ${myColor.text.seconder};
  padding: 0.6rem 0.5rem;

  border-bottom: 1px solid ${myColor.border.primary};
`;

export const WrapperMenu = styled.div`
  padding: 0.6rem 0.5rem;
`;

export const WrapperLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
