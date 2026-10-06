import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Gavel, 
  FileText, 
  Scale, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  HelpCircle, 
  Eye, 
  Lock, 
  FileWarning, 
  BookOpen, 
  Mail, 
  Phone,
  ChevronDown,
  ChevronUp,
  Camera,
  Music,
  Code,
  PenTool
} from 'lucide-react';

const CopyrightInfringement = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [checklist, setChecklist] = useState({
    registered: false,
    evidence: false,
    noticeSent: false,
    platformNotified: false
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleChecklist = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // REWRITTEN: More relatable and clear descriptions
  const infringementTypes = [
    {
      icon: FileText,
      title: 'Content Theft & Plagiarism',
      description: 'Copying your blog posts, articles, eBooks, or website copy and publishing it as their own.',
      color: 'primary'
    },
    {
      icon: Music,
      title: 'Piracy & Illegal Streaming',
      description: 'Uploading your paid courses, music, or films to torrent sites or unauthorized streaming platforms.',
      color: 'danger'
    },
    {
      icon: PenTool,
      title: 'Unauthorized Use of Art',
      description: 'Using your illustrations, photos, or designs on merchandise, ads, or social media without a license.',
      color: 'primary'
    },
    {
      icon: Code,
      title: 'Software & Code Theft',
      description: 'Reverse engineering your app, stealing your source code, or reselling your software without permission.',
      color: 'success'
    }
  ];

  // REWRITTEN: Simplified from "calculated legal strategy" to clear, actionable steps
  const legalSteps = [
    {
      step: '01',
      title: 'Secure the Evidence',
      desc: 'Before alerting the thief, we freeze the crime scene. We take timestamped screenshots, archive URLs, and notarize the stolen content so it holds up in court.'
    },
    {
      step: '02',
      title: 'Send a Cease & Desist Notice',
      desc: 'Our IP lawyers send a strict, legally binding notice demanding they immediately stop using your work, delete it, and compensate you for damages.'
    },
    {
      step: '03',
      title: 'Force a Platform Takedown',
      desc: 'If it’s on YouTube, Instagram, or Amazon, we file formal DMCA/IT Act takedown notices. Platforms usually remove the stolen content within 24-48 hours.'
    },
    {
      step: '04',
      title: 'File a Lawsuit (If Needed)',
      desc: 'If they ignore us, we take them to court. We seek immediate injunctions to stop them, claim financial damages, and in severe cases, push for criminal charges.'
    }
  ];

  // REWRITTEN: Translated heavy legal jargon into plain English
  const remedies = [
    { title: 'Immediate Court Injunctions', desc: 'A court order that legally forces the thief to stop using your work immediately.' },
    { title: 'Financial Compensation', desc: 'We claim money for the revenue you lost and the damage done to your brand\'s reputation.' },
    { title: 'Surrender of Illegal Profits', desc: 'The court can force the infringer to hand over every rupee they made using your stolen work.' },
    { title: 'Surprise Evidence Raids', desc: 'Also known as Anton Piller orders, allowing our lawyers to raid their premises to seize illegal copies.' },
    { title: 'Criminal Charges & Jail Time', desc: 'Under Indian Law, copyright theft is a crime punishable by up to 3 years in jail and a ₹3 Lakh fine.' }
  ];

  // REWRITTEN: Empathy-driven FAQs that address real user anxieties
  const faqs = [
    {
      q: "I haven't officially registered my copyright. Can I still take legal action?",
      a: "Yes! In India, copyright is automatic the moment you create the work. You don't need a certificate to send a Cease & Desist notice or file a platform takedown. However, having a registration certificate makes winning a court case much faster and easier."
    },
    {
      q: "Someone used my work but gave me 'credit'. Is that still infringement?",
      a: "Yes. Giving credit does not equal getting permission. Unless your work falls under specific 'Fair Use' exceptions (like news reporting or education), using your work commercially without your explicit permission is still copyright infringement."
    },
    {
      q: "How fast can you get a stolen video or article removed from the internet?",
      a: "For online platforms like YouTube, Instagram, or web hosts, our DMCA/IT Act takedown notices usually result in the content being removed within 24 to 48 hours. Full legal action for financial damages takes longer, but the immediate theft can be stopped very quickly."
    },
    {
      q: "A competitor copied my software code. What should I do first?",
      a: "Do not message them yet—they might delete the evidence! First, take screenshots and document everything. Then, contact IPRveda. We specialize in software copyright and will handle the legal notice professionally to protect your code."
    },
    {
      q: "What if the person stealing my work is in another country?",
      a: "Because India is part of the Berne Convention, your copyright is protected in over 180 countries worldwide. We can file international DMCA takedowns and work with global legal partners to stop cross-border infringement."
    },
    {
      q: "How much does it cost to stop someone from stealing my work?",
      a: "We believe in transparent pricing. A standard Cease & Desist notice and platform takedown is available at a fixed, affordable fee. For complex court cases, we provide a clear, customized quote after reviewing your case. Book a free consultation to get an exact number."
    }
  ];

  const colorMap = {
    primary: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    danger: 'bg-red-50 text-red-600 border-red-200',
    success: 'bg-green-50 text-green-600 border-green-200',
  };

  return (
    <main className="font-sans text-gray-700 bg-white">
      
      {/* ==========================================
          PHASE 1: HERO SECTION (Empathy & Action)
      ========================================== */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-dark pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Gavel className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-semibold text-white tracking-wide">Legal Enforcement & Protection</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight leading-tight">
            Someone Stole Your Work? <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-accent to-yellow-300 bg-clip-text text-transparent">
              We'll Make Them Stop.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            It's frustrating to see your hard work stolen. Whether it's your code, art, music, or writing, IPRveda provides fast, aggressive legal action to remove the theft and recover your damages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-hover transition-colors shadow-lg flex items-center justify-center gap-2">
              Report Infringement <AlertTriangle className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: THE PROBLEM (Empathy & Clarity)
      ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-6">
              What Counts as <span className="text-brand-primary">Copyright Theft?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              In the digital age, copying is easier than ever. Copyright infringement happens when someone uses, reproduces, or distributes your original work without your explicit permission.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Ignoring theft doesn't make it go away—it actually weakens your legal rights over time. Under the <strong>Indian Copyright Act, 1957</strong>, you have powerful tools to fight back.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Literary Works', 'Artistic Works', 'Films & Videos', 'Music & Audio'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-brand-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Common Scenarios Box */}
          <div className="bg-brand-light/50 p-8 rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-heading font-bold text-brand-dark mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-500" /> Common Scenarios We Fix
            </h3>
            <ul className="space-y-4">
              {[
                "A competitor copying your website's blog content or UI design.",
                "Someone uploading your paid course or eBook on free torrent sites.",
                "Using your original music track in their YouTube videos without a license.",
                "Reverse engineering and selling your proprietary software code."
              ].map((scenario, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{scenario}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 3: TYPES OF INFRINGEMENT
      ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4">Types of Violations We Handle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Theft isn't just copying and pasting. Here is how your rights might be violated.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infringementTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${colorMap[type.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 4: THE PROCESS (Simplified)
      ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4">Our 4-Step Enforcement Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We don't just send a polite email. We execute a proven legal strategy to stop the theft permanently.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {legalSteps.map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-bold">{step.step}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-light/50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="font-heading font-bold text-brand-dark text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 5: INTERACTIVE CHECKLIST
      ========================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-primary/5 to-brand-dark/5">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-dark mb-3">Your Action Checklist</h2>
            <p className="text-gray-600">Track your progress as you prepare to fight back against copyright theft.</p>
          </div>
          <div className="space-y-4">
            {[
              { key: 'registered', text: 'I have my Copyright Registration Certificate (or proof of creation date).' },
              { key: 'evidence', text: 'I have captured timestamped screenshots and archived the infringing URLs.' },
              { key: 'noticeSent', text: 'I have sent a formal Cease & Desist legal notice to the infringer.' },
              { key: 'platformNotified', text: 'I have filed takedown notices with the hosting platforms (YouTube, AWS, etc.).' }
            ].map((item) => (
              <button 
                key={item.key}
                onClick={() => toggleChecklist(item.key)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                  checklist[item.key] 
                    ? 'bg-green-50 border-green-300' 
                    : 'bg-white border-gray-200 hover:border-brand-primary'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-colors ${
                  checklist[item.key] ? 'bg-green-500 border-green-500' : 'border-gray-300'
                }`}>
                  {checklist[item.key] && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
                <span className={`font-medium ${checklist[item.key] ? 'text-green-700 line-through' : 'text-gray-700'}`}>
                  {item.text}
                </span>
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Need help completing these steps? <span className="text-brand-primary font-bold cursor-pointer">Let IPRveda handle it for you.</span>
          </p>
        </div>
      </section>

      {/* ==========================================
          PHASE 6: LEGAL REMEDIES (Plain English)
      ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Legal Remedies & Penalties</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">The law provides powerful tools to punish thieves and compensate you. Here is what we can claim on your behalf.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remedies.map((remedy, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{remedy.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{remedy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 7: EMPATHY-DRIVEN FAQ
      ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Expert answers to the most common questions about copyright theft.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-brand-light/30 rounded-2xl border border-gray-200 overflow-hidden transition-all hover:border-brand-primary/30">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
                >
                  <h3 className="font-semibold text-brand-dark pr-4 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed pl-8">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 8: FINAL CTA
      ========================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-primary to-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">Stop the Infringement Today.</h2>
          <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
            Every day you wait, the thief makes more money off your work. Let IPRveda's legal experts send a strong message and protect your intellectual property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Email: legal@iprveda.com
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call: +91 85060-59559
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Free consultation • No obligation • Response within 24 hours
          </p>
        </div>
      </section>

    </main>
  );
};

export default CopyrightInfringement;