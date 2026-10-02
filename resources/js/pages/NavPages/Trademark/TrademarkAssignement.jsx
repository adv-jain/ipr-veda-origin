import React, { useState } from 'react';
import Login from "../../Login"
export default function TrademarkAssignment() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { 
      q: "Can anyone assign a trademark?", 
      a: "Yes, the owner (proprietor) of a registered or unregistered trademark has the legal right to assign or transfer ownership rights to another entity or person." 
    },
    { 
      q: "What is the timeframe for the Trademark Assignment?", 
      a: "The trademark assignment process typically takes a few months to be updated in the official trademark registry, depending on statutory requirements and Registry processing times." 
    },
    { 
      q: "Can the Assignment of Trademarks be done without Goodwill?", 
      a: "Yes, a trademark can be assigned without goodwill (gross assignment), allowing the assignee to use the mark for products or services other than those already in use by the assignor." 
    },
    { 
      q: "How can I assign my Trademark?", 
      a: "You can assign your trademark by drafting a formal Trademark Assignment Agreement, submitting Form TM-P with the Registrar within 6 months, and complying with advertisement requirements." 
    },
    { 
      q: "How can I know if something is trademarked?", 
      a: "You can perform a public trademark search on the official IP India database to check if a specific word, logo, or brand name is already registered or applied for." 
    },
    { 
      q: "What are the Advantages of Trademark Assignment in India?", 
      a: "Trademark assignment allows brand monetization for assignors, instant brand value for assignees, clear legal ownership, and protection against legal disputes." 
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
              Trademark Assignment
            </h1>
            <p className="mt-4 text-lg text-brand-text leading-relaxed">
              Transfer your trademark to anyone in a hassle free process. Deed drafting and filing done by top IP lawyers.
            </p>
            <p className="mt-2 text-sm text-brand-text/80">
              Online process, thorough follow up and regular updates.
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
                  <p className="text-xs text-brand-text">1 Lakhs + Downloads</p>
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
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-8">
          Choose the Best Plan to Protect Your Brand
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Plan 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-brand-border flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-brand-dark">Trademark Registration</h3>
              <p className="text-xs text-brand-dark/50 mt-1">Traditional method for filing your TM application. Perfect for a standard approach.</p>
              
              <div className="my-6">
                <span className="text-xs text-brand-dark/40 line-through">₹1999</span>
                <span className="bg-success/10 text-success text-xs font-bold px-2 py-0.5 rounded ml-2">25% off</span>
                <p className="text-3xl font-extrabold text-brand-dark mt-1">₹1,499</p>
              </div>

              <h4 className="font-semibold text-brand-dark text-sm mb-3">What you'll get</h4>
              <ul className="space-y-2 text-xs text-brand-dark/70">
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> 30-minute consultation with a TM Expert</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> TM Class Search</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> Thorough trademark search to avoid any objections</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> TM application filing within 3 days</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> TM symbol on your brand within 3-5 days</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> TM Certificate*</li>
              </ul>
            </div>
            <button className="w-full mt-8 bg-brand-dark hover:bg-brand-darker text-white font-semibold py-2.5 rounded-lg transition">
              Proceed to Pay
            </button>
          </div>

          {/* Plan 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-brand border-2 border-brand-primary flex flex-col justify-between relative">
            <span className="absolute -top-3 right-6 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Recommended Plan
            </span>
            <div>
              <h3 className="text-xl font-bold text-brand-dark">Express Trademark Registration</h3>
              <p className="text-xs text-brand-dark/50 mt-1">Faster method of filing within 6 hours and start using the TM symbol in 24 hours.</p>
              
              <div className="my-6">
                <span className="text-xs text-brand-dark/40 line-through">₹2999</span>
                <span className="bg-success/10 text-success text-xs font-bold px-2 py-0.5 rounded ml-2">40% off</span>
                <p className="text-3xl font-extrabold text-brand-dark mt-1">₹1,999</p>
              </div>

              <h4 className="font-semibold text-brand-dark text-sm mb-3">What you'll get</h4>
              <ul className="space-y-2 text-xs text-brand-dark/70">
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> 30-minute consultation with a TM Expert</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> TM Class Search</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> Thorough trademark search to avoid any objections</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> TM application filing within 6 hours</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> TM symbol on your brand within 1-2 days</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> Free opt-in for MSME Registration</li>
                <li className="flex items-center gap-2"><span className="text-brand-primary font-bold">✓</span> TM Certificate*</li>
              </ul>
            </div>
            <button className="w-full mt-8 bg-brand-primary hover:bg-brand-hover text-white font-semibold py-2.5 rounded-lg transition shadow-md">
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
            It's easy to transfer your trademark. Let IPR Veda help you with your trademark assignment, and it's never too late!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">1</span>
              <p className="text-sm text-brand-dark/80 font-medium leading-relaxed">
                Submit all the required documents
              </p>
            </div>

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">2</span>
              <p className="text-sm text-brand-dark/80 font-medium leading-relaxed">
                You will be kept updated on your application's status by IPR Veda experts
              </p>
            </div>

            <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm mb-3">3</span>
              <p className="text-sm text-brand-dark/80 font-medium leading-relaxed">
                We will assist you with compliance and post-registration
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
            To prevent others from using your trademark, register it. Your documents are always secure with IPR Veda's best-in-industry security protocols. Here are the documents you need to prepare for the trademark assignment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Trademark Certificate</h4>
              <p className="text-xs text-brand-dark/70">Trademark registration certificate</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Identity & Address Proof</h4>
              <p className="text-xs text-brand-dark/70">Details (identity and address proof) of the assignor and assignee</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Consent Letter</h4>
              <p className="text-xs text-brand-dark/70">A letter of consent from the original trademark owner</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Goodwill Specification</h4>
              <p className="text-xs text-brand-dark/70">Goodwill or no goodwill in a trademark assignment</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Registrar's Direction</h4>
              <p className="text-xs text-brand-dark/70">Registrar's direction along with the advertisement</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Execution Details</h4>
              <p className="text-xs text-brand-dark/70">Witnesses and signatories, obtaining notarisation, date and place of execution</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-brand-dark text-sm mb-1">Authorization</h4>
              <p className="text-xs text-brand-dark/70">The power of attorney</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use IPR Veda Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Why Should I Use IPR Veda for Trademark Assignment?</h2>
          
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
              <h4 className="font-bold text-brand-dark text-lg">Are you concerned about transferring ownership?</h4>
              <p className="text-sm text-brand-dark/70">You don't need to worry. Now you can overcome anxiety with IPR Veda</p>
            </div>
            <button className="bg-brand-primary hover:bg-brand-hover text-white font-semibold px-6 py-2.5 rounded-lg whitespace-nowrap transition">
              GET STARTED NOW
            </button>
          </div>

          <div className="mt-6 bg-warning/10 border-l-4 border-warning p-5 rounded-r-xl">
            <h4 className="font-bold text-brand-dark text-base mb-1">💡 Did You Know?</h4>
            <p className="text-sm text-brand-dark/80 leading-relaxed">
              Like physical properties, trademarks can also be transferred by their owners. An assignment is one way to transfer a trademark. An assignment is the transfer of rights, interests, titles, and benefits from one person to another. The assignment of a trademark is the transfer of ownership rights to another party.
              <br /><br />
              A trademark assignment is a transfer of an owner's right, title, and interest in a trademark or brand mark in accordance with Section 37 of the Trademark Act of 1999. In cases where a trademark is registered, the assignment must be recorded in the trademark register.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Types of Assignment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">An Overview of Trademark Assignment</h2>
            <p className="text-brand-dark/70 leading-relaxed text-sm sm:text-base">
              Owners of trademarks can transfer them similarly to owners of physical properties. An assignment is one way to transfer a trademark. An assignment refers to the transfer of rights, interests, titles, and benefits from one person to another. Transferring a trademark right to another person is called an assignment.
              <br /><br />
              The assignor is the party transferring ownership, and the assignee is the party receiving it. A trademark can be assigned in writing by an act of the parties concerned under section 2(1)(b) of the Trade Marks Act, 1999. Trademarks can be assigned with or without goodwill, whether they are registered or unregistered.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">Types of Trademark Assignments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark text-lg mb-2">Complete Assignment</h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed">
                  Trademark rights are transferred to another party, including the right to earn royalties, to further transfer, and so forth. As an example, X owns the brand ABC. Through an agreement, X assigns his trademark 'ABC' to Y in its entirety. X will no longer have any rights to the ABC brand after this.
                </p>
              </div>

              <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark text-lg mb-2">Partial Assignment</h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed">
                  Assigning a trademark to another person is limited to specific services or goods. Transfer of ownership in trademarks is restricted to specific products or services. As an example, X is the owner of the brand ABC which is used for sauces and dairy products. Regarding dairy products, X assigns the rights to Y in the ABC brand to Y while retaining the rights in the ABC brand regarding sauces.
                </p>
              </div>

              <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark text-lg mb-2">Assignment With Goodwill of Business</h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed">
                  A trademark proprietor transfers the rights, entitlements, and values associated with their trademark to another party. Assigning a trademark with goodwill allows the assignee to use it for any class of goods or services, including those the assignor had already used. For example, X owns the 'lulu' brand of hair products. With goodwill, X assigns the brand 'lulu' to Y. The brand 'lulu' may be used on food products and other products manufactured by Y.
                </p>
              </div>

              <div className="p-5 bg-brand-light rounded-xl border border-brand-border">
                <h4 className="font-bold text-brand-dark text-lg mb-2">Assignment Without the Goodwill of Business</h4>
                <p className="text-xs text-brand-dark/70 leading-relaxed">
                  With respect to products or services that aren't in use, the trademark proprietor assigns rights and entitlements to the assignee. The assignor restricts a trademark assignment without goodwill. In the assignment, the assignor stipulates that the assignee is not entitled to use the trademark relating to goods or services already in use by the assignee. For example, X manufactures and sells bags under the brand 'Lulu'. X assigns the brand 'lulu' to Y without any goodwill. Other than bags, you can use the brand 'lulu' for any other product.
                </p>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Assigning a Trademark Requires Certain Prerequisites</h3>
            <ul className="list-disc list-inside space-y-1.5 text-brand-dark/70 text-sm">
              <li>Assignments of trademarks should be in writing.</li>
              <li>A trademark assignment must involve two identifying parties: the assignee (purchaser) and the assignor (owner).</li>
              <li>An assignor must consent to the trademark assignment and intend to do so.</li>
              <li>A proper and adequate consideration (amount) should accompany the trademark assignment.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process of Assignment Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Process of Assignment of Trademark</h2>
          <p className="text-brand-dark/70 text-sm mb-6">A trademark can be assigned in India in the following ways:</p>

          <div className="space-y-4">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm shrink-0">1</span>
              <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed pt-1">
                A trademark assignment agreement transfers the ownership rights in the trademark from the assignor to the assignee.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm shrink-0">2</span>
              <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed pt-1">
                An application for a trademark assignment in Form TM-P can be filed by either the assignee or the assignor to register the assignment.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm shrink-0">3</span>
              <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed pt-1">
                A Form TM-P must be filed with the trademark registrar within six months of the assignment. Fees may vary depending on the time after the assignment.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm shrink-0">4</span>
              <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed pt-1">
                The assignment must be advertised within the period directed by the trademark registrar.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm shrink-0">5</span>
              <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed pt-1">
                The advertisement and registrar's direction should be submitted to the registrar's office.
              </p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-sm shrink-0">6</span>
              <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed pt-1">
                Trademark assignment applications (form TM-P) and required documents must be received by the registrar of trademarks for successful registration and registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trademark Assignment With IPR Veda */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-border">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Trademark Assignment With IPR Veda</h2>
          <p className="text-brand-dark/70 text-sm mb-6">
            Using our experts to navigate the complex trademark assignment process will save a lot of time and stress. Our team ensures that all steps of the process are completed online and that the documents are filed on time. Here are few benefits of trademark assignment:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-dark text-sm mb-1">Brand Monetization</h4>
              <p className="text-xs text-brand-dark/70">Trademark assignments allow brands to be encashed</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-dark text-sm mb-1">Instant Value</h4>
              <p className="text-xs text-brand-dark/70">Trademark assignment gives the assignee the rights of an established brand</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-dark text-sm mb-1">Mutual Benefit</h4>
              <p className="text-xs text-brand-dark/70">Both the assignor and assignee benefit from trademark assignments</p>
            </div>

            <div className="p-4 bg-brand-light rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-dark text-sm mb-1">Legal Protection</h4>
              <p className="text-xs text-brand-dark/70">In case of dispute, the trademark assignment agreement establishes the legal rights of the assignor and assignee.</p>
            </div>
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