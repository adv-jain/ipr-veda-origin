import React, { useState } from 'react';
import { 
  Search, FileText, Shield, Database, CheckCircle, 
  AlertTriangle, ArrowRight, HelpCircle, ChevronDown, 
  Lightbulb, TrendingUp, Scale, Globe, Clock, 
  FileCheck, XCircle, Target, Zap, Lock
} from 'lucide-react';

const IndianPatentSearch = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const searchTypes = [
    {
      id: 'novelty',
      title: 'Novelty / Patentability Search',
      icon: Lightbulb,
      desc: 'Conducted before filing to ensure your invention is truly new. Saves you from wasting time and government fees on unpatentable ideas.',
      color: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20'
    },
    {
      id: 'fto',
      title: 'Freedom to Operate (FTO)',
      icon: Shield,
      desc: 'Performed before a product launch to ensure you aren\'t infringing on active patents. Crucial for avoiding costly injunctions and lawsuits.',
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      id: 'invalidity',
      title: 'Invalidity / Validity Search',
      icon: Scale,
      desc: 'Used during litigation or licensing to find "prior art" that can invalidate a competitor\'s patent or prove your patent is rock-solid.',
      color: 'bg-red-50 text-red-700 border-red-200'
    },
    {
      id: 'state',
      title: 'State-of-the-Art Search',
      icon: TrendingUp,
      desc: 'A broad landscape analysis to understand current technology trends, identify key competitors, and find white spaces for your R&D.',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  const faqs = [
    {
      q: "Is a patent search legally mandatory before filing in India?",
      a: "No, it is not legally mandatory. However, it is highly recommended. Over 80% of patent rejections happen due to overlooked 'prior art.' A professional search drastically increases your chances of a successful grant."
    },
    {
      q: "Can I just use the free InPASS database myself?",
      a: "InPASS is a great free tool, but interpreting patent 'claims' and using correct IPC (International Patent Classification) codes requires legal expertise. A missed keyword or wrong classification can give you a false sense of security. Our experts combine InPASS with global databases and semantic AI to find what keyword searches miss."
    },
    {
      q: "What happens if the search shows my idea is already patented?",
      a: "Don't panic. This is exactly why you do the search *before* filing. Our attorneys will analyze the existing patent's claims. Often, we can help you 'design around' the existing patent by modifying your invention, or we may find the existing patent is weak and can be challenged."
    },
    {
      q: "How long does a professional patent search take?",
      a: "A basic Novelty Search report is typically delivered in 3-5 business days. A comprehensive Freedom to Operate (FTO) search for complex technologies may take 2-3 weeks due to the depth of legal analysis required."
    },
    {
      q: "Is my invention idea safe when I share it with IPRveda for a search?",
      a: "Absolutely. We sign a strict, legally binding Non-Disclosure Agreement (NDA) with every client before you share any technical details. Your intellectual property remains 100% yours."
    }
  ];

  return (
    <main className="font-sans text-gray-700 bg-white">
      
      {/* ==========================================
          PHASE 1: HERO SECTION (Outcome-Focused)
          Goal: Sell the report, not a fake search tool
      ========================================== */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-primary pt-24 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
             
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Don't File Your Patent <br />
                <span className="text-brand-accent">Blind.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Over 80% of patent rejections happen due to overlooked "prior art." Get an expert-led Novelty or Freedom-to-Operate (FTO) search report to validate your invention before you spend a rupee on government fees.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#pricing" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Get a Search Quote <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#process" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300">
                  How It Works
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span>Strict NDA Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span>Global + InPASS Databases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span>Attorney-Reviewed Reports</span>
                </div>
              </div>
            </div>

            {/* Visual: Sample Report Preview (Builds desire for the outcome) */}
            <div className="hidden lg:block relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">IPRveda Search Report</h3>
                      <p className="text-gray-400 text-xs">Confidential • Novelty Search</p>
                    </div>
                  </div>
                  <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                    High Novelty Probability
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">Invention Title</span>
                      <span className="text-gray-500 text-xs">AI-Based Fraud Detection</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-brand-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-400">Novelty Score</span>
                      <span className="text-xs text-brand-accent font-bold">85%</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {['Global Database Coverage (WIPO, Espacenet)', 'Indian InPASS Deep Dive', 'IPC Classification Mapping', 'Attorney Risk Assessment'].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative element behind */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-brand-primary/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: TYPES OF SEARCHES
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Choose the Right Search for Your Goal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Depending on where you are in your innovation journey, we offer four specialized search services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {searchTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.id} className="bg-brand-light/30 p-8 rounded-2xl border border-gray-200 hover:border-brand-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${type.color}`}>
                    <Icon className="w-7 h-7" />
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
          PHASE 3: THE "ABSOLUTE NOVELTY" TRAP (UX Content Fix)
          Goal: Break up the SEO wall of text into high-impact, scannable blocks
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: The Problem */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
                The Hidden Risks of Skipping a Search
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Many inventors mistakenly believe that if their product isn't sold in India, it's safe to patent. This is a dangerous myth. The Indian Patent Office follows an <strong className="text-brand-primary">Absolute Novelty</strong> standard.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Global Prior Art Applies</h4>
                    <p className="text-sm text-gray-600">Any public disclosure anywhere in the world (old journals, foreign patents, YouTube videos) can be used to reject your Indian application.</p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">The "Claims" Trap</h4>
                    <p className="text-sm text-gray-600">DIY searches on Google Patents often miss crucial patents because they rely on simple keywords, ignoring the complex legal "claims" section where the true boundary lies.</p>
                  </div>
                </div>
                <div className="flex gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Wasted R&D Budget</h4>
                    <p className="text-sm text-gray-600">Building a product only to receive a Cease & Desist letter later can bankrupt a startup. An FTO search prevents this.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The IPRveda Solution */}
            <div className="bg-brand-dark text-white rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-heading font-bold mb-6 relative z-10">The IPRveda Advantage</h3>
              <p className="text-gray-300 mb-8 relative z-10">
                We don't just run a keyword search. We combine advanced technology with human legal expertise to deliver a legally defensible report.
              </p>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Multi-Database Cross-Referencing</h4>
                    <p className="text-sm text-gray-400">We combine InPASS, WIPO Patentscope, Espacenet, and proprietary AI semantic search tools.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">IPC Classification Mapping</h4>
                    <p className="text-sm text-gray-400">We map your invention to the correct International Patent Classification codes, ensuring we find conceptual matches, not just keyword matches.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Attorney-Reviewed Analysis</h4>
                    <p className="text-sm text-gray-400">Every report is reviewed by a registered Indian Patent Agent who provides actionable recommendations, not just a raw data dump.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 4: THE PROCESS
      ========================================== */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              How Our Search Process Works
            </h2>
            <p className="text-lg text-gray-600">A transparent, secure, and thorough approach to validating your innovation.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {[
              { step: '01', title: 'Sign NDA & Share Details', desc: 'Your security is paramount. We begin by signing a strict Non-Disclosure Agreement. You then share your invention details, drawings, or a brief summary.' },
              { step: '02', title: 'Deconstruction & Strategy', desc: 'Our experts break down your invention into core technical components and identify the relevant keywords and IPC classification codes.' },
              { step: '03', title: 'Deep-Dive Search Execution', desc: 'We execute complex Boolean queries across global databases (InPASS, WIPO, Espacenet) and run semantic AI searches to catch conceptual similarities.' },
              { step: '04', title: 'Actionable Report Delivery', desc: 'Within 3-5 business days, you receive a comprehensive, attorney-reviewed report mapping your invention against prior art, complete with a novelty score and strategic recommendations.' }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-bold">{item.step}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-light/30 p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 5: EMPATHY-DRIVEN FAQ
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Clear answers to common inventor concerns about patent searching.</p>
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
          PHASE 6: FINAL CTA
      ========================================== */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Validate Your Idea Before You Invest.
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Don't risk your R&D budget or government fees on an unpatentable idea. Get a comprehensive, attorney-reviewed Indian Patent Search report from IPRveda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 gap-2">
              <FileText className="w-5 h-5" />
              Order Your Search Report
            </a>
            <a href="tel:+918506059559" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all gap-2">
              <Clock className="w-5 h-5" />
              Talk to a Patent Agent
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            100% Confidential • NDA Protected • Reports in 3-5 Business Days
          </p>
        </div>
      </section>

    </main>
  );
};

export default IndianPatentSearch;