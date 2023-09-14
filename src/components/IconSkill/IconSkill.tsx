import React, { useState } from 'react';
import Sprite from 'assets/img/skills/sprite.svg';

import { Container, LogoWrap, Info } from './IconSkill.stuled';
type Props = {
  name: string;
  idIcon: string;
  top: string;
  left: string;
};
const IconSkill = ({ name, idIcon, top, left }: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container top={top} left={left}>
      <LogoWrap
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <svg>
          <use href={Sprite + `${idIcon}`}></use>
        </svg>
      </LogoWrap>
      {isOpen && (
        <Info>
          <p>{name}</p>
        </Info>
      )}
    </Container>
  );
};

export { IconSkill };
