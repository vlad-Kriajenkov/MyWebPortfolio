import React from 'react';
import { nanoid } from 'nanoid';
import { Container, WrapperCard } from './Frilance.styled';
import { CardInfo, PageName } from 'components';
import ExpData from 'assets/json/experiance.json';
const Frilance = () => {
  const { frilance } = ExpData;

  return (
    <Container>
      <PageName lable="Frilance" />
      <WrapperCard>
        {frilance.map(({ positioned, time, stac, responsibility }) => {
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

export { Frilance };
