import React from 'react';
import { nanoid } from 'nanoid';
import { MenuDropdown, MenuItem } from 'components';
import { Container, Wrapper } from './MenuGroups.styled';
import { Outlet } from 'react-router-dom';

interface Props {
  linkArray: {
    name: string;
    info: {
      patch: string;
      name: string;
    }[];
  }[];
  lable: string;
}

const MenuGroups = ({ linkArray, lable }: Props) => {
  return (
    <Container>
      <Wrapper>
        <MenuDropdown lable={lable} titlePageLink={true} typeLinks={true}>
          {linkArray.map(({ name, info }) => {
            return (
              <MenuDropdown key={nanoid()} lable={name} titlePageLink={false}>
                {info.map(({ patch, name }) => (
                  <MenuItem key={name} patch={patch} name={name}></MenuItem>
                ))}
              </MenuDropdown>
            );
          })}
        </MenuDropdown>
      </Wrapper>

      <Outlet />
    </Container>
  );
};

export { MenuGroups };
