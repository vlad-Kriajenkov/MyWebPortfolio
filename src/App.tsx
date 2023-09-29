import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import {
  HomeLayout,
  AboutLayout,
  AboutProfessionalLayout,
  AboutPersonalLayout,
} from './layout';
import { Frilance, Cpaecom, Skills } from 'page/about';
import Home from './page/home/Home';
import { Certificates } from 'page/about/About-Professional/Certificates/Certificates';
import AboutMe from 'page/about/About-Personal/About-me/AboutMe';
import Projets from 'page/Projects/Projects';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutLayout />}>
            <Route path="professional" element={<AboutProfessionalLayout />}>
              <Route path="frilance" element={<Frilance />} />
              <Route path="cpaecom" element={<Cpaecom />} />
              <Route path="skills" element={<Skills />} />
              <Route path="certificates" element={<Certificates />} />
            </Route>
            <Route path="personal" element={<AboutPersonalLayout />}>
              <Route path="about_me" element={<AboutMe />} />
            </Route>
          </Route>
          <Route path="progect" element={<Projets />} />
          <Route path="progect/:id" element={<Projets />} />

        </Route>
      </Routes>
    </Container>
  );
}

export default App;
