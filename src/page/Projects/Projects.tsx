import { CardProject, CheckBox, PageNameLayout } from 'components';
import { Container, WrapperProject, Box } from './Projects.styled';
import React, { useCallback, useEffect, useState } from 'react';
import IconArrya from 'assets/json/icon.json';
import ProjectArrya from 'assets/json/project.json';
const Projets = () => {
  const [filterSetings, setFilterSetings] = useState<string[]>([]);

  const handelEven = useCallback(
    (nameFilter: string) => {
      const filterDublicate = filterSetings.includes(nameFilter);
      if (filterDublicate) {
        setFilterSetings(filterSetings.filter(item => item !== nameFilter));
        return;
      } else {
        setFilterSetings([...filterSetings, nameFilter]);
        return;
      }
    },
    [filterSetings]
  );

  useEffect(() => {
    ProjectArrya.map(({ info }) => {
      console.log(info.technology);
      console.log(filterSetings);
    });
  }, [filterSetings]);

  return (
    <Container>
      <PageNameLayout name="projets-info">
        {IconArrya.map(({ name, nameIcon }) => {
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

      <WrapperProject>
        {ProjectArrya.map(({ id, nameProject, info }) => {
          return (
            <Box key={id}>
              <CardProject id={id} nameProject={nameProject} info={info} />
            </Box>
          );
        })}
      </WrapperProject>
    </Container>
  );
};
export default Projets;
