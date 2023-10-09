import React from 'react';
import { MenuGroups } from 'components';
import linkProfessional from 'assets/json/linkProfessional.json';

const AboutProfessionalLayout = () => {
  return <MenuGroups linkArray={linkProfessional} lable="professional-info" />;
};
export default AboutProfessionalLayout ;
