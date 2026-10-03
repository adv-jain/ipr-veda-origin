import React, { useState } from 'react';

import HomeLogin from '../../HomeLogin';
export default function IndividualTrademarkRegistration() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { 
      q: "What can be registered as a Trademark?", 
      a: "A trademark can include a name, logo, word, letter, numeral, picture, symbol, tagline, label, shape of goods, or even a sound mark that uniquely distinguishes your goods or services." 
    },
    { 
      q: "What cannot be registered as a Trademark?", 
      a: "Generic terms, purely descriptive names, deceptive marks, offensive symbols, or marks identical/conflictingly similar to an existing registered trademark cannot be registered." 
    },
    { 
      q: "Who is eligible to apply for trademark registration in India?", 
      a: "Any individual, sole proprietor, company, partnership firm, LLP, NGO, or foreign entity intending to use a mark in India is eligible to apply." 
    },
    { 
      q: "How is Trademark adequately represented?", 
      a: "A trademark is represented graphically through high-resolution digital representations, word mark specifications, or specific color/audio representations as required by the Trademark Registry." 
    },
    { 
      q: "Is a Power of Attorney needed?", 
      a: "Yes, Form TM-48 (Power of Attorney) is required to authorize an attorney or advocate to file and manage the trademark application on your behalf." 
    },
    { 
      q: "What is the term of Trademark?", 
      a: "A registered trademark is valid for 10 years from the date of filing and can be renewed indefinitely every 10 years." 
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen text-brand-dark font-sans pb-16">
      
      {/* Hero Section */}
      <section className="bg-brand-gradient text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-brand-primary/30 text-brand-text text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Legal Brand Protection
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 sm:leading-tight">
              Trademark Registration for Individuals
            </h1>
            <p className="mt-4 text-lg text-brand-text leading-relaxed">
              Tired of seeking a solution for registering an Individual Trademark? Solve it with <b>IPR Veda</b>! Promising an easy & fast Process.
            </p>
            
            {/* Trust Badges */}
            <div className="mt-8 pt-6 border-t border-brand-primary/30 flex flex-wrap items-center gap-6 text-sm">
              <div>
                <p className="font-bold text-white text-lg">Trusted on Google & Playstore</p>
                <p className="text-brand-text text-xs">IPR Veda — India’s No.1 Legal-Tech Platform</p>
                <p className="text-xs text-brand-text/70 mt-0.5">A leading legal-tech platform delivering reliable and expert services nationwide since 2010.</p>
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

      <HomeLogin/>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Here’s How It Works</h2>
          <p className="text-brand-dark/70 text-sm mb-8">
            Tired of seeking a solution for registering an Individual Trademark? Solve it with IPR Veda! Promising an easy & fast Process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">1</span>
              <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
                Your logo will be thoroughly checked by IPR Veda experts.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">2</span>
              <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
                Helping you to choose correct class to apply for trademark.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">3</span>
              <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
                Required documents will be collected to draft the application.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">4</span>
              <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
                Tickets are generated & number will be shared via mail/mobile.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">5</span>
              <p className="text-xs text-brand-dark/80 font-medium leading-relaxed">
                IPR Veda will work to register a trademark and share the documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">Here’s What You’ll Need</h2>
          <p className="text-brand-dark/70 text-sm mb-6">
            Once you have the below documents ready, you are good to proceed for the individual trademark registration process. IPR Veda uses the best-in-industry security protocols to ensure your documents are always secure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Proof of Identity</h4>
              <p className="text-xs text-brand-dark/70">Proof of identity of the owner (PAN card, government ID, passport, driving license, voter ID etc.)</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Proof of Address</h4>
              <p className="text-xs text-brand-dark/70">Proof of address (rent/lease agreement, electricity bill, NOC)</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Logo Format</h4>
              <p className="text-xs text-brand-dark/70">In case a logo is used, the same needs to be submitted in a black & white format</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Proof of TM Use</h4>
              <p className="text-xs text-brand-dark/70">Invoices, user date evidence, or commercial usage documents.</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">User Affidavit Form TM-48</h4>
              <p className="text-xs text-brand-dark/70">User affidavit Form TM-48 (duly signed).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use IPR Veda Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Why Should I Use IPR Veda for Trademarks for Individuals?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-2xl font-extrabold text-brand-primary mb-1">New Company</h3>
              <p className="font-bold text-brand-dark text-sm">We Register a New Company Every 9 Minutes</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-2xl font-extrabold text-brand-primary mb-1">50,000+</h3>
              <p className="font-bold text-brand-dark text-sm">Businesses Served by IPR Veda</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-2xl font-extrabold text-brand-primary mb-1">Financial Services</h3>
              <p className="font-bold text-brand-dark text-sm">All Financial Services in One Place</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="text-2xl font-extrabold text-brand-primary mb-1">Quick & Affordable</h3>
              <p className="font-bold text-brand-dark text-sm">Nominal rates, great turnaround time</p>
              <p className="text-xs text-brand-dark/50 mt-1">100% satisfaction guaranteed</p>
            </div>
          </div>

          <div className="mt-8 bg-brand-light border-l-4 border-brand-primary p-6 rounded-r-xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-bold text-brand-dark text-lg">Is your brand logo or brand name not secured?</h4>
              <p className="text-sm text-brand-dark/70">IPR Veda is right here by your side for gaining the trademark for Individuals.</p>
            </div>
            <button className="bg-brand-primary hover:bg-brand-hover text-white font-semibold px-6 py-2.5 rounded-lg whitespace-nowrap transition">
              GET STARTED NOW
            </button>
          </div>

          <div className="mt-6 bg-warning/10 border-l-4 border-warning p-5 rounded-r-xl">
            <h4 className="font-bold text-brand-dark text-base mb-1">💡 Did You Know?</h4>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              Coca-Cola Win Reversed at CAFC in Case Over Indian Soda Trademarks. As long as you renew your trademark on a regular basis, it will never expire and will be secured by the Trademark Act 1999.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Classification */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">An Overview of Individual Trademark Registration!</h2>
            <p className="text-brand-dark/70 leading-relaxed text-sm sm:text-base">
              A trademark is a unique symbol that can include anything from a name, logo, picture, or word to a label or sound. Registering a trademark is the first step to protect your brand name. Trademarks in India are initially registered for ten years and must be renewed after that (As per section 25 of the Trademarks Act, 1999).
              <br /><br />
              Once registered, a trademark can be a valuable asset for a business because it allows the company to project its distinct positioning to consumers. You should keep an eye out for any potential attempts by other businesses or individuals to register similar trademarks, even if they are associated with other domains. A trademark can be classified into two types:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="font-bold text-brand-dark text-lg mb-2">Individual Trademark</h3>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                An individual trademark is a type of trademark that distinguishes or uniquely identifies a company's goods or services from others. This category contains the vast majority of trademarks.
              </p>
            </div>

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <h3 className="font-bold text-brand-dark text-lg mb-2">Collective Trademark</h3>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                It distinguishes or uniquely identifies certain common characteristics of a good or service. A collective trademark holder is not the trademark's actual user. Rather, he oversees others' authorised use of such a trademark. To be able to use a collective trademark, users must meet certain authorization criteria. A collective trademark can be thought of as the Woolmark symbol.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">Benefits of Trademark Registration</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark text-sm mb-1">Ownership Rights Are Being Extended</h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed">
                  The primary purpose of registering a trademark is to assert the owner's rights. When you register your trademark, you take an important step toward securing your rights. You will have legal protection against any infringement of your brand name rights. The goodwill generated by your brand name is also protected.
                </p>
              </div>

              <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark text-sm mb-1">Litigation Protection</h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed">
                  Trademark registration gives you much-needed coverage against frivolous claims. Preventing others from dragging you into a legal quagmire over the unauthorised use of the trademark. Rather, if the trademark is registered in your name, you can sue others for unauthorised use of it.
                </p>
              </div>

              <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark text-sm mb-1">Brings in the Best Human Resources</h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed">
                  While you register your trademark, you are spreading your organization's vision, brand image, and unique characteristics. Naturally, bright young minds would want to be associated with such a prestigious brand. Because of the positive brand image created by your trademark, such talented human resources would be naturally drawn to work for your company. This will significantly reduce the cost of finding and hiring quality manpower.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Checklist for Individual Trademark Registration:</h3>
            <ul className="list-disc list-inside space-y-1.5 text-brand-dark/70 text-sm">
              <li>An individual who does not conduct business may also file a trademark application</li>
              <li>Can be able to obtain trademark registration for a word or symbol that he or she intends to use in the future</li>
              <li>While filing a trademark application as an individual, the applicant's real identity is necessary.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step by Step Process by IPR Veda */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-2">How Is Trademark Registration for Individuals Done by IPR Veda?</h2>
          <p className="text-brand-dark/70 text-sm mb-8">
            With our user-friendly platform, you can easily upload all of the required documents and pay the trademark fees for individual registration through our secure gateways. At IPR Veda, we take care of the entire trademark registration process for individuals. Below mentioned are the steps followed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mb-1">Step 1</span>
              <h4 className="font-bold text-brand-dark text-sm mb-1">Thorough Research Conducted by Experts</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                Our professionals would conduct a good research and indeed conduct a thorough investigation to see if the brand name and logo you have chosen are already registered in the name of someone else. Assistance will be done for you in making changes so that the event is not canceled in the future. If no matches are found, we will proceed with the process.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mb-1">Step 2</span>
              <h4 className="font-bold text-brand-dark text-sm mb-1">Ensure to Select the Right Class</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                Our experienced trademark executives will ensure that you select the correct class when applying for a trademark in this step.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mb-1">Step 3</span>
              <h4 className="font-bold text-brand-dark text-sm mb-1">Trademark Uniqueness Will Be Confirmed</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                Start the process after ensuring that your trademark under application is unique and can be registered as a new trademark. We'll begin by drafting the authorisation letter. Signing process will be done from your end to apply for your trademark on your behalf.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mb-1">Step 4</span>
              <h4 className="font-bold text-brand-dark text-sm mb-1">Documents Are Collected by Team</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                Following that, our representatives will collect all of the documents required for trademark registration applications.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mb-1">Step 5</span>
              <h4 className="font-bold text-brand-dark text-sm mb-1">Draft Application is Prepared</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                We will prepare your draft application in our one-of-a-kind online platform. You will be able to see the completed draft and make any necessary changes.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mb-1">Step 6</span>
              <h4 className="font-bold text-brand-dark text-sm mb-1">Submission Process is Done</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                We will submit an application on your behalf. A ticket number will be generated after the submission is found successful. It will be sent to your registered mobile number and email address. You can check the status of your trademark application on the IPR Veda portal using this number.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mb-1">Step 7</span>
              <h4 className="font-bold text-brand-dark text-sm mb-1">Coordination is Assured</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                We would coordinate with the authority to expedite your application. We would also handle any related Trademark Registry inquiries.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block mb-1">Step 8</span>
              <h4 className="font-bold text-brand-dark text-sm mb-1">Right to Use TM Symbol Shared</h4>
              <p className="text-xs text-brand-dark/70 leading-relaxed">
                Subject to successful document verification by the authorities, you will receive your TM application number within 3 working days of submitting your registration application. You will be given the TM symbol, granting you the temporary right to use the trademark symbol. If no one objects to your trademark application, the trademark registrar will place an advertisement in the official trademark journal. If no objections are filed within 4 months, the trademark will be registered within 6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factors to Consider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Factors to make when registering a trademark for an individual</h2>
          <p className="text-brand-dark/70 text-sm mb-4">When registering a trademark, you should keep the following points in mind:</p>
          
          <ul className="list-disc list-inside space-y-2 text-brand-dark/70 text-sm mb-8">
            <li>Make sure to read the rules and regulations for individual trademark registration e-filing</li>
            <li>Perform a thorough trademark search before applying for individual trademark registration. This will notify you if another owner is using a similar trademark somewhere else</li>
            <li>Determine the class in which your trademark will be classified. It is critical to select the correct trademark class and submit the appropriate description</li>
            <li>Register the correct prior use date</li>
            <li>If you want to e-file your trademark application, you will need a digital signature.</li>
          </ul>

          <div className="bg-brand-dark text-white p-6 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-bold">Do you find the above too difficult to bear?</h3>
              <p className="text-brand-text text-sm">Don't worry when IPR Veda is on your side. We value trademarks as unique creations for promoting your brand at IPR Veda. We would assist you with everything from designing a customised trademark watch to scrutinising and uploading the necessary documents, filing your trademark application, and obtaining the desired trademark in your favour.</p>
            </div>
            <button className="bg-brand-primary hover:bg-brand-hover text-white font-semibold px-6 py-2.5 rounded-lg whitespace-nowrap transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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