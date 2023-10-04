import React from 'react';
import { nanoid } from 'nanoid';
import { Container, WrapperCard } from './Cpaecom.styled';
import { CardInfo, PageName } from 'components';
import ExpData from 'assets/json/experiance.json';
const Cpaecom = () => {
  const { capecom } = ExpData;

  return (
    <Container>
      <PageName lable="Cpaecom" /> 
      <WrapperCard>
        {capecom.map(({ positioned, time, stac, responsibility }) => {
          return (
            <CardInfo
              key={nanoid()}
              positioned={positioned}
              time={time}
              stac={stac}
              responsibility={responsibility}
            />
          );
        })}
      </WrapperCard>
    </Container>
  );
};

export { Cpaecom };
