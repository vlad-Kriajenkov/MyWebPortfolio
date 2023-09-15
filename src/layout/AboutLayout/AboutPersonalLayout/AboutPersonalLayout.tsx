import { MenuDropdown, MenuItem, PageNameLayout } from 'components';
import React from 'react';
 

const AboutPersonalLayout = () => {
  return (
    <>
      <PageNameLayout name="personal-info">
        <MenuDropdown lable="About-me">
          <MenuItem patch="about_me" name="About-me" />
        </MenuDropdown>
      </PageNameLayout>
      
    </>
  );
};
export { AboutPersonalLayout };
