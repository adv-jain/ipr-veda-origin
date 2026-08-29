
import '../css/app.css'; // Ye Tailwind CSS ko load karega

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Apne components ko yahan import karein (Apne folder structure ke hisaab se)
import SignOtp from './Pages/SignOtp';
import VerifyOtp from './Pages/VerifyOtp';
import Home from './pages/Home';
import Patent from './pages/Patent';
import TradeMark from './pages/Trademark';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';



function SPA() {
    return (
        <> 
         <Navbar/>
        <Routes>
           
            <Route path="/login" element={< Login/>} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path='/signup' element={<Signup/>} />
           <Route path='/' element={<Home/>}/>
           <Route path='/patent' element={<Patent/>}/>
           <Route path='/trademark' element={<TradeMark/>} />
           <Route path='/blog' element={<Blog/>}/>
           <Route path='/about' element={<About/>} />
           <Route path='/contact' element={<Contact/>}  />
          

           <Route path='/signup-otp' element={<SignOtp/>} />
        </Routes>
        <Footer/>
        </>
    );
}

const rootElement = document.getElementById('app');

if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                <SPA />
            </BrowserRouter>
        </React.StrictMode>
    );
}