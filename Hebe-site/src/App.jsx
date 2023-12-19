import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import ContentPage from './ContentPage';
import AboutHebe from './AboutHebe';
import BottomItemPage from './BottomItemPage';
import NoticePage from './NoticePage';
import Aside from './Aside';

function App() {
  return (
    <div className='flex flex-col box-border overflow-x-hidden'>
      <NavBar />
      <ContentPage />
      <AboutHebe />
      <Aside />
      <NoticePage />
      <BottomItemPage />
      <Footer />
    </div>
  );
}

export default App;
