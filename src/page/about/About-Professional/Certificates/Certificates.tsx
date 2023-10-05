import React from 'react';
import { Conatiner, WrapperCard } from './Certificates.styled';
import {  CardItem } from 'components';
import { CardCertificats } from 'components/Cards/CardCertificats';
const Certificates = () => {
  return (
    <CardItem btnNamePageClose="certificates">
      <CardCertificats />
    </CardItem>
  );
};

export { Certificates };
