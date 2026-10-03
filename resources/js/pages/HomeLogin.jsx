import React, { useState } from 'react';
import { Mail, Phone, MapPin, Lock, ArrowRight } from 'lucide-react';
import whatsapp from "../../../config/assets/img/whatsapp-logo-free-png.webp";

export default function HomeLogin() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    city: ''
  });
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-4">
      
      {/* Main Card: Solid white background, no glassmorphism/blur */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-brand-lg border border-brand-border p-6 sm:p-8">
        
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">
            Register Your Trademark
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
         

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1">
              Mobile Number *
            </label>
            <div className="relative flex">
              <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-brand-border bg-brand-light text-brand-dark/70 text-sm font-medium">
                +91
              </span>
              <div className="relative flex-1">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/40" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="98765 43210"
                  className="w-full pl-11 pr-4 py-2.5 bg-brand-light border border-brand-border rounded-r-xl text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                />
              </div>
            </div>
          </div>

          

          {/* WhatsApp Toggle Switch */}
          <div className="pt-1">
            <label className="flex items-center gap-2.5 cursor-pointer group">
              <div className="relative">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={whatsappOptIn} 
                  onChange={(e) => setWhatsappOptIn(e.target.checked)} 
                />
                <div className="w-10 h-5 bg-brand-border peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-brand-border after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success"></div>
              </div>
             <span className="text-sm text-brand-dark/70 group-hover:text-brand-dark transition-colors flex items-center gap-2 leading-[1]">
  Get updates via 
  <img src={whatsapp} alt="WhatsApp" className="w-10 h-10 object-contain shrink-0" />
  <span className="font-medium">Whatsapp</span>
</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-dark text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-darker transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-3"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Buy Trademark
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
}