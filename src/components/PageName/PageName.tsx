import React from 'react';
import { Cotainer,PageWrapper, Page } from './PageName.styled';
import { IoClose } from 'react-icons/io5';

type Props = {
  lable: string;
};

const PageName = (props: Props) => {
  const { lable } = props;

  return (
    <Cotainer>
      <PageWrapper>
        <Page>{lable}</Page>
        <IoClose />
      </PageWrapper>
    </Cotainer>
  );
};

export { PageName };
