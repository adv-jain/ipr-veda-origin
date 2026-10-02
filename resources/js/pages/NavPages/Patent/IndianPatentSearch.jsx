import React, { useState, useMemo } from 'react';
import { 
  Search, 
  FileText, 
  Shield, 
  Database, 
  Filter, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Target, 
  Zap, 
  Scale, 
  TrendingUp,
  Briefcase,
  Lightbulb,
  Globe,
  Clock
} from 'lucide-react';

const IndianPatentSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('keyword');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Mock Data for Search Results
  const mockResults = [
    { id: 'IN202314056789A', title: 'Artificial Intelligence Based Fraud Detection System', applicant: 'TechCorp India Pvt Ltd', date: '2023-08-15', status: 'Published' },
    { id: 'IN202241012345A', title: 'Method for Enhancing Battery Life in IoT Devices', applicant: 'GreenEnergy Solutions', date: '2022-11-20', status: 'Granted' },
    { id: 'IN202411098765A', title: 'Biodegradable Packaging Material from Agricultural Waste', applicant: 'EcoPack Innovations', date: '2024-01-10', status: 'Examination' }
  ];

  const searchTypes = [
    {
      id: 'novelty',
      title: 'Novelty / Patentability Search',
      icon: Lightbulb,
      desc: 'Conducted before filing a patent to ensure your invention is new and non-obvious. It saves you from wasting money on unpatentable ideas.',
      color: 'primary'
    },
    {
      id: 'fto',
      title: 'Freedom to Operate (FTO)',
      icon: Shield,
      desc: 'Performed before launching a product to ensure you are not infringing on any active patents in India. Crucial for avoiding costly lawsuits.',
      color: 'success'
    },
    {
      id: 'invalidity',
      title: 'Invalidity / Validity Search',
      icon: Scale,
      desc: 'Used during litigation to find "prior art" that can invalidate a competitor\'s patent or prove that your patent is valid and strong.',
      color: 'danger'
    },
    {
      id: 'state',
      title: 'State-of-the-Art Search',
      icon: TrendingUp,
      desc: 'A broad search to understand the current technological landscape, identify key players, and find white spaces for R&D.',
      color: 'primary'
    }
  ];

  const databases = [
    { name: 'InPASS (Indian Patent Advanced Search System)', desc: 'The official database by the Indian Patent Office. Highly detailed but complex interface.', type: 'Official' },
    { name: 'WIPO Patentscope', desc: 'Global database including Indian PCT applications. Great for international prior art.', type: 'Global' },
    { name: 'Google Patents', desc: 'User-friendly, fast, and great for initial keyword-based searches and translations.', type: 'Free Tool' },
    { name: 'IPRveda Proprietary AI Tool', desc: 'Our custom-built AI engine that uses semantic search to find hidden prior art missed by keyword searches.', type: 'Premium' }
  ];

  const faqs = [
    {
      q: "Is it mandatory to conduct a patent search before filing in India?",
      a: "While not legally mandatory, it is highly recommended. Filing a patent without a search can lead to rejection if prior art exists, wasting your time and government fees. A professional search increases your success rate by over 80%."
    },
    {
      q: "How far back does an Indian Patent Search go?",
      a: "A comprehensive search should cover global databases going back at least 20 years (the lifespan of a patent). However, for novelty, any public disclosure anywhere in the world, even before the internet era (like old journals), counts as prior art."
    },
    {
      q: "What is the difference between a Keyword Search and an IPC Classification Search?",
      a: "Keyword searches look for specific words in the text. IPC (International Patent Classification) searches look for the technical category of the invention. Professional searches always combine both using Boolean operators to ensure nothing is missed."
    },
    {
      q: "Can I do a patent search myself using InPASS?",
      a: "Yes, InPASS is free to use. However, interpreting patent claims and understanding legal boundaries requires expertise. A missed keyword or wrong IPC code can lead to a false sense of security. We recommend using IPRveda's expert search reports for critical business decisions."
    },
    {
      q: "How long does a professional patent search take?",
      a: "A basic novelty search takes 3-5 business days. A comprehensive Freedom to Operate (FTO) search for a complex technology can take 2-3 weeks due to the depth of analysis required."
    },
    {
      q: "What happens if my search shows my idea is already patented?",
      a: "Don't panic. Our attorneys will analyze the claims of the existing patent. Often, you can 'design around' the existing patent by modifying your invention, or you may find that the existing patent is weak and can be challenged."
    }
  ];

  const colorMap = {
    primary: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    success: 'bg-success/10 text-success border-success/20',
    danger: 'bg-danger/10 text-danger border-danger/20',
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark">
      
      {/* 1. Hero Section with Mock Search UI */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-dark pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Database className="w-4 h-4 text-brand-text" />
            <span className="text-sm font-semibold text-brand-text tracking-wide">Comprehensive IP Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Indian Patent Search: <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
              Discover Prior Art & Protect Your Innovation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-text max-w-3xl mx-auto mb-10 leading-relaxed">
            Don't file a patent blind. Conduct a thorough Indian and global patent search to validate your invention, avoid infringement, and save thousands in legal fees.
          </p>

          {/* Mock Search Interface */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-brand-lg p-4 sm:p-6 text-left">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <select 
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="px-4 py-3 bg-brand-light border border-brand-border rounded-xl text-brand-dark font-medium focus:outline-none focus:ring-2 focus:ring-brand-primary sm:w-48"
              >
                <option value="keyword">Keyword Search</option>
                <option value="applicant">Applicant Name</option>
                <option value="ipc">IPC Classification</option>
                <option value="patentNo">Patent Number</option>
              </select>
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter keywords, e.g., 'Machine Learning Fraud Detection'..."
                  className="w-full pl-12 pr-4 py-3 bg-brand-light border border-brand-border rounded-xl text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
              </div>
              <button className="px-8 py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-hover transition-colors flex items-center justify-center gap-2">
                Search Patents <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Mock Results Display */}
            <div className="border-t border-brand-border pt-4 space-y-3">
              <p className="text-xs font-bold text-brand-dark/50 uppercase tracking-wider mb-2">Live Preview (Mock Results)</p>
              {mockResults.map((res, idx) => (
                <div key={idx} className="flex items-start justify-between p-3 bg-brand-light rounded-lg hover:bg-white transition-colors cursor-pointer group">
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-primary">{res.title}</h4>
                    <p className="text-xs text-brand-dark/50 mt-1">{res.id} • {res.applicant}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-md font-medium ${
                    res.status === 'Granted' ? 'bg-success/10 text-success border-success/20' : 
                    res.status === 'Published' ? 'bg-brand-primary/10 text-brand-primary border-brand-primary/20' : 'bg-warning/10 text-warning border-warning/20'
                  }`}>
                    {res.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Conduct a Patent Search? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Types of Patent Searches We Offer</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto text-lg">Depending on your business goal, the type of search changes. Here is a detailed breakdown of our core search services.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {searchTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.id} className="bg-brand-light p-8 rounded-2xl border border-brand-border hover:shadow-brand hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${colorMap[type.color]}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{type.title}</h3>
                  <p className="text-brand-dark/70 leading-relaxed">{type.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Databases & Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
              Databases We Use for <span className="text-brand-primary">Indian Patent Searches</span>
            </h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-8">
              A reliable patent search requires access to multiple global and local databases. At IPRveda, we don't rely on just one tool. We cross-reference multiple sources to ensure 100% coverage of prior art.
            </p>
            <div className="space-y-4">
              {[
                'Access to over 100 million patent documents globally.',
                'Deep integration with InPASS and WIPO Patentscope.',
                'AI-powered semantic search to find conceptual similarities.',
                'Manual verification by registered Indian Patent Agents.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-brand-dark font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {databases.map((db, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-brand-border shadow-sm hover:border-brand-primary transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <Globe className="w-5 h-5 text-brand-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-brand-primary/10 text-brand-primary rounded-full">{db.type}</span>
                </div>
                <h4 className="font-bold text-brand-dark text-sm mb-1">{db.name}</h4>
                <p className="text-xs text-brand-dark/50 leading-relaxed">{db.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Step-by-Step Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">How to Perform an Indian Patent Search</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto text-lg">Whether you do it yourself or hire us, understanding the process is crucial for a successful outcome.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-border before:to-transparent">
            {[
              { step: '01', title: 'Deconstruct the Invention', desc: 'Break down your product into its core technical components. Identify the unique features that solve a specific problem.' },
              { step: '02', title: 'Identify Keywords & IPC Codes', desc: 'Create a list of synonyms, technical terms, and International Patent Classification (IPC) codes relevant to your invention.' },
              { step: '03', title: 'Execute Boolean Search Queries', desc: 'Use operators like AND, OR, NOT in databases like InPASS to combine keywords and classifications for precise results.' },
              { step: '04', title: 'Analyze and Filter Results', desc: 'Read the abstracts and claims of the retrieved patents. Filter out irrelevant ones and shortlist the closest prior art.' },
              { step: '05', title: 'Generate the Search Report', desc: 'Compile a detailed report mapping your invention against the found prior art, highlighting novelty and potential infringement risks.' }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-brand-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-bold">{item.step}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-light p-6 rounded-2xl border border-brand-border shadow-sm">
                  <h3 className="font-bold text-brand-dark text-lg mb-2">{item.title}</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Massive SEO / Long-form Content Section */}
      <section className="bg-brand-light border-t border-brand-border py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8 text-center">
            The Critical Importance of Patent Searching in India's Innovation Ecosystem
          </h2>
          
          <div className="space-y-6 text-brand-dark/70 leading-relaxed">
            <p>
              India has emerged as a global hub for innovation, with startups and enterprises filing thousands of patents every year. However, the rush to secure intellectual property often leads to a critical oversight: skipping the patent search. Conducting a thorough <strong>Indian Patent Search</strong> is not just a legal formality; it is a strategic business imperative that can save companies from devastating financial losses and legal battles.
            </p>

            <h3 className="text-2xl font-bold text-brand-dark mt-10">Understanding Prior Art in the Indian Context</h3>
            <p>
              Under the Indian Patents Act, 1970, an invention is only patentable if it is new, involves an inventive step, and is capable of industrial application. "Prior art" refers to any evidence that your invention is already known. This could be an existing patent, a published research paper, a product sold in the market, or even a public demonstration. If prior art exists, your patent application will be rejected during the examination phase.
            </p>
            <p>
              Many inventors mistakenly believe that if their product isn't sold in India, it's safe to patent. This is false. The Indian Patent Office follows an <strong>absolute novelty</strong> standard, meaning any public disclosure anywhere in the world can be used to reject your Indian patent application.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-white p-6 rounded-2xl border border-brand-primary/20 shadow-sm">
                <h3 className="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-brand-primary" /> Freedom to Operate (FTO)
                </h3>
                <p className="text-sm text-brand-primary">
                  Before launching a product, an FTO search ensures you aren't stepping on someone else's active patent. In India, patent infringement penalties can include heavy damages and injunctions that halt your business operations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-success/20 shadow-sm">
                <h3 className="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-success" /> Investor Due Diligence
                </h3>
                <p className="text-sm text-success">
                  Venture capitalists and angel investors in India now mandate a clean FTO and novelty search report before funding. A robust IP search report increases your startup's valuation and credibility.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-dark mt-10">Navigating InPASS and the Indian Patent Office Database</h3>
            <p>
              The Indian Patent Office provides the <strong>InPASS (Indian Patent Advanced Search System)</strong>, a powerful tool for public searches. While it is free, it requires a deep understanding of Boolean logic and IPC classifications to use effectively. A simple keyword search often yields thousands of irrelevant results or misses crucial patents that use different terminology for the same technology.
            </p>
            <p>
              This is where professional search firms like <strong>IPRveda</strong> add immense value. Our patent analysts combine the use of InPASS with global databases like WIPO Patentscope, Espacenet, and proprietary AI tools to conduct semantic searches. We look for the <em>concept</em> of your invention, not just the exact keywords, ensuring a comprehensive and legally defensible search report.
            </p>

            <h3 className="text-2xl font-bold text-brand-dark mt-10">Common Mistakes to Avoid During a Patent Search</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Relying only on Google Patents:</strong> While useful for a quick check, it often misses unpublished applications or specific Indian legal statuses.</li>
              <li><strong>Ignoring Non-Patent Literature (NPL):</strong> Scientific journals, conference papers, and even YouTube videos can constitute prior art.</li>
              <li><strong>Stopping at the Abstract:</strong> The true legal boundary of a patent lies in its "Claims" section. Always analyze the claims to understand the exact scope of protection.</li>
              <li><strong>Not updating the search:</strong> Patents are published continuously. A search done 6 months ago might miss a newly published application that blocks your path.</li>
            </ul>

            <p>
              In conclusion, an Indian Patent Search is the foundation of a strong IP strategy. Whether you are an individual inventor protecting your life's work or a multinational corporation launching a new tech stack, investing in a professional search today prevents catastrophic legal issues tomorrow. Let IPRveda be your guide in navigating the complex landscape of Indian intellectual property.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-dark/70">Expert answers to your patent search queries.</p>
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

      {/* 7. Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-primary to-brand-darker text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Secure Your Invention?</h2>
          <p className="text-brand-text text-lg mb-10 max-w-2xl mx-auto">
            Don't risk your R&D budget on an unpatentable idea. Get a comprehensive, attorney-reviewed Indian Patent Search report from IPRveda within 5 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-brand-light transition-colors shadow-lg flex items-center justify-center gap-2">
              Order Search Report <FileText className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-brand-dark/50 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-brand-dark transition-colors flex items-center justify-center gap-2">
              Talk to a Patent Agent
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndianPatentSearch;