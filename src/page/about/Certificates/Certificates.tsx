import React from 'react';

import { CardItem } from 'components';
import { CardCertificats } from 'components/Cards/CardCertificats';
const Certificates = () => {
  return (
    <CardItem btnNamePageClose="certificates" nameLinkBackPage="/about">
      <CardCertificats />
    </CardItem>
  );
};

export default Certificates;
