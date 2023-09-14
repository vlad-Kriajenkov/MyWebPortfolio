import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import { HomeLayout, AboutLayout, AboutProfessionalLayout } from './layout';
import { AboutPersonal, AboutHobbies, Frilance, Cpaecom ,Skills} from 'page/about';
import Home from './page/home/Home';
 

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
              <Route path="skills"  element={<Skills/>}/>
              <Route path="certificates" />
            </Route>
            <Route path="personal" element={<AboutPersonal />} />
            <Route path="hobbies" element={<AboutHobbies />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
