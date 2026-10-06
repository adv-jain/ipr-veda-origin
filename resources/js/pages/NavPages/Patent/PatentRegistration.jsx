import React, { useState } from 'react';
import { 
  FileText, Shield, Users, Clock, Phone, Mail, 
  CheckCircle, ChevronDown, ChevronRight, Star,
  Award, Globe, Lock, Search, Code, Building2, 
  Scale, Zap, TrendingUp, DollarSign, Lightbulb, 
  Eye, FileCheck, UserCheck, AlertCircle
} from 'lucide-react';
import HomeLogin from "../../HomeLogin"; 

export default function PatentRegistration() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // UX Fix: Merged and simplified into a clear, 4-step visual journey
  const processSteps = [
    {
      icon: Lightbulb,
      title: '1. Free Confidential Consultation & NDA',
      desc: 'Share your idea safely. We sign a strict Non-Disclosure Agreement (NDA) before you reveal any details, ensuring your invention remains 100% confidential.'
    },
    {
      icon: Search,
      title: '2. Patentability Search & Drafting',
      desc: 'Our experts conduct a global "Prior Art" search to ensure your idea is novel. We then professionally draft your Provisional or Complete Specification.'
    },
    {
      icon: FileCheck,
      title: '3. Official Filing & Priority Date',
      desc: 'We file your application with the Indian Patent Office. You immediately receive a "Priority Date" and can legally label your product "Patent Pending".'
    },
    {
      icon: Award,
      title: '4. Examination & Grant of Patent',
      desc: 'We handle all Examination Reports (FER) and objections on your behalf. Once approved, you receive your official Patent Certificate, granting 20 years of exclusive rights.'
    }
  ];

  // UX Fix: Simplified from a wall of text to clean, scannable cards
  const patentTypes = [
    {
      title: 'Provisional Application',
      desc: 'Secures your "Priority Date" quickly when your invention is still in development. Gives you 12 months to refine the product before filing the complete specification.',
      icon: Clock
    },
    {
      title: 'Complete (Non-Provisional) Application',
      desc: 'Filed when your invention is fully developed. Includes detailed claims and specifications, kicking off the immediate examination process.',
      icon: FileText
    },
    {
      title: 'PCT International Application',
      desc: 'File a single application to seek patent protection simultaneously in up to 153 countries, saving massive time and legal fees compared to individual country filings.',
      icon: Globe
    }
  ];

  // UX Fix: Rewritten for clarity, removing robotic jargon
  const requirements = [
    { title: 'Novelty (New)', desc: 'The invention must not have been published or used anywhere in the world before the filing date.' },
    { title: 'Inventive Step (Non-Obvious)', desc: 'It must involve a technical advancement or economic significance that is not obvious to an expert in that field.' },
    { title: 'Industrial Applicability', desc: 'The invention must be capable of being made or used in an industry, not just a theoretical concept.' }
  ];

  // UX Fix: Empathy-driven, brand-corrected FAQs
  const faqs = [
    { 
      q: 'Will my idea be safe when I share it with IPR Veda?', 
      a: 'Absolutely. Your security is our top priority. We sign a strict, legally binding Non-Disclosure Agreement (NDA) with every client before any details of your invention are discussed.' 
    },
    { 
      q: 'What is the difference between a Provisional and a Complete Patent?', 
      a: 'A Provisional Patent is a placeholder. It secures your "Priority Date" quickly and gives you 12 months to develop your product or seek funding. A Complete Patent is the final, detailed application that undergoes official examination for the 20-year grant.' 
    },
    { 
      q: 'How much does patent registration cost in India?', 
      a: 'Costs vary based on complexity. Government fees start at ₹1,600 for individuals/startups and ₹8,000 for large entities. Our professional drafting and filing fees start at ₹9,999 for a Provisional Patent. We provide a transparent, itemized quote before you pay anything.' 
    },
    { 
      q: 'Can I patent software or an app?', 
      a: 'Yes, but with conditions. In India, "computer programs per se" are not patentable. However, if your software solves a specific technical problem or is combined with novel hardware (a "technical effect"), it can be patented. Our experts specialize in software patent drafting.' 
    },
    { 
      q: 'How long does it take to get a patent granted in India?', 
      a: 'Filing a Provisional Patent takes just a few days. However, the full examination and grant of a Complete Patent typically takes 2 to 4 years. We actively track your application and respond to Examination Reports promptly to avoid unnecessary delays.' 
    },
    { 
      q: 'Do I need to build a working prototype before filing?', 
      a: 'No. Indian patent law requires you to describe the invention clearly enough that a person skilled in the field can make it, but a physical working prototype is not mandatory for filing.' 
    }
  ];

  return (
    <main className="font-sans text-gray-700 bg-white">
      
      {/* ==========================================
          PHASE 1: HERO SECTION
          Goal: Trust, clarity, and immediate action
      ========================================== */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-primary pt-20 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Turn Your Invention Into <br />
                <span className="text-brand-accent">Exclusive Legal Property</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Secure a 20-year monopoly on your idea. From prior-art search to final grant, IPR Veda handles the complex legal drafting so you can focus on innovation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-md">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span className="text-sm text-gray-200">File Provisional in 48 Hrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span className="text-sm text-gray-200">Expert Patent Attorneys</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span className="text-sm text-gray-200">Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span className="text-sm text-gray-200">FER Objection Handling</span>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <HomeLogin />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: THE PROCESS (Simplified & Visual)
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Your Path to a Granted Patent
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've simplified the complex Indian patent process into 4 clear, manageable steps.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 3: TYPES OF PATENTS
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Choose the Right Application Type
            </h2>
            <p className="text-lg text-gray-600">Not sure where to start? Here is a breakdown of your options.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {patentTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <div key={i} className="bg-brand-light/30 rounded-2xl p-8 border border-gray-200 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 4: PRICING (Transparent & Realistic)
      ========================================== */}
      <section id="pricing" className="py-20 bg-brand-light/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Transparent Patent Pricing
            </h2>
            <p className="text-lg text-gray-600">No hidden fees. Clear breakdown of professional and government costs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Provisional */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-brand-primary/30 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">Provisional Patent Filing</h3>
              <p className="text-sm text-gray-500 mb-6">Best for securing your priority date while you develop the product or seek funding.</p>
              <div className="mb-6">
                <span className="text-4xl font-heading font-extrabold text-brand-dark">₹9,999</span>
                <span className="text-gray-500 text-sm ml-2">+ Govt. Fees</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Strict NDA Signing', 'Global Prior Art Search', 'Provisional Specification Drafting', 'Form 1 & 2 Filing', 'Priority Date Secured'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 rounded-xl font-semibold bg-brand-light text-brand-dark hover:bg-brand-primary hover:text-white transition-all duration-300">
                Secure My Priority Date
              </button>
            </div>

            {/* Complete */}
            <div className="bg-white rounded-2xl p-8 border-2 border-brand-primary shadow-xl relative flex flex-col">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                Recommended
              </span>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">Complete Patent Registration</h3>
              <p className="text-sm text-gray-500 mb-6">For fully developed inventions ready for official examination and 20-year protection.</p>
              <div className="mb-6">
                <span className="text-4xl font-heading font-extrabold text-brand-dark">₹19,999</span>
                <span className="text-gray-500 text-sm ml-2">+ Govt. Fees</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {['Everything in Provisional, plus:', 'Complete Specification Drafting', 'Form 18 Examination Request', 'First Examination Report (FER) Reply', 'Hearing Support (if required)', 'Dedicated Patent Attorney'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 rounded-xl font-semibold bg-brand-primary text-white hover:bg-brand-hover transition-all duration-300 shadow-md">
                Start Complete Registration
              </button>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">
            *Government fees are ₹1,600 for Individuals/Startups and ₹8,000 for Large Entities per application. We will confirm the exact total before you pay.
          </p>
        </div>
      </section>

      {/* ==========================================
          PHASE 5: REQUIREMENTS (Cleaned up)
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
                Is Your Invention Patentable?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Not every idea can be patented. Under the Indian Patents Act, 1970, your invention must meet three strict criteria. Our experts evaluate your idea against these before you spend a rupee.
              </p>
              
              <div className="space-y-6">
                {requirements.map((req, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-brand-dark text-lg">{req.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Checklist */}
            <div className="bg-brand-light/30 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-brand-primary" /> Documents We Handle For You
              </h3>
              <ul className="space-y-4">
                {[
                  'Form 1: Application for Grant of Patent',
                  'Form 2: Provisional or Complete Specification',
                  'Form 3: Statement & Undertaking (Section 8)',
                  'Form 5: Declaration as to Inventorship',
                  'Form 26: Power of Attorney (if using IPR Veda)',
                  'Signed Drawing Sheets (if applicable)'
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> You don't need to prepare these yourself. Our attorneys draft all forms and specifications based on a simple technical discussion with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 6: EMPATHY-DRIVEN FAQ
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Clear answers to common inventor concerns.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-brand-primary/30 shadow-md' : 'border-gray-200 hover:border-brand-primary/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex justify-between items-center font-semibold text-brand-dark hover:bg-brand-light/30 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.q}</span>
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0 rotate-180 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 7: FINAL CTA
      ========================================== */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Don't Let Your Idea Remain Just an Idea.
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Every day you wait is a day someone else could file a similar concept. Secure your priority date today with IPR Veda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:legal@iprveda.com" className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 gap-2">
              <Mail className="w-5 h-5" />
              Request Free Consultation
            </a>
            <a href="tel:+918506059559" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all gap-2">
              <Phone className="w-5 h-5" />
              +91 85060-59559
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            100% Confidential • NDA Protected • No Obligation
          </p>
        </div>
      </section>

    </main>
  );
}