import React, { PropsWithChildren } from 'react';
import {CardWrap} from './Card.styled'
const Card = (props: PropsWithChildren) => {
  const { children } = props;
  return <CardWrap>{children}</CardWrap>;
};

export { Card };
