import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {
  Card,
  Titile,
  Description,
  DescriptionList,
  DescriptionItem,
  ScilList,
  ScilItem,
} from './CardExperience.styled';
import { nanoid } from 'nanoid';

type Props = {
  positioned: string;
  time: string;
  stac: string[];
  responsibility: string[];
};

const CardExperience = ({ positioned, time, stac, responsibility }: Props) => {
  return (
    <Card>
      <span>
        <Titile>
          <FiChevronDown /> Position
        </Titile>
        <Description>{positioned}</Description>
      </span>

      <span>
        <Titile>
          <FiChevronDown /> Time
        </Titile>
        <Description> {time}</Description>
      </span>
      <span>
        <Titile>
          <FiChevronDown /> Stac
        </Titile>
        <ScilList>
          {stac.map(item => {
            return <ScilItem key={nanoid()}>{item} /</ScilItem>;
          })}
        </ScilList>
      </span>
      <span>
        <Titile>
          <FiChevronDown /> responsibility:
        </Titile>
        <DescriptionList>
          {responsibility.map(item => {
            return <DescriptionItem key={nanoid()}>- {item};</DescriptionItem>;
          })}
        </DescriptionList>
      </span>
    </Card>
  );
};

export { CardExperience };
