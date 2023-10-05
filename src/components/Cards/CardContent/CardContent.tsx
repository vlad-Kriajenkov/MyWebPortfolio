import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import {
  Titile,
  Description,
  DescriptionList,
  DescriptionItem,
  ScilList,
  ScilItem,
} from './CardContent.styled';
import { nanoid } from 'nanoid';
import { CardWrap } from '../Card/Card.styled';

type Props = {
  positioned: string;
  time: string;
  stac: string[];
  responsibility: string[];
};

const CardContent = ({ positioned, time, stac, responsibility }: Props) => {
  return (
    <CardWrap>
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
          <FiChevronDown /> Responsibility:
        </Titile>
        <DescriptionList>
          {responsibility.map(item => {
            return <DescriptionItem key={nanoid()}>- {item};</DescriptionItem>;
          })}
        </DescriptionList>
      </span>
    </CardWrap>
  );
};

export { CardContent };
