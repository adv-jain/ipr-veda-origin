import React from 'react';
import { 
  CheckCircle, Shield, TrendingUp, Users, Clock, 
  FileText, Award, Globe, Lock, DollarSign,
  Building2, Star, ChevronRight, Phone, Mail,
  MapPin, Zap, Target, BookOpen, AlertCircle,
  ArrowRight, CreditCard, FileCheck, Smartphone
} from 'lucide-react';
import Login from "../../Login"

export default function MSMERegistration() {
  const [formData, setFormData] = React.useState({ name: '', phone: '', email: '' });

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                MSME Registration Online in India
              </h1>
              <p className="text-xl lg:text-2xl text-brand-text mb-8">
                Get your MSME Registration done right with complete support from IPRveda. We handle Udyam filing for manufacturers, service businesses, traders, and exporters across every state in India.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Free government registration, zero hidden charges',
                  'Same-day filing on the Udyam portal',
                  'Correct NIC code and classification selected the first time',
                  'Support updating turnover and investment data every year',
                  'Help claiming CGTMSE, PMEGP, and GeM benefits post-registration',
                  'Filed for businesses in Delhi NCR, Mumbai, Bengaluru, Chennai, and beyond'
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
                    <div className="font-bold">4.4 out of 5</div>
                    <div className="text-sm text-brand-text">12k+ reviews</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-brand-accent fill-brand-accent" />
                  <div>
                    <div className="font-bold">4.5 out of 5</div>
                    <div className="text-sm text-brand-text">5k+ reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
           <Login/>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { num: '1000+', label: 'Expert Professionals' },
              { num: '42,800+', label: 'Genuine Reviews' },
              { num: '1,00,000+', label: 'Assisted Clients' },
              { num: 'Fast', label: 'Quick Online Process' },
              { num: 'Pan-India', label: 'Trusted Clients' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-brand-dark">{stat.num}</div>
                <div className="text-sm text-brand-dark/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-brand-light py-8 border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['AWS', 'Google Partner', 'Google Pay', 'Meta', 'PayTM', 'PhonePe', 'Razorpay', 'TATA Tele', 'TrueCaller'].map((partner, i) => (
              <div key={i} className="text-brand-dark/50 font-semibold text-sm">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Overview Section */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">
            MSME Registration in India: Complete Udyam Guide (2026)
          </h2>
          <div className="prose prose-lg max-w-none text-brand-dark/70 space-y-4">
            <p className="text-xl leading-relaxed">
              MSME Registration is the process of getting your business formally recognised as a Micro, Small, or Medium Enterprise on the government's Udyam portal, which then makes you eligible for cheaper credit, priority in government tenders, and legal protection against late-paying clients. It costs nothing to do. It takes about fifteen minutes. And most business owners who qualify still haven't done it.
            </p>
            <p className="leading-relaxed">
              That gap matters more than it used to. In March 2025, the government rewrote the income tax rules around who has to pay MSMEs on time, and a Supreme Court ruling has since made clear that this protection only kicks in from your registration date forward, not retroactively. Get in touch with IPRveda, and we will get your Udyam certificate filed correctly, with the right classification, the first time.
            </p>
          </div>
        </section>

        {/* What is MSME */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-brand-accent" />
            What is MSME Registration?
          </h2>
          <div className="prose prose-lg max-w-none text-brand-dark/70 space-y-4">
            <p>
              MSME Registration is government recognition, granted under the Micro, Small and Medium Enterprises Development Act, 2006, confirming that your business qualifies as a Micro, Small, or Medium Enterprise based on your investment in plant, machinery, or equipment and your annual turnover. The certificate itself is issued by the Ministry of Micro, Small and Medium Enterprises, Government of India, through the Udyam Registration portal at udyamregistration.gov.in.
            </p>
            <p>
              Before July 2020, this same process ran through a scheme called Udyog Aadhaar, and before that, through paper-based state industry departments. Udyam replaced all of it with a single self-declaration system that pulls your investment and turnover figures directly from your PAN and GST filings. No document upload, no inspection, no waiting on a government officer to approve a stack of paperwork.
            </p>
            <p>
              Most business owners miss this part. Section 8 of the MSMED Act ties your legal protections under the Act, including the right to demand payment within a fixed window, directly to having a valid registration. Without it, you're just another unregistered vendor with no statutory hold over a client who pays late. With it, you have teeth.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-brand-accent" />
            Benefits of MSME Registration
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            None of these benefits arrive automatically. You have to register first, and then you have to actually use them.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Clock,
                title: 'A legal deadline on client payments',
                desc: 'Under Section 15 of the MSMED Act, a buyer must pay a registered Micro or Small enterprise within 45 days if there\'s a written agreement, or within 15 days if there isn\'t one. Miss it, and Section 16 kicks in with compound interest at three times the RBI\'s notified bank rate.'
              },
              {
                icon: Shield,
                title: 'A dispute forum that doesn\'t need a lawyer to start',
                desc: 'Sections 20 and 21 set up a Micro and Small Enterprise Facilitation Council in every state. File through the MSME Samadhaan portal, and the Council can hear your case without you filing a civil suit.'
              },
              {
                icon: DollarSign,
                title: 'Cheaper collateral-free credit',
                desc: 'Schemes like CGTMSE and the government\'s PMEGP scheme lend specifically to Udyam-registered businesses, often without asking for collateral at all.'
              },
              {
                icon: Globe,
                title: 'A seat at the government procurement table',
                desc: 'GeM, the Government e-Marketplace, has onboarded more than 22 lakh sellers, and a chunk of that procurement volume, worth several lakh crore rupees a year, is reserved specifically for MSME vendors.'
              },
              {
                icon: TrendingUp,
                title: 'Faster access to receivables financing',
                desc: 'TReDS platforms like RXIL, M1xchange, and Invoicemart let registered MSMEs discount unpaid invoices for immediate cash instead of waiting out a client\'s payment cycle.'
              },
              {
                icon: CheckCircle,
                title: 'Real tax and subsidy relief',
                desc: 'Depending on your sector, that includes ISO certification fee reimbursement, reduced trade fair participation costs, and access to interest subvention schemes.'
              }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="bg-brand-light rounded-xl p-6 border border-brand-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-2">{benefit.title}</h3>
                      <p className="text-brand-dark/70 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-brand-accent/10 border-l-4 border-brand-accent p-6 rounded-r-lg">
            <p className="text-brand-dark">
              <strong>One catch worth flagging early:</strong> the 45-day payment protection under Sections 15 and 16 applies only to enterprises registered under Manufacturing or Service activity. If you're registered under Trading, specifically NIC codes 45, 46, or 47, that particular protection does not apply to you, even though you can still register for priority sector lending purposes.
            </p>
          </div>
        </section>

        {/* Recent Updates Table */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">
            Recent Updates: MSME Classification Changes for 2025-26 and 2026-27
          </h2>
          <div className="prose prose-lg max-w-none text-brand-dark/70 mb-8">
            <p>
              The government revised MSME classification twice in five years, and the second revision is the one a lot of businesses still haven't updated their records for.
            </p>
            <p>
              On March 21, 2025, the Ministry of MSME issued Notification S.O. 1364(E), raising the investment and turnover ceilings across all three categories, effective April 1, 2025. Investment limits went up by 2.5 times. Turnover limits doubled.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-brand-dark to-brand-darker text-white">
                  <th className="px-6 py-4 text-left font-semibold">Category</th>
                  <th className="px-6 py-4 text-left font-semibold">Old Investment Limit</th>
                  <th className="px-6 py-4 text-left font-semibold">New Investment Limit</th>
                  <th className="px-6 py-4 text-left font-semibold">Old Turnover Limit</th>
                  <th className="px-6 py-4 text-left font-semibold">New Turnover Limit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: 'Micro', oldInv: '1 crore', newInv: '₹2.5 crore', oldTurn: '₹5 crore', newTurn: '₹10 crore' },
                  { cat: 'Small', oldInv: '₹10 crore', newInv: '₹25 crore', oldTurn: '50 crore', newTurn: '₹100 crore' },
                  { cat: 'Medium', oldInv: '₹50 crore', newInv: '₹125 crore', oldTurn: '₹250 crore', newTurn: '₹500 crore' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-brand-border ${i % 2 === 0 ? 'bg-brand-light' : 'bg-white'}`}>
                    <td className="px-6 py-4 font-semibold text-brand-dark">{row.cat}</td>
                    <td className="px-6 py-4 text-brand-dark/70">{row.oldInv}</td>
                    <td className="px-6 py-4 text-success font-semibold">{row.newInv}</td>
                    <td className="px-6 py-4 text-brand-dark/70">{row.oldTurn}</td>
                    <td className="px-6 py-4 text-success font-semibold">{row.newTurn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none text-brand-dark/70 space-y-4">
            <p>
              A few things follow from this. Existing Udyam certificates did not need to be reapplied for. They carried over automatically under the new limits. Businesses that had outgrown their old category and were staring down a reclassification got breathing room they didn't have a year earlier. And the composite criteria rule stayed exactly as it was before: cross the ceiling on either investment or turnover, not both, and you move up to the next category.
            </p>
            <p>
              The government's own numbers show what this is doing to registration volumes. As of February 28, 2026, over 7.83 crore enterprises had registered on the Udyam Registration Portal and the Udyam Assist Platform combined, according to the Ministry of MSME's own figures presented in Parliament. That number was 0.79 crore in FY22. In four years, it's grown almost tenfold. Maharashtra, Uttar Pradesh, and Tamil Nadu together account for close to a third of all registrations nationwide.
            </p>
            <p>
              The 2026-27 Union Budget added another layer on top of this, with new measures aimed at improving digital credit access and receivables financing for registered MSMEs, building on the MSME Champions umbrella of schemes that already cover zero-defect certification (ZED), lean manufacturing support, IP and incubation assistance, green financing (MSE-GIFT), and circular economy investment (MSE-SPICE). None of these schemes are available to you without a current Udyam registration.
            </p>
          </div>
        </section>

        {/* Who Needs MSME */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-brand-accent" />
            Who Needs MSME Registration in India?
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            Registration isn't limited to factories. Anyone providing a service, manufacturing a product, or trading goods can qualify, and that net is wider than most business owners assume.
          </p>
          
          <div className="space-y-6">
            {[
              {
                title: 'Manufacturers',
                desc: 'Manufacturers across India\'s established industrial belts are the obvious fit: the hosiery and knitwear units of Ludhiana, Tirupur\'s export-facing garment cluster, Moradabad\'s brassware exporters, Jaipur\'s gems and handicrafts trade, and Kanpur\'s leather manufacturers all sit squarely inside MSME territory.'
              },
              {
                title: 'Service Businesses',
                desc: 'Service businesses qualify just as easily. IT-enabled services out of Noida and Gurugram, engineering design firms in Coimbatore and Rajkot, chartered accountancy and consulting practices, even a single-location repair shop, all count as a service enterprise under the Act, and there\'s no rule excluding professional services from the definition.'
              },
              {
                title: 'Traders',
                desc: 'Traders, both wholesale and retail, have been eligible since July 2021, when the government extended priority sector lending access to trading businesses through a specific policy memorandum. Register your kirana distribution business or your electronics wholesale outfit the same way you would a factory, keeping in mind the payment-protection gap for Trading NIC codes mentioned above.'
              },
              {
                title: 'Exporters',
                desc: 'Exporters get an added reason to register early. Export-oriented units already dealing with GST refunds and duty drawback claims find that a Udyam certificate speeds up several of these processes, since government departments increasingly cross-check MSME status before releasing certain benefits, and export promotion councils often ask for it before extending their own scheme benefits on top.'
              },
              {
                title: 'Startups and Single-Founder Businesses',
                desc: 'Startups and single-founder businesses qualify too, and often forget to check. A freelance design studio or a two-person software shop rarely thinks of itself as an "enterprise," but if it has a PAN and files GST or income tax returns, it almost certainly clears the Micro enterprise threshold with room to spare.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-brand-light rounded-xl p-6 border-l-4 border-brand-accent">
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-brand-dark/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Types/Classification */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-brand-accent" />
            Types of MSME: Classification Under Udyam
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            Every enterprise gets sorted into one of three categories, and which one you land in depends on both your investment and your turnover, not just one or the other.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: 'Micro Enterprises',
                desc: 'Micro Enterprises are the largest group by far. Trading businesses, which now make up nearly 43% of everyone on the Udyam portal, mostly land here. Investment in plant, machinery, or equipment stays under ₹2.5 crore, and turnover stays under ₹10 crore.',
                color: 'primary'
              },
              {
                title: 'Small Enterprises',
                desc: 'Small Enterprises sit in the next bracket up: investment between ₹2.5 crore and ₹25 crore, turnover between ₹10 crore and ₹100 crore. A lot of established regional manufacturers and mid-sized service firms live in this band.',
                color: 'accent'
              },
              {
                title: 'Medium Enterprises',
                desc: 'Medium Enterprises cap out at ₹125 crore in investment and ₹500 crore in turnover. Cross both of those, and you\'re no longer an MSME under any definition, full stop.',
                color: 'warning'
              }
            ].map((type, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 ${
                type.color === 'primary' ? 'border-brand-primary/20 bg-brand-primary/5' :
                type.color === 'accent' ? 'border-brand-accent/20 bg-brand-accent/5' :
                'border-warning/20 bg-warning/5'
              }`}>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{type.title}</h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-brand-dark/70 space-y-4">
            <p>
              Here's the mechanic worth understanding properly. Say a Small enterprise's turnover climbs past ₹100 crore in a given year. It doesn't get bumped up to Medium status the instant that happens. There's a transition window built into the rules, so one unusually strong year doesn't immediately strip a business of its category benefits. The same logic runs in reverse for a business that shrinks.
            </p>
            <p>
              Since 2020, there's also no separate track for manufacturing versus service enterprises. Before that revision, a manufacturing unit and a service business with identical financials could land in completely different categories under the old MSMED Act framework. That distinction is gone. One composite test now applies to both.
            </p>
          </div>
        </section>

        {/* Documents Required */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-brand-accent" />
            Documents Required for MSME Registration
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            There's genuinely less paperwork here than for almost any other business registration in India, and this is by design, not an oversight.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                What you actually need:
              </h3>
              <ul className="space-y-3">
                {[
                  'Aadhaar number of the proprietor, managing partner, or authorised signatory (this is mandatory; no substitute accepted)',
                  'PAN card of the business or the individual, depending on entity type',
                  'GSTIN, where the business is required to hold one under GST law',
                  'Bank account details for the enterprise',
                  'A brief description of the business activity, along with the correct NIC code'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-dark">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-warning" />
                What you don't need:
              </h3>
              <p className="text-brand-dark/70 mb-4 text-sm">
                This trips people up because every other registration in India asks for it: no address proof, no incorporation certificate upload, no financial statements, no factory photographs. The portal pulls your investment and turnover data directly from your Income Tax and GST records once your PAN and GSTIN are verified.
              </p>
              <div className="bg-brand-accent/10 border-l-4 border-brand-accent p-4 rounded-r-lg">
                <p className="text-sm text-brand-dark">
                  If your business doesn't cross the GST registration threshold, you can still register on Udyam without a GSTIN, but you'll need to add it later the moment you do cross that threshold. Leaving it unlinked after you're GST-liable is one of the more common reasons a Udyam profile gets flagged during a later cross-check.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step by Step Process */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-brand-accent" />
            Step-by-Step MSME Registration Process
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            The whole thing runs on one portal, in one sitting, and here's how it actually goes from start to certificate.
          </p>
          
          <div className="space-y-6">
            {[
              {
                step: 'Step 1',
                title: 'Go to the Official Portal',
                desc: 'Open udyamregistration.in directly. Fake registration sites charging a "processing fee" show up constantly in search results and on paid ads, and none of them are affiliated with the government. If a site asks for payment before showing you a form, close the tab.'
              },
              {
                step: 'Step 2',
                title: 'Enter Aadhaar and Validate with OTP',
                desc: 'Enter the Aadhaar number of the proprietor for a sole proprietorship, or the managing partner or authorised signatory for other entity types. An OTP is sent to the linked mobile number. Validate it, and the system moves you to PAN verification.'
              },
              {
                step: 'Step 3',
                title: 'Verify PAN',
                desc: 'Enter the business PAN. The portal checks it against Income Tax records in real time. For anything other than a proprietorship, this step also pulls basic incorporation details automatically, so double-check that what populates on screen actually matches your records.'
              },
              {
                step: 'Step 4',
                title: 'Fill in Business and Investment Details',
                desc: 'Provide your business name, address, bank account, and a short activity description. Select your NIC code carefully here, since it determines whether Section 15 payment protection applies to you later, and it\'s genuinely hard to fix after the fact without a fresh support ticket.'
              },
              {
                step: 'Step 5',
                title: 'Confirm Investment and Turnover Figures',
                desc: 'The system fetches your figures from linked PAN and GST data. Review them. If something looks off, that mismatch usually traces back to a return that hasn\'t been filed yet or a GSTIN that isn\'t linked correctly, and it\'s worth fixing before you submit rather than after.'
              },
              {
                step: 'Step 6',
                title: 'Submit and Download the Certificate',
                desc: 'Once everything checks out, submit the application. The Udyam Registration Certificate, complete with a QR code linking to your enterprise details, is usually available for download the same day, sometimes within a couple of hours.'
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

        {/* Fees and Timeline */}
        <section className="bg-gradient-to-br from-brand-dark to-brand-darker rounded-2xl p-8 lg:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-brand-accent" />
            MSME Registration Fees and Timeline
          </h2>
          <div className="prose prose-lg max-w-none text-brand-text space-y-4 mb-8">
            <p className="text-2xl font-bold text-brand-accent">
              Zero. That's the government fee, in full, for every category and every entity type.
            </p>
            <p>
              Anyone charging you a government fee for Udyam registration is either padding a service charge without saying so or running an outright scam.
            </p>
            <p>
              What you might reasonably pay for is professional help getting the NIC code, entity structure, and classification right on the first attempt, particularly if your business has a complicated ownership structure or sits close to a category threshold. That's a service charge, not a government charge, and any consultant should be upfront about the distinction.
            </p>
            <p>
              Timeline-wise, most applications clear the same day. A small share get delayed a day or two when the PAN-GST cross-check throws up a mismatch, usually because a GST return is overdue or the entity name on PAN doesn't exactly match what's on GST records. Fixing that mismatch before you start the application, not after, is the single best way to keep this fast. There's no separate expedited or premium processing track, either, since the whole thing is automated and runs at the same speed for a one-person shop as it does for a mid-sized manufacturer.
            </p>
          </div>
        </section>

        {/* What You Lose */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-danger" />
            What You Lose by Not Registering
          </h2>
          <div className="prose prose-lg max-w-none text-brand-dark/70 mb-8">
            <p>
              Registration isn't legally compulsory to run a business in India. Nobody is going to fine you for operating unregistered. But treating that as "no downside" misses what's actually at stake.
            </p>
            <p>
              The Supreme Court has held that MSMED Act protection applies from your registration date forward, not retroactively. Miss a payment dispute today because you registered late, and that invoice gets no statutory protection, no matter how clearly a client owes you. Register after the fact and everything invoiced before that date is already outside the Act's reach.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-6 py-4 text-left font-semibold">What You're Missing</th>
                  <th className="px-6 py-4 text-left font-semibold">Practical Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { missing: 'Section 15 payment protection', impact: 'No 45-day deadline, no compound interest remedy on late payments' },
                  { missing: 'MSEFC dispute resolution', impact: 'No fast-track council hearing, forced into ordinary civil litigation' },
                  { missing: 'CGTMSE and PMEGP eligibility', impact: 'No access to collateral-free lending schemes' },
                  { missing: 'GeM and government tender access', impact: 'Locked out of MSME-reserved procurement categories' },
                  { missing: 'Section 43B(h) pressure on buyers', impact: 'Your client faces no tax consequence for paying you late' }
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-brand-border ${i % 2 === 0 ? 'bg-brand-light' : 'bg-white'}`}>
                    <td className="px-6 py-4 font-semibold text-brand-dark">{row.missing}</td>
                    <td className="px-6 py-4 text-brand-dark/70">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-danger/10 border-l-4 border-danger p-6 rounded-r-lg">
            <p className="text-brand-dark text-sm">
              <strong>That last row matters more than it looks.</strong> Since April 2024, a buyer who delays payment to a registered Micro or Small supplier beyond the Section 15 window loses the tax deduction on that expense until the year they actually pay. Unregistered suppliers give their clients zero reason to prioritise them over anyone else.
            </p>
          </div>
        </section>

        {/* Ongoing Obligations */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <FileCheck className="w-8 h-8 text-brand-accent" />
            Ongoing Obligations After MSME Registration
          </h2>
          <div className="prose prose-lg max-w-none text-brand-dark/70 space-y-4">
            <p>
              Udyam registration itself doesn't expire and doesn't need annual renewal. What does need attention is keeping the numbers behind it current.
            </p>
            <p>
              Your classification is tied to your latest Income Tax and GST filings. File late, file inconsistently, or let your GSTIN go unlinked, and your Udyam profile stops reflecting reality even though nobody actively cancelled anything. Update your details on the portal whenever your investment or turnover shifts meaningfully, and definitely the moment you cross into GST liability if you weren't registered before.
            </p>
            <p>
              If a change in ownership, business address, or activity happens, that needs updating too, through the same portal, using the same Aadhaar-linked login. There's no separate renewal fee or annual filing fee attached to any of this. It's maintenance, not a recurring cost.
            </p>
            <p>
              Reclassification itself is largely automatic now. The system checks your latest ITR and GST turnover data each year and flags a category shift on its own, rather than waiting for you to self-report it. That's convenient when it works, and it's exactly why keeping your tax filings current matters more for Udyam purposes than most owners realise.
            </p>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-warning" />
            Common Mistakes Businesses Make With MSME Registration
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Picking the wrong NIC code',
                desc: 'Business owners often select a generic or convenient-sounding code instead of the one that actually matches their activity. Get this wrong, and you can lose Section 15 payment protection without realising it, especially if a Trading code gets picked for what\'s genuinely a service business.'
              },
              {
                title: 'Registering under Trading and assuming full MSMED Act protection applies',
                desc: 'It doesn\'t, not for delayed payment remedies. This is the single most common misunderstanding businesses have about what registration actually buys them.'
              },
              {
                title: 'Letting GST and Udyam data drift apart',
                desc: 'A business that changes its turnover bracket, updates its GSTIN, or starts filing under a different PAN structure and forgets to update Udyam ends up with a certificate that no longer matches its actual classification, which surfaces at the worst possible time, usually during a loan application or a tender bid.'
              },
              {
                title: 'Assuming registration alone gets you a loan',
                desc: 'It improves eligibility and can unlock collateral-free schemes like CGTMSE, but it\'s not automatic approval. Banks still assess the underlying business.'
              },
              {
                title: 'Registering too late to matter',
                desc: 'Waiting until a payment dispute is already underway to register means the protection doesn\'t cover the disputed invoice at all, given the Supreme Court\'s position on this.'
              },
              {
                title: 'Using someone else\'s Aadhaar to register',
                desc: 'This happens more than you\'d expect in family-run businesses where a relative\'s Aadhaar gets used for convenience. It creates real ownership and authorisation problems down the line, particularly when the business later needs to prove who actually controls it.'
              },
              {
                title: 'Checking only turnover, or only investment, when self-assessing category',
                desc: 'The composite rule means both figures count. A business with modest turnover but a large plant and machinery investment can land in a higher category than the owner expects, and finding that out during a loan application rather than during registration is the worst time to find it out.'
              }
            ].map((mistake, i) => (
              <div key={i} className="bg-warning/10 rounded-xl p-6 border border-warning/20">
                <h3 className="text-lg font-bold text-brand-dark mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-warning" />
                  {mistake.title}
                </h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed">{mistake.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Conclusion</h2>
          <div className="prose prose-lg max-w-none text-brand-dark/70 space-y-4">
            <p>
              The businesses that get the most out of MSME Registration aren't the ones who filed it and forgot about it. They're the ones who registered under the right NIC code, kept their GST and PAN data current, and actually used the payment protection and the credit schemes that came with it. The certificate is the easy part. Using it properly is where the value sits.
            </p>
            <p>
              If you're running a business that qualifies and you haven't registered yet, every month you wait is a month of invoices with no statutory payment protection behind them. Connect with IPRveda and get your MSME Registration filed correctly, under the right category, before your next client payment goes fifty days without a remedy.
            </p>
          </div>
        </section>

        {/* Why Choose IPRveda */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Why Choose IPRveda for MSME Registration</h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            Filing this yourself takes fifteen minutes if everything lines up. It takes considerably longer if your NIC code is wrong, your GST details don't match, or you're not sure which category you actually fall into. That's where we come in.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: 'Correct classification from day one',
                desc: 'We check your actual investment and turnover position against the current 2025-revised thresholds before filing, not after, so you land in the right category the first time.'
              },
              {
                title: 'NIC code accuracy',
                desc: 'We match your registration to the activity code that actually protects your payment rights under Section 15, rather than whatever code seems closest.'
              },
              {
                title: 'PAN-GST reconciliation before submission',
                desc: 'We catch mismatches between your GST filings and PAN records before they turn into a rejected or flagged application.'
              },
              {
                title: 'Ongoing update support',
                desc: 'When your turnover crosses a threshold or your business details change, we handle the Udyam update so your certificate stays accurate year-round.'
              },
              {
                title: 'Scheme access guidance',
                desc: 'Once you\'re registered, we help you actually apply for CGTMSE, PMEGP, and GeM seller registration instead of leaving the certificate to sit unused in a drawer.'
              },
              {
                title: 'Multi-city support',
                desc: 'We\'ve filed registrations for businesses across Delhi NCR, Mumbai, Bengaluru, Chennai, and every other major Indian market, and we know the sector-specific NIC code questions that come up in each.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-brand-primary/5 rounded-xl p-6 border border-brand-primary/20">
                <h3 className="text-lg font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-brand-accent to-warning rounded-xl p-6 text-brand-dark text-center">
            <p className="text-lg font-semibold mb-2">Free consultation · Transparent fees · Pan-India support</p>
            <p className="text-sm opacity-90">Talk To Our Experts →</p>
          </div>
        </section>

        {/* Clients Section */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Mamaearth', 'BlueTokai Coffee Roasters', 'Nritya Shakti Dance Academy', 'Hindustan Uniliver Limited', 'Geeken Chemicals', 'Rockland Hotel', 'John Deere', 'Amyra Odhni'].map((client, i) => (
              <div key={i} className="bg-brand-light rounded-xl p-6 flex items-center justify-center border border-brand-border">
                <span className="font-semibold text-brand-dark text-center text-sm">{client}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-brand-light rounded-xl p-6 border border-brand-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-brand-accent fill-brand-accent" />
                  ))}
                </div>
                <p className="text-brand-dark/70 text-sm mb-4">"Excellent service and professional support throughout the MSME registration process. Highly recommended!"</p>
                <div className="font-semibold text-brand-dark text-sm">Happy Client {i}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Blog Placeholder */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Latest Blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-brand-border rounded-xl overflow-hidden">
                <div className="h-48 bg-brand-light"></div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-dark mb-2">MSME Registration Guide {i}</h3>
                  <p className="text-brand-dark/70 text-sm">Learn more about MSME benefits and registration process...</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured In */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Featured In</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['The Economic Times', 'Business Today', 'The Financial Express', 'Entrepreneur India', 'Inc42', 'YourStory', 'Business Standard'].map((media, i) => (
              <div key={i} className="text-brand-dark/50 font-semibold">{media}</div>
            ))}
          </div>
        </section>

        {/* Certificate & Reg Services */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Certificate & Registration Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Trademark Registration',
              'Partnership Registration',
              'BIS Certificate',
              'EPR Certificate',
              'LMPC Certificate',
              'PSARA License',
              'FSSAI License',
              'Drugs License',
              'CDSCO Registration',
              'Liquor License',
              'Company Services',
              'GST Registration'
            ].map((service, i) => (
              <div key={i} className="bg-brand-light rounded-lg p-4 text-center border border-brand-border hover:shadow-brand transition-all">
                <span className="text-sm font-medium text-brand-dark">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs - All Expanded */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Is MSME Registration mandatory for small businesses in India?',
                a: 'No, it isn\'t legally mandatory to operate a business. But skip Udyam registration, and you get none of the protections under the MSMED Act, including the 45-day payment rule, and you lose access to schemes like CGTMSE and GeM procurement.'
              },
              {
                q: 'What documents are needed for Udyam registration?',
                a: 'You need: Aadhaar number of the proprietor/managing partner/authorised signatory, PAN card of the business or individual, GSTIN (where applicable), bank account details, and a brief description of business activity with correct NIC code. No address proof, incorporation certificate, financial statements, or factory photographs are required.'
              },
              {
                q: 'How much does MSME Registration cost in India?',
                a: 'The government fee is ZERO for all categories and entity types. You may pay a professional service charge for expert assistance with NIC code selection, classification, and filing, but there is no government fee for Udyam registration itself.'
              },
              {
                q: 'What are the new classification limits for MSME Registration in 2025-26?',
                a: 'As of April 1, 2025: Micro enterprises - Investment up to ₹2.5 crore, Turnover up to ₹10 crore. Small enterprises - Investment between ₹2.5-25 crore, Turnover between ₹10-100 crore. Medium enterprises - Investment up to ₹125 crore, Turnover up to ₹500 crore.'
              },
              {
                q: 'Does MSME Registration protect against late payment from clients?',
                a: 'Yes, but only for Manufacturing and Service enterprises (not Trading). Under Section 15 of the MSMED Act, buyers must pay registered Micro or Small enterprises within 45 days (with written agreement) or 15 days (without agreement). Late payments attract compound interest at 3x the RBI bank rate.'
              },
              {
                q: 'Can a service business or freelancer register under MSME Registration?',
                a: 'Absolutely! Service businesses including IT services, consulting, CA firms, design studios, repair shops, and even freelance professionals qualify as service enterprises under the Act. There\'s no rule excluding professional services from the definition.'
              },
              {
                q: 'How long does it take to get an MSME certificate after applying?',
                a: 'Most applications are processed the same day, with the Udyam Registration Certificate (complete with QR code) available for download within a few hours. Some applications may take 1-2 days if there\'s a PAN-GST data mismatch that needs resolution.'
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

        {/* Editorial Team */}
        <section className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">IPRveda Editorial Team</h2>
          <div className="prose prose-lg max-w-none text-brand-dark/70">
            <p>
              IPRveda is one of India's leading platforms for Company Registration (Private Limited, LLP, OPC) and GST compliance. Since 2015, our team of experienced CAs and legal experts has assisted over 100,000 businesses with services like Trademark, FSSAI, BIS, and Startup India registration. We simplify complex government processes to help startups and entrepreneurs grow faster. Trusted across India, IPRveda makes legal and financial compliance simple, quick, and affordable.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-brand-accent to-warning rounded-2xl p-8 lg:p-12 text-brand-dark text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Register Your MSME?</h2>
          <p className="text-brand-dark/80 mb-8 text-lg">
            Connect with IPRveda and get your MSME Registration filed correctly under the right classification. Our experts handle Udyam filing, NIC code selection, and scheme access for manufacturers, service businesses, and traders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918750008585" className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary font-bold px-8 py-4 rounded-xl hover:bg-brand-light transition-all transform hover:scale-105 shadow-xl">
              <Phone className="w-5 h-5" />
              Talk To Our Experts
            </a>
          </div>
        </section>
      </main>

      {/* Footer CTA Form */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">We're Here To Help You</h2>
            <p className="text-brand-text">Get your free consultation today</p>
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