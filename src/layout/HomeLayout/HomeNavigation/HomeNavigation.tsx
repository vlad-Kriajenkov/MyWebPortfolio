import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import {
  Wrapper,
  Link,
  WrapperBurger,
  Nav,
  Name,
} from './HomeNavigation.styled';
import { useMediaQuery } from 'react-responsive';

const HomeNavigation = () => {
  const [handelBurger, setHandelBurger] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 420px)' });
  const hadelMenu = () => {
    setHandelBurger(!handelBurger);
  };
  const closeBurger = () => {
    setHandelBurger(false);
  };

  if (isMobile) {
    return (
      <Wrapper>
        <Name>krajenkov-vladislav</Name>

        {handelBurger ? (
          <WrapperBurger>
            <IoMdClose onClick={hadelMenu} width="1.2rem" />
          </WrapperBurger>
        ) : (
          <WrapperBurger>
            <RxHamburgerMenu onClick={hadelMenu} />
          </WrapperBurger>
        )}

        <Nav className={handelBurger ? 'active' : ''}>
          <Link onClick={closeBurger} to="/">
            _home
          </Link>
          <Link onClick={closeBurger} to="/about">
            _about
          </Link>
          <Link onClick={closeBurger} to="/progect">
            _progect
          </Link>
          <Link onClick={closeBurger} to="/contact">
            _contact-me
          </Link>
        </Nav>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Name>krajenkov-vladislav</Name>

        <Nav className={handelBurger ? 'active' : ''}>
          <Link onClick={closeBurger} to="/">
            _home
          </Link>
          <Link onClick={closeBurger} to="/about">
            _about
          </Link>
          <Link onClick={closeBurger} to="/progect">
            _progect
          </Link>
          <Link onClick={closeBurger} to="/contact">
            _contact-me
          </Link>
        </Nav>
      </Wrapper>
    );
  }
};

export { HomeNavigation };
