import React from 'react';
import { nanoid } from 'nanoid';
import { MenuDropdown, MenuItem } from 'components';
import { Container } from './MenuGroups.styled';

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
    </Container>
  );
};

export { MenuGroups };
