import React from 'react';

import { Wrapper, Link, Nav, Name } from './HomeNavigation.styled';
const HomeNavigation = () => {
  return (
    <Wrapper>
      <Name>krajenkov-vladislav</Name>
      <Nav>
        <Link to="/">_home</Link>
        <Link to="/about">_about</Link>
        <Link to="/progect">_progect</Link>
        <Link to="/contact">_contact-me</Link>
      </Nav>
    </Wrapper>
  );
};

export { HomeNavigation };
