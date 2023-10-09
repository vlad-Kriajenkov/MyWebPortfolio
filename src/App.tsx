import React from 'react';
import { Route, Routes } from 'react-router-dom';

const HomeLayout = React.lazy(() => import('layout/HomeLayout/HomeLayout'));
const Home = React.lazy(() => import('./page/home/Home'));
const AboutLayout = React.lazy(() => import('layout/AboutLayout/AboutLayout'));
const AboutProfessionalLayout = React.lazy(
  () => import('layout/AboutProfessionalLayout/AboutProfessionalLayout')
);
const Frilance = React.lazy(
  () => import('page/about/About-Professional/Frilance/Frilance')
);
const Cpaecom = React.lazy(
  () => import('page/about/About-Professional/Cpaecom/Cpaecom')
);
const Skills = React.lazy(
  () => import('page/about/About-Professional/Skills/Skills')
);
const Certificates = React.lazy(
  () => import('page/about/About-Professional/Certificates/Certificates')
);
const AboutPersonalLayout = React.lazy(
  () => import('layout/AboutPersonalLayout/AboutPersonalLayout')
);
const AboutMe = React.lazy(
  () => import('page/about/About-Personal/About-me/AboutMe')
);
const Projets = React.lazy(() => import('page/Projects/Projects'));
const ProjectID = React.lazy(() => import('page/Projects/ProjectID/ProjectID'));


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutLayout />}>
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
        <Route path="/progect" element={<Projets />} />
        <Route path="/progect/:id" element={<ProjectID />} />
      </Route>
    </Routes>
  );
}

export default App;
