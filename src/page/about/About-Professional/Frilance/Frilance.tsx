import React from 'react';
import { CardItem, CardContent } from 'components';
import { nanoid } from 'nanoid';
import expData from 'assets/json/experiance.json';
const Frilance = () => {
  const newExpData = expData.filter(
    ({ placeWork }) => placeWork === 'frilance'
  );
  return (
    <>
      <CardItem btnNamePageClose="Frilance">
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

export { Frilance };
