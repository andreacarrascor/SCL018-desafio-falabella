import React from 'react';
import { Route, Routes } from "react-router-dom";
import AsideMenu from './components/AsideMenu';
import Profile from './components/Profile';
import AddEvent from './components/AddEvent';
import BasicInformation from './components/BasicInformation';

const App = () => {
  return (
    <>
      <header className="border border-black h-16 xl:w-full"></header>
      <nav className="border border-black h-12 xl:w-full"></nav>
      <section className="flex border border-black h-24 ml-20 mr-16 mt-6"></section>
      <main className="flex flex-row">
        <AsideMenu />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/basicInformation" element={<BasicInformation />} />
          <Route path="/addEvent" element={<AddEvent />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
