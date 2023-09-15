import { PageName } from 'components';
import React, { useEffect, useState } from 'react';
import { Wrapper } from './AboutMe.styled';
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
    <>
      <PageName lable="About-me" />
      <Wrapper>
        <ul>
          {arryNumber.map(item => {
            return <li>{item}</li>;
          })}
        </ul>
        <p>
          About me I have 5 years of еxperience in web development lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit
          anim id est laborum.
        </p>
      </Wrapper>
    </>
  );
};

export default AboutMe;
