import React, { FC, useEffect, useState } from 'react';
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
import { useSearchParams } from 'react-router-dom';

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

const Projets: FC = () => {
  const [filter, setFilter] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Item[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const filterParms = searchParams.get('filter')?.split(',');

    if (filterParms === undefined || filterParms[0] === '') {
      setSearchParams({ filter: `${filter}` });
    } else {
      setFilter(filterParms);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEven = (skills: string) => {
    const dublicateSkills = filter?.includes(skills);

    if (dublicateSkills) {
      setFilter(prevState => prevState.filter(item => item !== skills));
    } else {
      setFilter(prevState => [...prevState, skills]);
    }
    
  };

  useEffect(() => {
    setSearchParams({ filter: `${filter}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    const filterParms = searchParams.get('filter')?.split(',');
    const arrays = ProjectArrya.filter(item =>
      item.info.technology.some(technology => filterParms?.includes(technology))
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
                />
              );
            })}
          </WrapperCgeckBox>
        </MenuDropdown>
      </WrapperFilter>

      <WrapperProject>
        {filter.length === 0 ? (
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
