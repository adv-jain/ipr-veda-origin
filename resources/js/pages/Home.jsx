import React, { useState } from "react";
import webDevelopment from "../../../config/assets/img/illustrations/web-development.svg";
import clipboard1 from "../../../config/assets/img/clipboard-image-1.png";
import clipboard2 from "../../../config/assets/img/clipboard-image-2.png";
import clipboard3 from "../../../config/assets/img/clipboard-image-3.png";
import clipboard4 from "../../../config/assets/img/clipboard-image-4.png";
import clipboard5 from "../../../config/assets/img/clipboard-image-5.png";
import clipboard6 from "../../../config/assets/img/clipboard-image-6.png";
import clipboard7 from "../../../config/assets/img/clipboard-image-7.png";
import clipboard8 from "../../../config/assets/img/clipboard-image-8.png";
import clipboard9 from "../../../config/assets/img/clipboard-image.png";
import Header from "../components/Header";
import teamwork from "../../../config/assets/img/illustrations/teamwork.svg";
import HomeO from "../../../config/assets/img/homee1.png"
import HomeT from "../../../config/assets/img/home2.png"

const brandImages = [
  clipboard1, clipboard2, clipboard3, clipboard4, clipboard5,
  clipboard6, clipboard7, clipboard8, clipboard9,
];

