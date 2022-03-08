import React from 'react';
import { Route, Routes } from "react-router-dom";
import AsideMenu from './components/AsideMenu';
import Profile from './components/Profile';
import AddEvent from './components/AddEvent';
import BasicInformation from './components/BasicInformation';
import HeaderPrimary from './components/layout/HeaderPrimary';

const App = () => {
  return (
    <div className='container'>
      <HeaderPrimary/>
      <nav className="nav shadow-bt h-12 xl:w-full"></nav>
      <section className="welcome shadow-mp flex h-24 ml-20 mr-16 mt-6"></section>
        <AsideMenu />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/basicInformation" element={<BasicInformation />} />
          <Route path="/addEvent" element={<AddEvent />} />
        </Routes>
    </div>
  );
}

export default App;
