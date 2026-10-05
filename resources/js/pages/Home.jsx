import React, { useState } from "react";
import webDevelopment from "../../../config/assets/img/illustrations/web-development.svg"
import clipboard1 from "../../../config/assets/img/clipboard-image-1.png"
import clipboard2 from "../../../config/assets/img/clipboard-image-2.png"
import clipboard3 from "../../../config/assets/img/clipboard-image-3.png"
import clipboard4 from "../../../config/assets/img/clipboard-image-4.png"
import clipboard5 from "../../../config/assets/img/clipboard-image-5.png"
import clipboard6 from "../../../config/assets/img/clipboard-image-6.png"
import clipboard7 from "../../../config/assets/img/clipboard-image-7.png"
import clipboard8 from "../../../config/assets/img/clipboard-image-8.png"
import clipboard9 from "../../../config/assets/img/clipboard-image.png"
import Header from "../components/Header";
import teamwork from "../../../config/assets/img/illustrations/teamwork.svg"
const brandImages = [
  clipboard1,
  clipboard2,
  clipboard3,
  clipboard4,
  clipboard5,
  clipboard6,
  clipboard7,
  clipboard8,
  clipboard9,
  
];

const guides = [
  {
    id: 1,
    title: "What is a Trademark?",
    content: (
      <>
        <p className="mb-4">
          Imagine you have a super cool drawing that you made all by yourself. You wouldn't want someone else to copy it and claim it as their own, right?
        </p>
        <p className="mb-4">
          A trademark is like a special marker for your own ideas and creations. It's a word, picture, sound, or even a smell that tells everyone: "This is mine!" It's like a superhero cape for your imagination, protecting it from copycats.
        </p>
        <p className="mb-4">
          Think of your favorite toys or snacks. They probably have logos or mascots that you recognize right away. Those are trademarks! They help you know exactly what you're getting and make sure you're not getting tricked by something fake.
        </p>
        <h3 className="text-xl font-semibold mb-5">Here are some well known trademarks you might know:</h3>
        <ul className="mt-5">
          <li className="flex flex-col lg:flex-row lg:items-center gap-4">
            <img src="/assets/img/mcdonald%20imgage.jpg" alt="" />
            <span>
              The happy yellow arches of McDonald's - They let you know you're in for yummy burgers and fries.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "Why Do I Need A Trademark?",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-2">Distinguishing Your Business: </h3>
        <p className="mb-4">
          Trademarks make it easier for customers to find and recognize your business in a crowded marketplace1
        </p>
        <h3 className="text-xl font-semibold mb-2">Valuable Asset: </h3>
        <p className="mb-4">
          As your business grows, so does the value of your trademark. It can be bought, sold, licensed, or used as a security interest to secure a loan
        </p>
        <h3 className="text-xl font-semibold mb-2">Protection Against Counterfeit Products: </h3>
        <p className="mb-4">
          A trademark helps consumers distinguish your products and services from others and protects you against counterfeit products2
        </p>
        <h3 className="text-xl font-semibold mb-2">Exclusive Rights: </h3>
        <p>
          A trademark gives you the exclusive right to use your mark and helps prevent competitors from using a mark that’s similar to yours3.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Who can Apply for Trademark Registration?",
    content: (
      <>
        <p>:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Individuals</li>
          <li>
            Businesses
            <ul className="list-disc pl-6">
              <li>Sole proprietorships</li>
              <li>Partnerships</li>
              <li>Limited Liability Companies (LLCs)</li>
              <li>Corporations (both Indian and foreign)</li>
              <li>Trusts</li>
              <li>Societies</li>
            </ul>
          </li>
          <li>Joint Ownership</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Required Documents & Details",
    content: (
      <>
        <p>:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Applicant information</li>
          <li>
            Goods and services:&nbsp;A clear description of the goods or services you're using the trademark for. You can use the Nice Classification system for a standardized list.
          </li>
          <li>
            Trademark information:
            <ul className="list-disc pl-6 mt-1">
              <li>A clear description of the trademark itself: Is it a logo, word, phrase, sound, smell, or something else?</li>
              <li>Representation of the trademark: If it's visual, provide a clear image in black and white (sometimes color is accepted depending on the office).</li>
            </ul>
          </li>
          <li>
            Documents:
            <ul className="list-disc pl-6 mt-1">
              <li>Form: Trademark application form. Fill it out completely and accurately.</li>
              <li>Proof of identity: For individuals, this could be a passport or ID card. For businesses, it could be an incorporation certificate or partnership deed.</li>
              <li>Proof of address: Utility bills, bank statements, or other official documents with your address.</li>
              <li>Priority document (optional): If you've already filed for the trademark in another country, you can submit a priority document to claim earlier filing dates.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

const plans = [
  {
    name: "Standard",
    price: "₹999",
    items: [
      "Consultation",
      "Application Preparation",
      "Name search & approval",
      "Application Filing",
      "Online process. Save 30% cost",
      "Fast & Quick Process",
    ],
    button: "Protect",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    name: "Pro",
    price: "₹1999",
    popular: true,
    items: [
      "Consultation",
      "Application Preparation",
      "Name search & approval",
      "Application Filing",
      "Same day Filing",
      "Online process. Save 30% cost",
      "Fast & Quick Process",
      "Free Consultations",
    ],
    button: "Protect",
    buttonClass: "bg-yellow-400 hover:bg-yellow-500 text-black",
  },
  {
    name: "Enterprise",
    price: "₹5499",
    items: [
      "Consultation",
      "Application Preparation",
      "Name search & approval",
      "Application Filing",
      "Same day Filing",
      "Online process. Save 30% cost",
      "Fast & Quick Process",
      "Free Consultations",
      "Unlimited Objection Answer",
      "Unlimited Hearing",
      "T&C Apply*",
    ],
    button: "Protect",
    buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
];

const faqs = [
  {
    question: "What does a copyright protect?",
    answer:
      "A copyright protects original works of authorship, such as literary, dramatic, musical, artistic, and certain other intellectual creations. It gives you the exclusive right to reproduce, distribute, and display your work, preventing others from copying or exploiting it without your permission.",
  },
  {
    question: "Can something be protected by both a trademark and a copyright?",
    answer:
      "Yes! In some cases, a work may qualify for both protections. For example, the artistic design of a logo could be protected by copyright, while the logo itself as a brand identifier could be protected by a trademark.",
  },
  {
    question: "Do I need to register my trademark or copyright?",
    answer: (
      <>
        <p className="mb-3">
          Registration isn't mandatory for either, but it offers significant advantages:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Stronger legal protection: A registered trademark or copyright gives you a legal presumption of ownership and makes it easier to sue infringers.</li>
          <li>Public notice: Registration puts others on notice of your claim to the IP, deterring potential infringement.</li>
          <li>Benefits in certain situations: Registration is mandatory for filing certain lawsuits and may be required for customs enforcement.</li>
        </ul>
      </>
    ),
  },
  {
    question: "What about trade secrets in India?",
    answer: (
      <>
        <p className="mb-3">Trade secrets aren't formally registered in India, but you can protect them through:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintaining confidentiality: Limit access to the information, use non-disclosure agreements (NDAs), and keep records of who has access.</li>
          <li>Marking confidential information: Label documents and materials as "confidential" or "trade secret."</li>
          <li>Taking prompt action against infringement: If your trade secret is leaked, take steps to mitigate the damage and hold the infringer accountable.</li>
        </ul>
      </>
    ),
  },
  {
    question: "I have more questions! Who can help me?",
    answer: (
      <p>
        For specific legal advice, it's always best to consult with an intellectual property attorney. They can help you determine the best way to protect your IP and guide you through the registration process.
        <br /><br />
        At IPR Veda, We have experienced attorneys that have been successful in getting even hard to get trademarks.
        <br /><br />
        They have trademarked for top companies in India. Contact to discuss about yours today!
      </p>
    ),
  },
];

function ServiceCard({ title, description, href, icon }) {
  return (
    <div className="border border-gray-200 rounded-lg flex justify-center p-6 h-full">
      <div>
        <div className="w-12 h-12 rounded-xl bg-gray-800 text-white flex items-center justify-center mb-6">
          {icon}
        </div>
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-gray-500 mb-3">{description}</p>
        <a className="text-sm font-medium inline-flex items-center gap-1" href={href}>
          Learn More&nbsp;
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeGuide, setActiveGuide] = useState(4);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
     
<Header/>
      <div className="text-center mt-12" id="social-proof-wrapper">
        <p className="mb-4 text-[1.6rem]">
          Our Expert attorneys have Trademarked for&nbsp;
          <span className="bg-yellow-400 p-1"><strong>100+</strong></span>
          &nbsp;of the best companies in India.
        </p>
 <div className="w-full overflow-hidden">
  <div className="flex w-max animate-scroll">

    {/* First set */}
    <div className="flex shrink-0">
      {brandImages.map((image, index) => (
        <img
          key={`brand-${index}`}
          src={image}
          alt="Brand"
          className="mx-6 w-[75px] h-[60px] object-contain shrink-0"
        />
      ))}
    </div>

    
    <div className="flex shrink-0">
      {brandImages.map((image, index) => (
        <img
          key={`brand-copy-${index}`}
          src={image}
          alt="Brand"
          className="mx-6 w-[75px] h-[60px] object-contain shrink-0"
        />
      ))}
    </div>

  </div>
</div>
      </div>

  <section>
  <div className="max-w-6xl mx-auto my-20 py-16 px-6 bg-brand-light rounded-brand-xl overflow-hidden border border-brand-border/30">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-brand-dark">
        How it Works?
      </h2>
      <p className="text-gray-500 mt-3 text-lg">
        See the steps involved and understand the process&nbsp;
      </p>
    </div>
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-brand-border/40 -z-0" />

      {[
        ["Trademark Search", "Done same day or within 12 hours"],
        ["Application filling.", "Start using TM Mark. e.g YourBrand™"],
        ["3 - 8 Months Period", "TM&nbsp;Registration Certificate"],
      ].map(([title, text], index) => (
        <div key={title} className="relative z-10 flex flex-col items-center text-center group">
          <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-light shadow-brand-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-accent group-hover:border-brand-accent">
            <span className="text-2xl font-bold text-brand-primary group-hover:text-brand-dark transition-colors">
              {index + 1}
            </span>
          </div>
          <div className="bg-white p-6 rounded-brand-lg shadow-sm border border-brand-border/20 hover:shadow-brand transition-shadow duration-300 w-full h-full">
            <h4 className="text-xl font-heading font-semibold text-brand-dark mb-3">
              {title}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

     <section className="max-w-6xl mx-auto my-20 mt-[-20px] md:mt-[-35px] py-16 px-6">
  <h1 className="mb-12 text-4xl font-heading font-bold text-brand-dark">
    Quick Guides
  </h1>

  <div className="flex flex-col md:flex-row items-start gap-8">
    
    {/* Tab Buttons */}
    <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 md:min-w-[200px]">
      {guides.map((guide) => {
        const isActive = activeGuide === guide.id;
        return (
          <button
            key={guide.id}
            type="button"
            onClick={() => setActiveGuide(guide.id)}
            className={`text-left px-5 py-3 rounded-brand-lg whitespace-nowrap md:whitespace-normal transition-all duration-300 border ${
              isActive
                ? "bg-brand-primary text-white border-brand-primary shadow-brand font-medium"
                : "bg-white text-gray-600 border-gray-200 hover:border-brand-border hover:text-brand-primary hover:bg-brand-light"
            }`}
          >
            {guide.title}
          </button>
        );
      })}
    </div>

    {/* Content Area */}
    <div className="w-full bg-white p-6 md:p-8 rounded-brand-xl border border-gray-100 shadow-brand-sm text-gray-700 leading-relaxed animate-fade-in">
      {guides.find((guide) => guide.id === activeGuide)?.content}
    </div>
  </div>
</section>

     <section className="mt-[-60px] md:mt-[-80px]">
  <div className="max-w-6xl mx-auto pt-0 pb-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Trademark Card */}
      <div className="group border border-gray-200 rounded-brand-lg bg-white p-6 h-full transition-all duration-300 hover:shadow-brand hover:border-brand-border hover:-translate-y-1">
        <div>
          <div className="w-12 h-12 rounded-brand bg-brand-light text-brand-primary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white font-bold">
            TM
          </div>
          <h4 className="font-heading font-bold text-xl text-brand-dark mb-2">
            Trademark
          </h4>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Your brand's shield: Distinctive signs protecting your ideas from copycats.
          </p>
          <a
            className="text-sm font-medium inline-flex items-center gap-1 text-brand-primary transition-colors duration-300 group-hover:text-brand-hover"
            href="trademark"
          >
            Learn More&nbsp;
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Copyright Card */}
      <div className="group border border-gray-200 rounded-brand-lg bg-white p-6 h-full transition-all duration-300 hover:shadow-brand hover:border-brand-border hover:-translate-y-1">
        <div>
          <div className="w-12 h-12 rounded-brand bg-brand-light text-brand-primary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white font-bold">
            ©
          </div>
          <h4 className="font-heading font-bold text-xl text-brand-dark mb-2">
            Copyright
          </h4>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Your creation's shield: Protects your original work from unauthorized borrowing.
          </p>
          <a
            className="text-sm font-medium inline-flex items-center gap-1 text-brand-primary transition-colors duration-300 group-hover:text-brand-hover"
            href="copyright"
          >
            Learn More&nbsp;
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Patent Card */}
      <div className="group border border-gray-200 rounded-brand-lg bg-white p-6 h-full transition-all duration-300 hover:shadow-brand hover:border-brand-border hover:-translate-y-1">
        <div>
          <div className="w-12 h-12 rounded-brand bg-brand-light text-brand-primary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white font-bold">
            P
          </div>
          <h4 className="font-heading font-bold text-xl text-brand-dark mb-2">
            Patent
          </h4>
          <p className="text-gray-500 mb-4 leading-relaxed">
            Copy my invention? Not on my patent! It's your brainchild, legally protected.
          </p>
          <a
            className="text-sm font-medium inline-flex items-center gap-1 text-brand-primary transition-colors duration-300 group-hover:text-brand-hover"
            href="patent"
          >
            Learn More&nbsp;
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

    <section className="mt-[-60px] md:mt-[-80px]">
  <div className="max-w-6xl mx-auto py-20 px-6">
    
    {/* Top Heading Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 className="text-5xl font-heading font-bold pb-6 mb-5 text-brand-dark">
          Expert IP protection in&nbsp;<span className="underline decoration-4 underline-offset-4 decoration-brand-accent">India</span>
        </h3>
      </div>
      
    </div>

    {/* Bottom Content Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
      
      {/* Left: Feature Cards */}
      <div className="flex justify-center md:justify-start items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="group bg-white p-5 rounded-brand-lg border border-gray-100 shadow-brand-sm transition-all duration-300 hover:shadow-brand hover:-translate-y-1 hover:border-brand-border text-center md:text-left">
            <h5 className="font-heading font-bold text-brand-dark">Trademark Titans</h5>
            <p className="text-gray-500 my-3 leading-relaxed">Secure your brand, logo, and voice in India - trademark search, registration, and defense under one roof.</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-5 rounded-brand-lg border border-gray-100 shadow-brand-sm transition-all duration-300 hover:shadow-brand hover:-translate-y-1 hover:border-brand-border text-center md:text-left">
            <h5 className="font-heading font-bold text-brand-dark">Copyright Champions</h5>
            <p className="text-gray-500 my-3 leading-relaxed">From novels to melodies, safeguard your creations with comprehensive copyright registration and fearless protection.</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-5 rounded-brand-lg border border-gray-100 shadow-brand-sm transition-all duration-300 hover:shadow-brand hover:-translate-y-1 hover:border-brand-border text-center md:text-left">
            <h5 className="font-heading font-bold text-brand-dark">Patent Powerhouse</h5>
            <p className="text-gray-500 my-3 leading-relaxed">Unlock exclusive rights to your inventions - navigate the intricacies of Indian patent law with our expert guidance.</p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white p-5 rounded-brand-lg border border-gray-100 shadow-brand-sm transition-all duration-300 hover:shadow-brand hover:-translate-y-1 hover:border-brand-border text-center md:text-left">
            <h5 className="font-heading font-bold text-brand-dark">One-Stop IP Oasis</h5>
            <p className="text-gray-500 my-3 leading-relaxed">Streamline your IP journey - trademarks, copyrights, patents, all under one roof for total peace of mind.</p>
          </div>

        </div>
      </div>

      {/* Right: Image */}
      <div className="order-first md:order-last group">
        <img 
          className="rounded-brand-lg w-full min-h-[300px] object-cover shadow-brand-sm transition-all duration-300 group-hover:shadow-brand group-hover:scale-[1.02]" 
          src={teamwork} 
          alt="" 
        />
      </div>

    </div>
  </div>
</section>

     <section className="mt-[-25px] md:mt-[-45px]">
  <div className="max-w-6xl mx-auto px-6">
    
    
    <div className="bg-brand-gradient rounded-brand-xl overflow-hidden shadow-brand-lg transition-all duration-300 hover:shadow-brand-lg hover:-translate-y-1">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        
        
        <div className="flex flex-col justify-center">
          <div className="text-white p-8 md:p-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-tight">
              Empowering innovation, safeguarding your brilliance.
            </h2>
            <p className="mb-6 text-brand-muted leading-relaxed text-lg">
              Ideas worth protecting? We empower innovation, safeguarding brilliance in India. Trademarks, patents, copyrights - your IP fortress under one roof.
            </p>
            <div className="my-4">
              <a 
                className="inline-flex items-center bg-brand-accent text-brand-dark px-6 py-3 rounded-brand-md font-semibold shadow-brand-sm transition-all duration-300 hover:bg-brand-accent hover:shadow-brand hover:scale-105 mr-2 mt-2" 
                href="tel:+91 8506059559"
              >
                ☎ 85060-59559
              </a>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-first md:order-last min-h-[250px] flex items-center justify-center p-6 md:p-0">
          <img 
            className="w-full h-full max-h-[350px] object-contain transition-transform duration-500 hover:scale-105" 
            src={webDevelopment} 
            alt="" 
          />
        </div>

      </div>
    </div>

  </div>
</section>

      <section className=" mt-[-10px] md:mt-[-18px] py-20 bg-brand-light/30">
  <div className="max-w-6xl mx-auto py-8 px-6">
    
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center text-brand-dark">
      Protect Your Passion, Not Your Wallet: Affordable Trademarks for&nbsp;
      <span className="underline decoration-4 underline-offset-4 decoration-brand-accent">Every Dream</span>
    </h2>
    <p className="text-gray-500 text-center mb-12 px-2 md:px-12 leading-relaxed max-w-3xl mx-auto">
      Ideas worth guarding shouldn't break the bank. Our pocket-friendly trademarks empower every entrepreneur and artist to build a legacy.
    </p>

    {/* Plans Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-brand-xl h-full bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-brand ${
            plan.popular
              ? "border-2 border-brand-accent shadow-brand-lg"
              : "border border-gray-200 shadow-brand-sm hover:border-brand-border"
          }`}
        >
          {/* Most Popular Badge */}
          {plan.popular && (
            <span className="absolute top-0 right-0 bg-brand-accent text-brand-dark font-semibold rounded-bl-brand-xl rounded-tr-brand-xl px-4 py-1.5 text-xs uppercase tracking-wider shadow-sm">
              Most Popular
            </span>
          )}

          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              {/* Plan Name */}
              <h6 className="font-heading font-bold text-gray-500 uppercase tracking-wide text-sm">
                {plan.name}
              </h6>

              {/* Price */}
              <h4 className="text-5xl font-heading font-bold mb-6 text-brand-dark">
                {plan.price}
              </h4>

              {/* Features List */}
              <ul className="mb-6 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <span className="mr-3 w-5 h-5 rounded-full bg-brand-light text-brand-primary flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <a
              className={`w-full text-center rounded-brand-md px-4 py-3 font-medium transition-all duration-300 hover:shadow-brand ${plan.buttonClass}`}
              href="#"
            >
              {plan.button}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    <section className="py-20 bg-brand-light/30">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Grid Layout: Left (Heading + FAQ + AI) | Right (Form) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
      
      {/* ================= LEFT SIDE: Heading + FAQ + AI Guide ================= */}
      <div className="order-2 md:order-1">
        
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-heading font-bold mb-4 text-brand-dark">
            Got any <span className="underline decoration-4 underline-offset-4 decoration-brand-accent">questions</span>?
          </h2>
          <p className="text-gray-500">Our team is always here to help. Send us a message and we'll get back to you shortly.</p>
        </div>

        {/* FAQ Section */}
        <div className="mb-10">
          <div className="mb-6">
            <h2 className="text-3xl font-heading font-bold mb-3 text-brand-dark">
              <span className="pb-2 underline decoration-4 underline-offset-4 decoration-brand-accent">FAQ</span>
            </h2>
            <p className="text-gray-500">Your Questions Answered: A Guide to IPR</p>
          </div>

          <div className="text-gray-500">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={faq.question} 
                  className="border-b border-gray-200 transition-all duration-300 hover:border-brand-border"
                >
                  <h2>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full text-left py-4 flex justify-between items-center font-medium text-gray-700 transition-colors duration-300 hover:text-brand-primary group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {faq.question}
                      </span>
                      <span className="text-xl text-brand-primary">{isOpen ? "−" : "+"}</span>
                    </button>
                  </h2>
                  {isOpen && (
                    <div className="pb-4 leading-7 text-gray-600 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Guide Button */}
        <div>
          <button 
            className="bg-gray-200 text-gray-500 px-5 py-2.5 rounded-brand-md cursor-not-allowed font-medium" 
            type="button" 
            disabled
          >
            AI Powered Complete IPR Guide
          </button>
          <p className="mt-3 text-gray-400 text-sm">Coming your way soon</p>
        </div>
      </div>

      {/* ================= RIGHT SIDE: Form ================= */}
      <div className="order-1 md:order-2">
        <div className="w-full">
          {/* Form Card with Hover Popup */}
          <form 
            className="bg-white p-6 md:p-8 rounded-brand-xl border border-gray-100 shadow-brand-sm transition-all duration-300 hover:shadow-brand hover:-translate-y-1" 
            method="post"
          >
            <div className="mb-5">
              <input 
                className="w-full px-4 py-3 rounded-brand-md border border-gray-300 outline-none transition-all duration-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary hover:border-brand-border" 
                type="text" 
                id="name-1" 
                name="name" 
                placeholder="Name" 
              />
            </div>
            <div className="mb-5">
              <input 
                className="w-full px-4 py-3 rounded-brand-md border border-gray-300 outline-none transition-all duration-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary hover:border-brand-border" 
                type="email" 
                id="email-1" 
                name="email" 
                placeholder="Email" 
              />
            </div>
            <div className="mb-5">
              <textarea 
                className="w-full px-4 py-3 rounded-brand-md border border-gray-300 outline-none transition-all duration-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary hover:border-brand-border resize-none" 
                id="message-1" 
                name="message" 
                rows="5" 
                placeholder="Message" 
              />
            </div>
            <div>
              <button 
                className="w-full bg-brand-primary hover:bg-brand-hover text-white shadow-brand-sm hover:shadow-brand block rounded-brand-md px-4 py-3 font-medium transition-all duration-300" 
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>

      

      <section className="py-6">
        <div className="w-full bg-blue-600">
          <div className="text-white bg-blue-600 border rounded-none flex flex-col lg:flex-row justify-between py-6 md:py-8 px-6 md:px-10 max-w-6xl mx-auto">
            <div className="pb-2">
              <h2 className="font-bold text-2xl text-white mb-2">Not sure which plan suits you?</h2>
              <p className="mb-0">Consult with our Trademark, Patent or Copyright Expert.</p>
            </div>
            <div className="my-2">
              <a className="inline-block bg-white text-blue-600 text-lg py-2 px-6 rounded-md" href="contact">
                Talk to Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
