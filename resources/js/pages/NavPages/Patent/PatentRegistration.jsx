import React, { useState } from 'react';
import { 
  FileText, Shield, Users, Clock, Phone, Mail, 
  CheckCircle, ChevronDown, ChevronRight, Star,
  Award, Globe, Lock, BookOpen, Search,
  Code, Radio, Building2, Scale, Zap, TrendingUp,
  DollarSign, Heart, MessageCircle, ArrowRight, Lightbulb, Eye
} from 'lucide-react';
import HomeLogin from "../../HomeLogin" 

export default function PatentRegistration() {
  const [openFaq, setOpenFaq] = useState(null);

  // ... (Saare data arrays jaise procedureSteps, documentsList, etc. same rahenge)

  const procedureSteps = [
    {
      icon: FileText,
      title: 'Fill Patent Application Form',
      desc: 'All you need to do is complete our simple form and provide your basic information which will be required while filing for patent registration to get a patent.',
    },
    {
      icon: Search,
      title: 'Conduct a Patent Search',
      desc: 'After receiving all documents from your side, we will conduct a comprehensive patentability search for you to ensure novelty.',
    },
    {
      icon: Code,
      title: 'Prepare Application',
      desc: 'On the basis of your basic information and documents, our experts will professionally draft your patent application.',
    },
    {
      icon: ArrowRight,
      title: 'Patent Submission',
      desc: 'After the final review and your approval, we will file the patent application with the Indian Patent Office.',
    },
    {
      icon: CheckCircle,
      title: 'Your Work is Completed',
      desc: 'After submitting all the documents and patent applications, we will email you the official acknowledgment regarding the same.',
    },
  ];

  const documentsList = [
    'Patent application in Form-1',
    'Proof of right to file the application or patent. This proof could either be attached at the end of the application or along with it.',
    'If complete specifications are not available, then provisional specifications.',
    'In the case of provisional specifications, then complete specification in Form-2 within 12 months.',
    'Statement and undertaking under Section-8 in Form-3 (if applicable).',
    'If a patent application is filed by a patent agent, then the power of authority in Form-26.',
    'If the application is for biological material, then the applicant is required to get permission from the National Biodiversity Authority before the grant of the patent.',
    'The source of geographical origin should also be included in the case of biological material used in the innovation.',
    'All the applications must bear the signature of the applicant/authorized person/Patent attorney.',
    'The last page of the complete/provisional specification must be signed by the applicant/agent, including the sign at the right bottom corner of the drawing sheets.',
  ];

  const patentTypes = [
    {
      title: 'Ordinary Application',
      desc: 'This kind of application is administered when there aren’t any applications or references to some other application under process within the Indian Patent Office. The priority date and filing date are the equivalents for conventional applications.',
    },
    {
      title: 'Conventional Application',
      desc: 'If an innovator has already filed a patent in another nation and now wants to do the same in India, this comes under the conventional application. It is compulsory to file the application for an Indian patent within a year (12 months) of first filing it.',
    },
    {
      title: 'PCT International Application',
      desc: 'PCT International Application allows you to file the patent application in different nations, and you can file it in up to 142 countries. It could take between 30-31 months from the universal filing date to enter and guarantee safety in each country.',
    },
    {
      title: 'PCT National Phase Application',
      desc: 'You can file this application within 31 months from the global filing date to enter the national phase in India.',
    },
  ];

  const processSteps = [
    {
      title: 'Prior Art / Patentability Search',
      desc: 'This required step, in case you haven’t done so previously. Before we jump on the way to how to complete the patent registration process, you should know whether a patent is going to be available for it or not. For this, you can utilize our patent search services.',
    },
    {
      title: 'Drafting of Patent Application',
      desc: 'After the patentability search, the innovator ought to set up an application in Form 1. Then, you have to attach patent details with every application. This is done in Form 2, where the complete or provisional specification is referenced depending upon the condition of development. If it is a provisional specification, a time period of 12 months is given to finish the invention and file the entire application. Finally, you have to submit your patent draft. Based on this draft, the patent office will decide whether the patent could be allowed or not.',
    },
    {
      title: 'Filing the Patent Application',
      desc: 'Step 1: For an application for grant of patent, use Form 1.\nStep 2: For provisional/complete specification, use Form 2.\nStep 3: For statement and undertaking under Section 8 (utilized when patent application is already filed in a country other than India), use Form 3.\nStep 4: For declaration as to inventorship, use Form 5.\nStep 5: For start-ups and small entities, use Form 28.',
    },
    {
      title: 'Patent Filing (Ideation & Visualization)',
      desc: 'Ideation: At this progression, the designer is required to pen down the thought or idea and appropriately note the key insights regarding the creation that should be protected.\nVisualization: Create a visual description of your thought in the form of diagrams that clarify progressively about the innovation.',
    },
    {
      title: 'Publication of Patent Application',
      desc: 'The application filed with the patent office will be distributed in the official patent journal. This is done within 18 months of the filing of the patent. The inventor can utilize Form 9 for early publication. In the event that there is some limitation set by the Indian Patent Act concerning the publishing of the patent, it will not be published in the journal.',
    },
    {
      title: 'Examination',
      desc: 'The examination process is done before the patent is allowed, and the application for examination has to be made in Form 18. This procedure should not be deferred, as it is on a first-come, first-serve premise. After this application is filed, it is given to the patent official who verifies every condition as indicated by the patent rules and regulations.',
    },
    {
      title: 'Issuance of Examination Report',
      desc: 'After the exhaustive search is conducted, the First Examination Report (FER) is issued in this case, highlighting any objections or requirements.',
    },
    {
      title: 'Grant of Patent',
      desc: 'After the Patent Officer recognizes the fulfillment of complaints raised and all conditions are met, the patent is officially granted.',
    },
  ];

  const faqs = [
    { q: 'What is a patent registration?', a: 'Patent registration is a legal process that grants the inventor exclusive rights to their invention, preventing others from making, using, selling, or importing it without permission.' },
    { q: 'How to get patent registration?', a: 'You can get patent registration by conducting a patentability search, drafting the application with provisional or complete specifications, and filing it with the Indian Patent Office via Form 1 and Form 2.' },
    { q: 'How much does it cost to get patents registered?', a: 'At LegalRaasta, we charge Rs. 19,999 onwards for a provisional patent and Rs. 35,999 onwards for a permanent patent, which includes drafting, filing, and government fees.' },
    { q: 'What is the process of getting patents registered?', a: 'The process includes: Patentability Search, Drafting Application, Filing (Forms 1, 2, 3, 5, 28), Publication (18 months), Examination (Form 18), FER issuance, and finally, Grant of Patent.' },
    { q: 'What are the documents required to get a patent registered?', a: 'Required documents include Form 1, Proof of right, Provisional/Complete Specifications (Form 2), Section 8 undertaking (Form 3), Form 26 (if using an agent), and signed drawing sheets.' },
    { q: 'What can be patented?', a: 'A patent can be granted for a process, art, method of manufacture, apparatus, machine, computer software, chemicals, drugs, or any technical application that is new, inventive, and industrially applicable.' },
    { q: 'What is the expiration date of a patent?', a: 'The lifetime of a patent in India is 20 years from the date of filing the application. This period is restricted and generally cannot be extended.' },
    { q: 'What is the required information to file the patent?', a: 'You need to provide the title of the invention, applicant and inventor details, priority details (if any), provisional or complete specifications, and drawings (if applicable).' },
    { q: 'What is expected from patentee as an obligation?', a: 'The patentee is obligated to work the patent in India, pay annual renewal fees to keep it in force, and disclose any foreign filings under Section 8.' },
    { q: 'What is the patent specification?', a: 'A patent specification is a detailed technical document that describes the invention, its background, objectives, detailed description, and claims defining the scope of legal protection.' },
    { q: 'Why is patent search essential?', a: 'A patent search is essential to determine if your invention is truly novel and non-obvious, saving you time and money by avoiding the filing of an application that is likely to be rejected.' },
    { q: 'Why is expert help necessary in the case of patent registration?', a: 'Expert help ensures proper drafting of claims, correct form selection, timely responses to examination reports, and higher chances of successful grant, avoiding legal pitfalls.' },
    { q: 'Should I disclose details of my invention to potential investors before or after patent registration?', a: 'It is highly recommended to file at least a provisional patent application before disclosing details to investors to secure your priority date and prevent loss of novelty.' },
    { q: 'Does the applicant get an opportunity of being heard before his application is refused?', a: 'Yes, the applicant has the right to be heard. If the Controller intends to refuse the application, a hearing is provided to address the objections raised in the First Examination Report (FER).' },
    { q: 'Which states are covered under LegalRaasta patent registration?', a: 'LegalRaasta assists clients with patent registration across all states in India, including Delhi NCR, Mumbai, Bengaluru, Chennai, and all other major cities.' },
    { q: 'What is the process of a patent application?', a: 'The process involves ideation, visualization, drafting, filing, publication, request for examination, responding to FER, and finally, the grant of the patent.' },
    { q: 'Is it possible to get my invention secret after obtaining a patent for it?', a: 'No, the core principle of the patent system is "quid pro quo" (something for something). In exchange for a 20-year monopoly, the invention must be fully disclosed to the public in the patent specification.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Patent Registration
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Protect your invention typically in <span className="text-yellow-400 font-semibold">10 days</span>
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">Online process. Save 30% cost</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">1 Lakh+ Happy Clients</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { num: 'Expert', label: 'Qualified Team' },
                  { num: 'Fast', label: 'Quick Process' },
                  { num: 'Free', label: 'Lifetime Consultation' },
                  { num: '100%', label: 'Customer Satisfaction' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-yellow-400 font-bold text-lg">{stat.num}</div>
                    <div className="text-xs text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
           <HomeLogin/>
          </div>
        </div>
      </section>

      {/* ==================== ALL CONTENT SECTIONS (NO TABS) ==================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* 1. Procedure Section */}
        <section id="procedure">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Procedure for Patent Registration in India</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">A streamlined, step-by-step approach to securing your intellectual property rights efficiently.</p>
          
          <div className="space-y-6">
            {procedureSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-6 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-yellow-100 text-yellow-700 font-bold text-sm px-3 py-1 rounded-full">Step {index + 1}</span>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Call Us For Quote</h3>
                <p className="text-blue-100">We can serve our clients more efficiently thanks to cutting-edge practice technology. Connect with us today.</p>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <a href="tel:+918750048585" className="flex items-center gap-3 bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-xl">
                  <Phone className="w-6 h-6" />
                  <span className="text-xl">+91 8750048585</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Definition Section */}
        <section id="definition">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Understanding Patent Registration</h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              After the procedure of patent registration, one gets property rights to an invention administered by an individual or a firm. In case it is unique, the government will concede to you the full rights for your product. It awards you the full right of making, utilizing, selling, or bringing in the item or process and denies others from doing as such. According to the Patent Act, 1970 and Patent Rules 1972, patents are represented and governed in India.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The lifetime of a patent is 20 years. This period is restricted in most cases, yet it could not be extended by the act of congress, and in rare cases, it could be extended for a couple of years.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The patent could be for many things, be it a process, art, a method to manufacture, particular apparatus, machine, computer software, chemicals, drugs, or technical application. We, at LegalRaasta, act as patent specialists and assist organizations with registering themselves in Delhi NCR, Mumbai, Bengaluru, Chennai, and all other Indian cities.
            </p>
          </div>

          {/* What is Included */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6">What is Included in Our Package?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {['Prior Art Search', 'Application Drafting', 'Application Filing', 'Government Fees'].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                <CheckCircle className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Documents Section */}
        <section id="documents">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Documents Needed to Get Patent Registration in India</h2>
          <p className="text-gray-600 mb-8">The following documents are required to get your patent registered smoothly and efficiently:</p>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-4">
              {documentsList.map((doc, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Type Section */}
        <section id="type">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Types of Patent Applications in India</h2>
          <p className="text-gray-600 mb-8">Understanding the different types of patent applications helps you choose the right path for your innovation:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {patentTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">{type.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Process Section */}
        <section id="process">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Detailed Procedure for Patent Registration</h2>
          <p className="text-gray-600 mb-10">A comprehensive walkthrough of the patent registration journey from ideation to grant.</p>
          
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Condition & Advantages Section */}
        <section id="condition">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Conditions, Costs & Rules for Patent Registration</h2>
          
          {/* Cost */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white mb-10">
            <h3 className="text-2xl font-bold mb-4">Cost Incurred</h3>
            <p className="text-blue-100 mb-6">We at LegalRaasta, charge the following for patent registration:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">₹19,999 onwards</div>
                <div className="text-sm text-blue-100">For a Provisional Patent</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">₹35,999 onwards</div>
                <div className="text-sm text-blue-100">For a Permanent Patent</div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Requirements of Getting a Patent in India</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Patentable Subject Matter', desc: 'According to the Patents Act, Section 3 and 4 carry the list of non-patentable topics. Your creation should not fall under this list.' },
              { title: 'Inventive or Non-obviousness', desc: 'The topic you wish to get patented should not be obvious to specialists in the field. That is, it should be technologically advanced or economically gainful to be patented.' },
              { title: 'Novelty', desc: 'The invention should be new and creative. Thus, it should not be utilized in the public domain or somewhere around the world.' },
              { title: 'Industrial Applicability', desc: 'Finally, this invention should be handy and usable in the industries or public domain.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Rules */}
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Rules of Patent Registration</h3>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'The primary schedule of the Patent Act briefs the fee payable.',
                '10% extra expense is charged if there should be an occurrence of records being documented physically.',
                'The inventor can pay the charge utilizing electronic methods, demand draft, or banker’s cheque.',
                'The fee charged would be paid to the Controller of Patents.',
                'In the event that the application is transferred from a natural person to a person other than a natural person, the balance amount will be paid by the new candidate.',
                'The equivalent is with the instance of new businesses. If the application is transferred, the split amount will be paid by the individual to whom the application is transferred.',
                'The fee once paid will not be refunded, unless some excess amount is paid to the Controller of the Patents.',
                'The charges can be paid in advance of the application process.',
                'Some measures of charge can be discounted if the application is withdrawn before the main statement of complaint is given, as referenced in the First Schedule of the Act.',
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <ChevronRight className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mt-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Advantages of Patent Registration</h2>
            <p className="text-gray-600 mb-8">The following advantages are crucial for your business growth and market positioning:</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Lock, title: 'Keeps Competitors at Bay', desc: 'You have all the rights reserved to yourself, preventing others from copying your innovation.' },
                { icon: TrendingUp, title: 'Increases Business Revenues', desc: 'It enables the patent holder to charge a premium for the invention, boosting profitability.' },
                { icon: DollarSign, title: 'License or Sell', desc: 'These patents are just like other forms of property. Hence, it is possible to license or sell them.' },
                { icon: Building2, title: 'Easier to Raise Capital', desc: 'It makes it easier to raise capital for your business if you are ready to sell or license the patent that you possess.' },
                { icon: Award, title: 'Enhanced Credibility', desc: 'The credibility of the inventor will go up significantly after the patent registration is done.' },
                { icon: Heart, title: 'Royalty Benefits', desc: 'The selling of the idea outright will bring in much advantage. It brings a royalty of 5% or less, highly advantageous for those with ideas but lacking market funds.' },
              ].map((adv, i) => {
                const Icon = adv.icon;
                return (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{adv.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. FAQ Section */}
        <section id="faq">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-10">Find answers to the most common questions about patent registration in India.</p>
          
          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-yellow-100 text-yellow-700 rounded-lg flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="font-semibold text-gray-800 text-sm md:text-base">{faq.q}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pl-16">
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose Legal Raasta</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '30+', label: 'Offices in India', icon: Building2 },
              { num: '10+', label: 'Years Experience', icon: Award },
              { num: 'Fast', label: 'Economical and Fast', icon: Zap },
              { num: '100%', label: 'Money Back Guarantee', icon: Shield },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
                  <Icon className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-yellow-400 mb-1">{item.num}</div>
                  <div className="text-sm text-blue-100">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Trusted Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['John Deere', 'Blue Tokai', 'Geekan', 'Hindustan Unilever Limited', 'Rockland', 'Odhani'].map((client, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:bg-yellow-50 transition-colors border border-gray-100">
                <span className="font-bold text-gray-700 text-center text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Protect Your Invention?</h2>
          <p className="text-white/90 mb-8">Get your patent registered today and secure your exclusive market rights.</p>
          <a href="tel:+918750048585" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
            <Phone className="w-5 h-5" />
            Call +91 8750048585
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}