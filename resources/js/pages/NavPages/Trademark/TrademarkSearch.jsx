import React, { useState } from 'react';
import { 
  Search, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Target, 
  Zap, 
  Scale, 
  Briefcase,
  Globe,
  Layers,
  Eye,
  BookOpen,
  Mail,
  Phone
} from 'lucide-react';

const TrademarkSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('word');
  const [openFaq, setOpenFaq] = useState(null);
  const [checklist, setChecklist] = useState({
    nameFinalized: false,
    classIdentified: false,
    searchDone: false,
    reportReviewed: false
  });

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);
  const toggleChecklist = (key) => setChecklist(prev => ({ ...prev, [key]: !prev[key] }));

  // Mock Data for Search Results
  const mockResults = [
    { name: 'AURA TECH SOLUTIONS', class: 'Class 9 & 42', status: 'Identical', risk: 'High', desc: 'Exact match found. Registered in 2021.' },
    { name: 'AURA TECHNOLOGIES', class: 'Class 9', status: 'Similar', risk: 'Medium', desc: 'Phonetically similar. High chance of objection.' },
    { name: 'NOVA AURA SYSTEMS', class: 'Class 42', status: 'Similar', risk: 'Medium', desc: 'Contains the dominant word "Aura".' },
    { name: 'ZENITH AURA', class: 'Class 35', status: 'Available', risk: 'Low', desc: 'Different class. No conflict for tech services.' }
  ];

  const searchTypes = [
    {
      id: 'preliminary',
      title: 'Preliminary (Knock-out) Search',
      icon: Zap,
      desc: 'A quick, free search to identify exact or highly similar trademarks. It helps you immediately discard names that are clearly unavailable.',
      color: 'primary'
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive Professional Search',
      icon: Shield,
      desc: 'A deep dive by our IP attorneys. We check phonetic similarities, translated meanings, and across all 45 NICE classes to assess real-world risk.',
      color: 'dark'
    },
    {
      id: 'logo',
      title: 'Logo & Device Search',
      icon: Eye,
      desc: 'Using the Vienna Classification system, we search for visual similarities in logos, symbols, and design elements, not just text.',
      color: 'primary'
    },
    {
      id: 'global',
      title: 'International / Global Search',
      icon: Globe,
      desc: 'If you plan to expand outside India, we search the WIPO database and key international registries (USPTO, EUIPO) to ensure global safety.',
      color: 'success'
    }
  ];

  const faqs = [
    {
      q: "Is a Trademark Search mandatory before filing in India?",
      a: "Legally, no. But practically, it is absolutely critical. Filing without a search is like driving blindfolded. If a similar mark exists, your application will be rejected, and you will lose the government fees and 6-12 months of time. A search saves you from this disaster."
    },
    {
      q: "What is the difference between 'Identical' and 'Similar' in a search report?",
      a: "An 'Identical' mark is exactly the same as yours (e.g., 'Nike' vs 'Nike'). A 'Similar' mark sounds the same, looks the same, or has the same meaning (e.g., 'Nike' vs 'Nyke' or 'Jumpman'). Both can lead to rejection, but 'Similar' marks require legal expertise to evaluate."
    },
    {
      q: "How many Trademark Classes are there, and how do I choose?",
      a: "There are 45 NICE Classes. Classes 1-34 cover physical Goods (like clothing, electronics, food), and Classes 35-45 cover Services (like IT, education, legal). You must file in the classes that directly represent your current business and future expansion plans."
    },
    {
      q: "Can I use the ® symbol immediately after my search shows the name is available?",
      a: "No. You can only use the ™ symbol immediately after filing the application. The ® symbol is strictly reserved for marks that have been officially registered and granted by the Trademark Registry. Using ® prematurely is a punishable offense."
    },
    {
      q: "How long does a professional Trademark Search take?",
      a: "A preliminary search takes just a few hours. A comprehensive, attorney-reviewed search report with risk analysis and filing recommendations is typically delivered within 24 to 48 hours by IPRveda."
    },
    {
      q: "What if my desired name is already taken in a different class?",
      a: "Trademark rights are generally class-specific. If 'Apple' is taken for computers (Class 9), you can still register 'Apple' for a clothing brand (Class 25), unless the existing mark is a 'Well-Known Trademark' which has cross-class protection."
    }
  ];

  const colorMap = {
    primary: 'bg-brand-light text-brand-primary border-brand-border',
    dark: 'bg-brand-light text-brand-dark border-brand-border',
    success: 'bg-success/10 text-success border-success/20',
  };

  const riskColors = {
    High: 'bg-danger/10 text-danger border-danger/20',
    Medium: 'bg-warning/10 text-warning border-warning/20',
    Low: 'bg-success/10 text-success border-success/20',
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark pb-16">
      
      {/* 1. Hero Section with Interactive Mock Search */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-dark text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 text-brand-text" />
            <span className="text-sm font-semibold text-brand-text tracking-wide">Secure Your Brand Identity</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Trademark Search: <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-primary to-brand-text bg-clip-text text-transparent">
              Check Brand Availability Instantly
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-text max-w-3xl mx-auto mb-10 leading-relaxed">
            Before you invest in logos, domains, and marketing, ensure your brand name is legally safe. Avoid costly rejections and legal battles with our comprehensive Indian Trademark Search.
          </p>

          {/* Mock Search Interface */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-brand-lg p-4 sm:p-6 text-left">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <select 
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="px-4 py-3 bg-brand-light border border-brand-border rounded-xl text-brand-dark font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary sm:w-48"
              >
                <option value="word">Word Mark</option>
                <option value="phonetic">Phonetic (Sound-alike)</option>
                <option value="class">By NICE Class</option>
              </select>
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter brand name, e.g., 'Aura Tech'..."
                  className="w-full pl-12 pr-4 py-3 bg-brand-light border border-brand-border rounded-xl text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <button className="px-8 py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-hover transition-colors flex items-center justify-center gap-2">
                Search Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Mock Results Display */}
            <div className="border-t border-brand-light pt-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Live Preview (Mock Results)</p>
                <span className="text-xs text-gray-400">Showing 4 of 12 results</span>
              </div>
              <div className="space-y-3">
                {mockResults.map((res, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-brand-light rounded-xl hover:bg-white transition-colors border border-transparent hover:border-brand-border">
                    <div className="flex-1 mb-2 sm:mb-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-bold text-brand-dark">{res.name}</h4>
                        <span className="text-[10px] px-1.5 py-0.5 bg-gray-200 text-gray-600 rounded font-medium">{res.class}</span>
                      </div>
                      <p className="text-xs text-gray-500">{res.desc}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2.5 py-1 rounded-md font-bold border ${riskColors[res.risk]}`}>
                        {res.risk} Risk
                      </span>
                      <span className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                        res.status === 'Identical' ? 'bg-danger/10 text-danger border-danger/20' : 
                        res.status === 'Similar' ? 'bg-warning/10 text-warning border-warning/20' : 'bg-success/10 text-success border-success/20'
                      }`}>
                        {res.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <button className="text-sm font-bold text-brand-primary hover:text-brand-hover flex items-center justify-center gap-1 mx-auto">
                  View Full Detailed Report <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Types of Searches */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Types of Trademark Searches</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Not all searches are created equal. Choose the right depth of analysis based on your business needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.id} className="bg-brand-light p-6 rounded-2xl border border-brand-border hover:shadow-brand-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${colorMap[type.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Understanding the Results (Educational) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">How to Read Your Search Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">The Indian Trademark Registry uses specific criteria to evaluate conflicts. Here is what the statuses mean.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border-t-4 border-danger shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-danger" />
                <h3 className="text-xl font-bold text-brand-dark">Identical Mark</h3>
              </div>
              <p className="text-gray-600 mb-4">The exact same name or logo is already registered or applied for in your class.</p>
              <div className="bg-danger/10 p-3 rounded-lg border border-danger/20">
                <p className="text-sm font-bold text-danger">Action: Abandon this name immediately. Filing will result in a 100% rejection.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-t-4 border-warning shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-warning" />
                <h3 className="text-xl font-bold text-brand-dark">Similar / Deceptively Similar</h3>
              </div>
              <p className="text-gray-600 mb-4">The name sounds the same, looks similar, or has the same meaning (e.g., "Kwik" vs "Quick").</p>
              <div className="bg-warning/10 p-3 rounded-lg border border-warning/20">
                <p className="text-sm font-bold text-warning">Action: High risk. Requires an attorney to evaluate if you can overcome the objection.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-t-4 border-success shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
                <h3 className="text-xl font-bold text-brand-dark">Available / Clear</h3>
              </div>
              <p className="text-gray-600 mb-4">No identical or highly similar marks found in the relevant NICE classes.</p>
              <div className="bg-success/10 p-3 rounded-lg border border-success/20">
                <p className="text-sm font-bold text-success">Action: Safe to proceed! File your trademark application immediately to secure your rights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Checklist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-brand-lg p-8 sm:p-12 border border-brand-border">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3">Trademark Readiness Checklist</h2>
            <p className="text-gray-600">Track your steps before officially filing your brand with the government.</p>
          </div>
          <div className="space-y-4">
            {[
              { key: 'nameFinalized', text: 'I have finalized 2-3 backup brand names in case my first choice is taken.' },
              { key: 'classIdentified', text: 'I have identified the correct NICE Class (1-34 for Goods, 35-45 for Services).' },
              { key: 'searchDone', text: 'I have conducted a comprehensive phonetic and visual trademark search.' },
              { key: 'reportReviewed', text: 'I have reviewed the search report with an IP attorney to assess legal risks.' }
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
                  checklist[item.key] ? 'bg-success border-success' : 'border-gray-300'
                }`}>
                  {checklist[item.key] && <CheckCircle className="w-4 h-4 text-white" />}
                </div>
                <span className={`font-medium ${checklist[item.key] ? 'text-success line-through' : 'text-brand-dark'}`}>
                  {item.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Massive SEO / Long-form Content Section */}
      <section className="bg-white border-t border-brand-border py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8 text-center">
            The Complete Guide to Trademark Searching in India
          </h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              In the bustling Indian market, where thousands of new businesses are registered every month, your brand name is your most valuable asset. A <strong className="text-brand-dark">Trademark Search</strong> is the foundational step in the intellectual property lifecycle. It is the process of scanning the Indian Trademark Registry database to ensure that the name, logo, or tagline you wish to use is not already registered or applied for by someone else.
            </p>

            <h3 className="text-2xl font-bold text-brand-dark mt-10">Why is a Trademark Search Crucial Under the Indian Trademarks Act, 1999?</h3>
            <p>
              The Indian Trademarks Act, 1999, operates on a "first-to-file" basis, but it also heavily protects "prior users." If you file a trademark that is identical or deceptively similar to an existing mark in the same class, your application will be raised with an <strong className="text-brand-dark">Examination Report (Objection)</strong> under Section 9 (Absolute grounds) or Section 11 (Relative grounds) of the Act. 
            </p>
            <p>
              Ignoring the search phase can lead to severe consequences:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-brand-dark">Financial Loss:</strong> Government fees and attorney charges for a rejected application are non-refundable.</li>
              <li><strong className="text-brand-dark">Time Wastage:</strong> The trademark process takes 12-18 months. Discovering a conflict at the end is devastating.</li>
              <li><strong className="text-brand-dark">Rebranding Costs:</strong> If you are forced to change your name after launching, you lose all the marketing money, domain value, and brand recall you built.</li>
              <li><strong className="text-brand-dark">Legal Liability:</strong> Using a registered trademark without permission can lead to a lawsuit for infringement and passing off, resulting in heavy damages.</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-brand-light p-6 rounded-2xl border border-brand-border">
                <h3 className="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-brand-primary" /> The NICE Classification System
                </h3>
                <p className="text-sm text-brand-primary">
                  India follows the international NICE Classification. Goods fall under Classes 1-34 (e.g., Class 25 for Clothing, Class 9 for Software), while Services fall under Classes 35-45 (e.g., Class 35 for Advertising, Class 42 for IT Services). A thorough search must cover your primary class and related ancillary classes.
                </p>
              </div>
              <div className="bg-brand-light p-6 rounded-2xl border border-brand-border">
                <h3 className="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-brand-primary" /> Common Law Rights vs. Registered Rights
                </h3>
                <p className="text-sm text-brand-primary">
                  Even if a mark isn't registered, a business might have "Common Law" rights through continuous use. A professional IPRveda search doesn't just check the registry; we also scan the market, domain registries, and social media to uncover unregistered but legally protected brands.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-dark mt-10">The Anatomy of a Professional Search Report</h3>
            <p>
              When you order a comprehensive search from IPRveda, you don't just get a list of names. You receive a strategic legal document. Our report includes:
            </p>
            <p>
              <strong className="text-brand-dark">1. Exact Match Analysis:</strong> Identifying direct conflicts that will lead to immediate rejection.<br/>
              <strong className="text-brand-dark">2. Phonetic & Visual Similarity:</strong> Evaluating names that sound alike (e.g., "Kleenex" vs "Klenex") or look alike, which is the most common reason for objections.<br/>
              <strong className="text-brand-dark">3. Transliteration Check:</strong> Checking if your English brand name conflicts with a Hindi or regional language mark.<br/>
              <strong className="text-brand-dark">4. Risk Assessment:</strong> A clear Red, Amber, or Green signal indicating the probability of successful registration.<br/>
              <strong className="text-brand-dark">5. Strategic Recommendations:</strong> Advice on whether to proceed, modify the name, or file a user affidavit to overcome objections.
            </p>

            <h3 className="text-2xl font-bold text-brand-dark mt-10">Public Search vs. Professional Search: What's the Difference?</h3>
            <p>
              The Indian IP Office provides a free public search portal. While it is a great tool for a quick preliminary check, it has limitations. The public portal primarily relies on exact keyword matching. It often misses phonetic similarities, translated marks, or marks filed under different but related NICE classes. Furthermore, interpreting the legal status of a mark (e.g., "Abandoned", "Opposed", "Registered") requires legal expertise. A professional search bridges this gap, providing peace of mind and a clear path to registration.
            </p>

            <p>
              In conclusion, a Trademark Search is not an expense; it is an insurance policy for your brand's future. Whether you are a startup launching your first product or an established enterprise expanding into a new vertical, starting with a clean, legally verified brand name is the smartest business decision you can make.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Clearing your doubts about the Trademark Search process.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-brand-border overflow-hidden transition-all shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-light transition-colors"
                >
                  <h3 className="font-bold text-brand-dark pr-4 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
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

      {/* 7. Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-gradient text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don't Risk Your Brand's Future.</h2>
          <p className="text-brand-text text-lg mb-10 max-w-2xl mx-auto">
            Get a comprehensive, attorney-reviewed Trademark Search Report from IPRveda in just 24 hours. Secure your brand name before someone else does.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-brand-light transition-colors shadow-brand-lg flex items-center justify-center gap-2">
              Order Search Report <FileText className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-brand-dark/50 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-brand-dark transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Talk to an Attorney
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TrademarkSearch;