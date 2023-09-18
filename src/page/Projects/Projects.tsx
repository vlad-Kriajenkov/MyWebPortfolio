import { CheckBox, PageNameLayout } from 'components';
import { log } from 'console';
import React, { useState } from 'react';

const Projets = () => {
  const Arry = [
    {
      name: 'BEM',
      nameIcon: '#icon-Bem',
    },
    {
      name: 'HTML5',
      nameIcon: '#icon-Html5',
    },
    {
      name: 'JavaScripr',
      nameIcon: '#icon-Js',
    },
    {
      name: 'TypeScript',
      nameIcon: '#icon-Typescript',
    },
    {
      name: 'jQuery',
      nameIcon: '#icon-jQuery',
    },
    {
      name: 'React',
      nameIcon: '#icon-React',
    },
    {
      name: 'MUI',
      nameIcon: '#icon-Mui',
    },
    {
      name: 'Vue',
      nameIcon: '#icon-Vue',
    },
    {
      name: 'Mongodb',
      nameIcon: '#icon-Mongodb',
    },
    {
      name: 'Nodejs',
      nameIcon: '#icon-Nodejs',
    },
  ];

  const [filterSetings, setFilterSetings] = useState(['']);

  const handelEven = (name: string) => {
    const newFilter = filterSetings.filter(item => item !== name)
    
    setFilterSetings(newFilter);
  };

  console.log(filterSetings);

  return (
    <>
      <PageNameLayout name="projets-info">
        {Arry.map(({ name, nameIcon }) => {
          return (
            <CheckBox
              key={name}
              lable={name}
              idIcon={nameIcon}
              handelEven={handelEven}
            />
          );
        })}
      </PageNameLayout>

      {filterSetings}
    </>
  );
};
export default Projets;
