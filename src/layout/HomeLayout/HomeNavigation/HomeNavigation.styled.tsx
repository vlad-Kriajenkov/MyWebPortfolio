import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { myColor } from 'assets/colors/colors';
export const Wrapper = styled.header`
  position: relative;
  display: flex;

  border-bottom: 1px solid ${myColor.border.primary};

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media screen and (max-width: 426px) {
    justify-content: space-between;
  }
`;

export const Name = styled.p`
  font-size: 0.9rem;
  font-weight: 400;

  width: 21rem;
  padding: 0.75rem 1rem;
  color: #5565e8;
  @media screen and (max-width: 426px) {
    padding: 1.06rem 1.13rem;
  }
`;

const WrapperBurger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #fff;
    font-size: 2.4rem;
  }
`;
export const ButtonOpen = styled(WrapperBurger)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-10px, 5px);
`;

export const ButtonClose = styled(WrapperBurger)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-10px, 5px);
`;
export const WrapperMenuMob = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  height: 100dvh;
  /* padding-top: 40px; */
  background-color: ${myColor.backGraund.main};
  border: 1px solid ${myColor.border.primary};
  border-radius: 10px;
`;
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  & :nth-of-type(3) {
    border-right: 1px solid ${myColor.border.primary};
  }

  @media screen and (max-width: 426px) {
    flex-direction: column;
    :first-of-type {
      border-top: 1px solid ${myColor.border.primary};
    }
    & :nth-of-type(3) {
      border-right: none;
    }
  }
`;
export const Link = styled(NavLink)`
  font-size: 0.9rem;
  font-weight: 400;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${myColor.link.defoult};
  width: 10rem;

  border-left: 1px solid ${myColor.border.primary};
  &.active {
    color: #fff;
    border-bottom: 3px solid ${myColor.border.active};
  }

  @media screen and (max-width: 740px) {
    width: 6.5rem;
  }

  @media screen and (max-width: 426px) {
    font-size: 1rem;

    width: 100%;
    text-align: left;
    padding: 1.06rem 1.13rem;

    color: #fff;
    border-left: none;
    border-bottom: 1px solid ${myColor.border.primary};
    &.active {
      border-bottom: 1px solid ${myColor.border.primary};
    }
  }
`;
