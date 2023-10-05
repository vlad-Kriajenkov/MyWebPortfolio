import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
import Space from 'assets/img/home/skills.png';
import BackImg from 'assets/img/skills/back.jpeg';

export const Container = styled.div`
  position: relative;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Back = styled.div`
  flex: 1 0 auto;
  border-top: 1px solid ${myColor.border.primary};
  background-image: url(${BackImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SkillAll = styled.div`
  max-width: 100%;
  height: 100%;
  background-image: url(${Space});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -43%);
  position: relative;
  max-width: 933px;
  height: 300px;
`;

export const FlexBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 548px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const WrapperScils = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;
  padding: 5px;

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
  h2 {
    color: white;
  }
  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;
