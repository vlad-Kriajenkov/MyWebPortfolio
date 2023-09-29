import React from 'react';

import { MenuDropdown, MenuItem, PageNameLayout } from 'components';

type Item = {
  patch: string;
  name: string;
};
const experience: Item[] = [
  { patch: 'frilance', name: 'Frilance' },
  { patch: 'cpaecom', name: 'Cpaecom' },
];
const skills: Item[] = [{ patch: 'skills', name: 'All' }];
const certificates: Item[] = [{ patch: 'certificates', name: 'Certificates' }];
const AboutProfessionalLayout = () => {
  return (
    <>
      <PageNameLayout name="professional-info" outlet={true}>
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
      </PageNameLayout>
    </>
  );
};
export { AboutProfessionalLayout };
