import React from 'react';
import { 
  Scale, Shield, Lightbulb, Users, Target, Eye, 
  HeartHandshake, Briefcase, ArrowRight, CheckCircle2, 
  Globe, Clock, Award, Zap, Lock
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Scale,
      title: 'Uncompromising Expertise',
      description: 'We combine deep legal mastery with sharp business acumen to build ironclad IP strategies, not just file forms.',
      color: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20'
    },
    {
      icon: Eye,
      title: 'Radical Transparency',
      description: 'No hidden fees, no confusing legal jargon. You will always know exactly what we are doing, why, and what it costs.',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      icon: Zap,
      title: 'Relentless Advocacy',
      description: 'In the IP world, speed is security. Our streamlined processes and proactive monitoring ensure your assets are defended swiftly.',
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      icon: Globe,
      title: 'Global Vision, Local Roots',
      description: 'From local Udyam registrations to international PCT patent filings, we protect your assets seamlessly across borders.',
      color: 'bg-brand-dark/10 text-brand-dark border-brand-dark/20'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'IP Assets Protected' },
    { number: '98%', label: 'First-Attempt Success Rate' },
    { number: '50+', label: 'Expert IP Attorneys' },
    { number: '24 Hrs', label: 'Average Response Time' }
  ];

  return (
    <main className="font-sans text-gray-700 bg-white">
      
      {/* ==========================================
          PHASE 1: HERO SECTION
          Goal: Immediate authority and emotional connection
      ========================================== */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-primary pt-24 pb-32 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
            Your Ideas Deserve <br className="hidden sm:block" />
            <span className="text-brand-accent">Ironclad Protection.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            IPRveda transforms complex intellectual property laws into simple, strategic advantages. We don't just file paperwork; we build legal fortresses around your biggest ideas, so you can focus on scaling your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-brand-dark bg-brand-accent rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Book a Free Strategy Call
            </a>
            <a href="#story" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300">
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: OUR STORY & MISSION
          Goal: Humanize the brand and state the problem/solution
      ========================================== */}
      <section id="story" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                Bridging the Gap Between <br />
                <span className="text-brand-primary">Innovation & The Law</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded by a team of passionate IP attorneys and tech entrepreneurs, IPRveda was born from a simple frustration: brilliant innovators were losing their ideas to bureaucratic red tape, opaque pricing, and intimidating legal jargon.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We set out to change that. Today, IPRveda is not just a law firm; we are strategic growth partners. Whether you are a solo creator filing your first copyright or a multinational securing a global patent portfolio, you receive the same relentless dedication and top-tier expertise.
              </p>
              
              <div className="space-y-4">
                {['End-to-end IP lifecycle management', 'Data-driven trademark search & clearance', 'Aggressive infringement protection & litigation'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span className="text-brand-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-brand-primary to-brand-darker p-8 rounded-2xl text-white shadow-xl transform sm:translate-y-8">
                <Target className="w-10 h-10 text-brand-accent mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Our Mission</h3>
                <p className="text-sm text-gray-200 leading-relaxed">To democratize IP protection and make world-class, strategic legal counsel accessible to every innovator, regardless of size.</p>
              </div>
              <div className="bg-gradient-to-br from-brand-dark to-brand-darker p-8 rounded-2xl text-white shadow-xl">
                <Eye className="w-10 h-10 text-brand-accent mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Our Vision</h3>
                <p className="text-sm text-gray-200 leading-relaxed">To be India's most trusted, tech-forward IP firm, fostering a national culture of original creation and fair competition.</p>
              </div>
              <div className="sm:col-span-2 bg-brand-light/50 border border-brand-primary/20 p-8 rounded-2xl shadow-sm">
                <div className="flex items-start gap-4">
                  <HeartHandshake className="w-10 h-10 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">Our Promise to You</h3>
                    <p className="text-gray-600 leading-relaxed">We treat your intellectual property with the same care, urgency, and aggression as if it were our own. Your success is our only metric of success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 3: CORE VALUES
      ========================================== */}
      <section className="py-20 lg:py-28 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">The IPRveda Pillars</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The core principles that drive our daily operations, shape our culture, and define our client relationships.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border ${value.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 4: STATS SECTION
      ========================================== */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 px-4">
                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-brand-accent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-300 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 5: COMPREHENSIVE SOLUTIONS
      ========================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Comprehensive IP Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We don't just file paperwork. We build robust, forward-looking legal strategies tailored to your specific business goals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-brand-light/30 border border-gray-200 hover:border-brand-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Trademark Protection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Secure your brand name, logo, and tagline across all 45 classes. From comprehensive prior-art search to registration and aggressive opposition defense.</p>
              <a href="/trademark" className="text-brand-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Explore Trademarks <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="group p-8 rounded-2xl bg-brand-light/30 border border-gray-200 hover:border-brand-dark/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-brand-dark/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-7 h-7 text-brand-dark" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Patent Filing & Strategy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Protect your inventions and technical innovations. We handle provisional and complete specifications, FTO searches, and global PCT filings.</p>
              <a href="/patent" className="text-brand-dark font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Explore Patents <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="group p-8 rounded-2xl bg-brand-light/30 border border-gray-200 hover:border-green-500/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Copyright & Licensing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Safeguard your software code, literary works, and artistic creations. We also draft robust, revenue-generating licensing agreements.</p>
              <a href="/copyright" className="text-green-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Explore Copyrights <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 6: FINAL CTA
      ========================================== */}
      <section id="contact" className="py-20 lg:py-28 bg-brand-light/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-primary to-brand-dark rounded-3xl p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">Ready to Protect Your Intellectual Property?</h2>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Don't leave your brand and innovations to chance. Schedule a free, no-obligation 15-minute strategy call with our expert IP attorneys today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918506059559" className="inline-flex justify-center items-center px-8 py-4 bg-white text-brand-dark font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 gap-2">
                  <Briefcase className="w-5 h-5" />
                  Book Free Strategy Call
                </a>
                <a href="mailto:legal@iprveda.com" className="inline-flex justify-center items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Explore Our Services
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-8 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" /> 100% Confidential • No Obligation • Response within 24 Hours
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;