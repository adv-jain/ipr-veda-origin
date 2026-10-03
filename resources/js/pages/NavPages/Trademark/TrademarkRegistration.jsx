import HomeLogin from '../../HomeLogin';

import React, { useState } from 'react';

export default function TrademarkRegistration() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { q: "What is trademark registration in India?", a: "Trademark registration legally protects a brand name, logo, or slogan under the Trade Marks Act, 1999, providing exclusive statutory rights to the owner." },
    { q: "How much does trademark registration cost in India?", a: "Government fees start at ₹4,500 for Individuals/Startups/MSMEs and ₹9,000 for other entities per class for e-filing." },
    { q: "How long does trademark registration take?", a: "While application filing happens within a few days, full registration depends on examination, objections, and opposition, typically taking 6 to 12 months." },
    { q: "Who can apply for trademark registration?", a: "Individuals, Proprietorships, Partnerships, LLPs, Companies, Trusts, and Foreign applicants can apply." },
    { q: "What is the difference between ™ and ®?", a: "™ indicates a trademark claim prior to registration, while ® can only be used after the trademark registration certificate is officially issued." },
    { q: "How long is a registered trademark valid?", a: "A registered trademark is valid for 10 years and can be renewed indefinitely every 10 years." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-16">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-dark to-brand-darker text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-brand-primary/30 text-brand-text text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              IPR & Legal Protection
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 sm:leading-tight">
              Trademark Registration in India
            </h1>
            <p className="mt-4 text-lg text-brand-muted">
              Protect your brand name, logo, and identity. Filing starts at <span className="text-brand-accent font-bold">1,999</span> + Govt fees with expert guidance from experienced IP lawyers.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-brand-accent text-lg">★</span>
                <span><b>4.5/5</b></span>
              </div>
             
            </div>
          </div>

         
          <HomeLogin/> 
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="text-center mb-10 hidden lg:block">
          <span className="bg-white px-4 py-1.5 rounded-full shadow text-sm font-semibold text-brand-primary">Choose Your Plan</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Standard Plan */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col justify-between hover:border-brand-border transition">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Standard Trademark</h3>
                  <p className="text-sm text-slate-500 mt-1">Traditional method for filing your TM application.</p>
                </div>
                <span className="bg-green-100 text-green-700 font-bold text-xs px-2.5 py-1 rounded-full">25% OFF</span>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900">₹1,499</span>
                <span className="text-lg text-slate-400 line-through">₹1,999</span>
                <span className="text-xs text-slate-500">+ Govt Fees</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span>Consultation</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span>Application Preparation</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> Name search & approval</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> Application Filing</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> Online process. Save 30% cost</li>
             <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span>Fast & Quick Process</li>
             
              </ul>
            </div>
            <button className="mt-8 w-full border border-brand-primary text-brand-primary hover:bg-brand-light font-semibold py-2.5 rounded-lg transition">
              Proceed to Pay
            </button>
          </div>

          {/* Express Plan */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-brand-primary p-8 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 right-6 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              Recommended Plan
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Express Trademark</h3>
                  <p className="text-sm text-slate-500 mt-1">Faster filing within 6 hours & TM symbol in 24 hrs.</p>
                </div>
                <span className="bg-green-100 text-green-700 font-bold text-xs px-2.5 py-1 rounded-full">40% OFF</span>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900">₹1,999</span>
                <span className="text-lg text-slate-400 line-through">₹2,999</span>
                <span className="text-xs text-slate-500">+ Govt Fees</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span>Consultation</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span>Application Preparation</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> Name search & approval</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> Application Filing</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> Online process. Save 30% cost</li>
               <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span>Fast & Quick Process</li>
              <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span>Free Consultations</li>
              <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span>Unlimited Objection Answer</li>
              <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span>Unlimited Hearing</li>
             
             
             
             
              </ul>
            </div>
            <button className="mt-8 w-full bg-brand-primary hover:bg-brand-hover text-white font-semibold py-2.5 rounded-lg transition shadow-md">
              Proceed to Pay
            </button>
          </div>

        </div>
      </section>

      {/* Overview & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview of Trademark Registration</h2>
          <p className="text-slate-600 leading-relaxed">
            Trademark registration in India legally protects a brand name, logo, slogan, symbol or other distinctive mark from unauthorised use. It gives the registered proprietor statutory rights over the mark for the goods or services covered by the registration. Valid for 10 years and renewable indefinitely, securing your trademark early helps avoid long-term legal battles.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Why Register a Trademark?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* Card 1 */}
  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-border hover:bg-white cursor-pointer">
    <h4 className="font-bold text-slate-800 mb-2 text-lg">🛡️ Exclusive Protection</h4>
    <p className="text-sm text-slate-600 leading-relaxed">
      Statutory rights to prevent unauthorized use of identical or deceptively similar marks.
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-border hover:bg-white cursor-pointer">
    <h4 className="font-bold text-slate-800 mb-2 text-lg">®️ Use the Registered Symbol</h4>
    <p className="text-sm text-slate-600 leading-relaxed">
      Establish market authenticity. Use ™ immediately after filing and ® after registration.
    </p>
  </div>

  {/* Card 3 */}
  <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-border hover:bg-white cursor-pointer">
    <h4 className="font-bold text-slate-800 mb-2 text-lg">💼 Intangible Business Asset</h4>
    <p className="text-sm text-slate-600 leading-relaxed">
      Trademarks build brand equity and can be licensed, assigned, or sold in the future.
    </p>
  </div>

</div>
        </div>
      </section>



     <section className="max-w-6xl mx-auto px-4 py-12 space-y-8">
  
  {/* Paragraph 1: Unchanged */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">What Is Trademark Registration?</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      Trademark registration is the legal process of securing exclusive ownership over your brand identity through the Trade Marks Registry under the Trade Marks Act, 1999. It separates your brand name, logo, slogan, tagline, sound, or unique symbol from market competitors.
      <br /><br />
      While anyone can use a brand mark, official registration grants legal authority and statutory rights to protect your business assets against unauthorized copy or misuse. At IPR Veda, we offer end-to-end guidance—from comprehensive online trademark searches and fast application filing to real-time status tracking.
    </p>
  </div>

  {/* Paragraph 2: Unchanged */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">Why Register a Trademark?</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      Registering a trademark secures the unique identity your business builds over time. Beyond establishing brand recognition, official IP protection creates an unbeatable legal foundation—shielding your products, services, and reputation against brand misuse or infringement.
    </p>
  </div>

  {/* Paragraph 3: Unchanged */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">Stop Brand Theft & Take Legal Action</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      Official registration empowers brand owners with exclusive legal control over their registered mark. Under intellectual property laws, this rights ownership allows you to stop competitors from copying your identity and take decisive action against infringing or deceptively similar trademarks.
    </p>
  </div>

  {/* Paragraph 4: Unchanged */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">Build Customer Trust & Distinct Brand Recognition</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      A registered trademark helps consumers instantly distinguish your products and services from competitors in a crowded market. Consistently using a protected brand mark builds long-term brand recall, reinforces market authenticity, and shields your business identity from imitation.
    </p>
  </div>

  {/* Paragraph 5: Unchanged */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">Brand Recognition & Trust</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      A protected trademark helps customers distinguish a business from competitors. Consistent use of a registered mark can support long-term brand recognition and help protect the identity associated with the business.
    </p>
  </div>

  {/* Paragraph 6: Unchanged */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">Use ® Symbol</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      The ® symbol indicates that a trademark is registered. It should not be used before registration. Businesses can use ™ to indicate a trademark claim before registration.
    </p>
  </div>

  {/* ========================================================
      LAST 3 PARAGRAPHS - REWRITTEN (SEO FRIENDLY & UNIQUE)
     ======================================================== */}

  {/* Paragraph 7: Changed (Long-Term Protection) */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">10-Year Renewable Legal Protection</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      A registered trademark offers robust 10-year validity from the date of application filing. Brand owners can renew their registration indefinitely every 10 years, ensuring lifelong legal security and uninterrupted ownership of their commercial identity.
    </p>
  </div>

  {/* Paragraph 8: Changed (Business Asset) */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">Valuable Intangible Business Asset</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      As your company expands, a registered mark transforms into a high-value intangible asset that significantly enhances business valuation. Registered trademarks can be commercially licensed, assigned, franchised, or sold to generate recurring revenue streams.
    </p>
  </div>

  {/* Paragraph 9: Changed (International Expansion) */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">Global Brand Expansion & Madrid Protocol</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      While domestic registration protects your mark within India, global market expansion requires international IP safeguards. Through the Madrid System, Indian businesses can conveniently extend trademark protection across multiple foreign countries via a single centralized application.
    </p>
  </div>

</section>

      {/* Applicant & Types Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Who Can Apply */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Who Can Apply for Registration?</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold">
                <tr>
                  <th className="p-3 rounded-l-lg">Applicant Type</th>
                  <th className="p-3 rounded-r-lg">Registered Under</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="p-3 font-medium text-slate-800">Individual</td><td className="p-3">Individual's Name</td></tr>
                <tr><td className="p-3 font-medium text-slate-800">Proprietorship</td><td className="p-3">Proprietor's Name</td></tr>
                <tr><td className="p-3 font-medium text-slate-800">Partnership / LLP</td><td className="p-3">Firm / Entity Name</td></tr>
                <tr><td className="p-3 font-medium text-slate-800">Company (Pvt Ltd)</td><td className="p-3">Company's Name</td></tr>
                <tr><td className="p-3 font-medium text-slate-800">Trust / NGO</td><td className="p-3">Entity Name</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Government Fees */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Official Govt Fees Structure</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold">
                <tr>
                  <th className="p-3 rounded-l-lg">Applicant Category</th>
                  <th className="p-3">E-Filing Fee</th>
                  <th className="p-3 rounded-r-lg">Physical Filing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-medium text-slate-800">Individual / Startup / MSME</td>
                  <td className="p-3 text-green-600 font-bold">₹4,500</td>
                  <td className="p-3">₹5,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-800">Others (Large Entities)</td>
                  <td className="p-3 text-green-600 font-bold">₹9,000</td>
                  <td className="p-3">₹10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4">*Government fees are per class per mark and separate from professional charges.</p>
        </div>

      </section>


<section className="max-w-6xl mx-auto px-4 py-12 space-y-8">
  
  {/* Card 1: How to Choose */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">How to Choose the Right Trademark Class?</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
      Choosing the correct trademark class starts with defining your current business offerings and future expansion plans. The international Nice Classification divides marks into Goods (Classes 1–34) and Services (Classes 35–45).
      <br /><br />
      Selecting the precise class is critical because your legal IP protection applies only to the specific categories mentioned in your TM application. Filing under an incorrect or incomplete class can delay approval or limit your brand's legal enforcement.
    </p>
  </div>

  {/* Card 2: Popular Trademark Classes + Table */}
  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-border">
    <h2 className="text-xl font-bold text-slate-900 mb-3">Popular Trademark Classes</h2>
    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
      Trademark classification helps determine the specific goods or services for which a brand name is protected. Choosing the appropriate class is important because trademark rights generally apply to the goods or services covered by the application. The following are some commonly used trademark classes.
    </p>

    {/* Image Table Content */}
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-100 border-b border-slate-200 text-slate-900 font-bold text-sm">
            <th className="py-3 px-5 w-1/3">Class</th>
            <th className="py-3 px-5 w-2/3">Common Coverage</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="py-3.5 px-5 font-semibold text-brand-primary">Class 9</td>
            <td className="py-3.5 px-5">Software, computers and electronics</td>
          </tr>
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="py-3.5 px-5 font-semibold text-brand-primary">Class 25</td>
            <td className="py-3.5 px-5">Clothing, footwear and headgear</td>
          </tr>
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="py-3.5 px-5 font-semibold text-brand-primary">Class 35</td>
            <td className="py-3.5 px-5">Advertising, business management and related services</td>
          </tr>
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="py-3.5 px-5 font-semibold text-brand-primary">Class 41</td>
            <td className="py-3.5 px-5">Education, entertainment and related services</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</section>



      {/* Registration Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Step-by-Step Trademark Registration Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">1</span>
              <h4 className="font-bold text-slate-800 mb-1">Trademark Search</h4>
              <p className="text-sm text-slate-600">Conduct search on the official portal to ensure mark availability and avoid conflicts.</p>
            </div>

            <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">2</span>
              <h4 className="font-bold text-slate-800 mb-1">Class Selection</h4>
              <p className="text-sm text-slate-600">Select appropriate class (1 to 45) based on your products or services under Nice Classification.</p>
            </div>

            <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">3</span>
              <h4 className="font-bold text-slate-800 mb-1">Form TM-A Filing</h4>
              <p className="text-sm text-slate-600">Submit application online. Instant TM application number generated for ™ symbol usage.</p>
            </div>

            <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">4</span>
              <h4 className="font-bold text-slate-800 mb-1">Examination</h4>
              <p className="text-sm text-slate-600">Examiner reviews application. If objections arise, response must be submitted in 30 days.</p>
            </div>

            <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">5</span>
              <h4 className="font-bold text-slate-800 mb-1">Journal Publication</h4>
              <p className="text-sm text-slate-600">Accepted mark is published in Trademark Journal for a 4-month public opposition window.</p>
            </div>

            <div className="border border-slate-100 bg-slate-50 p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">6</span>
              <h4 className="font-bold text-slate-800 mb-1">Registration Certificate</h4>
              <p className="text-sm text-slate-600">If unopposed, official Registration Certificate is issued with ® symbol rights for 10 years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: TM vs Copyright vs Patent */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Trademark vs Copyright vs Patent</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-100 text-slate-800 uppercase text-xs font-semibold">
                <tr>
                  <th className="p-3 rounded-l-lg">Parameter</th>
                  <th className="p-3">Trademark</th>
                  <th className="p-3">Copyright</th>
                  <th className="p-3 rounded-r-lg">Patent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-medium text-slate-800">Protects</td>
                  <td className="p-3">Brand Identity (Name, Logo)</td>
                  <td className="p-3">Creative Works (Art, Code, Books)</td>
                  <td className="p-3">Inventions & Processes</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-800">Governing Law</td>
                  <td className="p-3">Trade Marks Act, 1999</td>
                  <td className="p-3">Copyright Act, 1957</td>
                  <td className="p-3">Patents Act, 1970</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-800">Validity</td>
                  <td className="p-3 font-semibold text-brand-primary">10 Years (Renewable)</td>
                  <td className="p-3">Lifetime + 60 Years</td>
                  <td className="p-3">20 Years (Non-renewable)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)} 
                className="w-full text-left p-4 font-semibold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition"
              >
                <span>{faq.q}</span>
                <span className="text-slate-400 text-xl">{activeFaq === index ? '−' : '+'}</span>
              </button>
              {activeFaq === index && (
                <div className="p-4 bg-slate-50 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}