import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';

import ImgP from 'assets/img/home/BackgroundBlurs.png';
export const Container = styled.div`
  flex-grow: 1;
`;
export const ContainerProjectInfo = styled.div`
 
  display: grid;
  grid-template-columns: 1fr 1fr;
height: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    background-image: url(${ImgP});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }
`;
export const WrapperNameProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  background-image: url(${ImgP});
  background-size: cover;
  background-repeat: no-repeat;

  h2 {
    font-size: 3.7rem;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 2px black;
  }
  @media screen and (max-width: 768px) {
    grid-row-start: 1;
    background-image: none;
  }
`;
export const WrapperInfo = styled.div`
  padding: 2rem;
  @media screen and (max-width: 768px) {
    grid-row-start: 2;
  }
`;

export const SubTitle = styled.h3`
  color: white;
  font-size: 1.9rem;
  margin-bottom: 10px;
`;

export const TextAbout = styled.p`
  color: ${myColor.text.primary};
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    color: white;
  }
`;

export const TechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
export const TechnologyItem = styled.li`
  width: max-content;

  color: white;

  background-color: #3e5170;
  border-radius: 6px;
  margin: 5px;
  padding: 10px;
`;

export const ButtonWeb = styled.a`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: inline-flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  margin: 0px 10px 0px 0px;

  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  :hover,
  :active {
    outline: 0;
  }
  :hover span {
    background: none;
  }
  span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }
`;
