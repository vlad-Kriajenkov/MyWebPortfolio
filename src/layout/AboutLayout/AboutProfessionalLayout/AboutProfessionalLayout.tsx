import React from 'react';

import { BiSolidDownArrow } from 'react-icons/bi';
import { MenuDropdown, MenuItem } from 'components';

import {
  Container,
  Title,
  WrapperMenu,
} from './AboutProfessionalLayout.styled';
import { Outlet } from 'react-router';
type Item = {
  patch: string;
  name: string;
};
const experience: Item[] = [
  { patch: 'frilance', name: 'Frilance' },
  { patch: 'cpaecom', name: 'Cpaecom' },
];
const skills: Item[] = [{ patch: 'skills', name: 'All' }];
const certificates: Item[] = [{ patch: 'udemi', name: 'Udemi' }];
const AboutProfessionalLayout = () => {
  return (
    <>
      <Container>
        <Title>
          <BiSolidDownArrow />
          <p>professional-info</p>
        </Title>
        <WrapperMenu>
          <MenuDropdown lable="experience">
            {experience.map(({ patch, name }) => (
              <MenuItem key={name} patch={patch} name={name}></MenuItem>
            ))}
          </MenuDropdown>

          <MenuDropdown lable="skills">
            {skills.map(({ patch, name }) => (
              <MenuItem key={name} patch={patch} name={name}></MenuItem>
            ))}
          </MenuDropdown>

          <MenuDropdown lable="certificates">
            {certificates.map(({ patch, name }) => (
              <MenuItem key={name} patch={patch} name={name}></MenuItem>
            ))}
          </MenuDropdown>
        </WrapperMenu>
      </Container>
      <Outlet />
    </>
  );
};
export { AboutProfessionalLayout };
