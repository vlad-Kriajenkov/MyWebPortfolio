import { PageName } from 'components';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FlexBox,
  Container,
  Number,
  Title,
  Text,
  Wrapper,
  List,
} from './AboutMe.styled';
const AboutMe = () => {
  const [arryNumber, setArryNumber] = useState<string[]>([]);

  useEffect(() => {
    const genereiteArryNumber = (number: number) => {
      let arr = [];
      for (let index = 1; index <= number; index++) {
        const q = String(index);
        arr.push(q);
        setArryNumber(arr);
      }
    };
    genereiteArryNumber(17);
  }, []);

  return (
    <FlexBox>
      <PageName lable="About-me"   />
      <Container>
        <Wrapper>
          <Number >
            {arryNumber.map(item => {
              return <li key={nanoid()}>{item}</li>;
            })}
          </Number>

          <div>
            <Title> About me</Title>

            <Text>
              I have 1 year and 6 months of IT experience under my belt. During
              this time I realized 3 projects on Freelance, two projects were
              made for Ukraine, 1 for UK. More than a year worked in a company
              on the position of HTML-Delevoper. I work fully on two frameworks
              (Vue / React). In my spare time I do my own pet-projects
            </Text>
          </div>
        </Wrapper>
        <Wrapper>
          <Number>
            {arryNumber.map(item => {
              return <li key={nanoid()}>{item}</li>;
            })}
          </Number>
          <div>
            <Title>SOFT SKILLS</Title>
            <List>
              <li>Teamwork</li>
              <li>Eager to learn</li>
              <li>Inquisitive</li>
              <li>Versatile</li>
            </List>
            <Title>LANGUAGE SKILLS</Title>
            <List>
              <li>Ukrainian - native</li>
              <li>English- Elementary(A2+)</li>
            </List>
          </div>
        </Wrapper>
      </Container>
    </FlexBox>
  );
};

export default AboutMe;
