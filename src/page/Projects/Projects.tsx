import React, { useCallback, useEffect, useState } from 'react';
import { CardProject, CheckBox, MenuDropdown } from 'components';
import {
  Container,
  WrapperProject,
  Box,
  Info,
  WrapperFilter,
  WrapperCgeckBox,
} from './Projects.styled';
import IconArrya from 'assets/json/icon.json';
import ProjectArrya from 'assets/json/project.json';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
  const navigation = useNavigate();
  const [filterSetings, setFilterSetings] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Item[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterCheckActive, setfilterCheckActive] = useState<
    string[] | undefined
  >([]);
  console.log(filterSetings);
  console.log(filteredProjects);
 
  const handleEven = (nameSkills: string) => {
    const filterDublicate = filterSetings.includes(nameSkills);

    if (filterDublicate) {
      setFilterSetings(filterSetings.filter(item => item !== nameSkills));
      navigation(
        `?filter=${filterSetings.filter(item => item !== nameSkills)}`
      );
      return;
    } else {
      navigation(`?filter=${[...filterSetings, nameSkills]}`);
      setFilterSetings([...filterSetings, nameSkills]);
      return;
    }
  };
  useEffect(() => {
    const filterParms = searchParams.get('filter');
    const filters = filterParms?.split(',');
    setfilterCheckActive(filters);
    const arrays = ProjectArrya.filter(item =>
      item.info.technology.some(technology => filters?.includes(technology))
    );

    setFilteredProjects(arrays);
  }, [searchParams]);

  return (
    <Container>
      <WrapperFilter>
        <MenuDropdown
          lable="projets-info"
          titlePageLink={true}
          typeLinks={true}
        >
          <WrapperCgeckBox>
            {IconArrya.map(({ name, nameIcon }) => {
              return (
                <CheckBox
                  key={name}
                  label={name}
                  idIcon={nameIcon}
                  handleEven={handleEven}
                  filterCheckActive={filterCheckActive}
                />
              );
            })}
          </WrapperCgeckBox>
        </MenuDropdown>
      </WrapperFilter>

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
