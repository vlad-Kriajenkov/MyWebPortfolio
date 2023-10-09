import React from 'react';
import { Outlet } from 'react-router';
import { MdFolderShared, MdFolderSpecial } from 'react-icons/md';
import { Conatainer, Nav, Link } from './AboutLayout.styles';

const AboutLayout = () => {
  const handleLinkPageBack = (flag: string) => {
    localStorage.setItem('Page', `${flag}`);
  };
  return (
    <Conatainer>
      <Nav>
        <Link
          to="/about/professional"
          onClick={() => handleLinkPageBack('/about/professional')}
        >
          <MdFolderSpecial />
        </Link>
        <Link
          to="/about/personal"
          onClick={() => handleLinkPageBack('/about/personal')}
        >
          <MdFolderShared />
        </Link>
      </Nav>
      <Outlet />
    </Conatainer>
  );
};
export default AboutLayout;
