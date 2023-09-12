import React from 'react';
import { Conatiner, About, Animation } from './home.styled';

import animationLmeowrbk from 'assets/json/animation_lmeowrbk.json'
import Lottie from "lottie-react";


const Home = () => {
  return (
    <Conatiner>
      <About>
        <p>Hi all. I am</p>
        <h1>Krajenkov Vladislav</h1>
        <h2> &gt; Junior Front-end Developer</h2>
        <p></p>
      </About>
      <Animation>
     
        <Lottie animationData={animationLmeowrbk}  loop={true}/>
      </Animation>
    </Conatiner>
  );
};

export default Home;
