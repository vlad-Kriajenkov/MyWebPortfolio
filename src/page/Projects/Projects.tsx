import { CardProject, CheckBox, PageNameLayout } from 'components';
import { Container, WrapperProject, Box, Info } from './Projects.styled';
import React, { useCallback, useEffect, useState } from 'react';
import IconArrya from 'assets/json/icon.json';
import ProjectArrya from 'assets/json/project.json';

interface Item {
  id: number;
  nameProject: string;
  about: string;
  info: {
    frameWork: string;
    technology: string[];
    linkGit: string;
    linkWeb: string;
  };
}

const Projets = () => {
  const [filterSetings, setFilterSetings] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Item[]>([]);
  const [check, setCheck] = useState(false);

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
    const arrays = ProjectArrya.filter(item =>
      item.info.technology.some(technology =>
        filterSetings.includes(technology)
      )
    );

    setFilteredProjects(arrays);
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
        {filterSetings.length === 0 ? (
          ProjectArrya.map(({ id, nameProject, info }) => {
            return (
              <Box key={id}>
                <CardProject id={id} nameProject={nameProject} info={info} />
              </Box>
            );
          })
        ) : filteredProjects.length === 0 ? (
          <Info>There's no match :( </Info>
        ) : (
          filteredProjects.map(({ id, nameProject, info }) => {
            return (
              <Box key={id}>
                <CardProject id={id} nameProject={nameProject} info={info} />
              </Box>
            );
          })
        )}
      </WrapperProject>
    </Container>
  );
};
export default Projets;
