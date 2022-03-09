import React from 'react';
import { Route, Routes } from "react-router-dom";
import AsideMenu from './components/AsideMenu';
import Profile from './components/Profile';
import AddEvent from './components/AddEvent';
import BasicInformation from './components/BasicInformation';
import HeaderPrimary from './components/layout/HeaderPrimary';
import HeaderSecondary from './components/layout/HeaderSecondary';
import MenuProfile from './components/layout/MenuProfile';
import Events from './components/Events';

const App = () => {
  return (
    <div className='container'>
      <HeaderPrimary/>
      <HeaderSecondary/>
      <MenuProfile/>
        <AsideMenu />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/basicInformation" element={<BasicInformation />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/event" element={<Events/>} />
        </Routes>
    </div>
  );
}

export default App;
