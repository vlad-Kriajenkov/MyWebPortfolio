import React from 'react';
import { Outlet } from 'react-router';
import { Conatainer, Nav } from './AboutLayout.styles';
import { MenuGroups } from 'components';
import linkPersonal from 'assets/json/linkPersonal.json';
import linkProfessional from 'assets/json/linkProfessional.json';

const AboutLayout = () => {
  return (
    <Conatainer>
      <Nav>
        <MenuGroups linkArray={linkPersonal} lable="personl-info" />
        <MenuGroups linkArray={linkProfessional} lable="professional-info" />
      </Nav>
      <div>
        <Outlet />
      </div>
    </Conatainer>
  );
};
export default AboutLayout;
