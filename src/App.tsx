import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeLayout, AboutLayout, AboutProfessionalLayout } from './layout';
import { AboutPersonal, AboutHobbies, Frilance } from 'page/about';
import Home from './page/home/Home';
// import About from 'page/about/About';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutLayout />}>
            <Route path="professional" element={<AboutProfessionalLayout />}>
              <Route path="frilance" element={<Frilance />} />
              <Route path="skills" />
              <Route path="certificates" />
            </Route>
            <Route path="personal" element={<AboutPersonal />} />
            <Route path="hobbies" element={<AboutHobbies />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
