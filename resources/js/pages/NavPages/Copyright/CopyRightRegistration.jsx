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

  const infringementTypes = [
    {
      icon: FileText,
      title: 'Unauthorized Reproduction',
      description: 'Copying your book, article, software code, or artwork without permission and distributing it.',
      color: 'primary'
    },
    {
      icon: Music,
      title: 'Illegal Distribution & Streaming',
      description: 'Sharing your music, films, or videos on torrent sites, unauthorized streaming platforms, or social media.',
      color: 'danger'
    },
    {
      icon: PenTool,
      title: 'Derivative Works (Plagiarism)',
      description: 'Creating adaptations, translations, or remixes of your original work without a proper license.',
      color: 'primary'
    },
    {
      icon: Code,
      title: 'Software Piracy & Code Theft',
      description: 'Reverse engineering your software, stealing source code, or using licensed software beyond its terms.',
      color: 'success'
    }
  ];

  const legalSteps = [
    {
      step: '01',
      title: 'Evidence Collection & Documentation',
      desc: 'Before alerting the infringer, we secure digital evidence. This includes timestamped screenshots, Wayback Machine archives, and notarized copies of the infringing material to ensure it holds up in court.'
    },
    {
      step: '02',
      title: 'Cease & Desist Legal Notice',
      desc: 'Our IP attorneys draft a strong, legally binding Cease & Desist notice. This formally demands the infringer to stop using your work, remove it, and often demands compensation for damages.'
    },
    {
      step: '03',
      title: 'Platform Takedown (DMCA / IT Act)',
      desc: 'If the infringement is online (YouTube, Instagram, Amazon, Web Host), we file formal takedown notices under the DMCA (US) or Section 52 of the Indian IT Act to get the content removed within 24-48 hours.'
    },
    {
      step: '04',
      title: 'Civil & Criminal Litigation',
      desc: 'If the infringer ignores the notice, we file a lawsuit in the High Court or District Court seeking permanent injunctions, heavy damages, and in severe cases, criminal charges leading to imprisonment.'
    }
  ];

  const remedies = [
    { title: 'Interim & Permanent Injunctions', desc: 'Court orders that immediately stop the infringer from using your work.' },
    { title: 'Monetary Damages', desc: 'Financial compensation for the loss of revenue and brand damage you suffered.' },
    { title: 'Account of Profits', desc: 'Forcing the infringer to hand over all the profits they made using your stolen work.' },
    { title: 'Anton Piller Orders', desc: 'A powerful court order allowing our lawyers to raid the infringer\'s premises to seize illegal copies and evidence.' },
    { title: 'Criminal Prosecution', desc: 'Under Indian Law, copyright infringement is a cognizable offense punishable by up to 3 years in jail and ₹3 Lakh fine.' }
  ];

  const faqs = [
    {
      q: "I haven't registered my copyright. Can I still sue for infringement?",
      a: "Yes. In India, copyright is automatically created the moment a work is fixed in a tangible medium (e.g., written down, recorded, coded). Registration is not mandatory to file a lawsuit, but having a registered copyright certificate makes proving ownership in court significantly faster and easier."
    },
    {
      q: "What is 'Fair Use' and when is it NOT infringement?",
      a: "Under Section 52 of the Indian Copyright Act, 'Fair Use' allows limited use of copyrighted material without permission for purposes like private research, criticism, review, news reporting, and education. However, using it for commercial gain or copying a 'substantial part' of the work usually voids the Fair Use defense."
    },
    {
      q: "How long does it take to get a pirated video or article removed from the internet?",
      a: "If we file a proper takedown notice under the IT Act (Intermediary Guidelines) or DMCA, platforms like YouTube, Instagram, or web hosts are legally required to remove the infringing content within 24 to 36 hours. For complete legal resolution and damages, civil suits can take 6 to 18 months."
    },
    {
      q: "Someone copied my software code. What is the first step I should take?",
      a: "Do not contact the infringer immediately, as they might delete the evidence. First, hire an IP attorney to document and notarize the code similarity. Then, send a formal legal notice. IPRveda specializes in software and SaaS copyright protection."
    },
    {
      q: "Can I claim damages if the infringer didn't make any money from my work?",
      a: "Yes. Even if the infringer didn't profit, their unauthorized use dilutes your brand, affects your potential market, and violates your moral rights. You can still claim statutory damages and legal costs."
    },
    {
      q: "How much does it cost to fight a copyright infringement case with IPRveda?",
      a: "We offer transparent pricing. A standard Cease & Desist notice and platform takedown is charged at a fixed, affordable fee. For full litigation, we provide a customized estimate after reviewing the complexity of your case. Book a free consultation to get an exact quote."
    }
  ];

  const colorMap = {
    primary: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    danger: 'bg-danger/10 text-danger border-danger/20',
    success: 'bg-success/10 text-success border-success/20',
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-dark pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Gavel className="w-4 h-4 text-brand-text" />
            <span className="text-sm font-semibold text-brand-text tracking-wide">Legal Enforcement & Protection</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Copyright Infringement: <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-accent to-warning bg-clip-text text-transparent">
              Protect Your Work & Take Action
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-text max-w-3xl mx-auto mb-10 leading-relaxed">
            Has someone stolen your content, code, music, or art? Don't let pirates profit from your hard work. IPRveda provides aggressive legal strategies to stop infringement and recover your damages.
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

      {/* 2. What is Copyright Infringement? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              What Constitutes <span className="text-brand-primary">Copyright Infringement?</span>
            </h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-6">
              Copyright infringement occurs when a person or entity uses, reproduces, distributes, or displays a copyrighted work without the explicit permission of the owner. In the digital age, this happens daily across social media, e-commerce platforms, and software repositories.
            </p>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-8">
              Whether you are a software developer, a musician, an author, or a digital creator, your intellectual property is protected by the <strong>Indian Copyright Act, 1957</strong>. Ignoring infringement not only loses you revenue but also weakens your legal rights over time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="font-medium text-brand-dark">Literary Works</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="font-medium text-brand-dark">Artistic Works</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="font-medium text-brand-dark">Cinematograph Films</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="font-medium text-brand-dark">Sound Recordings</span>
              </div>
            </div>
          </div>
          <div className="bg-brand-light p-8 rounded-3xl border border-brand-border shadow-sm">
            <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-warning" /> Common Infringement Scenarios
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span className="text-brand-dark/80">A competitor copying your website's blog content or UI design.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span className="text-brand-dark/80">Someone uploading your paid course or eBook on free torrent sites.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span className="text-brand-dark/80">Using your original music track in their YouTube videos without a license.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <span className="text-brand-dark/80">Reverse engineering and selling your proprietary software code.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Types of Infringement Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Types of Copyright Violations We Handle</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto text-lg">Infringement isn't just copying. It takes many forms. Here is how your rights might be violated.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infringementTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm hover:shadow-brand hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${colorMap[type.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{type.title}</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Step-by-Step Legal Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Our 4-Step Enforcement Process</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto text-lg">When you hire IPRveda, we don't just send an email. We execute a calculated legal strategy to stop the infringement permanently.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-border before:to-transparent">
            {legalSteps.map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-light group-[.is-active]:bg-brand-primary text-brand-dark/50 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-bold">{step.step}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-light p-6 rounded-2xl border border-brand-border shadow-sm">
                  <h3 className="font-bold text-brand-dark text-lg mb-2">{step.title}</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Checklist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-primary/10 to-brand-dark/10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-brand p-8 sm:p-12 border border-brand-border">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3">Infringement Action Checklist</h2>
            <p className="text-brand-dark/70">Track your progress as you prepare to fight back against copyright theft.</p>
          </div>
          <div className="space-y-4">
            {[
              { key: 'registered', text: 'I have my Copyright Registration Certificate (or proof of creation).' },
              { key: 'evidence', text: 'I have captured timestamped screenshots and archived the infringing URLs.' },
              { key: 'noticeSent', text: 'I have sent a formal Cease & Desist legal notice to the infringer.' },
              { key: 'platformNotified', text: 'I have filed takedown notices with the hosting platforms (YouTube, AWS, etc.).' }
            ].map((item) => (
              <button 
                key={item.key}
                onClick={() => toggleChecklist(item.key)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                  checklist[item.key] 
                    ? 'bg-success/10 border-success/30' 
                    : 'bg-white border-brand-border hover:border-brand-primary'
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-colors ${
                  checklist[item.key] ? 'bg-success border-success' : 'border-brand-border'
                }`}>
                  {checklist[item.key] && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
                <span className={`font-medium ${checklist[item.key] ? 'text-success line-through' : 'text-brand-dark'}`}>
                  {item.text}
                </span>
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-brand-dark/60 mt-6">
            Need help completing these steps? <span className="text-brand-primary font-bold cursor-pointer">Let IPRveda handle it for you.</span>
          </p>
        </div>
      </section>

      {/* 6. Legal Remedies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Legal Remedies & Penalties in India</h2>
            <p className="text-brand-text max-w-2xl mx-auto text-lg">The law provides powerful tools to punish infringers and compensate you. Here is what we can claim on your behalf.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remedies.map((remedy, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{remedy.title}</h3>
                <p className="text-sm text-brand-text leading-relaxed">{remedy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Detailed FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-dark/70">Expert answers to the most common questions about copyright infringement.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-brand-light rounded-2xl border border-brand-border overflow-hidden transition-all">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white transition-colors"
                >
                  <h3 className="font-bold text-brand-dark pr-4 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-brand-dark/40 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-brand-dark/40 flex-shrink-0" />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-brand-dark/70 leading-relaxed pl-8">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-primary to-warning text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Stop the Infringement Today.</h2>
          <p className="text-brand-dark/80 text-lg mb-10 max-w-2xl mx-auto">
            Every day you wait, the infringer makes more money off your work. Let IPRveda's legal experts send a strong message and protect your intellectual property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-brand-light transition-colors shadow-lg flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> Email Us: legal@iprveda.com
            </button>
            <button className="px-8 py-4 bg-brand-dark/50 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-brand-dark transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call: +91-98765-43210
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CopyrightInfringement;