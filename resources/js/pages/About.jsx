import React from 'react';
import { 
  Scale, 
  Shield, 
  Lightbulb, 
  Users, 
  Target, 
  Eye, 
  HeartHandshake, 
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Globe,
  Clock
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Scale,
      title: 'Legal Excellence',
      description: 'We combine deep legal expertise with strategic business acumen to provide top-tier IP protection.',
      color: 'primary'
    },
    {
      icon: Eye,
      title: 'Total Transparency',
      description: 'No hidden fees, no confusing jargon. We keep you informed at every step of the IP journey.',
      color: 'success'
    },
    {
      icon: Clock,
      title: 'Rapid Execution',
      description: 'In the IP world, time is money. Our streamlined processes ensure swift filings and responses.',
      color: 'warning'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'From local trademarks to international patents, we help you protect your assets across borders.',
      color: 'dark'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'IP Applications Filed' },
    { number: '98%', label: 'Success Rate' },
    { number: '50+', label: 'Expert IP Attorneys' },
    { number: '15+', label: 'Countries Served' }
  ];

  const colorMap = {
    primary: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    dark: 'bg-brand-dark/10 text-brand-dark border-brand-dark/20'
  };

  return (
    <div className="min-h-screen bg-brand-light">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light via-brand-primary/5 to-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-dark/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
            Protecting Innovations, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-primary to-brand-darker bg-clip-text text-transparent">
              Empowering Brands.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
            IPRveda is a premier Intellectual Property law firm dedicated to helping startups, enterprises, and creators secure their most valuable intangible assets. We turn your ideas into legally protected monopolies.
          </p>
        </div>
      </section>

      {/* 2. Our Story / Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Bridging the Gap Between <span className="text-brand-primary">Innovation & Law</span>
            </h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-6">
              Founded by a team of passionate IP attorneys and tech enthusiasts, IPRveda was built to solve a critical problem: the IP registration process in India is complex, opaque, and intimidating for innovators.
            </p>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-8">
              We set out to change that. Today, IPRveda is not just a law firm; we are strategic partners in your growth. Whether you are a solo creator filing a copyright or a multinational securing a patent portfolio, we provide the same level of dedication and expertise.
            </p>
            
            <div className="space-y-4">
              {['End-to-end IP lifecycle management', 'Data-driven trademark search & clearance', 'Aggressive infringement protection'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-brand-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual / Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-brand-primary to-brand-darker p-6 rounded-2xl text-white shadow-xl transform translate-y-8">
              <Target className="w-8 h-8 mb-4 text-brand-text" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-brand-text leading-relaxed">To democratize IP protection and make world-class legal counsel accessible to every innovator.</p>
            </div>
            <div className="bg-gradient-to-br from-brand-dark to-brand-darker p-6 rounded-2xl text-white shadow-xl">
              <Eye className="w-8 h-8 mb-4 text-brand-text" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm text-brand-text leading-relaxed">To be the most trusted and tech-forward IP firm in India, fostering a culture of original creation.</p>
            </div>
            <div className="bg-gradient-to-br from-success to-success p-6 rounded-2xl text-white shadow-xl col-span-2">
              <HeartHandshake className="w-8 h-8 mb-4 text-brand-text" />
              <h3 className="text-xl font-bold mb-2">Our Promise</h3>
              <p className="text-sm text-brand-text leading-relaxed">We treat your intellectual property with the same care and urgency as if it were our own. Your success is our success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">The IPRveda Pillars</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto text-lg">The core principles that drive our daily operations and define our client relationships.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${colorMap[value.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{value.title}</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-dark to-brand-darker text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-white to-brand-text bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-brand-text font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. What We Do (Brief Services) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Comprehensive IP Solutions</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto text-lg">We don't just file paperwork. We build robust legal strategies tailored to your business goals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-brand-primary/5 to-white border border-brand-primary/20 hover:border-brand-primary/50 transition-all">
              <Shield className="w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Trademark Protection</h3>
              <p className="text-brand-dark/70 mb-4">Secure your brand name, logo, and tagline across all 45 classes. From search to registration and opposition defense.</p>
              <span className="text-brand-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-brand-dark/5 to-white border border-brand-dark/20 hover:border-brand-dark/50 transition-all">
              <Lightbulb className="w-10 h-10 text-brand-dark mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Patent Filing & Strategy</h3>
              <p className="text-brand-dark/70 mb-4">Protect your inventions and technical innovations. We handle provisional, complete specifications, and global PCT filings.</p>
              <span className="text-brand-dark font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-success/5 to-white border border-success/20 hover:border-success/50 transition-all">
              <Users className="w-10 h-10 text-success mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-brand-dark mb-3">Copyright & Licensing</h3>
              <p className="text-brand-dark/70 mb-4">Safeguard your software code, literary works, and artistic creations. We also draft robust licensing agreements.</p>
              <span className="text-success font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-primary to-brand-darker rounded-3xl p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Protect Your Intellectual Property?</h2>
            <p className="text-brand-text text-lg max-w-2xl mx-auto mb-8">
              Don't leave your brand and innovations to chance. Schedule a free consultation with our expert IP attorneys today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-brand-light transition-colors shadow-lg flex items-center justify-center gap-2">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-brand-darker/50 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-brand-darker transition-colors flex items-center justify-center gap-2">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;