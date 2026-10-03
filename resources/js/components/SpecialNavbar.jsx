import React from 'react';
import { Link } from 'react-router-dom';
import iprvedabg from "../pages/iprvedabg.png";
import ipr from "../../../config/assets/img/ipr-perfect-rect.png";

export default function SpecialNavbar() {
  return (
    <nav className="relative py-4 px-6 overflow-hidden border-b border-gray-200">
      
      {/* Background - pointer-events-none add kiya */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={iprvedabg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 blur-[2px] scale-105" 
        />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content - z-10 aur relative */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img 
            src={ipr} 
            alt="IPRveda Logo" 
            className="w-22 h-12 object-contain" 
          />
        </Link>
        
        <div className="flex items-center gap-4">
          <h4 className="text-brand-dark font-medium text-sm sm:text-base">
            Don't have account ?
          </h4>
          <Link 
            to="/signup" 
            className="text-brand-primary font-bold hover:underline transition text-sm sm:text-base"
          >
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
}








