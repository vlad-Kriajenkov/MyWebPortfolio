import React, { PropsWithChildren } from 'react';
import { Container, Title, WrapperMenu,WrapperLayout } from './PageNameLayout.styled';
import { BiSolidDownArrow } from 'react-icons/bi';
import { Outlet } from 'react-router';
type Props = {
  name: string;
};
const PageNameLayout = (props: PropsWithChildren<Props>) => {
  const { children, name } = props;

  return (
    <>
      <Container>
        <Title>
          <BiSolidDownArrow />
          <p>{name}</p>
        </Title>
        <WrapperMenu>{children}</WrapperMenu>
      </Container>
      <WrapperLayout >
        <Outlet />
      </WrapperLayout>
    </>
  );
};
export { PageNameLayout };
