import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/NavBar/Login';
import Home from './Home/Home';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/NavBar';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;