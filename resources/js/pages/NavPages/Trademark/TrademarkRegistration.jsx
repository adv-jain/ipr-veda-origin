import HomeLogin from '../../HomeLogin';
import React, { useState } from 'react';

export default function TrademarkRegistration() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Updated Empathy-Driven FAQs
  const faqs = [
    { 
      q: "Do I really need a trademark if my business is just starting?", 
      a: "Yes. If you don't register, a competitor can register your name later and legally force you to rebrand, causing you to lose all your marketing efforts and brand recognition. Filing early locks in your legal rights." 
    },
    { 
      q: "How much does trademark registration actually cost?", 
      a: "Government fees start at ₹4,500 for Individuals/Startups/MSMEs and ₹9,000 for large entities per class (e-filing). Our professional fees start at just ₹1,499, making it highly affordable for early-stage businesses." 
    },
    { 
      q: "What happens if my trademark application gets rejected?", 
      a: "Rejections or objections are common. If the examiner raises an objection, you have 30 days to reply. Our Express plan includes professional legal drafting to reply to these objections and maximize your chances of approval." 
    },
    { 
      q: "What is the difference between ™ and ®?", 
      a: "™ indicates a trademark claim and can be used immediately after we file your application. ® can only be used after the official Registration Certificate is issued by the government (usually 6-12 months later)." 
    },
    { 
      q: "How long is a registered trademark valid?", 
      a: "A registered trademark is valid for 10 years from the date of application and can be renewed indefinitely every 10 years, providing lifelong protection for your brand." 
    }
  ];

  return (
    <main className="font-sans text-gray-700 bg-white">
      
      {/* ==========================================
          PHASE 1: HERO SECTION (Above the Fold)
      ========================================== */}
      <section className="relative bg-gradient-to-br from-brand-dark to-brand-darker text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
                Trademark Registration <br className="hidden lg:block" />
                <span className="text-brand-accent">Made Simple.</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Protect your brand name, logo, and identity. Expert-led filing starts at just <span className="text-white font-bold">₹1,999</span> + Govt. fees. Secure your business today.
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent text-lg">★</span>
                  <span><b className="text-white">4.8/5</b> Rated by Founders</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent text-lg">⚡</span>
                  <span><b className="text-white">24-Hour</b> Filing Available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pricing" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Start Your Registration
                </a>
                <a href="tel:+918506059559" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300">
                   Talk to an Expert
                </a>
              </div>

              {/* Micro-Testimonial */}
              <div className="mt-8 flex items-start gap-3 max-w-md">
                <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-sm shrink-0">RS</div>
                <div>
                  <p className="text-sm text-gray-300 italic">"IPR Veda got my trademark approved in 6 months when another agency failed. Highly recommended!"</p>
                  <p className="text-xs text-gray-400 mt-1">— Harshit Chauhan, Founder of TechFlow</p>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <HomeLogin />
              
              {/* Tangible Deliverables Box */}
              <div className="mt-6 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h4 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
                  <span className="text-brand-accent">📦</span> What you receive in your email:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2"><span className="text-brand-accent">✓</span> Official TM Search Report</li>
                  <li className="flex items-center gap-2"><span className="text-brand-accent">✓</span> Form TM-A Acknowledgement</li>
                  <li className="flex items-center gap-2"><span className="text-brand-accent">✓</span> Attorney Consultation Summary</li>
                  <li className="flex items-center gap-2"><span className="text-brand-accent">✓</span> Lifetime Status Tracking Access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: PRICING (High Intent)
      ========================================== */}
      <section id="pricing" className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="bg-white px-4 py-1.5 rounded-full shadow-md text-sm font-bold text-brand-primary border border-gray-100">
              Transparent Pricing, No Hidden Fees
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Plan */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col justify-between hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark">Standard Trademark</h3>
                    <p className="text-sm text-gray-500 mt-1">Traditional, thorough filing process.</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-heading font-extrabold text-brand-dark">1,499</span>
                  <span className="text-lg text-gray-400 line-through">₹1,999</span>
                  <span className="text-xs text-gray-500 font-medium">+ Govt. Fees</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> Initial IP Strategy Call</li>
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> Comprehensive Name Search (Avoid Rejection)</li>
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> Drafted by IP Attorneys (Not just data entry)</li>
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> Official Govt. Filing (Form TM-A)</li>
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> 100% Online & Paperless Process</li>
                </ul>
              </div>
              <div>
                <button className="w-full border-2 border-brand-primary text-brand-primary hover:bg-brand-light font-semibold py-3 rounded-lg transition-all duration-300">
                  Choose Standard
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">Best for bootstrapped startups</p>
              </div>
            </div>

            {/* Express Plan (Recommended) */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-brand-primary p-8 flex flex-col justify-between relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                ⚡ Recommended Plan
              </div>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark">Express Trademark</h3>
                    <p className="text-sm text-gray-500 mt-1">Priority filing within 24 hours.</p>
                  </div>
                  <span className="bg-green-100 text-green-700 font-bold text-xs px-2.5 py-1 rounded-full">Save 40%</span>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-heading font-extrabold text-brand-dark">1,999</span>
                  <span className="text-lg text-gray-400 line-through">₹2,999</span>
                  <span className="text-xs text-gray-500 font-medium">+ Govt. Fees</span>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 mb-8">
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> <b>Everything in Standard, plus:</b></li>
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> Priority Filing (Done within 24 Hours)</li>
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> Legal Right to Use ™ Symbol Immediately</li>
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> 1 Free Legal Objection Reply (Save ₹3,000)</li>
                  <li className="flex items-start gap-3"><span className="text-brand-primary mt-0.5 font-bold">✓</span> Dedicated Case Manager via WhatsApp</li>
                </ul>
              </div>
              <div>
                <button className="w-full bg-brand-primary hover:bg-brand-hover text-white font-semibold py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Get Express Protection
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">Most popular for growing brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          NEW: ANXIETY REDUCTION SECTION
      ========================================== */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-heading font-bold text-brand-dark mb-10">
            "What if the government raises an objection?"
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-brand-light/30 rounded-xl border border-gray-100">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="font-bold text-brand-dark mb-2">We Search First</h4>
              <p className="text-sm text-gray-600">We run a deep-dive search before filing to minimize rejection risks upfront.</p>
            </div>
            <div className="p-6 bg-brand-light/30 rounded-xl border border-gray-100">
              <div className="text-3xl mb-3">️</div>
              <h4 className="font-bold text-brand-dark mb-2">Expert Legal Replies</h4>
              <p className="text-sm text-gray-600">If the examiner raises an objection, our IP attorneys draft the legal reply for you.</p>
            </div>
            <div className="p-6 bg-brand-light/30 rounded-xl border border-gray-100">
              <div className="text-3xl mb-3">️</div>
              <h4 className="font-bold text-brand-dark mb-2">Hearing Support</h4>
              <p className="text-sm text-gray-600">In rare cases of a virtual hearing, we represent your brand before the registrar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: VALUE PROPOSITION
      ========================================== */}
      <section className="py-20 lg:py-28 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Why Register Your Trademark?</h2>
            <p className="text-lg text-gray-600">Official IP protection creates an unbeatable legal foundation, shielding your products, services, and reputation against brand misuse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🛡️", title: "Exclusive Legal Protection", desc: "Statutory rights to prevent unauthorized use of identical or deceptively similar marks by competitors." },
              { icon: "®️", title: "Build Instant Trust", desc: "Establish market authenticity. Use ™ immediately after filing and ® after official registration." },
              { icon: "💼", title: "Valuable Business Asset", desc: "Trademarks build brand equity and can be commercially licensed, assigned, or sold in the future." },
              { icon: "", title: "10-Year Renewable Security", desc: "Valid for 10 years and renewable indefinitely. Also serves as a base for international Madrid Protocol expansion." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-heading font-bold text-lg text-brand-dark mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: DATA TABLES (Premium UI)
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Who Can Apply */}
            <div className="bg-gradient-to-br from-brand-light/50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark">Who Can Apply?</h3>
              </div>
              
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-left">
                  <thead className="bg-brand-dark text-white">
                    <tr>
                      <th className="p-4 text-sm font-semibold uppercase tracking-wider">Applicant Type</th>
                      <th className="p-4 text-sm font-semibold uppercase tracking-wider">Registered Under</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-brand-light/30 transition-colors">
                      <td className="p-4 font-medium text-brand-dark">Individual / Freelancer</td>
                      <td className="p-4 text-gray-600">Individual's Name</td>
                    </tr>
                    <tr className="hover:bg-brand-light/30 transition-colors">
                      <td className="p-4 font-medium text-brand-dark">Proprietorship</td>
                      <td className="p-4 text-gray-600">Proprietor's Name</td>
                    </tr>
                    <tr className="hover:bg-brand-light/30 transition-colors">
                      <td className="p-4 font-medium text-brand-dark">Partnership / LLP</td>
                      <td className="p-4 text-gray-600">Firm / Entity Name</td>
                    </tr>
                    <tr className="hover:bg-brand-light/30 transition-colors">
                      <td className="p-4 font-medium text-brand-dark">Company (Pvt Ltd)</td>
                      <td className="p-4 text-gray-600">Company's Name</td>
                    </tr>
                    <tr className="hover:bg-brand-light/30 transition-colors">
                      <td className="p-4 font-medium text-brand-dark">Trust / NGO / Society</td>
                      <td className="p-4 text-gray-600">Entity Name</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Government Fees */}
            <div className="bg-gradient-to-br from-brand-light/50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-dark">Official Govt. Fees</h3>
              </div>
              
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-left">
                  <thead className="bg-brand-dark text-white">
                    <tr>
                      <th className="p-4 text-sm font-semibold uppercase tracking-wider">Applicant Category</th>
                      <th className="p-4 text-sm font-semibold uppercase tracking-wider">E-Filing</th>
                      <th className="p-4 text-sm font-semibold uppercase tracking-wider">Physical</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-brand-light/30 transition-colors">
                      <td className="p-4 font-medium text-brand-dark">Individual / Startup / MSME</td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                          ₹4,500
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">₹5,000</td>
                    </tr>
                    <tr className="hover:bg-brand-light/30 transition-colors">
                      <td className="p-4 font-medium text-brand-dark">Others (Large Entities)</td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                          ₹9,000
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">₹10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Government fees are per class, per mark, and are separate from our professional charges.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: PROCESS (Step-by-Step)
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get your trademark protected in 6 simple, stress-free steps.</p>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="hidden lg:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-brand-border/40 -z-0" aria-hidden="true" />

            {[
              { step: "1", title: "Trademark Search", text: "We conduct a comprehensive search on the official portal to ensure mark availability." },
              { step: "2", title: "Class Selection", text: "We identify the correct Nice Classification (1-45) for your specific goods or services." },
              { step: "3", title: "Form TM-A Filing", text: "We submit the application online. You get an instant application number to use the ™ symbol." },
              { step: "4", title: "Examination", text: "The government examiner reviews the application. We handle any examination reports." },
              { step: "5", title: "Journal Publication", text: "The accepted mark is published in the Trademark Journal for a 4-month public opposition window." },
              { step: "6", title: "Registration Certificate", text: "If unopposed, the official Registration Certificate is issued, granting ® rights for 10 years." },
            ].map((item, index) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-light shadow-md flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white">
                  <span className="text-2xl font-bold text-brand-primary transition-colors duration-300 group-hover:text-white">
                    {item.step}
                  </span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 w-full h-full">
                  <h4 className="text-lg font-heading font-semibold text-brand-dark mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: EDUCATION (Classes & Comparison)
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Trademark Classes */}
          <div className="bg-brand-light/30 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Popular Trademark Classes</h2>
            <p className="text-gray-600 mb-6 max-w-3xl">Choosing the precise class is critical because your legal IP protection applies only to the specific categories mentioned in your application. Here are the most common ones:</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 font-semibold text-sm uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6 w-1/4">Class</th>
                    <th className="py-4 px-6 w-3/4">Common Coverage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                  {[
                    { c: "Class 9", d: "Software, computers, electronics, and mobile apps" },
                    { c: "Class 25", d: "Clothing, footwear, and headgear" },
                    { c: "Class 35", d: "Advertising, business management, and retail services" },
                    { c: "Class 41", d: "Education, training, entertainment, and sporting activities" },
                    { c: "Class 42", d: "Scientific and technological services, SaaS, and IT design" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-brand-light/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-brand-primary">{row.c}</td>
                      <td className="py-4 px-6">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparison Table */}
          <div>
            <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">Trademark vs. Copyright vs. Patent</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-brand-dark text-white text-sm font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="p-4 rounded-tl-2xl">Parameter</th>
                    <th className="p-4">Trademark</th>
                    <th className="p-4">Copyright</th>
                    <th className="p-4 rounded-tr-2xl">Patent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm bg-white">
                  <tr>
                    <td className="p-4 font-bold text-brand-dark">Protects</td>
                    <td className="p-4 text-gray-600">Brand Identity (Name, Logo, Slogan)</td>
                    <td className="p-4 text-gray-600">Creative Works (Art, Code, Books, Music)</td>
                    <td className="p-4 text-gray-600">Inventions, Processes & Designs</td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="p-4 font-bold text-brand-dark">Governing Law</td>
                    <td className="p-4 text-gray-600">Trade Marks Act, 1999</td>
                    <td className="p-4 text-gray-600">Copyright Act, 1957</td>
                    <td className="p-4 text-gray-600">Patents Act, 1970</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-brand-dark">Validity</td>
                    <td className="p-4 font-semibold text-brand-primary">10 Years (Renewable)</td>
                    <td className="p-4 text-gray-600">Lifetime + 60 Years</td>
                    <td className="p-4 text-gray-600">20 Years (Non-renewable)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          PHASE 2: FAQ ACCORDION (Empathy Driven)
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to the most common questions about trademark registration.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? "bg-white border-brand-primary/30 shadow-md" : "bg-white border-gray-200 hover:border-brand-primary/50"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-brand-dark transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-brand-primary text-white rotate-45" : "bg-brand-light text-brand-primary"
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}