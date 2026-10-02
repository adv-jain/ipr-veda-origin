import '../css/app.css'; 
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import TrademarkRegistration from './pages/NavPages/Trademark/TrademarkRegistration';
import UsaTrademark from './pages/NavPages/Trademark/UsaTrademark';
import TrademarkRenewal from './pages/NavPages/Trademark/TrademarkRenewal';
import IndividualTrademarkRegistration from './pages/NavPages/Trademark/IndividualTrademarkRegistration';
import TrademarkAssignment from './pages/NavPages/Trademark/TrademarkAssignement';
import CopyRightRegistration from './pages/NavPages/Copyright/CopyRightRegistration';
import PatentRegistration from './pages/NavPages/Patent/PatentRegistration';
import MSMERegistration from './pages/NavPages/Patent/MsmeRegistration';
import ObjectionReplyFiling from './pages/NavPages/footer/ObjectFilling';
import ProtectFromInfringement from './pages/NavPages/infringement/ProtectFromInfringement';
import RefundPolicy from './pages/RefundPolicy';
import Disclaimer from './pages/Disclaimer';
import Credits from './pages/Credits';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FindClasses from './pages/NavPages/footer/FindClasses';
import TrackApplication from './pages/NavPages/footer/TrackApplication';
import CAVsIPAttorney from './pages/NavPages/footer/CAVsIPAttorney';
import CopyrightInfringement from './pages/NavPages/Copyright/CopyrightInfringement';
import IndianPatentSearch from './pages/NavPages/Patent/IndianPatentSearch';
import TrademarkSearch from './pages/NavPages/Trademark/TrademarkSearch';

function SPA() {
    const location = useLocation();

    
    const hideLayoutPaths = ['/login', '/signup', '/verify-otp'];
    const hideLayout = hideLayoutPaths.includes(location.pathname);

    return (
        <>
            {!hideLayout && <Navbar />}

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/verify-otp" element={<VerifyOtp />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="/patent" element={<Patent />} />
                <Route path="/trademark" element={<TradeMark />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup-otp" element={<SignOtp />} />
                <Route path="/trademark/registration" element={<TrademarkRegistration/>}/>
                <Route path='/trademark/usa' element={<UsaTrademark/>} />
                <Route path='/trademark/renewal' element={<TrademarkRenewal/>} />
                <Route path='/trademark/individual' element={<IndividualTrademarkRegistration/>}/>
                <Route path='/trademark/assignment' element={<TrademarkAssignment/>}/>
                <Route path='/copyright/registration' element={<CopyRightRegistration/>}/>
                <Route path='/patent/registration' element={<PatentRegistration/>}/>
                <Route path='/msme/registration' element={<MSMERegistration/>}/>
                <Route path='/object/reply' element={<ObjectionReplyFiling/>}/>
                <Route path='/protect/infringement' element={<ProtectFromInfringement/>} />
                 <Route path='refund-policy' element={<RefundPolicy/>}/>
                 <Route path='/disclaimer' element={<Disclaimer/>}/> 
                 <Route path='/credits' element={<Credits/>}/>  
                 <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
                 <Route path='/find-classes' element={<FindClasses/>} />
                  <Route path='/track-application'  element={<TrackApplication/>}/>  
                  <Route path='/ca-ip' element={<CAVsIPAttorney/>}/>  
                  <Route path='/copyright/infringement' element={<CopyrightInfringement/>}/>    
                  <Route path='/patent/search' element={<IndianPatentSearch/>} />
                  <Route path='/trademark/search' element={<TrademarkSearch/>}/> 
                 
               </Routes>

            {!hideLayout && <Footer />}
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