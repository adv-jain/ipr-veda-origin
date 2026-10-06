import React, { useState } from 'react';
import { 
  CheckCircle, Shield, TrendingUp, Users, Clock, 
  FileText, Award, Globe, Lock, DollarSign,
  Building2, Star, ChevronRight, Phone, Mail,
  MapPin, Zap, Target, BookOpen, AlertCircle,
  ArrowRight, FileCheck, Smartphone, XCircle, ChevronDown, ChevronUp
} from 'lucide-react';
import HomeLogin from '../../HomeLogin';

export default function MsmeRegistration() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    { icon: Clock, title: '45-Day Payment Deadline', desc: 'Under Section 15, buyers must pay within 45 days (or 15 without agreement). Miss it, and Section 16 triggers compound interest at 3x the RBI bank rate.' },
    { icon: Shield, title: 'Fast-Track Dispute Resolution', desc: 'Sections 20 & 21 set up the MSME Samadhaan portal. File a dispute and get heard by a Facilitation Council without expensive civil litigation.' },
    { icon: DollarSign, title: 'Collateral-Free Credit', desc: 'Unlock schemes like CGTMSE and PMEGP, which lend specifically to Udyam-registered businesses, often without asking for collateral.' },
    { icon: Globe, title: 'Government Procurement Access', desc: 'GeM has over 22 lakh sellers, with several lakh crore rupees of procurement volume reserved specifically for MSME vendors.' },
    { icon: TrendingUp, title: 'Receivables Financing (TReDS)', desc: 'Discount unpaid invoices on platforms like RXIL and M1xchange for immediate cash instead of waiting out a client\'s payment cycle.' },
    { icon: Award, title: 'Tax & Subsidy Relief', desc: 'Access ISO certification fee reimbursements, reduced trade fair costs, and interest subvention schemes depending on your sector.' }
  ];

  const whoNeedsIt = [
    { title: 'Manufacturers', desc: 'From Ludhiana\'s hosiery units to Tirupur\'s garment exporters and Kanpur\'s leather manufacturers.' },
    { title: 'Service Businesses', desc: 'IT-enabled services, engineering design firms, CA practices, and even single-location repair shops.' },
    { title: 'Traders', desc: 'Wholesale and retail traders eligible for priority sector lending (Note: Trading NIC codes 45-47 do not get Section 15 payment protection).' },
    { title: 'Exporters', desc: 'Speeds up GST refunds and duty drawback claims, as government departments cross-check MSME status.' },
    { title: 'Startups & Freelancers', desc: 'A two-person software shop or freelance design studio with a PAN and GST/ITR filings easily clears the Micro threshold.' }
  ];

  const mistakes = [
    { title: 'Picking the wrong NIC code', desc: 'Selecting a generic code can accidentally strip you of Section 15 payment protection, especially if a Trading code is picked for a Service business.' },
    { title: 'Assuming Trading gets full protection', desc: 'Trading registrations do not get the delayed payment remedies under the MSMED Act. This is the #1 misunderstanding.' },
    { title: 'Letting GST and Udyam data drift', desc: 'If your turnover shifts or GSTIN updates, failing to update Udyam leads to mismatched certificates that get flagged during loan applications.' },
    { title: 'Registering too late', desc: 'The Supreme Court ruled protection applies from the registration date forward. Registering after a payment dispute begins offers no protection for that invoice.' },
    { title: 'Using someone else\'s Aadhaar', desc: 'Using a relative\'s Aadhaar for convenience creates severe ownership and authorization problems when proving business control later.' }
  ];

  const faqs = [
    { q: 'Is MSME Registration mandatory for small businesses in India?', a: 'No, it isn\'t legally mandatory to operate. However, without it, you get none of the MSMED Act protections (like the 45-day payment rule) and lose access to schemes like CGTMSE and GeM procurement.' },
    { q: 'What documents are actually needed?', a: 'Only: Aadhaar of the proprietor/signatory, PAN of the business/individual, GSTIN (if applicable), bank details, and a brief activity description with the correct NIC code. No address proof, incorporation certificates, or financial statements are required.' },
    { q: 'How much does it cost?', a: 'The government fee is ZERO for all categories. You may pay a professional service charge for expert assistance with NIC code selection and filing, but there is no government fee.' },
    { q: 'What are the new classification limits for 2025-26?', a: 'As of April 1, 2025: Micro (Investment up to ₹2.5 Cr, Turnover up to ₹10 Cr), Small (Investment ₹2.5-25 Cr, Turnover ₹10-100 Cr), Medium (Investment up to ₹125 Cr, Turnover up to ₹500 Cr).' },
    { q: 'Does it protect against late payments?', a: 'Yes, but only for Manufacturing and Service enterprises (not Trading). Buyers must pay within 45 days (with agreement) or 15 days (without). Late payments attract compound interest at 3x the RBI bank rate.' },
    { q: 'Can freelancers or service businesses register?', a: 'Absolutely. IT services, consulting, CA firms, design studios, and freelance professionals qualify as service enterprises. There is no rule excluding professional services.' }
  ];

  return (
    <main className="font-sans text-gray-700 bg-white">
      
      {/* ==========================================
          PHASE 1: HERO SECTION
      ========================================== */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-primary pt-20 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block bg-brand-accent/20 text-brand-accent text-sm font-bold px-4 py-1.5 rounded-full mb-6 border border-brand-accent/30">
                🇮🇳 Official Udyam Registration Partner
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                MSME Registration <br />
                <span className="text-brand-accent">Done Right, in 24 Hours.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Stop chasing late payments. Get your official Udyam certificate to unlock cheaper credit, government tenders, and legal protection against defaulting clients. Zero government fees.
              </p>
              
              <div className="space-y-3 mb-8 max-w-lg">
                {['Free government registration, zero hidden charges', 'Same-day filing on the official Udyam portal', 'Correct NIC code & classification selected first time', 'Help claiming CGTMSE, PMEGP, and GeM benefits'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-brand-accent fill-brand-accent" />
                  <span><b className="text-white">4.8/5</b> from 12k+ reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-brand-accent" />
                  <span>Trusted Pan-India</span>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <HomeLogin />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: TRUST & STATS BAR
      ========================================== */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-gray-100">
            {[
              { num: '1,00,000+', label: 'Assisted Clients' },
              { num: '42,800+', label: 'Genuine Reviews' },
              { num: '1000+', label: 'Expert Professionals' },
              { num: '24 Hrs', label: 'Average Turnaround' },
              { num: '100%', label: 'Govt Fee Waived' },
            ].map((stat, i) => (
              <div key={i} className="px-2">
                <div className="text-2xl lg:text-3xl font-heading font-bold text-brand-dark">{stat.num}</div>
                <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 3: THE CORE BENEFITS
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Why 7.8+ Crore Businesses Are Registered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These benefits don't arrive automatically. You have to register first, and then you have to actually use them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Critical Callout */}
          <div className="mt-10 bg-blue-50 border-l-4 border-brand-primary p-6 rounded-r-xl flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-brand-dark mb-1">One Catch Worth Flagging Early:</h4>
              <p className="text-sm text-gray-700">
                The 45-day payment protection under Sections 15 and 16 applies <strong>only</strong> to enterprises registered under Manufacturing or Service activity. If you're registered under Trading (NIC codes 45, 46, or 47), that particular protection does not apply to you, even though you can still register for priority sector lending.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 4: 2025-26 CLASSIFICATION (Merged for Clarity)
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
                MSME Classification: <br />2025-26 Updated Limits
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                On March 21, 2025, the Ministry of MSME raised the investment and turnover ceilings across all three categories, effective April 1, 2025. Investment limits went up by 2.5x, and turnover limits doubled.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>Good news:</strong> Existing Udyam certificates carried over automatically. Businesses that had outgrown their old category got breathing room. The composite criteria rule remains: cross the ceiling on <em>either</em> investment or turnover, and you move up.
              </p>
              <div className="bg-brand-light/50 p-5 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong className="text-brand-dark">Pro Tip:</strong> There's a transition window built into the rules. One unusually strong year doesn't immediately strip a business of its category benefits, and the same logic runs in reverse for a shrinking business.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-brand-dark text-white">
                  <tr>
                    <th className="p-4 text-sm font-semibold uppercase tracking-wider">Category</th>
                    <th className="p-4 text-sm font-semibold uppercase tracking-wider">Investment Limit</th>
                    <th className="p-4 text-sm font-semibold uppercase tracking-wider">Turnover Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr className="hover:bg-brand-light/30 transition-colors">
                    <td className="p-4 font-bold text-brand-dark">Micro</td>
                    <td className="p-4 text-green-600 font-semibold">Up to ₹2.5 Crore</td>
                    <td className="p-4 text-green-600 font-semibold">Up to ₹10 Crore</td>
                  </tr>
                  <tr className="hover:bg-brand-light/30 transition-colors">
                    <td className="p-4 font-bold text-brand-dark">Small</td>
                    <td className="p-4 text-brand-dark">₹2.5 Cr – ₹25 Crore</td>
                    <td className="p-4 text-brand-dark">₹10 Cr – ₹100 Crore</td>
                  </tr>
                  <tr className="hover:bg-brand-light/30 transition-colors">
                    <td className="p-4 font-bold text-brand-dark">Medium</td>
                    <td className="p-4 text-brand-dark">Up to ₹125 Crore</td>
                    <td className="p-4 text-brand-dark">Up to ₹500 Crore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 5: WHO NEEDS IT & DOCUMENTS
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Who Needs It */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Who Qualifies for MSME?</h2>
              <p className="text-lg text-gray-600">Registration isn't limited to factories. The net is wider than most business owners assume.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whoNeedsIt.map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-brand-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-brand-dark" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Split */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-green-200 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" /> What You Actually Need
              </h3>
              <ul className="space-y-4">
                {[
                  'Aadhaar number of proprietor/managing partner/signatory (Mandatory)',
                  'PAN card of the business or individual',
                  'GSTIN (where the business is required to hold one)',
                  'Bank account details for the enterprise',
                  'Brief description of business activity & correct NIC code'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-red-200 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-500" /> What You DON'T Need
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                This trips people up because every other registration in India asks for it. The Udyam portal pulls your investment and turnover data directly from your Income Tax and GST records.
              </p>
              <ul className="space-y-3">
                {['Address Proof', 'Incorporation Certificate Upload', 'Financial Statements', 'Factory Photographs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-500 line-through">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-xs text-blue-800">
                  <strong>Note:</strong> If you don't cross the GST threshold, you can register without a GSTIN, but you must add it later the moment you do. Leaving it unlinked is a common reason profiles get flagged.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          PHASE 6: STEP-BY-STEP PROCESS
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              The 6-Step Udyam Registration Process
            </h2>
            <p className="text-lg text-gray-600">The whole thing runs on one portal, in one sitting. Here is how it actually goes.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {[
              { step: '01', title: 'Go to the Official Portal', desc: 'Open udyamregistration.gov.in directly. Fake sites charging a "processing fee" show up in paid ads. If a site asks for payment before showing a form, close the tab.' },
              { step: '02', title: 'Enter Aadhaar & Validate OTP', desc: 'Enter the Aadhaar of the proprietor or authorized signatory. An OTP is sent to the linked mobile number. Validate it to move to PAN verification.' },
              { step: '03', title: 'Verify PAN', desc: 'Enter the business PAN. The portal checks it against Income Tax records in real time, auto-populating basic incorporation details for non-proprietorships.' },
              { step: '04', title: 'Fill Business & NIC Details', desc: 'Provide business name, address, bank account, and activity description. Select your NIC code carefully—it determines if Section 15 payment protection applies to you.' },
              { step: '05', title: 'Confirm Investment & Turnover', desc: 'The system fetches figures from linked PAN and GST data. Review them. Mismatches usually trace back to an unfiled return or unlinked GSTIN.' },
              { step: '06', title: 'Submit & Download Certificate', desc: 'Once everything checks out, submit. The Udyam Registration Certificate, complete with a QR code, is usually available for download the same day.' }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-bold">{item.step}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-light/30 p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 7: THE COST OF INACTION (FOMO)
      ========================================== */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What You Lose by Not Registering
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Registration isn't legally compulsory. Nobody will fine you for operating unregistered. But treating that as "no downside" misses what's actually at stake.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
            <table className="w-full text-left">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-5 text-sm font-semibold uppercase tracking-wider text-brand-accent">What You're Missing</th>
                  <th className="p-5 text-sm font-semibold uppercase tracking-wider text-brand-accent">The Practical Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  { missing: 'Section 15 Payment Protection', impact: 'No 45-day deadline, no compound interest remedy on late payments.' },
                  { missing: 'MSEFC Dispute Resolution', impact: 'No fast-track council hearing, forced into expensive, slow civil litigation.' },
                  { missing: 'CGTMSE & PMEGP Eligibility', impact: 'No access to collateral-free government lending schemes.' },
                  { missing: 'GeM & Govt Tender Access', impact: 'Locked out of MSME-reserved procurement categories worth lakhs of crores.' },
                  { missing: 'Section 43B(h) Pressure on Buyers', impact: 'Your client faces no tax consequence for paying you late, so you are always last in line.' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-5 font-bold text-white">{row.missing}</td>
                    <td className="p-5 text-gray-300">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-red-500/10 border border-red-500/30 p-6 rounded-xl flex gap-4 items-start">
            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white mb-1">The Supreme Court Reality Check:</h4>
              <p className="text-sm text-gray-300">
                MSMED Act protection applies from your registration date forward, <strong>not retroactively</strong>. Miss a payment dispute today because you registered late, and that invoice gets no statutory protection, no matter how clearly a client owes you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 8: COMMON MISTAKES
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              5 Common MSME Registration Mistakes
            </h2>
          </div>
          <div className="space-y-4">
            {mistakes.map((mistake, i) => (
              <div key={i} className="bg-amber-50 rounded-xl p-6 border border-amber-200 flex gap-4 items-start">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">{mistake.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{mistake.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 9: WHY CHOOSE IPRVEDA
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Why Choose IPRveda for Udyam Registration?
            </h2>
            <p className="text-lg text-gray-600">Filing takes 15 minutes if everything lines up. It takes considerably longer if your NIC code is wrong or GST details don't match. That's where we come in.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Correct Classification Day One', desc: 'We check your actual investment/turnover against 2025 thresholds before filing, so you land in the right category.' },
              { title: 'NIC Code Accuracy', desc: 'We match your registration to the activity code that actually protects your payment rights under Section 15.' },
              { title: 'PAN-GST Reconciliation', desc: 'We catch mismatches between your GST filings and PAN records before they turn into a flagged application.' },
              { title: 'Ongoing Update Support', desc: 'When your turnover crosses a threshold, we handle the Udyam update so your certificate stays accurate.' },
              { title: 'Scheme Access Guidance', desc: 'We help you actually apply for CGTMSE, PMEGP, and GeM instead of leaving the certificate to sit unused.' },
              { title: 'Pan-India Sector Expertise', desc: 'We know the sector-specific NIC code questions that come up in Delhi, Mumbai, Bengaluru, and beyond.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-brand-primary mb-4" />
                <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 10: INTERACTIVE FAQ (Space-Saving)
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-brand-light/30 rounded-xl border overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-brand-primary/30 shadow-md' : 'border-gray-200 hover:border-brand-primary/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex justify-between items-center font-semibold text-brand-dark hover:bg-white transition-colors"
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
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4 animate-fade-in">
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
          PHASE 11: FINAL CTA & FORM
      ========================================== */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Protect Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Every month you wait is a month of invoices with no statutory payment protection behind them. Get your MSME Registration filed correctly under the right classification today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+918506059559" className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <Phone className="w-5 h-5" />
                  Call +91 85060-59559
                </a>
                <a href="mailto:legal@iprveda.com" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-6 flex items-center gap-2">
                <Lock className="w-4 h-4" /> Your Information Is Safe With Us. We Never Share Your Details.
              </p>
            </div>

            {/* Compact Lead Form */}
            <div className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl">
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">Get Your Free Consultation</h3>
              <p className="text-sm text-gray-500 mb-6">Our experts will call you within 24 hours.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition" placeholder="Enter Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm">IN (+91)</span>
                    <input type="tel" className="flex-1 px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition" placeholder="Enter Phone No." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition" placeholder="Enter your Email" />
                </div>
                <button type="submit" className="w-full bg-brand-primary hover:bg-brand-hover text-white font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                  Claim Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}