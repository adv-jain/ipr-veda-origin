import React, { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import whatsapp from "../../../config/assets/img/whatsapp-logo-free-png.webp";

async function post(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw data;
  return data;
}

export default function HomeLogin() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState(null);
  const [step, setStep] = useState('phone');
  const [whatsappOptIn, setWhatsappOptIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getError = (err) =>
    err?.errors?.number?.[0] || err?.errors?.otp?.[0] || err?.message || 'Something went wrong';

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await post('/api/home-login', { number: phone });
      setUserId(data.user_id);
      setStep('otp');
    } catch (err) {
      setError(getError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await post('/api/verify-otp', { user_id: userId, otp });
      localStorage.setItem('token', data.token);
      window.location.href = data.is_onboarded ? '/dashboard' : '/onboarding';
    } catch (err) {
      setError(getError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-brand-lg border border-brand-border p-6 sm:p-8">
        <div className="text-center mb-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">Register Your Trademark</h2>
        </div>

        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

        {step === 'phone' ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1">Mobile Number *</label>
              <div className="relative flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-brand-border bg-brand-light text-brand-dark/70 text-sm font-medium">+91</span>
                <div className="relative flex-1">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/40" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    required
                    className="w-full pl-11 pr-4 py-2.5 bg-brand-light border border-brand-border rounded-r-xl text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" checked={whatsappOptIn} onChange={(e) => setWhatsappOptIn(e.target.checked)} />
                  <div className="w-10 h-5 bg-brand-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-brand-border after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-success"></div>
                </div>
                <span className="text-sm text-brand-dark/70 flex items-center gap-2 leading-[1]">
                  Get updates via
                  <img src={whatsapp} alt="WhatsApp" className="w-10 h-10 object-contain shrink-0" />
                  <span className="font-medium">Whatsapp</span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || phone.length !== 10}
              className="w-full bg-brand-dark text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-darker transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-3"
            >
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <>Get OTP <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <p className="text-sm text-brand-dark/70">OTP sent to +91 {phone} on WhatsApp.</p>
            <input
              type="text"
              inputMode="numeric"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="Enter 4-digit OTP"
              maxLength={4}
              required
              className="w-full px-4 py-2.5 text-center tracking-[0.5em] text-xl text-black bg-brand-light border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
            />
            <button
              type="submit"
              disabled={loading || otp.length !== 4}
              className="w-full bg-brand-dark text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-darker transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <>Verify & Continue <ArrowRight className="w-5 h-5" /></>}
            </button>
            <button type="button" onClick={() => { setStep('phone'); setOtp(''); setError(''); }} className="w-full text-sm text-brand-dark/60 hover:text-brand-dark">
              Change number
            </button>
          </form>
        )}
      </div>
    </div>
  );
}