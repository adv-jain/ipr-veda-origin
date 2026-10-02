import React, { useState } from 'react';
import Login from "../../Login"
export default function UsaTrademark() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { q: "Is there a time frame for the trademark registration approval in the US?", a: "US trademark registration with the USPTO typically takes between 8 to 14 months, depending on examination, office actions, and the publication/opposition phase." },
    { q: "What type of trademarks can be registered easily?", a: "Fanciful, arbitrary, or suggestive marks (unique names, invented words, and distinctive logos) are the easiest to register because they are inherently distinctive." },
    { q: "Which type of trademarks are generally not registered?", a: "Generic terms, purely descriptive names, deceptive marks, and marks that conflict with existing registered trademarks are generally refused." },
    { q: "What types of trademarks can be registered in the United States?", a: "Words, phrases, symbols, logos, taglines, audio sounds, and even unique product packaging shapes can be registered as trademarks with the USPTO." },
    { q: "Do I need to present a periodic statement of use?", a: "Yes, between the 5th and 6th year after registration, you must file a Section 8 Declaration of Continued Use to keep your US trademark active." },
    { q: "How can I enforce my trademark in the US?", a: "You can enforce your mark by issuing cease-and-desist letters, filing federal infringement lawsuits under the Lanham Act, or recording your mark with US Customs to block counterfeit imports." }
  ];

  return (
    <div className="bg-brand-light min-h-screen text-brand-dark font-sans pb-16">
      
      {/* Hero Section */}
      <section className="bg-brand-gradient text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-brand-primary/30 text-brand-text text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              IPR & Global Legal Protection
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 sm:leading-tight">
              US Trademark Registration Online
            </h1>
            <p className="mt-4 text-lg text-brand-text">
              Safeguard your brand name, logo, and identity with the USPTO. Filing assistance starting at <span className="text-brand-accent font-bold">₹1,999</span> + Govt fees with expert support from experienced IP attorney networks.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-brand-accent text-lg">★</span>
                <span><b>4.8/5</b> Customer Rating (50,000+ Brands Protected)</span>
              </div>
            </div>
          </div>

          {/* Lead Form Card */}
          <Login/>
        </div>
      </section>

      {/* Overview & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border space-y-6">
          
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">Why Should You Choose IPR Veda for US Trademark Registration?</h2>
            <p className="text-brand-dark/70 leading-relaxed">
              Expanding your brand into the US market requires comprehensive IP strategy and error-free execution. At <b>IPR Veda</b>, we simplify international intellectual property management through transparent workflows, dedicated legal guidance, and fast turnaround times.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-brand-border text-center">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-3xl font-extrabold text-brand-primary">⚡ 9 Mins</h3>
              <p className="text-sm font-semibold text-brand-dark mt-1">Rapid Company Filings</p>
              <p className="text-xs text-brand-dark/50">Fast-track business onboarding</p>
            </div>
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-3xl font-extrabold text-brand-primary">50,000+</h3>
              <p className="text-sm font-semibold text-brand-dark mt-1">Businesses Served</p>
              <p className="text-xs text-brand-dark/50">Trusted global client network</p>
            </div>
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-3xl font-extrabold text-brand-primary">100%</h3>
              <p className="text-sm font-semibold text-brand-dark mt-1">Transparent Support</p>
              <p className="text-xs text-brand-dark/50">End-to-end expert guidance</p>
            </div>
          </div>

          {/* Did You Know Callout */}
          <div className="bg-warning/10 border-l-4 border-warning p-5 rounded-r-xl">
            <h4 className="font-bold text-brand-dark text-base mb-1">💡 Did You Know?</h4>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              A registered US trademark provides statutory protection for <b>10 years</b> from its certification date. To maintain uninterrupted ownership after the first decade, renewal documents and applicable USPTO maintenance filings must be completed on time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">An Overview of US Trademark Law</h3>
            <p className="text-brand-dark/70 leading-relaxed text-sm sm:text-base">
              Federal trademark regulation in the United States is governed by the <b>Lanham Act</b> and administered by the <b>United States Patent and Trademark Office (USPTO)</b>. While state common law grants limited rights based on geographical usage, federal USPTO registration provides robust, nationwide protection and statutory remedies against infringement.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Who Can Register a US Trademark?</h3>
            <p className="text-brand-dark/70 text-sm mb-4">Any domestic or foreign entity can apply for USPTO trademark protection, including:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <span className="p-2.5 bg-brand-light rounded-lg text-brand-dark font-medium text-center border border-brand-border">Individual / Author</span>
              <span className="p-2.5 bg-brand-light rounded-lg text-brand-dark font-medium text-center border border-brand-border">Corporation (Inc.)</span>
              <span className="p-2.5 bg-brand-light rounded-lg text-brand-dark font-medium text-center border border-brand-border">Sole Proprietorship</span>
              <span className="p-2.5 bg-brand-light rounded-lg text-brand-dark font-medium text-center border border-brand-border">Limited Liability Co. (LLC)</span>
              <span className="p-2.5 bg-brand-light rounded-lg text-brand-dark font-medium text-center border border-brand-border">Partnership Firm</span>
              <span className="p-2.5 bg-brand-light rounded-lg text-brand-dark font-medium text-center border border-brand-border">Trust / Foundation</span>
              <span className="p-2.5 bg-brand-light rounded-lg text-brand-dark font-medium text-center border border-brand-border">Joint Venture</span>
              <span className="p-2.5 bg-brand-light rounded-lg text-brand-dark font-medium text-center border border-brand-border">Foreign Companies</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3-Step Process Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h3 className="text-xl font-bold text-brand-dark mb-4">Register Your US Trademark Online in 3 Simple Steps</h3>
          <p className="text-brand-dark/70 leading-relaxed text-sm mb-6">
            Expanding your brand to the United States is effortless with IPR Veda's streamlined, 3-stage filing service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border transition-all duration-300 hover:-translate-y-2 hover:shadow-brand hover:border-brand-primary hover:bg-white cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">1</span>
              <h4 className="font-bold text-brand-dark mb-1">Comprehensive USPTO Search</h4>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                We evaluate trademark availability across the USPTO database to prevent potential conflicts and office rejections.
              </p>
            </div>

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border transition-all duration-300 hover:-translate-y-2 hover:shadow-brand hover:border-brand-primary hover:bg-white cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">2</span>
              <h4 className="font-bold text-brand-dark mb-1">Class & Document Preparation</h4>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Our legal team selects the accurate international classes and drafts your application documents for review.
              </p>
            </div>

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border transition-all duration-300 hover:-translate-y-2 hover:shadow-brand hover:border-brand-primary hover:bg-white cursor-pointer">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">3</span>
              <h4 className="font-bold text-brand-dark mb-1">USPTO Filing & Tracking</h4>
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                Upon your approval, we submit the application directly to the USPTO and share digital verification with continuous tracking.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Checklist / Required Documents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Documents Required for US Trademark Registration</h2>
          <p className="text-brand-dark/70 text-sm mb-6">IPR Veda ensures end-to-end security for your documents using bank-grade protection protocol.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-3">
              <span className="text-brand-primary text-xl">📄</span>
              <div>
                <h4 className="font-semibold text-brand-dark text-sm">Applicant Details</h4>
                <p className="text-xs text-brand-dark/50 mt-0.5">Full legal name, nationality, and registered address.</p>
              </div>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-3">
              <span className="text-brand-primary text-xl">🎨</span>
              <div>
                <h4 className="font-semibold text-brand-dark text-sm">Mark Representation</h4>
                <p className="text-xs text-brand-dark/50 mt-0.5">High-resolution print/digital logo, word mark, or audio file.</p>
              </div>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-3">
              <span className="text-brand-primary text-xl">🏢</span>
              <div>
                <h4 className="font-semibold text-brand-dark text-sm">Business Incorporation Proof</h4>
                <p className="text-xs text-brand-dark/50 mt-0.5">Certificate of Incorporation, LLC agreement, or Partnership Deed.</p>
              </div>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-3">
              <span className="text-brand-primary text-xl">🆔</span>
              <div>
                <h4 className="font-semibold text-brand-dark text-sm">Identity & Address Proof</h4>
                <p className="text-xs text-brand-dark/50 mt-0.5">Copy of Applicant Passport, Government ID, or Driver's License.</p>
              </div>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-3">
              <span className="text-brand-primary text-xl">✍️</span>
              <div>
                <h4 className="font-semibold text-brand-dark text-sm">Power of Attorney</h4>
                <p className="text-xs text-brand-dark/50 mt-0.5">Authorized legal representative authorization form.</p>
              </div>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-3">
              <span className="text-brand-primary text-xl">📦</span>
              <div>
                <h4 className="font-semibold text-brand-dark text-sm">Specimen of Use (If Active)</h4>
                <p className="text-xs text-brand-dark/50 mt-0.5">Proof showing how the trademark is used in commercial sales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Selection & Popular Classes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        
        {/* Card 1: How to Choose */}
        <div className="p-6 bg-white rounded-2xl border border-brand-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand hover:border-brand-primary">
          <h2 className="text-xl font-bold text-brand-dark mb-3">How to Choose the Right Trademark Class?</h2>
          <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed">
            Choosing the correct trademark class starts with defining your current business offerings and future expansion plans. The international Nice Classification divides marks into Goods (Classes 1–34) and Services (Classes 35–45).
            <br /><br />
            Selecting the precise class is critical because your legal IP protection applies only to the specific categories mentioned in your TM application. Filing under an incorrect or incomplete class can delay approval or limit your brand's legal enforcement.
          </p>
        </div>

        {/* Card 2: Popular Trademark Classes + Table */}
        <div className="p-6 bg-white rounded-2xl border border-brand-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand hover:border-brand-primary">
          <h2 className="text-xl font-bold text-brand-dark mb-3">Popular Trademark Classes</h2>
          <p className="text-brand-dark/70 text-sm sm:text-base leading-relaxed mb-6">
            Trademark classification helps determine the specific goods or services for which a brand name is protected. Choosing the appropriate class is important because trademark rights generally apply to the goods or services covered by the application. The following are some commonly used trademark classes.
          </p>

          <div className="overflow-x-auto rounded-xl border border-brand-border">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-light border-b border-brand-border text-brand-dark font-bold text-sm">
                  <th className="py-3 px-5 w-1/3">Class</th>
                  <th className="py-3 px-5 w-2/3">Common Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border text-sm text-brand-dark/70">
                <tr className="hover:bg-brand-light transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-brand-primary">Class 9</td>
                  <td className="py-3.5 px-5">Software, computers and electronics</td>
                </tr>
                <tr className="hover:bg-brand-light transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-brand-primary">Class 25</td>
                  <td className="py-3.5 px-5">Clothing, footwear and headgear</td>
                </tr>
                <tr className="hover:bg-brand-light transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-brand-primary">Class 35</td>
                  <td className="py-3.5 px-5">Advertising, business management and related services</td>
                </tr>
                <tr className="hover:bg-brand-light transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-brand-primary">Class 41</td>
                  <td className="py-3.5 px-5">Education, entertainment and related services</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* Step-by-step USPTO Registration Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">Step-by-Step Trademark Registration Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-brand-border bg-brand-light p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">1</span>
              <h4 className="font-bold text-brand-dark mb-1">Trademark Search</h4>
              <p className="text-sm text-brand-dark/70">Conduct search on the official portal to ensure mark availability and avoid conflicts.</p>
            </div>

            <div className="border border-brand-border bg-brand-light p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">2</span>
              <h4 className="font-bold text-brand-dark mb-1">Class Selection</h4>
              <p className="text-sm text-brand-dark/70">Select appropriate class (1 to 45) based on your products or services under Nice Classification.</p>
            </div>

            <div className="border border-brand-border bg-brand-light p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">3</span>
              <h4 className="font-bold text-brand-dark mb-1">Application Filing</h4>
              <p className="text-sm text-brand-dark/70">Submit application online. Instant serial number generated for official tracking.</p>
            </div>

            <div className="border border-brand-border bg-brand-light p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">4</span>
              <h4 className="font-bold text-brand-dark mb-1">Examination</h4>
              <p className="text-sm text-brand-dark/70">USPTO attorney reviews application. If objections arise, legal response must be filed.</p>
            </div>

            <div className="border border-brand-border bg-brand-light p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">5</span>
              <h4 className="font-bold text-brand-dark mb-1">Publication in Gazette</h4>
              <p className="text-sm text-brand-dark/70">Approved mark is published in Official Gazette for a 30-day public opposition window.</p>
            </div>

            <div className="border border-brand-border bg-brand-light p-5 rounded-xl">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">6</span>
              <h4 className="font-bold text-brand-dark mb-1">Registration Certificate</h4>
              <p className="text-sm text-brand-dark/70">If unopposed, official Registration Certificate is issued with ® symbol rights for 10 years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: TM vs Copyright vs Patent */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-border">
          <h3 className="text-xl font-bold text-brand-dark mb-6">Trademark vs Copyright vs Patent</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-brand-dark/70">
              <thead className="bg-brand-light text-brand-dark uppercase text-xs font-semibold">
                <tr>
                  <th className="p-3 rounded-l-lg">Parameter</th>
                  <th className="p-3">Trademark</th>
                  <th className="p-3">Copyright</th>
                  <th className="p-3 rounded-r-lg">Patent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                <tr>
                  <td className="p-3 font-medium text-brand-dark">Protects</td>
                  <td className="p-3">Brand Identity (Name, Logo)</td>
                  <td className="p-3">Creative Works (Art, Code, Books)</td>
                  <td className="p-3">Inventions & Processes</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-brand-dark">Governing Law</td>
                  <td className="p-3">Lanham Act (US) / TM Act 1999 (IN)</td>
                  <td className="p-3">Copyright Act</td>
                  <td className="p-3">Patent Act</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-brand-dark">Validity</td>
                  <td className="p-3 font-semibold text-brand-primary">10 Years (Renewable)</td>
                  <td className="p-3">Lifetime + 70 Years (US)</td>
                  <td className="p-3">20 Years (Non-renewable)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-brand-dark text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-brand-border overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)} 
                className="w-full text-left p-4 font-semibold text-brand-dark flex justify-between items-center hover:bg-brand-light transition"
              >
                <span>{faq.q}</span>
                <span className="text-brand-dark/40 text-xl">{activeFaq === index ? '−' : '+'}</span>
              </button>
              {activeFaq === index && (
                <div className="p-4 bg-brand-light border-t border-brand-border text-sm text-brand-dark/70 leading-relaxed">
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