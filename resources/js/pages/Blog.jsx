import React, { useState, useMemo } from 'react';
import { 
  Search, Calendar, User, Clock, ArrowRight, Tag, 
  TrendingUp, Mail, ChevronRight, BookOpen, Shield, 
  Lightbulb, FileText, Scale, Eye, CheckCircle2, 
  ArrowUpRight, Sparkles, Quote
} from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = {
    id: 'feat-1',
    category: 'Trademarks',
    title: 'The Ultimate Guide to Trademark Registration in India (2026 Edition)',
    excerpt: 'Navigating the Indian Trademark Registry can be complex. From conducting a comprehensive public search to overcoming examination objections, this guide covers every step, timeline, and cost for startups and enterprises.',
    author: 'Adv. Rohan Mehta',
    date: 'Sep 28, 2026',
    readTime: '12 min read',
    icon: Shield,
    gradient: 'from-brand-primary to-brand-darker'
  };

  const blogPosts = [
    {
      id: 1,
      category: 'Patents',
      title: 'Patent vs. Copyright: What Actually Protects Your Software Code?',
      excerpt: 'Many tech founders confuse patent and copyright protection for their software. Learn the critical differences and how to build a robust IP moat around your SaaS product.',
      author: 'Priya Sharma',
      date: 'Sep 25, 2026',
      readTime: '8 min read',
      icon: Lightbulb,
      gradient: 'from-blue-600 to-brand-primary'
    },
    {
      id: 2,
      category: 'Legal Guides',
      title: 'How to Respond to a Trademark Objection (Examination Report)',
      excerpt: 'Received an "Objected" status? Don\'t panic. A trademark objection is not a rejection. Here is a step-by-step legal framework to draft a winning reply.',
      author: 'Vikram Singh',
      date: 'Sep 22, 2026',
      readTime: '10 min read',
      icon: Scale,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 3,
      category: 'Copyrights',
      title: 'Copyright Essentials for YouTubers and Content Creators',
      excerpt: 'Protect your videos, thumbnails, and scripts from being stolen. Understand fair use, copyright strikes, and how to monetize your creative work legally.',
      author: 'Ananya Desai',
      date: 'Sep 18, 2026',
      readTime: '6 min read',
      icon: FileText,
      gradient: 'from-red-500 to-rose-600'
    },
    {
      id: 4,
      category: 'Startups',
      title: 'Top 5 IP Mistakes Startups Make Before Seeking Funding',
      excerpt: 'Investors conduct strict IP due diligence. Discover the most common intellectual property blunders early-stage startups make and how to fix them before Series A.',
      author: 'Rohan Mehta',
      date: 'Sep 15, 2026',
      readTime: '7 min read',
      icon: TrendingUp,
      gradient: 'from-brand-primary to-indigo-600'
    },
    {
      id: 5,
      category: 'AI & Tech',
      title: 'The Future of AI and Intellectual Property Laws in India',
      excerpt: 'Can an AI own a patent? Who owns the copyright of AI-generated art? We analyze the latest judicial trends and the Indian Copyright Office\'s stance.',
      author: 'Dr. Arjun Patel',
      date: 'Sep 10, 2026',
      readTime: '11 min read',
      icon: Eye,
      gradient: 'from-brand-darker to-purple-600'
    },
    {
      id: 6,
      category: 'Legal Guides',
      title: 'NDA vs. Trade Secret: How to Protect Your Business Ideas',
      excerpt: 'Should you rely on a Non-Disclosure Agreement or classify your information as a Trade Secret? We break down the legal enforceability of both.',
      author: 'Vikram Singh',
      date: 'Sep 05, 2026',
      readTime: '9 min read',
      icon: Shield,
      gradient: 'from-brand-dark to-gray-800'
    }
  ];

  const trendingPosts = [
    { title: 'Understanding the Madrid Protocol for Global Trademarks', views: '12.5K' },
    { title: 'Copyright Infringement: When to Send a Cease & Desist', views: '9.2K' },
    { title: 'How to Calculate the Valuation of Your IP Assets', views: '8.7K' },
    { title: 'Design Registration vs. Trademark: A Complete Comparison', views: '7.1K' }
  ];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <main className="font-sans text-gray-700 bg-white">
      
      {/* ==========================================
          PHASE 1: HERO SECTION
          Goal: Establish authority and invite exploration
      ========================================== */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-primary pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4 text-brand-accent" />
            The IPRveda Knowledge Hub
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight leading-tight">
            Master Your <br className="hidden sm:block" />
            <span className="text-brand-accent">Intellectual Property</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Actionable insights, legal updates, and strategic guides to help startups, creators, and enterprises protect their most valuable assets.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, guides, and legal updates..."
              className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-primary/30 shadow-xl text-lg transition-all"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* ==========================================
            PHASE 2: FEATURED POST
            Goal: Highlight the most important, high-value content
        ========================================== */}
        {!searchQuery && (
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-brand-accent" />
              <h2 className="text-2xl font-heading font-bold text-brand-dark">Editor's Pick</h2>
            </div>
            <div className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-brand-primary/30 transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                <div className={`bg-gradient-to-br ${featuredPost.gradient} p-12 lg:p-16 flex items-center justify-center min-h-[300px] relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  <featuredPost.icon className="w-32 h-32 text-white/90 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {featuredPost.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                    </div>
                    <button className="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all duration-300">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==========================================
            PHASE 3: MAIN CONTENT LAYOUT (Grid + Sidebar)
        ========================================== */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left: Blog Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-heading font-bold text-brand-dark">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Articles'}
              </h2>
              <span className="text-sm text-gray-500 font-medium">{filteredPosts.length} articles</span>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => {
                  const Icon = post.icon;
                  return (
                    <article key={post.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                      <div className={`h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                        <Icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/30">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-heading font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-1 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-dark mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search terms to find what you're looking for.</p>
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="mt-12 text-center">
                <button className="px-8 py-3.5 bg-white border-2 border-gray-200 text-brand-dark font-bold rounded-xl hover:border-brand-primary hover:text-brand-primary transition-all inline-flex items-center gap-2 shadow-sm hover:shadow-md">
                  Load More Articles <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <aside className="space-y-8">
            {/* Trending Posts */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-heading font-bold text-brand-dark mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-primary" /> Trending Now
              </h3>
              <div className="space-y-5">
                {trendingPosts.map((post, idx) => (
                  <a key={idx} href="#" className="group flex items-start gap-4 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-3xl font-heading font-extrabold text-gray-200 group-hover:text-brand-primary/30 transition-colors leading-none">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-2 mb-1.5 leading-snug">
                        {post.title}
                      </h4>
                      <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
                        <Eye className="w-3 h-3" /> {post.views} views
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-darker p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">IP Legal Updates</h3>
                <p className="text-gray-200 text-sm mb-5 leading-relaxed">Join 5,000+ founders getting weekly IP news, case laws, and filing tips.</p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm text-sm"
                  />
                  <button className="w-full py-3 bg-white text-brand-dark font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm">
                    Subscribe <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-center text-gray-300 mt-2">No spam. Unsubscribe anytime.</p>
                </form>
              </div>
            </div>

            {/* Quick Links / Tags */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-heading font-bold text-brand-dark mb-5 flex items-center gap-2">
                <Tag className="w-5 h-5 text-brand-primary" /> Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Startup IP', 'SaaS Patents', 'Brand Protection', 'AI Copyright', 'Licensing', 'Trade Secrets', 'Global Filing', 'IP Valuation'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-200 hover:bg-brand-primary/10 hover:text-brand-primary hover:border-brand-primary/20 transition-all cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ==========================================
          PHASE 4: SEO / VALUE PROPOSITION SECTION
          Goal: Break up the wall of text into scannable, high-impact blocks
      ========================================== */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-dark mb-4">
              Why IP Education Matters for Modern Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              In today's knowledge-driven economy, Intellectual Property is often the most valuable asset a company owns. At <strong className="text-brand-dark">IPRveda</strong>, we believe that an informed client is an empowered client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Trademark Strategy</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A trademark protects your brand identity. Filing early prevents cybersquatting, brand dilution, and costly legal battles. Our guides cover everything from conducting a Vienna code search to responding to show-cause hearings.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">Patent Innovation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Patents grant a 20-year monopoly over your invention. However, software and business method patents face strict scrutiny in India. Learn how to draft claims that survive the "inventive step" test.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <Quote className="w-8 h-8 text-brand-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg md:text-xl font-medium text-brand-dark italic leading-relaxed">
                  "Intellectual property is the oil of the 21st century. Look at Microsoft, Google, and Amazon. They don't own oil fields; they own ideas and data."
                </p>
                <p className="text-sm text-gray-500 mt-3 font-semibold">— Industry Insight</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                The Indian IP regime is governed by distinct statutes: The Trade Marks Act (1999), The Patents Act (1970), and The Copyright Act (1957). Each act has its own procedural rules, examination criteria, and opposition mechanisms. Keeping up with amendments, such as the recent changes in the Patent Rules regarding startup fee structures, is crucial for cost-effective IP management.
              </p>
              <p>
                Securing an IP right is only the first step. The true value of IP lies in its enforcement. Whether it is sending a Cease and Desist notice to a counterfeit seller on e-commerce platforms, or filing a suit for passing off in the High Court, proactive enforcement protects your market share. We provide actionable insights on anti-counterfeiting strategies, customs recordation, and domain name dispute resolution (UDRP).
              </p>
              <p>
                We update this knowledge hub weekly with case law summaries, IPO notifications, and practical guides. Whether you are a solo founder looking to trademark your logo, or a CTO evaluating the patentability of a new algorithm, IPRveda's blog is your trusted companion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PHASE 5: FINAL CTA
      ========================================== */}
      <section className="bg-brand-dark py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need Expert Legal Advice?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Reading about IP is great, but executing it requires expertise. Let our attorneys handle your filings, objections, and litigation while you focus on building your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-hover transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              View Our Services
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Blog;