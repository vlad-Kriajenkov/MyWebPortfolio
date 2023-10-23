import React from 'react';
import { Route, Routes } from 'react-router-dom';

const HomeLayout = React.lazy(() => import('layout/HomeLayout/HomeLayout'));
const Home = React.lazy(() => import('./page/home/Home'));
const AboutLayout = React.lazy(() => import('layout/AboutLayout/AboutLayout'));

const Freelance = React.lazy(() => import('page/about/Freelance/Freelance'));
const Cpaecom = React.lazy(() => import('page/about/Cpaecom/Cpaecom'));
const Skills = React.lazy(() => import('page/about/Skills/Skills'));
const Certificates = React.lazy(
  () => import('page/about/Certificates/Certificates')
);

const AboutMe = React.lazy(() => import('page/about/About-me/AboutMe'));
const Projets = React.lazy(() => import('page/Projects/Projects'));
const ProjectID = React.lazy(() => import('page/Projects/ProjectID/ProjectID'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutLayout />}>
          <Route path="freelance" element={<Freelance />} />
          <Route path="cpaecom" element={<Cpaecom />} />
          <Route path="skills" element={<Skills />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="about_me" element={<AboutMe />} />
        </Route>
        <Route path="/project" element={<Projets />} />
        <Route path="/project/:id" element={<ProjectID />} />
      </Route>
    </Routes>
  );
}

export default App;
