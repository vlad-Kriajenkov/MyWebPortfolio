import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

export const Wrapper = styled.div`
  img {
    width: 500px;
  }
`;
export const InfoList = styled.ul`
  font-size: 1.3rem;
  color: ${myColor.text.primary};

  line-height: 1.5rem;
  li {
    display: flex;
    align-items: center;
    p {
      color: ${myColor.text.accentExp};
      width: 24%;
    }
  }
`;
