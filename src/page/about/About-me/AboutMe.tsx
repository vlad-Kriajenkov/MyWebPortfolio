import React, { useEffect, useState } from 'react';
import { ButtonBack } from 'components';
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
    genereiteArryNumber(29);
  }, []);

  return (
    <FlexBox>
      <ButtonBack contentText="About-me" navigationPage='/about'/>
      <Container>
        <Wrapper>
          <Number>
            {arryNumber.map(item => {
              return <li key={nanoid()}>{item}</li>;
            })}
          </Number>

          <div>
            <Title> About me</Title>

            <Text>
              Hello, I'm Krajenkov Vlad, a passionate front-end web developer
              with expertise in tools and technologies like React, Redux
              Toolkit, Vue(2), Vuex, TypeScript, Material UI, and CSS3.
              <br /> <br />
              With a solid foundation in front-end development, I specialize in
              creating intuitive and user-friendly interfaces, developing
              responsive web applications, integrating APIs and optimizing
              performance through efficient code implementation.
              <br />
              <br />I thrive incollaborative environments and enjoy working
              withmultidisciplinary teams to solve complex problems and deliver
              high-quality solutions. With a keen eye for detail and a passion
              for continuous learning, I am committed to delivering exceptional
              results.
              <br />
              <br />
              Let's connect! Feel free to reach out to explore potential
              collaborations or discuss how we can drive innovation together.
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
