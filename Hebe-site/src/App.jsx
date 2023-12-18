import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import ContentPage from './ContentPage';
import AboutHebe from './AboutHebe';

function App() {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <ContentPage />
      <AboutHebe />
      <Footer />
    </div>
  );
}

export default App;
