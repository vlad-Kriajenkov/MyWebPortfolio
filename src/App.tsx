import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeLayout } from './layout/HomeLayout/';
import Home from './page/home/Home';
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
