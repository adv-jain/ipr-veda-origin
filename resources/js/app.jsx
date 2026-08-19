import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../css/app.css';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import ForgotPassword from './pages/ResetPassword';
import Contact from './pages/Contact';
import About from './pages/About';
import Trademark from './pages/Trademark';
import CopyRoute from './pages/CopyRoute';
import Blog from './pages/Blog';
import RefundPolicy from './pages/RefundPolicy';
import Patent from './pages/Patent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
    return (
        <>
       
        <BrowserRouter>
         <Navbar/>
<Routes>
<Route path='/' element={<Home/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
   <Route path='/forgot-paasword' element={<ForgotPassword/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/trademark' element={<Trademark/>}/>
   <Route path='copyright' element={<CopyRoute/>}/>
   <Route path='/blog' element={<Blog/>}/>
   <Route path='/refund-policy' element={<RefundPolicy/>}/>
   <Route path='/patent' element={<Patent/>} />
<Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
</Routes>
           <Footer/>
        </BrowserRouter>
       
        </>
    );
}

const container = document.getElementById('app');

if (container) {
    createRoot(container).render(<App />);
}