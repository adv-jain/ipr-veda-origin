import React, { useState } from 'react';
import { 
  CheckCircle, Shield, TrendingUp, Users, Clock, 
  FileText, Award, Globe, Lock, DollarSign,
  Building2, Star, Phone, Mail, MapPin, Zap, 
  Target, BookOpen, AlertCircle, ArrowRight, 
  Scale, Gavel, FileCheck, Search
} from 'lucide-react';

export default function ObjectionReplyFiling() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', applicationNumber: '' });

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Trademark Objection Reply Filing in India
              </h1>
              <p className="text-xl lg:text-2xl text-brand-text mb-8">
                Receive a trademark objection? Don't panic. Get expert legal drafting and strategic response filing from IPRVeda to overcome examination reports and secure your brand registration.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Expert legal analysis of Examination Reports',
                  'Strategic drafting with supporting case laws',
                  'User affidavit preparation for prior use claims',
                  'Hearing representation before the Trademark Registrar',
                  'High success rate in overcoming absolute & relative grounds',
                  'Pan-India support for all trademark classes'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-accent flex-shrink-0 mt-1" />
                    <span className="text-brand-text">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-brand-accent fill-brand-accent" />
                  <div>
                    <div className="font-bold">4.8 out of 5</div>
                    <div className="text-sm text-brand-text">15k+ reviews</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-brand-accent fill-brand-accent" />
                  <div>
                    <div className="font-bold">4.7 out of 5</div>
                    <div className="text-sm text-brand-text">8k+ reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-brand-lg p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Get a Free Objection Analysis</h3>
              <p className="text-brand-dark/50 mb-6 text-sm">Enter your details and application number for a quick consultation</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition bg-brand-light"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Phone Number *</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-brand-border bg-brand-light text-brand-dark/50 text-sm">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="flex-1 px-4 py-3 border border-brand-border rounded-r-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition bg-brand-light"
                      placeholder="Enter your Phone No."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition bg-brand-light"
                    placeholder="Enter your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Trademark Application Number (Optional)</label>
                  <input
                    type="text"
                    value={formData.applicationNumber}
                    onChange={(e) => setFormData({...formData, applicationNumber: e.target.value})}
                    className="w-full px-4 py-3 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition bg-brand-light"
                    placeholder="e.g., 4567890"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-accent to-warning text-brand-dark font-bold py-3 rounded-lg hover:from-warning hover:to-amber-600 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  Claim Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-brand-dark/50 text-center">
                  By clicking, you consent to receiving updates about our services as outlined in our Privacy Statement.
                </p>
              </form>

              <div className="mt-6 pt-6 border-t border-brand-border">
                <div className="flex items-center justify-center gap-2 text-sm text-brand-dark/70">
                  <Lock className="w-4 h-4 text-success" />
                  <span>Your Information Is Safe With Us. We Never Share Your Details.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { num: '500+', label: 'Expert IP Attorneys' },
              { num: '50,000+', label: 'Genuine Reviews' },
              { num: '1,50,000+', label: 'Assisted Clients' },
              { num: '95%', label: 'Success Rate' },
              { num: 'Pan-India', label: 'Trusted Presence' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-dark">{stat.num}</div>
                <div className="text-sm text-brand-dark/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Straight Forward, No Hidden Tabs */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Overview Section */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">
            Trademark Objection Reply: Complete Guide (2026)
          </h2>
          <div className="prose prose-lg max-w-none text-brand-dark/80 space-y-4">
            <p className="text-xl leading-relaxed">
              When you apply for a trademark in India, the Trademark Registry examines your application to ensure it complies with the Trademarks Act, 1999. If the examiner finds any discrepancies, similarities with existing marks, or lack of distinctiveness, they issue an <strong>Examination Report</strong> raising an objection. 
            </p>
            <p className="leading-relaxed">
              Receiving a trademark objection is not a rejection; it is a standard part of the registration process. Over 60% of trademark applications face some form of objection. The key to overcoming it lies in filing a strong, legally sound, and well-researched <strong>Objection Reply</strong> within the stipulated 30-day timeframe. At IPRVeda, our expert IP attorneys specialize in drafting compelling replies backed by relevant case laws to get your trademark registered.
            </p>
          </div>
        </section>

        {/* What is Trademark Objection */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-brand-accent" />
            What is a Trademark Objection?
          </h2>
          <div className="prose prose-lg max-w-none text-brand-dark/80 space-y-4">
            <p>
              A trademark objection is a formal query or concern raised by the Trademark Examiner during the scrutiny of your trademark application. It is documented in the First Examination Report (FER). The objection indicates that the applied mark may not be registrable under the current provisions of the Trademarks Act, 1999, unless the applicant can prove otherwise through legal arguments and evidence.
            </p>
            <p>
              The applicant is given <strong>30 days</strong> from the date of issuance of the Examination Report to file a reply. Failure to respond within this period results in the application being marked as "Abandoned," requiring a fresh application and additional fees.
            </p>
          </div>
        </section>

        {/* Reasons for Objection */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <Search className="w-8 h-8 text-brand-accent" />
            Common Reasons for Trademark Objection
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            Understanding why an objection was raised is the first step toward resolving it. Objections generally fall into two categories:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-danger/10 rounded-xl p-6 border border-danger/20">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-danger" />
                Absolute Grounds (Section 9)
              </h3>
              <ul className="space-y-3">
                {[
                  'The mark is descriptive or lacks distinctiveness (e.g., "Best Shoes" for a shoe brand).',
                  'The mark consists exclusively of shapes, packaging, or colors that result from the nature of the goods.',
                  'The mark is customary in the current language or established practices of the trade.',
                  'The mark contains matters likely to hurt religious susceptibilities or is scandalous.',
                  'The mark is prohibited under the Emblems and Names (Prevention of Improper Use) Act, 1950.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-dark text-sm">
                    <AlertCircle className="w-4 h-4 text-danger flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-warning/10 rounded-xl p-6 border border-warning/20">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Gavel className="w-6 h-6 text-warning" />
                Relative Grounds (Section 11)
              </h3>
              <ul className="space-y-3">
                {[
                  'The mark is identical or deceptively similar to an earlier registered trademark for similar goods/services.',
                  'The mark is similar to a well-known trademark, even if the goods/services are different.',
                  'The mark conflicts with an earlier pending application.',
                  'The mark is being used by someone else who has prior rights (common law rights).'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-dark text-sm">
                    <AlertCircle className="w-4 h-4 text-warning flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits of Professional Reply */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-brand-accent" />
            Benefits of Filing a Strong Objection Reply
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Saves Your Application',
                desc: 'A well-drafted reply addresses the examiner\'s concerns directly, preventing the application from being abandoned or refused.'
              },
              {
                icon: TrendingUp,
                title: 'Establishes Distinctiveness',
                desc: 'Through legal arguments and evidence of prior use, you can prove that your mark has acquired a "secondary meaning" in the market.'
              },
              {
                icon: Clock,
                title: 'Speeds Up Registration',
                desc: 'Resolving objections promptly avoids prolonged delays, hearings, and the need for costly appeals before the Intellectual Property Appellate Board (IPAB).'
              },
              {
                icon: FileCheck,
                title: 'Creates a Strong Legal Record',
                desc: 'A detailed reply with cited case laws sets a strong precedent for your brand, making it harder for future opponents to challenge your mark.'
              },
              {
                icon: DollarSign,
                title: 'Cost-Effective Resolution',
                desc: 'Addressing the objection at the examination stage is significantly cheaper than fighting an opposition or appeal later.'
              },
              {
                icon: Users,
                title: 'Expert Representation',
                desc: 'IPRVeda attorneys handle the entire process, including preparing user affidavits and representing you at hearings if required.'
              }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-brand-light rounded-xl p-6 border border-brand-border hover:shadow-brand transition-all">
                  <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{benefit.title}</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-brand-accent" />
            Step-by-Step Objection Reply Process
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            Our streamlined process ensures your reply is filed accurately and within the statutory deadline.
          </p>
          
          <div className="space-y-6">
            {[
              {
                step: 'Step 1',
                title: 'Receive & Analyze Examination Report',
                desc: 'We carefully review the First Examination Report (FER) to identify the exact grounds of objection (Section 9 or 11) and assess the strength of the examiner\'s claims.'
              },
              {
                step: 'Step 2',
                title: 'Strategic Legal Drafting',
                desc: 'Our IP attorneys draft a comprehensive reply. This includes legal arguments, distinguishing your mark from cited conflicting marks, and citing relevant judicial precedents (case laws) that support your case.'
              },
              {
                step: 'Step 3',
                title: 'Gathering Supporting Evidence',
                desc: 'If claiming prior use, we prepare a sworn User Affidavit and compile supporting documents like invoices, marketing materials, and certificates to prove the mark\'s distinctiveness and market presence.'
              },
              {
                step: 'Step 4',
                title: 'Filing the Reply (Form TM-M)',
                desc: 'The drafted reply, along with all supporting documents and the prescribed government fee, is officially filed on the IP India portal using Form TM-M within the 30-day deadline.'
              },
              {
                step: 'Step 5',
                title: 'Hearing (If Required)',
                desc: 'If the examiner is not satisfied with the written reply, they may issue a hearing notice. IPRVeda experts will represent you before the Registrar of Trademarks to present oral arguments and secure acceptance.'
              },
              {
                step: 'Step 6',
                title: 'Acceptance & Publication',
                desc: 'Once the objection is overcome, the trademark is accepted and published in the Trademark Journal for a 4-month opposition period before final registration.'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-brand-light rounded-xl p-6 border border-brand-border">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-warning rounded-xl flex items-center justify-center shadow-lg text-brand-dark font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
                  <p className="text-brand-dark/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Required */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-brand-accent" />
            Documents Required for Objection Reply
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            The exact documents depend on the nature of the objection, but generally, the following are required:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                'Copy of the Trademark Examination Report (FER)',
                'Trademark Application Number and Details',
                'Power of Attorney (Form TM-M) authorizing IPRVeda to act on your behalf',
                'Drafted Objection Reply with legal arguments and case laws',
                'User Affidavit (if claiming prior use of the trademark before the application date)',
                'Supporting evidence of use (invoices, bills, brochures, website screenshots, advertising materials)',
                'Certificate of registration of the company (if the applicant is a corporate entity)'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-brand-dark text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-brand-primary/10 rounded-xl p-6 border border-brand-primary/20">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-primary" />
                Important Note on User Affidavit
              </h3>
              <p className="text-brand-dark/80 text-sm leading-relaxed mb-4">
                If you are claiming that you have been using the trademark since a date prior to your application date, a <strong>sworn User Affidavit</strong> is mandatory. This affidavit must be notarized and accompanied by tangible proof of use (like dated invoices or marketing campaigns). 
              </p>
              <p className="text-brand-dark/80 text-sm leading-relaxed">
                Without a user affidavit and supporting evidence, the examiner will likely treat the application as "Proposed to be Used," making it much harder to overcome relative ground objections based on similar existing marks.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline and Fees */}
        <section className="bg-gradient-to-br from-brand-dark to-brand-darker rounded-2xl p-8 lg:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Clock className="w-8 h-8 text-brand-accent" />
            Timeline and Government Fees
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-brand-accent mb-4">Expected Timeline</h3>
              <ul className="space-y-3 text-brand-text">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Reply Drafting & Filing:</strong> 3 to 5 working days after receiving all documents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Examiner Review:</strong> 2 to 4 months after filing the reply.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Hearing (if applicable):</strong> Scheduled 1 to 2 months after the review, with a decision typically given on the same day or within a few weeks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Total Resolution Time:</strong> Approximately 3 to 6 months.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-brand-accent mb-4">Government Fees (Form TM-M)</h3>
              <ul className="space-y-3 text-brand-text">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Individuals / Startups / MSMEs:</strong> ₹4,500 per application per class.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Other Entities (Companies, LLPs, Trusts):</strong> ₹9,000 per application per class.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span><strong>IPRVeda Professional Fee:</strong> Transparent, flat-fee pricing with no hidden charges. We handle drafting, filing, and basic hearing representation.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Happens if Ignored */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-danger" />
            What Happens If You Ignore the Objection?
          </h2>
          <div className="prose prose-lg max-w-none text-brand-dark/80 space-y-4">
            <p>
              Ignoring a trademark objection is the most common and costly mistake applicants make. If you fail to file a reply within the statutory <strong>30-day period</strong> (extendable by 1 month with a formal request and additional fee), the following consequences occur:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-danger/10 rounded-xl p-6 border-l-4 border-danger">
                <h3 className="text-lg font-bold text-danger mb-2">Application Marked as Abandoned</h3>
                <p className="text-brand-dark/80 text-sm">The Trademark Registry will formally abandon your application. All the time and money invested in the initial filing will be lost.</p>
              </div>
              <div className="bg-danger/10 rounded-xl p-6 border-l-4 border-danger">
                <h3 className="text-lg font-bold text-danger mb-2">Loss of Priority Date</h3>
                <p className="text-brand-dark/80 text-sm">If you re-apply, you will lose your original filing date. A competitor could file a similar mark in the interim and claim priority over you.</p>
              </div>
              <div className="bg-danger/10 rounded-xl p-6 border-l-4 border-danger">
                <h3 className="text-lg font-bold text-danger mb-2">Increased Costs</h3>
                <p className="text-brand-dark/80 text-sm">Filing a fresh application means paying the government fees and professional charges all over again, effectively doubling your costs.</p>
              </div>
              <div className="bg-danger/10 rounded-xl p-6 border-l-4 border-danger">
                <h3 className="text-lg font-bold text-danger mb-2">Brand Vulnerability</h3>
                <p className="text-brand-dark/80 text-sm">Without a registered trademark, your brand name, logo, or slogan remains unprotected, leaving you open to infringement and copycats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose IPRVeda */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-brand-accent" />
            Why Choose IPRVeda for Objection Reply Filing?
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            Overcoming a trademark objection requires more than just filling out a form; it requires strategic legal argumentation. Here is why thousands of businesses trust IPRVeda:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Expert IP Attorneys',
                desc: 'Our team consists of seasoned trademark attorneys with deep knowledge of the Trademarks Act, 1999, and decades of combined experience in handling complex objections.'
              },
              {
                title: 'High Success Rate',
                desc: 'We maintain a 95%+ success rate in overcoming examination objections through meticulous drafting, strong case law citations, and strategic evidence presentation.'
              },
              {
                title: 'Customized Legal Strategy',
                desc: 'We do not use generic templates. Every reply is custom-drafted based on the specific grounds of objection raised against your unique trademark.'
              },
              {
                title: 'End-to-End Support',
                desc: 'From analyzing the FER and drafting the reply to filing Form TM-M and representing you at the hearing, we handle the entire process seamlessly.'
              },
              {
                title: 'Transparent Pricing',
                desc: 'No hidden fees or surprise charges. We provide a clear, upfront breakdown of government fees and our professional service charges before we begin.'
              },
              {
                title: 'Pan-India Presence',
                desc: 'Whether your application was filed in Delhi, Mumbai, Chennai, Ahmedabad, or Kolkata, our network of experts ensures localized and effective representation.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-brand-primary/5 rounded-xl p-6 border border-brand-primary/20 hover:shadow-brand transition-all">
                <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Trusted by Leading Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Mamaearth', 'BlueTokai Coffee', 'Nritya Shakti Academy', 'Hindustan Unilever', 'Geeken Chemicals', 'Rockland Hotels', 'John Deere', 'Amyra Odhni'].map((client, i) => (
              <div key={i} className="bg-brand-light rounded-xl p-6 flex items-center justify-center border border-brand-border hover:bg-brand-accent/10 transition-colors">
                <span className="font-semibold text-brand-dark text-center text-sm">{client}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs - All Expanded (No Click to Show) */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'What is a trademark objection reply?',
                a: 'A trademark objection reply is a formal, written legal response filed by the applicant (or their authorized attorney) to address the concerns or grounds of refusal raised by the Trademark Examiner in the First Examination Report (FER). It aims to convince the Registrar that the mark is eligible for registration.'
              },
              {
                q: 'How many days do I have to file an objection reply?',
                a: 'You have exactly 30 days from the date the Examination Report is generated on the IP India portal to file your reply. This can be extended by 1 month by filing Form TM-M with an additional government fee, but it is highly recommended to file within the initial 30 days.'
              },
              {
                q: 'Can I file an objection reply without a lawyer?',
                a: 'Yes, you can file it yourself. However, it is strongly discouraged. Overcoming objections requires specific legal phrasing, knowledge of the Trademarks Act, and the ability to cite relevant case laws. A poorly drafted reply can lead to permanent refusal of your application.'
              },
              {
                q: 'What is a User Affidavit, and when is it needed?',
                a: 'A User Affidavit is a sworn legal document stating that you have been using the trademark in commerce since a specific date prior to your application. It is required when you need to prove "prior use" to overcome an objection based on a similar existing mark (Relative Grounds under Section 11).'
              },
              {
                q: 'What happens after I file the objection reply?',
                a: 'After filing, the Trademark Examiner will review your reply. If satisfied, the mark will be accepted and published in the Trademark Journal. If the examiner is not satisfied, they will issue a Hearing Notice, requiring you or your attorney to present oral arguments before the Registrar.'
              },
              {
                q: 'How much does it cost to file a trademark objection reply?',
                a: 'The government fee for filing a reply (Form TM-M) is ₹4,500 for individuals, startups, and MSMEs, and ₹9,000 for other entities (like private limited companies). IPRVeda charges a transparent professional fee for drafting, filing, and handling the process, which varies based on the complexity of the objection.'
              },
              {
                q: 'Can a trademark be rejected even after filing a reply?',
                a: 'Yes, if the legal arguments and evidence provided in the reply are insufficient to overcome the examiner\'s concerns, the Registrar may issue a final refusal order. In such cases, you can appeal the decision to the Intellectual Property Appellate Board (IPAB) or the High Court.'
              },
              {
                q: 'Does IPRVeda handle trademark hearings?',
                a: 'Yes, if the Trademark Registry issues a hearing notice after reviewing your reply, IPRVeda\'s expert attorneys will represent you before the Registrar of Trademarks, present oral arguments, and submit any additional evidence required to secure acceptance.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-brand-light rounded-xl p-6 border border-brand-border">
                <h3 className="text-lg font-bold text-brand-dark mb-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-accent text-brand-dark rounded-lg flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-brand-accent to-warning rounded-2xl p-8 lg:p-12 text-brand-dark text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Don't Let an Objection Stop Your Brand</h2>
          <p className="text-brand-dark/80 mb-8 text-lg max-w-3xl mx-auto">
            Time is of the essence. Get a free analysis of your Examination Report and let IPRVeda's expert attorneys draft a winning objection reply to secure your trademark registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918750008585" className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-bold px-8 py-4 rounded-xl hover:bg-brand-light transition-all transform hover:scale-105 shadow-xl">
              <Phone className="w-5 h-5" />
              Talk To Our IP Experts
            </a>
            <a href="#consultation-form" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-brand-dark text-brand-dark font-bold px-8 py-4 rounded-xl hover:bg-brand-dark/10 transition-all">
              <Mail className="w-5 h-5" />
              Request Free Analysis
            </a>
          </div>
        </section>

      </main>

      {/* Footer CTA Form */}
      <section id="consultation-form" className="bg-brand-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">We're Here To Help You</h2>
            <p className="text-brand-text">Get your free trademark objection analysis today</p>
          </div>
          
          <form className="max-w-2xl mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-brand-text mb-1">Enter Your Name *</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-brand-darker border border-brand-border text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text mb-1">Phone Number *</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-brand-border bg-brand-darker text-brand-text text-sm">
                  IN (+91)
                </span>
                <input
                  type="tel"
                  className="flex-1 px-4 py-3 rounded-r-lg bg-brand-darker border border-brand-border text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition"
                  placeholder="Enter your Phone No."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-text mb-1">Enter your Email *</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-brand-darker border border-brand-border text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition"
                placeholder="Enter your Email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-accent to-warning text-brand-dark font-bold py-3 rounded-lg hover:from-warning hover:to-amber-600 transition-all flex items-center justify-center gap-2"
            >
              Claim Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-brand-text text-center">
              Your Information Is Safe With Us. We Never Share Your Details.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}