import React, { useState } from 'react';
import Login from "../../Login"
export default function TrademarkRenewal() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { 
      q: "In India, when do I need to renew my trademark?", 
      a: "A trademark needs to be renewed every 10 years. You can file for renewal within 6 months before the expiration date to keep your registration active." 
    },
    { 
      q: "Can I renew the trademark even after the expiry period of 10 years?", 
      a: "Yes, if you miss the deadline, you can apply for restoration/renewal within a surcharge window (grace period) by paying the prescribed penalty fees alongside Form TM-R." 
    },
    { 
      q: "What if the trademark expires?", 
      a: "If a trademark expires without renewal, it is removed from the Trademark Register. This leaves your brand name unprotected and open for others to register." 
    },
    { 
      q: "What are the consequences of failure to renew the trademark?", 
      a: "Failure to renew results in loss of exclusive ownership rights and legal protection. Any competitor could claim and register the trademark in their own name." 
    },
    { 
      q: "Will there be any rights changes after the renewal of the trademark?", 
      a: "No, renewal seamlessly extends your existing legal protections, exclusive rights, and ownership status for another 10 years." 
    },
    { 
      q: "Is the trademark valid outside India?", 
      a: "No, a trademark registered in India is only valid within Indian jurisdiction. For foreign protection, international filings (e.g., USPTO or Madrid Protocol) are required." 
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen text-brand-dark font-sans pb-16">
      
      {/* Top Banner / Hero Section */}
      <section className="bg-brand-gradient text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-brand-primary/30 text-brand-text text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Legal Brand Protection
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 sm:leading-tight">
              Trademark Renewal Online Services
            </h1>
            <p className="mt-4 text-lg text-brand-text leading-relaxed">
              Maintain permanent exclusive rights to your brand. Renew your trademark application with expert legal assistance from <b>IPR Veda</b>.
            </p>
            
            {/* Platform Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-brand-primary/30 flex flex-wrap items-center gap-6 text-sm">
              <div>
                <p className="font-bold text-white text-lg">Trusted on Google & Playstore</p>
                <p className="text-brand-text text-xs">IPR Veda — India’s No.1 Legal-Tech Platform</p>
              </div>
              <div className="flex gap-4 border-l border-brand-primary/30 pl-6">
                <div>
                  <span className="text-brand-accent font-bold text-base">★ 4.5/5</span>
                  <p className="text-xs text-brand-text">20k+ Google Reviews</p>
                </div>
                <div>
                  <span className="text-brand-accent font-bold text-base">★ 4.5/5</span>
                  <p className="text-xs text-brand-text">1 Lakh+ Downloads</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Capture Form */}
          <Login/>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-brand-dark">Choose the Best Plan to Protect Your Brand</h2>
          <p className="text-brand-dark/70 mt-2">Transparent pricing designed for startups and growing businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Standard Plan */}
          <div className="bg-white rounded-2xl p-8 border border-brand-border shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-brand-dark">Trademark Registration</h3>
              <p className="text-sm text-brand-dark/70 mt-2">Traditional method for filing your TM application. Perfect for a standard approach.</p>
              
              <div className="my-6">
                <span className="text-brand-dark/40 line-through text-lg mr-2">₹1999</span>
                <span className="text-3xl font-extrabold text-brand-dark">₹1,499</span>
                <span className="ml-2 bg-success/10 text-success text-xs font-bold px-2 py-1 rounded">25% OFF</span>
              </div>

              <h4 className="font-semibold text-brand-dark text-sm mb-3">What you'll get:</h4>
              <ul className="space-y-2 text-sm text-brand-dark/70 mb-8">
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> 30-minute consultation with a TM Expert</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> TM Class Search</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> Thorough trademark search to avoid any objections</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> TM application filing within 3 days</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> TM symbol on your brand within 3-5 days</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> TM Certificate*</li>
              </ul>
            </div>
            <button className="w-full py-3 bg-brand-dark hover:bg-brand-darker text-white font-semibold rounded-lg transition">
              Proceed to Pay
            </button>
          </div>

          {/* Express Recommended Plan */}
          <div className="bg-white rounded-2xl p-8 border-2 border-brand-primary shadow-brand flex flex-col justify-between relative">
            <span className="absolute -top-3 right-6 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
              Recommended Plan
            </span>
            <div>
              <h3 className="text-xl font-bold text-brand-dark">Express Trademark Registration</h3>
              <p className="text-sm text-brand-dark/70 mt-2">Faster method of filing within 6 hours and start using the TM symbol in 24 hours.</p>
              
              <div className="my-6">
                <span className="text-brand-dark/40 line-through text-lg mr-2">₹2999</span>
                <span className="text-3xl font-extrabold text-brand-primary">₹1,999</span>
                <span className="ml-2 bg-success/10 text-success text-xs font-bold px-2 py-1 rounded">40% OFF</span>
              </div>

              <h4 className="font-semibold text-brand-dark text-sm mb-3">What you'll get:</h4>
              <ul className="space-y-2 text-sm text-brand-dark/70 mb-8">
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> 30-minute consultation with a TM Expert</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> TM Class Search</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> Thorough trademark search to avoid objections</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> TM application filing within 6 hours</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> TM symbol on your brand within 1-2 days</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> Free opt-in for MSME Registration</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✔</span> TM Certificate*</li>
              </ul>
            </div>
            <button className="w-full py-3 bg-brand-primary hover:bg-brand-hover text-white font-semibold rounded-lg transition shadow-md">
              Proceed to Pay
            </button>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Here’s How It Works</h2>
          <p className="text-brand-dark/70 text-sm mb-8">
            In three easy steps, your trademark can be registered for a decade and renewed indefinitely through IPR Veda. We make the process as easy as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold mb-3">1</span>
              <h4 className="font-bold text-brand-dark mb-1">Submit Documents</h4>
              <p className="text-sm text-brand-dark/70 leading-relaxed">Ensure all required documents are submitted.</p>
            </div>

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold mb-3">2</span>
              <h4 className="font-bold text-brand-dark mb-1">Form Preparation</h4>
              <p className="text-sm text-brand-dark/70 leading-relaxed">An IPR Veda expert will prepare the trademark renewal forms for you.</p>
            </div>

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold mb-3">3</span>
              <h4 className="font-bold text-brand-dark mb-1">Filing & Confirmation</h4>
              <p className="text-sm text-brand-dark/70 leading-relaxed">A priority update will be provided upon filing your application.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Here’s What You’ll Need</h2>
          <p className="text-brand-dark/70 text-sm mb-6">
            You need to follow these steps when it's time to renew your trademark. To ensure your documents are always secure, IPR Veda uses best-in-industry security protocols.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Application Proof</h4>
              <p className="text-xs text-brand-dark/70">PAN card and address proof.</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Certificate of Registration</h4>
              <p className="text-xs text-brand-dark/70">Required for entities other than individual applicants.</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Trademark Registry Certificate</h4>
              <p className="text-xs text-brand-dark/70">Original registration certificate issued by Registry.</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Power of Attorney</h4>
              <p className="text-xs text-brand-dark/70">Allows attorney to file renewal on your behalf.</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">TM-A Copy</h4>
              <p className="text-xs text-brand-dark/70">Original registration application copy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IPR Veda Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Why Should I Use IPR Veda for US & Indian Trademark Registration?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-2xl font-extrabold text-brand-primary mb-1">Every 9 Mins</h3>
              <p className="font-bold text-brand-dark text-sm">New Company Registrations</p>
              <p className="text-xs text-brand-dark/60 mt-1">Efficient setup services.</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-2xl font-extrabold text-brand-primary mb-1">50,000+</h3>
              <p className="font-bold text-brand-dark text-sm">Businesses Served</p>
              <p className="text-xs text-brand-dark/60 mt-1">Trusted nationwide.</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-2xl font-extrabold text-brand-primary mb-1">Quick & Affordable</h3>
              <p className="font-bold text-brand-dark text-sm">Nominal Rates</p>
              <p className="text-xs text-brand-dark/60 mt-1">Great turnaround time.</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-2xl font-extrabold text-brand-primary mb-1">100%</h3>
              <p className="font-bold text-brand-dark text-sm">Satisfaction Guaranteed</p>
              <p className="text-xs text-brand-dark/60 mt-1">End-to-end assistance.</p>
            </div>
          </div>

          <div className="mt-8 bg-warning/10 border-l-4 border-warning p-5 rounded-r-xl">
            <h4 className="font-bold text-brand-dark text-base mb-1">💡 Did You Know?</h4>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              Mumbai, Delhi, Kolkata, Chennai, and Ahmedabad are India's five trademark registry offices. When a trademark is registered, its holder gets special rights to its use and is protected by law against infringement. The limitation period for registered trademarks is ten years. At the request of another party, a trademark may be cancelled if it has not been used for five years.
              <br /><br />
              <b>Non-renewal has severe consequences.</b> As a result, any other person could claim the trademark and register it in their name.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Overview & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">An Overview of Trademark Renewal</h2>
            <p className="text-brand-dark/70 leading-relaxed text-sm sm:text-base">
              The registration of a trademark in India expires after 10 years from the registration date. You can keep a trademark permanent by filing a trademark renewal application online or offline by paying the necessary renewal fees every 10 years. The application must be filed within six months from the date the registration expires to be considered valid. It is possible to keep your trademark perpetual and permanent by renewing your trademark in India.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">Benefits of Trademark Renewal in India</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark mb-1">Avoiding Frivolous Lawsuits</h4>
                <p className="text-xs text-brand-dark/70">Seamless protection without litigation risk.</p>
              </div>

              <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark mb-1">Ownership Rights Expansion</h4>
                <p className="text-xs text-brand-dark/70">Protects brand name from infringement continuously.</p>
              </div>

              <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark mb-1">The Security of Brand Names</h4>
                <p className="text-xs text-brand-dark/70">Ensures unhindered protection of brand goodwill.</p>
              </div>

              <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark mb-1">Returns on Capital</h4>
                <p className="text-xs text-brand-dark/70">Monetize by assigning or licensing your mark.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Checklist For Trademark Renewal</h3>
            <ul className="list-disc list-inside space-y-1.5 text-brand-dark/70 text-sm">
              <li>A registered trademark owned by the proprietor, subject to renewal</li>
              <li>Commercial use should be considered when determining eligibility</li>
              <li>Conduct a search of databases to ensure no similar conflicting marks exist</li>
              <li>Get a legal opinion if there is a conflict of trademarks</li>
              <li>Prepare a renewal application and comply with conditions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step by Step with IPR Veda */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Trademark Renewal With IPR Veda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-primary mb-1">Step 1: Requirement</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                Representative contacts you to discuss requirements and explain fees.
              </p>
            </div>

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-primary mb-1">Step 2: Renewal Application</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                Documentation prepared along with filing Form-10 or Form-12 with registrar.
              </p>
            </div>

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-primary mb-1">Step 3: Confirmation</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                Receive official confirmation within 4 to 5 months of trademark extension.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
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