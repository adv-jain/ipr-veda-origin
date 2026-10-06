import React, { useState } from 'react';
import { 
  BookOpen, 
  PenTool, 
  Music, 
  Film, 
  Code, 
  Camera, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone, 
  Clock, 
  Award, 
  Shield, 
  FileText,
  ArrowRight
} from 'lucide-react';

const CopyrightRegistration = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // 1. Visual Grid: What can be copyrighted
  const copyrightTypes = [
    {
      icon: BookOpen,
      title: 'Literary Works',
      examples: 'Books, Articles, Blogs, Poems, Computer Programs',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      icon: PenTool,
      title: 'Artistic Works',
      examples: 'Paintings, Drawings, Logos, Photographs, Sculptures',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      icon: Music,
      title: 'Musical Works',
      examples: 'Songs, Compositions, Lyrics, Sound Recordings',
      color: 'bg-pink-50 text-pink-700 border-pink-200'
    },
    {
      icon: Film,
      title: 'Cinematograph Films',
      examples: 'Movies, Short Films, Documentaries, YouTube Videos',
      color: 'bg-red-50 text-red-700 border-red-200'
    },
    {
      icon: Code,
      title: 'Software & Code',
      examples: 'Source Code, Mobile Apps, Websites, SaaS Platforms',
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      icon: Camera,
      title: 'Digital Content',
      examples: 'Online Courses, E-books, Podcasts, Presentations',
      color: 'bg-orange-50 text-orange-700 border-orange-200'
    }
  ];

  // 2. Transparent Pricing tailored for creators
  const pricingPlans = [
    {
      name: 'Standard Registration',
      price: '₹1,999',
      subtitle: 'For individual creators & authors',
      features: [
        'Work classification & documentation',
        'Form XIV preparation & filing',
        'Statement of Particulars drafting',
        'Diary number generation',
        'Application status tracking',
        'Email support'
      ],
      cta: 'Start Registration',
      popular: false,
      note: 'Best for first-time creators'
    },
    {
      name: 'Express Registration',
      price: '₹3,999',
      subtitle: 'For startups & growing brands',
      features: [
        'Everything in Standard, plus:',
        'Priority drafting within 24 hours',
        'Dedicated IP case manager',
        'Objection reply drafting (1st notice)',
        'Direct attorney consultation (1 session)',
        'WhatsApp priority support'
      ],
      cta: 'Get Express Protection',
      popular: true,
      note: 'Most popular for businesses'
    },
    {
      name: 'Complete IP Shield',
      price: '₹7,999',
      subtitle: 'Registration + 1-Year Monitoring',
      features: [
        'Everything in Express, plus:',
        'Multi-class filing support',
        '1-year infringement monitoring',
        'Unlimited attorney consultations',
        'Cease & Desist notice (1 free)',
        'Lifetime document storage'
      ],
      cta: 'Get Complete Protection',
      popular: false,
      note: 'For serious IP portfolios'
    }
  ];

  // 3. Simplified 4-Step Process
  const registrationSteps = [
    {
      step: '01',
      title: 'Work Classification',
      desc: 'We identify the correct category for your work and prepare the detailed Statement of Particulars and Statement of Further Particulars.'
    },
    {
      step: '02',
      title: 'Form XIV Filing',
      desc: 'Our IP attorneys prepare and electronically file your copyright application with the Copyright Office, including all required deposits.'
    },
    {
      step: '03',
      title: 'Diary Number Generation',
      desc: 'You receive an official Diary Number from the Copyright Office. This serves as immediate proof of filing, and you can start using the © symbol.'
    },
    {
      step: '04',
      title: 'Examination & Certificate',
      desc: 'After a mandatory 30-day waiting period, the examiner reviews the application. If approved, you receive your official Copyright Registration Certificate.'
    }
  ];

  // 4. Empathy-Driven FAQs
  const faqs = [
    {
      q: "Do I really need to register my copyright, or is it automatic?",
      a: "Copyright exists automatically the moment you create an original work. However, registration provides undeniable legal proof of ownership and is strictly required to file infringement lawsuits in Indian courts. Think of it as a birth certificate for your creative work."
    },
    {
      q: "How long does copyright registration take in India?",
      a: "After filing, there is a mandatory 30-day waiting period for any objections. If none arise, the examination process begins. The total time is typically 6 to 12 months. However, you can legally start using the © symbol immediately after we file."
    },
    {
      q: "Can I copyright an idea or a concept?",
      a: "No. Copyright protects the *expression* of an idea, not the idea itself. For example, you cannot copyright the general idea of a 'romantic comedy,' but you can copyright your specific, written screenplay. The work must be fixed in a tangible form."
    },
    {
      q: "What is the difference between the © and ™ symbols?",
      a: "© (Copyright) protects original creative works like books, music, code, and art. ™ (Trademark) protects brand identifiers like business names, logos, and slogans. (Note: A unique logo can actually be protected by both!)."
    },
    {
      q: "Are government fees included in your pricing?",
      a: "No, our pricing covers our professional legal and drafting fees. Government fees are separate and vary by applicant type (₹500 for individuals/startups, ₹2,000 for companies per work). We will always disclose this clearly before you pay."
    }
  ];

  return (
    <main className="font-sans text-gray-700 bg-white">
      
      {/* ==========================================
          PHASE 1: HERO SECTION
          Goal: Immediate clarity, empathy, and action
      ========================================== */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-primary pt-20 pb-24 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
             
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Protect Your Creative Work <br />
                <span className="text-brand-accent">From Theft & Piracy</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                You spent months creating it. Don't let someone steal it in seconds. Secure your books, code, music, or art with official copyright registration starting at just <span className="text-white font-bold">₹1,999</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#pricing" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Start Your Registration
                </a>
                <a href="tel:+918506059559" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" /> Talk to an Expert
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span>100% Online Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-accent" />
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </div>

            {/* Hero Visual / Trust Box */}
            <div className="hidden lg:block relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">What you receive:</h3>
                    <p className="text-gray-400 text-sm">Official deliverables in your inbox</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {['Official Copyright Search Report', 'Form XIV Filing Acknowledgement', 'Diary Number for © Symbol Usage', 'Lifetime Application Tracking Access'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-200">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: WHAT CAN BE COPYRIGHTED
          Goal: Help users instantly identify if they qualify
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              What Can You Copyright?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              If you created it, you likely own it. Here are the types of original works protected under the Indian Copyright Act, 1957.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copyrightTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div key={idx} className={`p-6 rounded-2xl border-2 ${type.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{type.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{type.examples}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 3: PRICING (Transparent & Clear)
      ========================================== */}
      <section id="pricing" className="py-20 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">No hidden fees. Choose the level of protection your creative work needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl flex flex-col h-full ${
                  plan.popular 
                    ? 'border-brand-primary shadow-lg scale-105 z-10' 
                    : 'border-gray-200 hover:border-brand-primary/30'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-max">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.subtitle}</p>
                
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <span className="text-4xl font-heading font-extrabold text-brand-dark">{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-1">+ Govt. Fees</span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div>
                  <button className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-brand-primary text-white hover:bg-brand-hover shadow-md hover:shadow-lg'
                      : 'bg-brand-light text-brand-dark hover:bg-brand-primary hover:text-white'
                  }`}>
                    {plan.cta}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">{plan.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 4: REGISTRATION PROCESS
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              How Copyright Registration Works
            </h2>
            <p className="text-lg text-gray-600">We handle the legal complexity so you can focus on creating.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {registrationSteps.map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-bold">{step.step}</span>
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-light/30 p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 5: TRUST SIGNALS
      ========================================== */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-2">5,000+</h3>
              <p className="text-gray-400">Copyrights Successfully Registered</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-2">24 Hours</h3>
              <p className="text-gray-400">Average Document Drafting Time</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-2">100%</h3>
              <p className="text-gray-400">Transparent, No Hidden Fees</p>
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
            <p className="text-lg text-gray-600">Clear answers to common creator concerns.</p>
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
                      <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
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
            Ready to Protect Your Creative Work?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Don't leave your hard work vulnerable. Join 5,000+ creators who trust IPRveda for fast, affordable copyright protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:legal@iprveda.com" className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 gap-2">
              <Mail className="w-5 h-5" />
              Email Us Today
            </a>
            <a href="tel:+918506059559" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all gap-2">
              <Phone className="w-5 h-5" />
              +91 85060-59559
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Free consultation • No obligation • Response within 24 hours
          </p>
        </div>
      </section>

    </main>
  );
};

export default CopyrightRegistration;