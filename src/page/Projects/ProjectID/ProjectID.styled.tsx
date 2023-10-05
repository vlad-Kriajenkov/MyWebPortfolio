import styled from '@emotion/styled';
 
import ImgP from 'assets/img/home/BackgroundBlurs.png';
export const Container = styled.div`
  flex-grow: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const WrapperSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${ImgP});
  background-size: cover;
  background-repeat: no-repeat;

  h2 {
    font-size: 3.7rem;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 2px black;
  }
`;
export const WrapperInfo = styled.div`
  padding: 2rem;
`;

export const SubTitle = styled.h3`
  color: white;
  font-size: 1.9rem;
`;
export const TechnologyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const TechnologyItem = styled.ul`
  width: max-content;

  background-color: blanchedalmond;
  border-radius: 6px;
  margin: 5px;
  padding: 10px;
`;
