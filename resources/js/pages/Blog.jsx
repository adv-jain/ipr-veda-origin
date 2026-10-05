import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Tag, 
  TrendingUp, 
  Mail, 
  ChevronRight, 
  BookOpen, 
  Shield, 
  Lightbulb, 
  FileText, 
  Scale,
  Eye,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = {
    id: 'feat-1',
    category: 'Trademarks',
    title: 'The Ultimate Guide to Trademark Registration in India (2026 Edition)',
    excerpt: 'Navigating the Indian Trademark Registry can be complex. From conducting a comprehensive public search to overcoming examination objections, this comprehensive guide covers every step of the TM registration process, timelines, and costs involved for startups and enterprises.',
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
      excerpt: 'Many tech founders confuse patent and copyright protection for their software. Learn the critical differences, what is patentable in India, and how to build a robust IP moat around your SaaS product.',
      author: 'Priya Sharma',
      date: 'Sep 25, 2026',
      readTime: '8 min read',
      icon: Lightbulb,
      gradient: 'from-success to-brand-primary'
    },
    {
      id: 2,
      category: 'Legal Guides',
      title: 'How to Respond to a Trademark Objection (Examination Report)',
      excerpt: 'Received an "Objected" status? Don\'t panic. A trademark objection is not a rejection. Here is a step-by-step legal framework to draft a winning reply and convince the examiner.',
      author: 'Vikram Singh',
      date: 'Sep 22, 2026',
      readTime: '10 min read',
      icon: Scale,
      gradient: 'from-warning to-warning'
    },
    {
      id: 3,
      category: 'Copyrights',
      title: 'Copyright Essentials for YouTubers and Content Creators',
      excerpt: 'Protect your videos, thumbnails, and scripts from being stolen. Understand fair use, copyright strikes, and how to monetize your creative work legally without losing your channel.',
      author: 'Ananya Desai',
      date: 'Sep 18, 2026',
      readTime: '6 min read',
      icon: FileText,
      gradient: 'from-danger to-danger'
    },
    {
      id: 4,
      category: 'Startups',
      title: 'Top 5 IP Mistakes Startups Make Before Seeking Funding',
      excerpt: 'Investors conduct strict IP due diligence. Discover the most common intellectual property blunders early-stage startups make and how to fix them before your Series A round.',
      author: 'Rohan Mehta',
      date: 'Sep 15, 2026',
      readTime: '7 min read',
      icon: TrendingUp,
      gradient: 'from-brand-primary to-brand-primary'
    },
    {
      id: 5,
      category: 'AI & Tech',
      title: 'The Future of AI and Intellectual Property Laws in India',
      excerpt: 'Can an AI own a patent? Who owns the copyright of AI-generated art? We analyze the latest judicial trends and the Indian Copyright Office\'s stance on artificial intelligence.',
      author: 'Dr. Arjun Patel',
      date: 'Sep 10, 2026',
      readTime: '11 min read',
      icon: Eye,
      gradient: 'from-brand-darker to-brand-primary'
    },
    {
      id: 6,
      category: 'Legal Guides',
      title: 'NDA vs. Trade Secret: How to Protect Your Business Ideas',
      excerpt: 'Should you rely on a Non-Disclosure Agreement or classify your information as a Trade Secret? We break down the legal enforceability and practical applications of both.',
      author: 'Vikram Singh',
      date: 'Sep 05, 2026',
      readTime: '9 min read',
      icon: Shield,
      gradient: 'from-brand-dark to-brand-darker'
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
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-darker to-brand-darker pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <BookOpen className="w-4 h-4 text-brand-text" />
            <span className="text-sm font-semibold text-brand-text tracking-wide">The IPRveda Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Insights, Strategies & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-text to-brand-primary bg-clip-text text-transparent">
              Legal Updates on IP
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-brand-text max-w-2xl mx-auto mb-10 leading-relaxed">
            Stay ahead with expert articles on Trademarks, Patents, Copyrights, and the evolving landscape of Intellectual Property law in India and globally.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, guides, and legal updates..."
              className="w-full pl-14 pr-6 py-4 bg-white rounded-2xl text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:ring-4 focus:ring-brand-primary/30 shadow-xl text-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 3. Featured Post (Only show if no search is active) */}
        {!searchQuery && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-brand-primary" />
              <h2 className="text-2xl font-bold text-brand-dark">Featured Article</h2>
            </div>
            <div className="group bg-white rounded-3xl shadow-xl border border-brand-border overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2">
                <div className={`bg-gradient-to-br ${featuredPost.gradient} p-12 lg:p-16 flex items-center justify-center min-h-[300px]`}>
                  <featuredPost.icon className="w-32 h-32 text-white/90 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-brand-dark/70 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-brand-border">
                    <div className="flex items-center gap-4 text-sm text-brand-dark/50">
                      <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {featuredPost.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                    </div>
                    <button className="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. Main Content Layout (Grid + Sidebar) */}
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Left: Blog Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-brand-dark">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Articles'}
              </h2>
              <span className="text-sm text-brand-dark/50">{filteredPosts.length} articles</span>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => {
                  const Icon = post.icon;
                  return (
                    <article key={post.id} className="group bg-white rounded-2xl shadow-sm border border-brand-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                      <div className={`h-40 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                        <Icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-white/30">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-brand-dark/70 mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-brand-border text-xs text-brand-dark/50">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-brand-border">
                <Search className="w-12 h-12 text-brand-dark/30 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-dark mb-2">No articles found</h3>
                <p className="text-brand-dark/50">Try adjusting your search to find what you're looking for.</p>
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-white border-2 border-brand-border text-brand-dark font-bold rounded-xl hover:border-brand-primary hover:text-brand-primary transition-all inline-flex items-center gap-2">
                  Load More Articles <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <aside className="space-y-8">
            {/* Trending Posts */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-border">
              <h3 className="text-lg font-bold text-brand-dark mb-5 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-primary" /> Trending Now
              </h3>
              <div className="space-y-4">
                {trendingPosts.map((post, idx) => (
                  <a key={idx} href="#" className="group flex items-start gap-3 pb-4 border-b border-brand-border last:border-0 last:pb-0">
                    <span className="text-2xl font-extrabold text-brand-border group-hover:text-brand-primary/30 transition-colors">0{idx + 1}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <span className="text-xs text-brand-dark/50 flex items-center gap-1">
                        <Eye className="w-3 h-3" /> {post.views} views
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-darker p-6 rounded-2xl text-white shadow-lg">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">IP Legal Updates</h3>
              <p className="text-brand-text text-sm mb-5">Get the latest IP news, case laws, and filing tips delivered straight to your inbox weekly.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-text focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <button className="w-full py-3 bg-white text-brand-primary font-bold rounded-xl hover:bg-brand-light transition-colors flex items-center justify-center gap-2">
                  Subscribe <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Quick Links / Tags */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-border">
              <h3 className="text-lg font-bold text-brand-dark mb-5 flex items-center gap-2">
                <Tag className="w-5 h-5 text-brand-primary" /> Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Startup IP', 'SaaS Patents', 'Brand Protection', 'AI Copyright', 'Licensing', 'Trade Secrets', 'Global Filing', 'IP Valuation'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-brand-light text-brand-dark/70 text-xs font-medium rounded-lg border border-brand-border hover:bg-brand-primary/10 hover:text-brand-primary hover:border-brand-primary/20 transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 5. Massive SEO / Long-form Content Section */}
      <section className="bg-white border-t border-brand-border py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-8 text-center">
            Why Intellectual Property Education Matters for Modern Businesses
          </h2>
          
          <div className="space-y-8 text-brand-dark/70 leading-relaxed">
            <p>
              In today's knowledge-driven economy, Intellectual Property (IP) is often the most valuable asset a company owns. For startups, tech innovators, and creative professionals, understanding the nuances of Trademarks, Patents, and Copyrights is no longer optional—it is a fundamental business requirement. At <strong>IPRveda</strong>, we believe that an informed client is an empowered client. This blog serves as a comprehensive resource to demystify IP laws.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-brand-primary/10 p-6 rounded-2xl border border-brand-primary/20">
                <h3 className="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-primary" /> Trademark Strategy
                </h3>
                <p className="text-sm text-brand-primary">
                  A trademark protects your brand identity. Filing early prevents cybersquatting, brand dilution, and costly legal battles. Our guides cover everything from conducting a Vienna code search to responding to show-cause hearings.
                </p>
              </div>
              <div className="bg-success/10 p-6 rounded-2xl border border-success/20">
                <h3 className="text-xl font-bold text-brand-dark mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-success" /> Patent Innovation
                </h3>
                <p className="text-sm text-success">
                  Patents grant a 20-year monopoly over your invention. However, software and business method patents face strict scrutiny in India. Learn how to draft claims that survive the "inventive step" test.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-dark mt-10">Navigating the Indian IP Legal Framework</h3>
            <p>
              The Indian IP regime is governed by distinct statutes: The Trade Marks Act (1999), The Patents Act (1970), and The Copyright Act (1957). Each act has its own procedural rules, examination criteria, and opposition mechanisms. Keeping up with amendments, such as the recent changes in the Patent Rules regarding startup fee structures, is crucial for cost-effective IP management.
            </p>
            <p>
              Furthermore, the intersection of technology and law is creating new challenges. With the rise of Artificial Intelligence, questions regarding the copyrightability of AI-generated works and the patentability of AI-driven inventions are at the forefront of global legal debates. Our dedicated "AI & Tech" section analyzes these emerging trends and their impact on Indian creators.
            </p>

            <h3 className="text-2xl font-bold text-brand-dark mt-10">From Registration to Enforcement</h3>
            <p>
              Securing an IP right is only the first step. The true value of IP lies in its enforcement. Whether it is sending a Cease and Desist notice to a counterfeit seller on e-commerce platforms, or filing a suit for passing off in the High Court, proactive enforcement protects your market share. We provide actionable insights on anti-counterfeiting strategies, customs recordation, and domain name dispute resolution (UDRP).
            </p>
            
            <div className="bg-brand-light p-6 rounded-2xl border-l-4 border-brand-primary my-8 not-prose">
              <p className="text-brand-dark font-medium italic">
                "Intellectual property is the oil of the 21st century. Look at Microsoft, Google, and Amazon. They don't own oil fields; they own ideas and data." 
              </p>
              <p className="text-sm text-brand-dark/50 mt-2">— Industry Insight</p>
            </div>

            <p>
              We update this knowledge hub weekly with case law summaries, IPO notifications, and practical guides. Whether you are a solo founder looking to trademark your logo, or a CTO evaluating the patentability of a new algorithm, IPRveda's blog is your trusted companion in the complex world of Intellectual Property.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-brand-dark py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Need Expert Legal Advice?</h2>
          <p className="text-brand-text text-lg mb-8">
            Reading about IP is great, but executing it requires expertise. Let our attorneys handle your filings, objections, and litigation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-hover transition-colors shadow-lg flex items-center justify-center gap-2">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              View Our Services
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;