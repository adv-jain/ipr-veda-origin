import React from 'react';
import { 
  Scale, 
  Calculator, 
  Shield, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  FileText, 
  Briefcase, 
  Target, 
  Zap, 
  Award,
  BookOpen,
  HelpCircle,
  IndianRupee
} from 'lucide-react';

const CAVsIPAttorney = () => {
  
  const lifecycleStages = [
    {
      stage: '1. Ideation & Setup',
      caRole: 'Company incorporation, opening bank accounts, initial capital structuring.',
      ipRole: 'Trademark search for the brand name, provisional patent filing for the core idea.',
      icon: Lightbulb,
      color: 'primary'
    },
    {
      stage: '2. Product Launch',
      caRole: 'GST registration, setting up payroll, initial tax planning.',
      ipRole: 'Final Trademark filing, Copyright for website code/content, Design registration.',
      icon: Zap,
      color: 'success'
    },
    {
      stage: '3. Scaling & Funding',
      caRole: 'Financial audits, due diligence for investors, ESOP structuring.',
      ipRole: 'IP assignment agreements, licensing contracts, global patent filings (PCT).',
      icon: TrendingUp,
      color: 'dark'
    },
    {
      stage: '4. Exit / M&A',
      caRole: 'Financial valuation, tax implications of the sale, profit distribution.',
      ipRole: 'IP portfolio valuation, transferring IP ownership, final legal clearances.',
      icon: Award,
      color: 'warning'
    }
  ];

  const colorMap = {
    primary: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
    success: 'bg-success/10 text-success border-success/20',
    dark: 'bg-brand-dark/10 text-brand-dark border-brand-dark/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
  };

  const faqs = [
    {
      q: "Can a Chartered Accountant (CA) file a patent or trademark for me?",
      a: "No. CAs are financial and tax experts governed by the ICAI. Filing patents, trademarks, or copyrights requires the specialized legal expertise of a registered IP Attorney or Patent Agent. For IP protection, you must consult experts like IPRveda."
    },
    {
      q: "Who charges more: a CA or an IP Attorney?",
      a: "It depends on the scope. CAs usually charge a monthly retainer for ongoing accounting or a fixed fee for audits/tax filing. IP Attorneys typically charge per project (e.g., per trademark filing) or an hourly rate for complex litigation. However, the ROI of a strong IP portfolio often far outweighs the initial legal fees."
    },
    {
      q: "When do I need both a CA and an IP Attorney simultaneously?",
      a: "You need both when you are monetizing your IP (like franchising or licensing), valuing your intellectual property for M&A, handling the tax implications of IP royalties, or going through a funding round where both financial and IP due diligence are required."
    },
    {
      q: "Can an IP Attorney help me save taxes?",
      a: "While IP Attorneys don't file tax returns, they can structure your IP ownership (e.g., holding IP in a separate entity) which, when combined with your CA's tax strategy, can lead to significant tax efficiencies and better asset protection."
    },
    {
      q: "Why should I choose IPRveda over a traditional law firm for my IP needs?",
      a: "IPRveda specializes exclusively in Intellectual Property. Unlike traditional firms that do everything, we offer deep domain expertise, tech-driven tracking, transparent pricing, and a proactive approach to protecting your brand and innovations in the Indian and global markets."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light font-sans text-brand-dark">
      
      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
            <Scale className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-bold text-brand-primary uppercase tracking-wider">The Ultimate Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-6 tracking-tight leading-tight">
            CA vs. IP Attorney: <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-primary to-brand-darker bg-clip-text text-transparent">
              Who Does Your Business Actually Need?
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
            Navigating business compliance can be confusing. While both Chartered Accountants and IP Attorneys are crucial for your company's growth, their roles are vastly different. Hiring the wrong professional can cost you time, money, and your most valuable assets. Let's break it down.
          </p>
        </div>
      </section>

      {/* 2. Deep Dive: The Roles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          
          {/* CA Card */}
          <div className="bg-brand-light p-8 rounded-3xl border border-brand-border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-primary/10 rounded-2xl">
                <Calculator className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">The Chartered Accountant (CA)</h2>
                <p className="text-sm text-brand-dark/50 font-medium">The Guardian of Your Finances</p>
              </div>
            </div>
            <p className="text-brand-dark/70 mb-6 leading-relaxed">
              A CA is a financial expert governed by the ICAI. They are the backbone of your company’s financial health, taxation, and statutory compliance. They ensure you don't get into trouble with the tax authorities and help you manage your cash flow.
            </p>
            <h3 className="font-bold text-brand-dark mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-primary" /> Core Responsibilities
            </h3>
            <ul className="space-y-2 text-brand-dark/80 mb-6">
              <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> Taxation (GST, Income Tax) & Statutory Audits</li>
              <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> Financial Structuring, Bookkeeping & Payroll</li>
              <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> ROC Filings & Company Incorporation</li>
              <li className="flex items-start gap-2"><span className="text-brand-primary mt-1">•</span> M&A Financial Due Diligence</li>
            </ul>
          </div>

          {/* IP Attorney Card */}
          <div className="bg-brand-light p-8 rounded-3xl border border-brand-border shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-dark/10 rounded-2xl">
                <Shield className="w-8 h-8 text-brand-dark" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">The IP Attorney</h2>
                <p className="text-sm text-brand-dark/50 font-medium">The Protector of Your Ideas</p>
              </div>
            </div>
            <p className="text-brand-dark/70 mb-6 leading-relaxed">
              An Intellectual Property Attorney is a legal professional specializing in the creation, protection, and enforcement of intangible assets. Unlike a CA, an IP Attorney understands the intersection of law, technology, and business strategy to build legal monopolies.
            </p>
            <h3 className="font-bold text-brand-dark mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-dark" /> Core Responsibilities
            </h3>
            <ul className="space-y-2 text-brand-dark/80 mb-6">
              <li className="flex items-start gap-2"><span className="text-brand-dark mt-1">•</span> Patent Prosecution & Technical Drafting</li>
              <li className="flex items-start gap-2"><span className="text-brand-dark mt-1">•</span> Trademark Registration & Brand Protection</li>
              <li className="flex items-start gap-2"><span className="text-brand-dark mt-1">•</span> Copyrights, Trade Secrets & Licensing</li>
              <li className="flex items-start gap-2"><span className="text-brand-dark mt-1">•</span> IP Litigation & Cease/Desist Notices</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Head-to-Head Comparison</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto">A quick snapshot to help you decide who to call for your specific business need.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-brand-border overflow-hidden">
            <div className="grid grid-cols-3 bg-gradient-to-r from-brand-dark to-brand-darker text-white p-6 font-bold text-sm sm:text-base">
              <div>Feature</div>
              <div>Chartered Accountant (CA)</div>
              <div>IP Attorney (at IPRveda)</div>
            </div>
            {[
              { feature: 'Primary Focus', ca: 'Money, Taxes, Financial Compliance', ip: 'Ideas, Brands, Innovations, Legal Rights' },
              { feature: 'Key Deliverables', ca: 'Audits, Tax Returns, Balance Sheets', ip: 'Patents, Trademarks, IP Contracts' },
              { feature: 'What They Protect', ca: 'Your Wealth & Financial Legality', ip: 'Your Brand Identity & Market Monopoly' },
              { feature: 'Governing Body', ca: 'ICAI (Institute of Chartered Accountants)', ip: 'Bar Council / Patent Office' },
              { feature: 'When to Hire?', ca: 'For accounting, tax planning, funding audits.', ip: 'Before launching a brand or inventing a product.' },
            ].map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 p-6 text-sm sm:text-base ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-light'} border-b border-brand-border last:border-0`}>
                <div className="font-bold text-brand-dark">{row.feature}</div>
                <div className="text-brand-dark/70">{row.ca}</div>
                <div className="text-brand-dark/70">{row.ip}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Business Lifecycle Guide (NEW & LONG) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Who Do You Need at Each Business Stage?</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto">Building a company is a journey. Here is exactly when to bring in your CA and when to bring in your IP Attorney.</p>
          </div>

          <div className="space-y-6">
            {lifecycleStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={idx} className="bg-brand-light rounded-2xl p-6 sm:p-8 border border-brand-border hover:shadow-brand transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl ${colorMap[stage.color]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">{stage.stage}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-brand-primary/20">
                      <h4 className="font-bold text-brand-primary mb-2 flex items-center gap-2">
                        <Calculator className="w-4 h-4" /> CA's Role
                      </h4>
                      <p className="text-brand-dark/80 text-sm leading-relaxed">{stage.caRole}</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-brand-dark/20">
                      <h4 className="font-bold text-brand-dark mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4" /> IP Attorney's Role
                      </h4>
                      <p className="text-brand-dark/80 text-sm leading-relaxed">{stage.ipRole}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Fee Structure & ROI (NEW & LONG) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-dark to-brand-darker text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Fee Structure & ROI: What to Expect</h2>
            <p className="text-brand-text text-lg mb-8 leading-relaxed">
              One of the most common questions entrepreneurs ask is about the cost. While both professionals are an investment, the way they charge and the return on investment (ROI) they provide is fundamentally different.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <IndianRupee className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">How CAs Charge</h3>
                  <p className="text-brand-text text-sm">Usually a monthly retainer for ongoing bookkeeping, or a fixed project fee for annual audits and tax filings. The ROI is measured in tax saved and compliance maintained.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <IndianRupee className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">How IP Attorneys Charge</h3>
                  <p className="text-brand-text text-sm">Typically per-project (e.g., filing one trademark) or hourly for complex litigation. The ROI is measured in market monopoly, brand valuation, and preventing revenue loss from copycats.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-brand-accent" /> The Hidden Cost of Ignoring IP
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                <span className="text-brand-text">Losing your brand name to a squatter because you delayed trademark filing.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                <span className="text-brand-text">Competitors legally copying your software or product design.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                <span className="text-brand-text">Investors pulling out during due diligence due to weak IP ownership.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-brand-text"><strong>The Fix:</strong> Proactive IP strategy with IPRveda costs a fraction of what litigation costs.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. The Power Duo: Collaboration (NEW & LONG) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">The Power Duo: When They Work Together</h2>
            <p className="text-brand-dark/70 max-w-2xl mx-auto">In today’s knowledge-based economy, IP and Finance are deeply connected. Here is how your CA and IP Attorney collaborate for maximum business impact.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-brand-primary/5 to-white p-6 rounded-2xl border border-brand-primary/20">
              <Briefcase className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="text-lg font-bold text-brand-dark mb-2">IP Valuation & M&A</h3>
              <p className="text-sm text-brand-dark/70">When selling your company, your <strong>IP Attorney</strong> proves legal ownership of the IP, while your <strong>CA</strong> calculates its financial valuation for the deal.</p>
            </div>
            <div className="bg-gradient-to-br from-brand-dark/5 to-white p-6 rounded-2xl border border-brand-dark/20">
              <FileText className="w-8 h-8 text-brand-dark mb-4" />
              <h3 className="text-lg font-bold text-brand-dark mb-2">Licensing & Franchising</h3>
              <p className="text-sm text-brand-dark/70">The <strong>IP Attorney</strong> drafts the robust licensing agreement, while the <strong>CA</strong> structures the royalty payments and handles the GST/tax on that income.</p>
            </div>
            <div className="bg-gradient-to-br from-success/5 to-white p-6 rounded-2xl border border-success/20">
              <Users className="w-8 h-8 text-success mb-4" />
              <h3 className="text-lg font-bold text-brand-dark mb-2">Funding & Due Diligence</h3>
              <p className="text-sm text-brand-dark/70">Investors check both books and brands. The <strong>CA</strong> clears financial due diligence, and the <strong>IP Attorney</strong> clears the IP ownership and infringement risks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why IPRveda */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-brand-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Why Choose IPRveda for Your IP Needs?</h2>
          <p className="text-brand-dark/70 text-lg mb-10 max-w-2xl mx-auto">
            While your CA handles your balance sheet, <strong>IPRveda</strong> handles your business’s most valuable intangible assets. We don't just file paperwork; we build comprehensive IP strategies.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              'End-to-End IP Protection (Trademarks, Patents, Copyrights)',
              'Commercialization of IP (Licensing & Franchising)',
              'Aggressive IP Enforcement & Anti-Counterfeiting',
              'Strategic IP Audits to uncover hidden monetizable assets'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-brand-border shadow-sm">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-brand-dark font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-xl font-bold text-brand-dark mb-6">Ready to protect your brand and innovations?</p>
            <button className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-darker text-white font-bold rounded-xl hover:shadow-brand hover:scale-[1.02] transition-all inline-flex items-center gap-2">
              Contact IPRveda Today <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Expanded FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-brand-dark/70">Clearing up the most common doubts about CAs and IP Attorneys.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-brand-light p-6 rounded-2xl border border-brand-border hover:border-brand-primary/30 transition-colors">
                <h3 className="font-bold text-lg text-brand-dark mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-brand-dark/70 leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CAVsIPAttorney;