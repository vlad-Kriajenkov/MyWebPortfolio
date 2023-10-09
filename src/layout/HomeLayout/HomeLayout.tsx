import React from 'react';
import { Outlet } from 'react-router';
import { Conatainer } from './HomeLayout.styled';
import { HomeNavigation, HomeFooter } from './index';
const HomeLayout = () => {
  return (
    <Conatainer>
      <HomeNavigation />
      <main>
        <Outlet />
      </main>
      <HomeFooter />
    </Conatainer>
  );
};

export default HomeLayout;