const guides = [
  {
    id: 1,
    title: "What is a Trademark?",
    content: (
      <>
        <p className="mb-4 text-lg">
          A trademark is a legally registered symbol, word, phrase, or design that uniquely identifies your business and distinguishes it from competitors. It serves as your brand's legal shield, protecting your reputation and ensuring customers can trust the source of your products or services.
        </p>
        <p className="mb-4 text-lg">
          When you see the Nike "Swoosh" or the McDonald's "Golden Arches," you instantly recognize the quality and origin of the product. A trademark ensures no one else can profit from your brand's hard-earned reputation or confuse your customers with imitation products.
        </p>
        <h3 className="text-xl font-semibold mb-3 text-brand-dark">Well-Known Trademarks You Recognize:</h3>
        <ul className="mt-4 space-y-4">
          <li className="flex flex-col sm:flex-row sm:items-center gap-4">
            <img src="/assets/img/mcdonald%20imgage.jpg" alt="McDonald's Golden Arches Logo" className="w-16 h-16 object-contain rounded-lg" />
            <span className="text-gray-600">
              <strong>McDonald's Golden Arches:</strong> This iconic symbol instantly tells customers they're getting the same quality and experience worldwide.
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              ✓
            </div>
            <span className="text-gray-600">
              <strong>Your Brand:</strong> With trademark registration, your logo and brand name receive the same legal protection and recognition.
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
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1 text-brand-dark">Distinguishing Your Business</h3>
          <p className="text-gray-600">Trademarks make it easier for customers to find and recognize your business in a crowded marketplace.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-brand-dark">Valuable Asset</h3>
          <p className="text-gray-600">As your business grows, so does the value of your trademark. It can be bought, sold, licensed, or used to secure a loan.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-brand-dark">Protection Against Counterfeits</h3>
          <p className="text-gray-600">A trademark helps consumers distinguish your products and protects you against counterfeit products.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-brand-dark">Exclusive Rights</h3>
          <p className="text-gray-600">A trademark gives you the exclusive right to use your mark and helps prevent competitors from using a similar mark.</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Who Can Apply?",
    content: (
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>Individuals</li>
        <li>
          Businesses:
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Sole proprietorships</li>
            <li>Partnerships</li>
            <li>Limited Liability Companies (LLCs)</li>
            <li>Corporations (both Indian and foreign)</li>
            <li>Trusts & Societies</li>
          </ul>
        </li>
        <li>Joint Ownership</li>
      </ul>
    ),
  },
  {
    id: 4,
    title: "Required Documents",
    content: (
      <ul className="list-disc pl-6 space-y-3 text-gray-600">
        <li><span className="font-semibold text-brand-dark">Applicant information</span></li>
        <li><span className="font-semibold text-brand-dark">Goods and services:</span> A clear description (use the Nice Classification system).</li>
        <li>
          <span className="font-semibold text-brand-dark">Trademark information:</span>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Clear description (logo, word, phrase, sound, etc.)</li>
            <li>Visual representation (black and white image)</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold text-brand-dark">Documents:</span>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Completed Trademark application form</li>
            <li>Proof of identity (Passport, ID, or Incorporation certificate)</li>
            <li>Proof of address (Utility bills, bank statements)</li>
          </ul>
        </li>
      </ul>
    ),
  },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

const plans = [
  {
    name: "Standard",
    price: "₹999",
    subtitle: "Perfect for startups",
    items: [
      "Initial consultation with IP expert",
      "Trademark application preparation",
      "Comprehensive name search & approval",
      "Government application filing",
      "Application tracking & updates",
      "Email support"
    ],
    button: "Get Protected",
    buttonClass: "bg-brand-primary hover:bg-brand-hover text-white",
  },
  {
    name: "Pro",
    price: "₹1999",
    subtitle: "Best for growing brands",
    popular: true,
    items: [
      "Everything in Standard",
      "Same-day filing (24-hour turnaround)",
      "Priority phone & email support",
      "First objection response included",
      "Legal consultation (2 sessions)",
      "Expedited processing"
    ],
    button: "Get Protected",
    buttonClass: "bg-brand-accent hover:bg-yellow-500 text-brand-dark",
  },
  {
    name: "Enterprise",
    price: "5499",
    subtitle: "For established businesses",
    items: [
      "Everything in Pro",
      "Dedicated IP attorney assignment",
      "Unlimited objection responses",
      "Hearing representation included",
      "Portfolio management",
      "Annual trademark monitoring",
      "Priority legal support"
    ],
    button: "Get Protected",
    buttonClass: "bg-brand-primary hover:bg-brand-hover text-white",
  },
];

const faqs = [
  {
    question: "What does a copyright protect?",
    answer: "A copyright protects original works of authorship, such as literary, dramatic, musical, artistic, and certain other intellectual creations. It gives you the exclusive right to reproduce, distribute, and display your work.",
  },
  {
    question: "Can something be protected by both a trademark and a copyright?",
    answer: "Yes! For example, the artistic design of a logo could be protected by copyright, while the logo itself as a brand identifier could be protected by a trademark.",
  },
  {
    question: "Do I need to register my trademark or copyright?",
    answer: "Registration isn't mandatory, but it offers significant advantages: stronger legal protection, public notice to deter infringement, and the ability to file certain lawsuits.",
  },
  {
    question: "What about trade secrets in India?",
    answer: "Trade secrets aren't formally registered in India, but you can protect them by maintaining confidentiality, using NDAs, marking documents as 'confidential', and taking prompt action against infringement.",
  },
];

export default function Home() {
  const [activeGuide, setActiveGuide] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="font-sans text-gray-700 bg-white">
      <Header />

      {/* ==========================================
          PHASE 2: HERO SECTION (Above the Fold)
          Goal: Answer "What is this?" and "What do I do?" in 3 seconds.
      ========================================== */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-dark text-sm font-semibold mb-6">
              🇮🇳 Trusted by 100+ Top Companies in India
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark leading-tight mb-6">
              Protect Your Brand. <br />
              <span className="text-brand-primary">Secure Your Future.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Fast, affordable, and expert Intellectual Property protection. We handle Trademarks, Copyrights, and Patents so you can focus on building your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div>
                <a href="#pricing" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-white bg-brand-primary rounded-brand-md hover:bg-brand-hover transition-all duration-300 shadow-lg hover:shadow-brand hover:-translate-y-0.5">
                  Start Your Registration
                </a>
                <p className="text-xs text-gray-500 mt-2 text-center sm:text-left">Takes 2 minutes • No payment upfront</p>
              </div>
              <div>
                <a href="tel:+918506059559" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold text-brand-dark bg-white border-2 border-gray-200 rounded-brand-md hover:border-brand-primary hover:text-brand-primary transition-all duration-300">
                  ☎ Talk to an Expert
                </a>
                <p className="text-xs text-gray-500 mt-2 text-center sm:text-left">Free consultation • Response in 24hrs</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={HomeO} 
              alt="Team collaborating on intellectual property protection" 
              className="w-full h-auto rounded-brand-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500" 
            />
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: SOCIAL PROOF (Trust Bar)
          Goal: Instant credibility right after the hero claim.
      ========================================== */}
      <section className="py-10 border-y border-gray-100 bg-white overflow-hidden" aria-label="Trusted by leading brands">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Trusted by innovative businesses across India</p>
        <div className="flex w-max animate-scroll mx-auto">
          <div className="flex shrink-0">
            {brandImages.map((image, index) => (
              <img key={`brand-${index}`} src={image} alt="Partner brand logo" className="mx-8 w-20 h-16 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            ))}
          </div>
          <div className="flex shrink-0">
            {brandImages.map((image, index) => (
              <img key={`brand-copy-${index}`} src={image} alt="Partner brand logo" className="mx-8 w-20 h-16 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: SERVICES (What We Do)
          Goal: Clearly define the 3 core offerings immediately.
      ========================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Comprehensive IP Protection</h2>
            <p className="text-lg text-gray-600">Everything you need to safeguard your ideas, brand, and inventions under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "TM", title: "Trademark", desc: "Your brand's shield: Distinctive signs protecting your ideas from copycats.", href: "/trademark" },
              { icon: "©", title: "Copyright", desc: "Your creation's shield: Protects your original work from unauthorized borrowing.", href: "/copyright" },
              { icon: "P", title: "Patent", desc: "Copy my invention? Not on my patent! Your brainchild, legally protected.", href: "/patent" },
            ].map((service) => (
              <a key={service.title} href={service.href} className="group block border border-gray-200 rounded-brand-xl bg-white p-8 h-full transition-all duration-300 hover:shadow-brand hover:border-brand-primary/30 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center mb-6 text-2xl font-bold transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-brand-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <span className="text-sm font-semibold text-brand-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                  Learn More <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: HOW IT WORKS
          Goal: Reduce friction by showing the process is simple (3 steps).
      ========================================== */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get your IP protected in 3 simple, stress-free steps.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-brand-border/40 -z-0" aria-hidden="true" />

            {[
              { step: "1", title: "Trademark Search", text: "Done same day or within 12 hours to ensure your name is available." },
              { step: "2", title: "Application Filing", text: "We prepare and file everything. You can start using the ™ mark immediately." },
              { step: "3", title: "Registration Certificate", text: "After a 3-8 month period, receive your official TM Registration Certificate." },
            ].map((item, index) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-light shadow-md flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white">
                  <span className="text-2xl font-bold text-brand-primary transition-colors duration-300 group-hover:text-white">
                    {item.step}
                  </span>
                </div>
                <div className="bg-white p-8 rounded-brand-xl shadow-sm border border-gray-100 hover:shadow-brand transition-shadow duration-300 w-full h-full">
                  <h4 className="text-xl font-heading font-semibold text-brand-dark mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: VALUE PROPOSITION (Why Choose Us)
      ========================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                Expert IP Protection in <span className="text-brand-primary underline decoration-4 underline-offset-4 decoration-brand-accent/50">India</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10">We don't just file paperwork. We build a fortress around your intellectual property.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "End-to-End Trademark Protection", desc: "Secure your brand, logo, and voice with comprehensive registration and legal defense." },
                  { title: "Comprehensive Copyright Registration", desc: "Safeguard your software code, literary works, and creative assets from unauthorized use." },
                  { title: "Strategic Patent Filing", desc: "Navigate the complexities of Indian patent law and secure exclusive rights to your inventions." },
                  { title: "Unified IP Management", desc: "Streamline your entire intellectual property portfolio under one expert team." },
                ].map((feature) => (
                  <div key={feature.title} className="bg-brand-light/30 p-6 rounded-brand-lg border border-gray-100 hover:border-brand-primary/30 transition-all duration-300">
                    <h4 className="font-heading font-bold text-brand-dark mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={webDevelopment} 
                alt="Illustration of secure digital development" 
                className="w-full h-auto rounded-brand-xl shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: PRICING (The Conversion Engine)
      ========================================== */}
      <section id="pricing" className="py-20 lg:py-28 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-4">
              Protect Your Passion, <br />Not Your Wallet
            </h2>
            <p className="text-lg text-gray-600">Affordable, transparent pricing for every dream. No hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-brand-xl bg-white transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-brand-accent shadow-xl scale-105 z-10"
                    : "border border-gray-200 shadow-sm hover:shadow-brand"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-dark font-bold rounded-full px-4 py-1 text-xs uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                )}

                <div className="p-8 flex flex-col h-full">
                  <h3 className="font-heading font-bold text-gray-500 uppercase tracking-wide text-sm mb-2">{plan.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-heading font-bold text-brand-dark">{plan.price}</span>
                    {plan.name !== "Enterprise" && <span className="text-gray-500 ml-1">/application</span>}
                  </div>

                  <ul className="mb-8 space-y-4 flex-grow">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start text-gray-700">
                        <span className="mr-3 mt-0.5 w-5 h-5 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                          <CheckIcon />
                        </span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <a
                      href="/contact"
                      className={`w-full text-center rounded-brand-md px-4 py-3.5 font-semibold transition-all duration-300 hover:shadow-md block ${plan.buttonClass}`}
                    >
                      {plan.button}
                    </a>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      {plan.name === "Standard" && "Basic protection for new businesses"}
                      {plan.name === "Pro" && "Includes priority support & faster filing"}
                      {plan.name === "Enterprise" && "Full legal representation included"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: EDUCATION & OBJECTION HANDLING (Guides + FAQ)
      ========================================== */}
    <section className="py-20 lg:py-28 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
        Quick IP Guides
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Everything you need to know about protecting your intellectual property.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {guides.map((guide) => {
        const isActive = activeGuide === guide.id;
        const icons = {
          1: "🛡️",
          2: "❓",
          3: "👤",
          4: "",
        };

        return (
          <div
            key={guide.id}
            onClick={() => setActiveGuide(guide.id)}
            className={`cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 ${
              isActive
                ? "bg-brand-primary border-brand-primary shadow-2xl scale-105"
                : "bg-white border-gray-200 hover:border-brand-primary hover:shadow-lg"
            }`}
          >
            <div className="text-4xl mb-4">{icons[guide.id]}</div>
            <h3 className={`font-bold text-lg mb-2 ${isActive ? "text-white" : "text-brand-dark"}`}>
              {guide.title}
            </h3>
            <p className={`text-sm ${isActive ? "text-white/90" : "text-gray-600"}`}>
              Click to learn more →
            </p>
          </div>
        );
      })}
    </div>

    {/* Expanded Content */}
    {activeGuide && (
      <div className="mt-12 bg-brand-light/30 rounded-2xl p-8 md:p-12 border border-gray-200 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {guides.find((guide) => guide.id === activeGuide)?.content}
        </div>
      </div>
    )}
  </div>
</section>


      {/* ==========================================
          FAQ & CONTACT SECTION
          Goal: Handle objections and capture leads.
      ========================================== */}
      <section className="py-20 lg:py-28 bg-brand-light/30">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              We're Here to Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Got questions about IP protection? Check our FAQs or reach out to our experts directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* ================= LEFT: FAQ ACCORDION ================= */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">Frequently Asked Questions</h3>
              <p className="text-gray-600 mb-8">Quick answers to the most common questions we get.</p>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div 
                      key={index} 
                      className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                        isOpen 
                          ? "bg-white border-brand-primary/30 shadow-md" 
                          : "bg-white border-gray-200 hover:border-brand-primary/50"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-brand-dark transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="pr-4">{faq.question}</span>
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen ? "bg-brand-primary text-white rotate-45" : "bg-brand-light text-brand-primary"
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </span>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed animate-fade-in border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= RIGHT: CONTACT FORM ================= */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10 relative overflow-hidden">
                
                {/* Decorative background blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Form Header Icon */}
                  <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">Still have questions?</h3>
                  <p className="text-gray-600 mb-8">Send us a message and our IP experts will get back to you within 24 hours.</p>
                  
                  <form className="space-y-5" method="post">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input 
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all bg-gray-50 focus:bg-white" 
                        type="text" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input 
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all bg-gray-50 focus:bg-white" 
                        type="email" 
                        placeholder="john@company.com" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">How can we help?</label>
                      <textarea 
                        id="message"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all bg-gray-50 focus:bg-white resize-none" 
                        rows="4" 
                        placeholder="Tell us about your IP needs..." 
                        required 
                      />
                    </div>
                    
                    <button 
                      className="w-full bg-brand-primary hover:bg-brand-hover text-white font-semibold py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex justify-center items-center gap-2" 
                      type="submit"
                    >
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>

                  <p className="text-center text-xs text-gray-400 mt-6">
                    We respect your privacy. Your information is safe with us.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 2: FINAL CATCH-ALL CTA
          Goal: Capture users who scrolled to the bottom but haven't converted.
      ========================================== */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Not sure which plan suits you?</h2>
          <p className="text-gray-300 text-lg mb-8">Consult with our Trademark, Patent, or Copyright Expert today. It's free.</p>
          <a href="/contact" className="inline-block bg-brand-accent hover:bg-yellow-400 text-brand-dark text-lg font-bold py-4 px-8 rounded-brand-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Talk to an Expert Now
          </a>
          <p className="text-xs text-gray-400 mt-3">No obligation • Free consultation • Expert advice</p>
        </div>
      </section>

      {/* Footer would go here */}
    </main>
  );
}