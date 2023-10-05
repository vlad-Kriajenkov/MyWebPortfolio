import React, { PropsWithChildren } from 'react';

import { Container, WrapperCard } from './CardItem.styled';
import { ButtonBack } from 'components';

interface Props {
  btnNamePageClose: string;
}
const CardItem = ({ btnNamePageClose, children }: PropsWithChildren<Props>) => {
  return (
    <Container>
      <ButtonBack contentText={btnNamePageClose} />
      <WrapperCard>{children}</WrapperCard>
    </Container>
  );
};

export { CardItem };
