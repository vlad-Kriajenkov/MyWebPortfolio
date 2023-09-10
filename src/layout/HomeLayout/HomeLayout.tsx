import React from 'react';
import { Outlet } from 'react-router';
import { Conatainer } from './HomeLayout.styled';
import { HomeNavigation, HomeFooter } from './index';
const HomeLayout = () => {
  return (
    <Conatainer>
      <header>
        <HomeNavigation />
      </header>

      <Outlet />

      <footer>
        <HomeFooter />
      </footer>
    </Conatainer>
  );
};

export { HomeLayout };
