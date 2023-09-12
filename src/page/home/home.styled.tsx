import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
import BackgroundBlurs from 'assets/img/home/BackgroundBlurs.png';
export const Conatiner = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  color: ${myColor.text.seconder};
  line-height: 2.5rem;
  p {
    font-size: 1.125rem;
    font-weight: 400;
  }
  h1 {
    font-size: 3rem;
    font-weight: 400;
  }
  h2 {
    color: ${myColor.text.accent};

    font-size: 2rem;
    font-weight: 400;
  }
`;
export const Animation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  margin: 0 auto;

  background-image: url(${BackgroundBlurs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    svg {
      width: 30rem !important;
    }
  }
`;
