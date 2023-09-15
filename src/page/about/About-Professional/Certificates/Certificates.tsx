import React from 'react';
import { Conatiner, WrapperCard } from './Certificates.styled';
import { PageName } from 'components';
import { CardCertificats } from 'components/CardCertificats/CardCertificats';
const Certificates = () => {
  return (
    <Conatiner>
      <PageName lable="certificates" />
      <WrapperCard>
        <CardCertificats />
      </WrapperCard>
    </Conatiner>
  );
};

export { Certificates };
