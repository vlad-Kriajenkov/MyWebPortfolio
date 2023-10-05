import React, { useEffect, useState } from 'react';
import {
  Container,
  WrapperSlider,
  WrapperInfo,
  SubTitle,
  TechnologyList,
  TechnologyItem,
} from './ProjectID.styled';

import { useParams } from 'react-router-dom';
import ProjetArray from 'assets/json/project.json';
import { nanoid } from 'nanoid';

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
  console.log(project);

  return (
    <Container>
      <WrapperInfo>
        <div>
          <SubTitle>About</SubTitle>
          {project?.about}
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
          <a href={project?.info.linkGit}>linkGit</a>
          <a href={project?.info.linkWeb}>linkWeb</a>
        </div>
      </WrapperInfo>
      <WrapperSlider>
        <h2>{project?.nameProject}</h2>
      </WrapperSlider>
    </Container>
  );
};
export default ProjectID;
