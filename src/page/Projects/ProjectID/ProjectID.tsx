import React, { useEffect, useState } from 'react';
import { Container, WrapperSlider, WrapperInfo } from './ProjectID.styled';
import ImgP from 'assets/img/projject/pImg.jpeg';
import { useParams } from 'react-router-dom';
import ProjetArray from 'assets/json/project.json';

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
      <WrapperSlider>
        <img src={ImgP} alt="" />
      </WrapperSlider>
      <WrapperInfo>
        <h2>
          <span>Name-Project: {project?.nameProject}</span>
        </h2>
        <p>
          <span>About:{project?.about}</span>
        </p>
        <div>
          <p>Technology</p>
          <ul>{project?.info.technology.map(item => item)}</ul>
        </div>
        <div>
          <a href={project?.info.linkGit}>linkGit</a>
          <a href={project?.info.linkWeb}>linkWeb</a>
        </div>
      </WrapperInfo>
    </Container>
  );
};
export default ProjectID;
