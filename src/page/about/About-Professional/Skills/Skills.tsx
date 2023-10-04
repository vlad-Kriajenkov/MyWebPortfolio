import React from 'react';
import { Container, SkillAll, Wrapper, Back } from './Skills.styled';
import { IconSkill, PageName } from 'components';
import skillsData from 'assets/json/skills.json';
import { nanoid } from 'nanoid';
const Skills = () => {
  return (
    <Container>
      <PageName lable="All" />

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
export { Skills };
