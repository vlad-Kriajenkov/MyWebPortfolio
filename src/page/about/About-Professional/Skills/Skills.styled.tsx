import styled from '@emotion/styled';
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

  background-image: url(${BackImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SkillAll = styled.div`
  width: 100%;
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
  width: 933px;
  height: 300px;
`;
