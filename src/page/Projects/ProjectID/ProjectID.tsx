import React, { useEffect, useState } from 'react';
import {
  Container,
  WrapperNameProject,
  WrapperInfo,
  SubTitle,
  TechnologyList,
  TechnologyItem,
  TextAbout,
  ButtonWeb,
  ContainerProjectInfo,
} from './ProjectID.styled';

import { useParams } from 'react-router-dom';
import ProjetArray from 'assets/json/project.json';
import { nanoid } from 'nanoid';
import { ButtonBack } from 'components';
 

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
const ProjectID = () => {
  const [project, setProject] = useState<Item>();
  let { id } = useParams();

  useEffect(() => {
    const Project = ProjetArray.filter(item => item.id === Number(id));
    setProject(Project[0]);
  }, [id]);

  return (
    <Container>
      <ButtonBack contentText='Back'/>
      <ContainerProjectInfo>
        <WrapperInfo>
          <div>
            <SubTitle>About</SubTitle>
            <TextAbout> {project?.about}</TextAbout>
          </div>
          <div>
            <SubTitle>Technology</SubTitle>
            <TechnologyList>
              {project?.info.technology.map(item => {
                return <TechnologyItem key={nanoid()}>{item}</TechnologyItem>;
              })}
            </TechnologyList>
          </div>
          <div>
            <ButtonWeb href={project?.info.linkGit}>
              <span>link-GitHub</span>
            </ButtonWeb>
            <ButtonWeb href={project?.info.linkWeb}>
              <span>linkWeb</span>
            </ButtonWeb>
          </div>
        </WrapperInfo>
        <WrapperNameProject>
          <h2>{project?.nameProject}</h2>
        </WrapperNameProject>
      </ContainerProjectInfo>
    </Container>
  );
};
export default ProjectID;
