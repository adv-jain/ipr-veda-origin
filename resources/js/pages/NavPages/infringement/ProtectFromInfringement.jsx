import React, { useState } from 'react';
import { 
  Shield, Gavel, AlertTriangle, FileText, CheckCircle, 
  TrendingUp, Users, Clock, DollarSign, Building2, 
  Star, Phone, Mail, Lock, ArrowRight, Search, 
  Scale, Globe, Eye, Ban
} from 'lucide-react';

export default function ProtectFromInfringement() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', ipType: 'Trademark' });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Protect Your Brand from Intellectual Property Infringement
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Don't let copycats steal your hard work. IPRVeda provides aggressive, strategic, and result-oriented legal remedies to stop trademark, copyright, and patent infringement across India.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Rapid Cease & Desist Notice drafting and dispatch',
                  'Civil and criminal infringement litigation support',
                  'Customs recordation to stop counterfeit imports',
                  'Online marketplace takedown services (Amazon, Flipkart, etc.)',
                  'John Doe (Ashok Kumar) orders against unknown infringers',
                  'Pan-India network of expert IP litigation attorneys'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <div>
                    <div className="font-bold">4.9 out of 5</div>
                    <div className="text-sm text-blue-100">18k+ reviews</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="font-bold">98% Success</div>
                    <div className="text-sm text-blue-100">In Pre-litigation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Get a Free Infringement Analysis</h3>
              <p className="text-gray-500 mb-6 text-sm">Tell us about the violation. Our legal team will respond within 2 hours.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your Phone No."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                    placeholder="Enter your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type of Infringement *</label>
                  <select 
                    value={formData.ipType}
                    onChange={(e) => setFormData({...formData, ipType: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition bg-white"
                  >
                    <option>Trademark Infringement</option>
                    <option>Copyright Infringement</option>
                    <option>Patent Infringement</option>
                    <option>Design Infringement</option>
                    <option>Domain Name Dispute</option>
                    <option>Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  Stop the Infringement Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By clicking, you consent to receiving updates about our services as outlined in our Privacy Statement.
                </p>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span>Your Information Is 100% Confidential & Secure.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '5,000+', label: 'Infringement Cases Resolved' },
              { num: '98%', label: 'Pre-litigation Success Rate' },
              { num: '24 Hrs', label: 'Average C&D Notice Dispatch' },
              { num: 'Pan-India', label: 'High Court & District Court Presence' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-900">{stat.num}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Straight Forward, No Hidden Tabs */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Overview Section */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Comprehensive Intellectual Property Infringement Protection
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-xl leading-relaxed">
              Intellectual Property (IP) infringement occurs when someone uses, copies, or exploits your protected trademark, copyright, patent, or design without your authorization. In today's digital and highly competitive market, brand copying, counterfeit goods, and content piracy are rampant, causing severe financial and reputational damage to original creators and businesses.
            </p>
            <p className="leading-relaxed">
              At <strong>IPRVeda</strong>, we don't just register your IP; we actively defend it. Our specialized IP litigation and enforcement team provides end-to-end infringement protection services. From sending swift Cease and Desist notices to representing you in complex civil and criminal lawsuits, we ensure your intellectual property rights are aggressively protected and violators are held legally accountable.
            </p>
          </div>
        </section>

        {/* Types of Infringement */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            Types of IP Infringement We Handle
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Infringement can take many forms. IPRVeda provides specialized legal strategies for every type of intellectual property violation:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Building2,
                title: 'Trademark Infringement',
                desc: 'Occurs when a third party uses a mark that is identical or deceptively similar to your registered trademark for identical or similar goods/services, causing consumer confusion. We handle counterfeiting, passing off, and domain name cybersquatting cases.'
              },
              {
                icon: FileText,
                title: 'Copyright Infringement',
                desc: 'Unauthorized reproduction, distribution, public performance, or creation of derivative works based on your original literary, artistic, musical, or software creations. We specialize in digital piracy takedowns and publishing disputes.'
              },
              {
                icon: Search,
                title: 'Patent Infringement',
                desc: 'When a competitor makes, uses, sells, or imports your patented invention, process, or product without your license. We assist in claim construction, infringement analysis, and high-stakes patent litigation.'
              },
              {
                icon: Eye,
                title: 'Design Infringement',
                desc: 'Unauthorized copying of the unique visual appearance, shape, configuration, or ornamentation of your product. We help stop copycat manufacturers from flooding the market with lookalike products.'
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-red-50 rounded-xl p-6 border border-red-100 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Legal Remedies */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Gavel className="w-8 h-8 text-yellow-500" />
            Legal Remedies & Enforcement Strategies
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            IPRVeda employs a multi-pronged legal approach to stop infringement swiftly and maximize compensation for our clients.
          </p>
          
          <div className="space-y-6">
            {[
              {
                title: 'Cease and Desist (C&D) Notices',
                desc: 'The fastest and most cost-effective first step. Our attorneys draft legally robust C&D notices demanding the immediate cessation of infringing activities, destruction of counterfeit goods, and often, monetary compensation. This resolves over 80% of disputes without going to court.'
              },
              {
                title: 'Civil Litigation for Injunction and Damages',
                desc: 'If the infringer ignores the C&D notice, we file a civil suit seeking a temporary and permanent injunction (to stop them immediately) and claim monetary damages or an account of profits for the losses you have suffered.'
              },
              {
                title: 'Criminal Complaints and Raids',
                desc: 'For severe cases of trademark counterfeiting and copyright piracy, we file criminal complaints under the Trademarks Act and Copyright Act. We coordinate with local police authorities to conduct surprise raids, seize counterfeit goods, and initiate criminal prosecution against the offenders.'
              },
              {
                title: 'Online Marketplace Takedowns',
                desc: 'We leverage the IP protection portals of major e-commerce platforms (Amazon Brand Registry, Flipkart, Meesho) and social media networks (Meta, YouTube) to get infringing listings, fake profiles, and pirated content removed within 24-48 hours.'
              },
              {
                title: 'Customs Recordation (Border Measures)',
                desc: 'We help you record your registered IP rights with the Indian Customs authorities. This empowers customs officials to actively monitor, detain, and destroy counterfeit goods attempting to be imported into or exported from India.'
              },
              {
                title: 'John Doe (Ashok Kumar) Orders',
                desc: 'When the identity of the infringer is unknown (common in online piracy or large-scale counterfeit networks), we obtain dynamic injunction orders from the court against "unknown persons," allowing us to take down infringing content as soon as new URLs pop up.'
              }
            ].map((remedy, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{remedy.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{remedy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            IPRVeda\'s Infringement Resolution Process
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We follow a structured, aggressive, and transparent process to eliminate threats to your intellectual property.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Free Case Evaluation', desc: 'Share the details of the infringement. Our experts analyze the strength of your IP rights and the severity of the violation.' },
              { step: '02', title: 'Evidence Gathering', desc: 'We help you legally document the infringement through notarized screenshots, test purchases (mystery shopping), and affidavit preparation.' },
              { step: '03', title: 'Strategy Formulation', desc: 'We decide the best course of action: a stern C&D notice, an online takedown, or immediate court intervention based on the urgency.' },
              { step: '04', title: 'Legal Action Execution', desc: 'Our attorneys draft and dispatch the legal notices or file the necessary petitions in the appropriate jurisdiction.' },
              { step: '05', title: 'Negotiation or Litigation', desc: 'We represent you in settlement talks to secure favorable terms, or aggressively litigate in court if the infringer refuses to comply.' },
              { step: '06', title: 'Monitoring & Compliance', desc: 'Even after resolution, we offer ongoing brand monitoring services to ensure the infringer does not resume their illegal activities.' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 text-6xl font-bold text-blue-100 opacity-50 -mr-4 -mt-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consequences of Ignoring */}
        <section className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 lg:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Ban className="w-8 h-8 text-yellow-400" />
            The High Cost of Ignoring IP Infringement
          </h2>
          <div className="prose prose-lg max-w-none text-red-100 space-y-4">
            <p className="text-xl font-semibold text-white">
              Delaying action against infringers is not just a legal risk; it is a severe business threat.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Loss of Brand Distinctiveness</h3>
                <p className="text-sm">If you tolerate copycats, your trademark can become "genericized," making it legally impossible to enforce your rights in the future.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Revenue Drain</h3>
                <p className="text-sm">Counterfeit products siphon off your legitimate sales, often at lower quality, which damages your brand's reputation and customer trust.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Weakened Legal Standing</h3>
                <p className="text-sm">Courts may view prolonged inaction as "acquiescence" (implicit consent), making it much harder to win an injunction or claim damages later.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Valuation Impact</h3>
                <p className="text-sm">Unprotected IP significantly lowers your company's valuation, making it difficult to attract investors, secure loans, or sell the business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose IPRVeda */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-yellow-500" />
            Why Choose IPRVeda for Infringement Protection?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Aggressive & Strategic',
                desc: 'We don\'t just send template letters. We craft customized, intimidating legal strategies designed to make infringers back down immediately.'
              },
              {
                title: 'Pan-India Litigation Network',
                desc: 'With associates in Delhi, Mumbai, Bangalore, Chennai, and all major district courts, we can file suits or conduct raids anywhere in India.'
              },
              {
                title: 'Tech-Driven Monitoring',
                desc: 'We use advanced digital scraping tools to continuously monitor the web, e-commerce platforms, and trademark journals for new infringements.'
              },
              {
                title: 'Transparent Fee Structure',
                desc: 'Whether it\'s a flat fee for a C&D notice or a structured retainer for litigation, we provide clear, upfront pricing with no hidden legal surprises.'
              },
              {
                title: 'Proven Track Record',
                desc: 'Our attorneys have successfully represented startups, MSMEs, and Fortune 500 companies in complex IP enforcement and anti-piracy campaigns.'
              },
              {
                title: 'Holistic IP Management',
                desc: 'Beyond litigation, we advise on proactive measures like customs recordation and robust licensing agreements to prevent future infringement.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs - All Expanded (No Click to Show) */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'What is the first step I should take if I discover someone is infringing my IP?',
                a: 'Do not contact the infringer directly, as this can tip them off to destroy evidence. Immediately gather proof (screenshots, purchase receipts, URLs) and contact IPRVeda. We will conduct a legal analysis and typically start by sending a formal Cease and Desist notice.'
              },
              {
                q: 'How long does it take to stop an infringer?',
                a: 'A Cease and Desist notice can yield results within 7 to 15 days. Online takedowns on platforms like Amazon or YouTube often happen within 24 to 48 hours. Civil litigation for a permanent injunction can take several months to a few years, but temporary injunctions can be granted within weeks.'
              },
              {
                q: 'Can I take action if my trademark is not yet registered?',
                a: 'Yes. Under Indian law, you can file a "passing off" suit based on your "common law" rights if you can prove that you were the prior user of the mark and that the infringer\'s actions are causing confusion and damage to your goodwill.'
              },
              {
                q: 'What is a "John Doe" or "Ashok Kumar" order?',
                a: 'It is a dynamic injunction order passed by Indian courts against unidentified or unknown defendants. It is highly effective in online piracy cases, allowing you to block new websites or URLs that host your pirated content as soon as they appear, without filing a new lawsuit each time.'
              },
              {
                q: 'How much does it cost to enforce my intellectual property rights?',
                a: 'Costs vary based on the action. A Cease and Desist notice is highly affordable (typically a flat professional fee plus nominal dispatch charges). Civil litigation costs depend on the court jurisdiction, complexity of the case, and duration. IPRVeda provides a detailed, transparent cost estimate before initiating any action.'
              },
              {
                q: 'Can I claim monetary damages from the infringer?',
                a: 'Absolutely. In a civil suit, you can claim compensatory damages (for your actual losses), an account of profits (the money the infringer made from your IP), and in cases of willful and malicious infringement, the court may also award punitive damages.'
              },
              {
                q: 'Does IPRVeda handle international IP infringement?',
                a: 'Yes. While our primary litigation focus is India, we have a network of trusted international IP law firms. We can coordinate global takedowns, file WIPO UDRP complaints for domain disputes, and advise on cross-border enforcement strategies.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't Let Infringers Steal Your Success</h2>
          <p className="text-white/90 mb-8 text-lg max-w-3xl mx-auto">
            Every day you wait, the infringer strengthens their position and damages your brand. Let IPRVeda's expert legal team step in and protect what is rightfully yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918750008585" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              <Phone className="w-5 h-5" />
              Call Our IP Litigation Experts
            </a>
            <a href="#consultation-form" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
              <Mail className="w-5 h-5" />
              Request Free Case Analysis
            </a>
          </div>
        </section>

      </main>

      {/* Footer CTA Form */}
      <section id="consultation-form" className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">We're Here To Defend Your Rights</h2>
            <p className="text-gray-400">Get a confidential, no-obligation legal opinion on your infringement case today.</p>
          </div>
          
          <form className="max-w-2xl mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Enter Your Name *</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number *</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-700 bg-gray-800 text-gray-400 text-sm">
                  IN (+91)
                </span>
                <input
                  type="tel"
                  className="flex-1 px-4 py-3 rounded-r-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your Phone No."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Enter your Email *</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                placeholder="Enter your Email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
            >
              Get My Free Legal Analysis
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-gray-400 text-center">
              Your Information Is 100% Confidential. We Never Share Your Details.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}