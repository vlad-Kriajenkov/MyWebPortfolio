import React from 'react';
import { Cotainer, PageWrapper, Page } from './PageName.styled';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
type Props = {
  lable: string;
};

const PageName = (props: Props) => {
  const { lable } = props;
  const navigate = useNavigate();
  return (
    <Cotainer>
      <PageWrapper>
        <Page>{lable}</Page>
        <IoClose onClick={() => navigate(-1)} />
      </PageWrapper>
    </Cotainer>
  );
};

export { PageName }; 
