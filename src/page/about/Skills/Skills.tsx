import React from 'react';
import {
  Container,
  SkillAll,
  Wrapper,
  Back,
  WrapperScils,
  FlexBox,
} from './Skills.styled';
import { ButtonBack, IconSkill } from 'components';
import skillsData from 'assets/json/skills.json';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';

import Sprite from 'assets/img/skills/sprite.svg';

const Skills = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  if (isTablet) {
    return (
      <Container>
        <ButtonBack contentText="All" navigationPage="/about" />
        <FlexBox>
          {skillsData.map(({ name, nameIcon }) => {
            return (
              <WrapperScils key={name}>
                <svg>
                  <use href={Sprite + `${nameIcon}`}></use>
                </svg>
                <h2>{name}</h2>
              </WrapperScils>
            );
          })}
        </FlexBox>
      </Container>
    );
  }

  return (
    <Container>
      <ButtonBack contentText="All" navigationPage="/about" />

      <Back>
        <SkillAll>
          <Wrapper>
            {skillsData.map(({ name, nameIcon, top, left }) => {
              return (
                <IconSkill
                  key={nanoid()}
                  name={name}
                  idIcon={nameIcon}
                  top={top}
                  left={left}
                />
              );
            })}
          </Wrapper>
        </SkillAll>
      </Back>
    </Container>
  );
};
export default Skills;
