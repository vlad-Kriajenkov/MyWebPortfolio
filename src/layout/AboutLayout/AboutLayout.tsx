import React from 'react';
import { Outlet } from 'react-router';

import { FaGamepad } from 'react-icons/fa';
import { MdFolderShared, MdFolderSpecial } from 'react-icons/md';

import { Conatainer, Nav, Link } from './AboutLayout.styles';
const AboutLayout = () => {
  return (
    <Conatainer>
      <Nav>
        <Link to="/about/professional">
          <MdFolderSpecial />
        </Link>
        <Link to="/about/personal">
          <MdFolderShared />
        </Link>
        <Link to="/about/hobbies">
          <FaGamepad />
        </Link>
      </Nav>
      <Outlet />
    </Conatainer>
  );
};

export { AboutLayout };
// TbFolderCode
