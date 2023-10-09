import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import {
  Wrapper,
  WrapperMenuMob,
  Link,
  Nav,
  Name,
  ButtonClose,
  ButtonOpen,
} from './HomeNavigation.styled';
import { useMediaQuery } from 'react-responsive';
import { Modal } from 'components';
import { HomeFooter } from '../HomeFooter';

const HomeNavigation = () => {
  const [handleBurger, sethandleBurger] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });

  const bodyEl = document.getElementsByTagName('body')[0];
  const hadelMenu = () => {
    sethandleBurger(!handleBurger);
    console.log(handleBurger);

    handleBurger === true
      ? (bodyEl.style.overflow = 'auto')
      : (bodyEl.style.overflow = 'hidden');
  };

  if (isMobile) {
    return (
      <Wrapper>
        <Name>krajenkov-vladislav</Name>
        <ButtonOpen>
          <RxHamburgerMenu onClick={hadelMenu} />
        </ButtonOpen>

        <Modal handleBurger={handleBurger}>
          <WrapperMenuMob>
            <div>
              <Name>krajenkov-vladislav</Name>

              <Nav>
                <Link onClick={hadelMenu} to="/">
                  _home
                </Link>
                <Link onClick={hadelMenu} to="/about">
                  _about
                </Link>
                <Link onClick={hadelMenu} to="/progect">
                  _progect
                </Link>
              </Nav>
            </div>

            <HomeFooter />
          </WrapperMenuMob>
          <ButtonClose>
            <IoMdClose onClick={hadelMenu} width="1.2rem" />
          </ButtonClose>
        </Modal>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Name>krajenkov-vladislav</Name>

        <Nav className={handleBurger ? 'active' : ''}>
          <Link to="/">_home</Link>
          <Link to="/about">_about</Link>
          <Link to="/progect">_progect</Link>
        </Nav>
      </Wrapper>
    );
  }
};

export { HomeNavigation };
