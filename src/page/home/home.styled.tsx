import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
import BackgroundBlurs from 'assets/img/home/BackgroundBlurs.png';
export const Container = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 420px) {
    /* height: 100%; */
    grid-template-columns: 1fr;
    background-image: url(${BackgroundBlurs});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
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
  @media screen and (max-width: 420px) {
    padding: 1.69rem;
    width: 100%;
    p {
    }
    h1 {
      font-size: 3.875rem;
      line-height: 3.875rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
export const Animation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: 0 auto;

  background-image: url(${BackgroundBlurs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 420px) {
    display: none;
  }
  div {
    svg {
      width: 30rem !important;
    }
  }
`;
