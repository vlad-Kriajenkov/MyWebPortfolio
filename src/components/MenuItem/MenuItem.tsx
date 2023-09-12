import React from 'react';
import { BsFillFileEarmarkFill } from 'react-icons/bs';
import {Container, Link } from './MenuItem.styled';
type Props = {
  patch: string;
  name: string;
};

const MenuItem = (props: Props) => {
  const { name, patch } = props;
  return (
    <Container>
      <BsFillFileEarmarkFill />
      <Link to={patch}>{name}</Link>
    </Container>
  );
};

export { MenuItem };
