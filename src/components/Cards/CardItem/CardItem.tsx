import React, { PropsWithChildren } from 'react';

import { Container, WrapperCard } from './CardItem.styled';
import { ButtonBack } from 'components';

interface Props {
  btnNamePageClose: string;
  nameLinkBackPage: string;
}
const CardItem = ({
  btnNamePageClose,
  nameLinkBackPage,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Container>
      <ButtonBack
        contentText={btnNamePageClose}
        navigationPage={nameLinkBackPage}
      />
      <WrapperCard>{children}</WrapperCard>
    </Container>
  );
};

export { CardItem };
