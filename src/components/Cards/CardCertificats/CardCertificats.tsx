import React from 'react';
import { Card } from '../Card/Card';
import ImgSert from 'assets/img/Certificats/UdemiJS.jpeg';

import { Wrapper, InfoList } from './CardCertificats.styled';
const CardCertificats = () => {
  return (
    <Card>
      <Wrapper>
        <img src={ImgSert} alt="ImgSert" />
      </Wrapper>
      <InfoList>
        <li>
          <p>Platform:</p>Udemi
        </li>
        <li>
          <p>Curs:</p> Java Script
        </li>
        <li>
          <p>Data-End:</p> June 11, 2023
        </li>
      </InfoList>
    </Card>
  );
};
export { CardCertificats };
