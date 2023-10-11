import React from 'react';
import { Outlet } from 'react-router';
import { Conatainer } from './HomeLayout.styled';
import { HomeNavigation, HomeFooter } from './index';
import { useMediaQuery } from 'react-responsive';
const HomeLayout = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });
  return (
    <Conatainer>
      <HomeNavigation />
      <main>
        <Outlet />
      </main>
      {isMobile ? <></> : <HomeFooter />}
    </Conatainer>
  );
}; 

export default HomeLayout;
