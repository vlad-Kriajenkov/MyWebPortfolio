import React from 'react';
import { CardItem, CardContent } from 'components';
import { nanoid } from 'nanoid';
import expData from 'assets/json/experiance.json';
const Freelance = () => {
  const newExpData = expData.filter(
    ({ placeWork }) => placeWork === 'freelance'
  );
  return (
    <>
      <CardItem btnNamePageClose="Freelance">
        {newExpData.map(({ positioned, time, stac, responsibility }) => {
          return (
            <CardContent
              key={nanoid()}
              positioned={positioned}
              time={time}
              stac={stac}
              responsibility={responsibility}
            />
          );
        })}
      </CardItem>
    </>
  );
};

export default Freelance;
