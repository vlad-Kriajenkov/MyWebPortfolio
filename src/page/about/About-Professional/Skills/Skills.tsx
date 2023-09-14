import React from 'react';
import { Container, SkillAll } from './Skills.styled';
import { IconSkill, PageName } from 'components';
import skillsData from 'assets/json/skills.json';
import { nanoid } from 'nanoid';
const Skills = () => {
  return (
    <Container>
      <PageName lable="All" />

      <SkillAll>
        {skillsData.map(({ name, nameIcon, top, left }) => {
          return <IconSkill key={nanoid()} name={name} idIcon={nameIcon} top={top} left={left} />;
        })}
      </SkillAll>
    </Container>
  );
};
export { Skills };
