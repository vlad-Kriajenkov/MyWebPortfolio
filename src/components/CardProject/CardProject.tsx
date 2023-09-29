import React from 'react';

import {
  Card,
  WrapperImg,
  WrapperIcon,
  WrapperInfo,
} from './CardProject.styled';

import { DiReact } from 'react-icons/di';
import { BiLogoVuejs } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

interface Props {
  id: number;
  nameProject: string;
  info: {
    frameWork: string;
  };
}

const CardProject = (props: Props) => {
  const { id, nameProject, info } = props;

  return (
    <Card>
      <div>
        <WrapperImg>
          {/* <img src={ImgProject} alt="ImgProject" /> */}
          <WrapperIcon>
            {info.frameWork === 'react' ? <DiReact /> : <BiLogoVuejs />}
          </WrapperIcon>
        </WrapperImg>
        <WrapperInfo>
          <h2>{nameProject}</h2>
          <NavLink to={`${id}`}>view-project</NavLink>
        </WrapperInfo>
      </div>
    </Card>
  );
};

export { CardProject };
// DiReact
