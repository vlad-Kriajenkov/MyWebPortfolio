import styled from '@emotion/styled';
import { myColor } from 'assets/colors/colors';
import ImgProject from 'assets/img/projject/pImg.jpeg';

export const Card = styled.div`
  height: fit-content;
  
  border: 1px solid ${myColor.border.primary};
  border-radius: 0.9375rem;

  background: #011221;
`;

export const WrapperImg = styled.div`
  position: relative;

  height: 9.09rem;
  background-image: url(${ImgProject});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-bottom: 1px solid ${myColor.border.primary};
  border-top-right-radius: 0.9375rem;
  border-top-left-radius: 0.9375rem;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const WrapperIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-1.08rem, 1.9rem);
  width: 1.75rem;
  height: 1.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${myColor.icon.backGraund};
`;

export const WrapperInfo = styled.div`
  padding: 1.4rem;
  h2 {
    color: #607b96;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 150%;

    padding-bottom: 1.36rem;
  }

  a {
    font-size: 0.875rem;
    font-weight: 400;

    display: inline-block;
    padding: 0.62rem 0.88rem;

    color: ${myColor.link.white};
    background-color: ${myColor.link.backGraund};
    border-radius: 0.5rem;
  }
`;
