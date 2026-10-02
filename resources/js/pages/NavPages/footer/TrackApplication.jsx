import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Shield, 
  ArrowRight, 
  HelpCircle, 
  Bell, 
  Download,
  TrendingUp
} from 'lucide-react';

const TrackApplication = () => {
  const [appType, setAppType] = useState('trademark');
  const [appNumber, setAppNumber] = useState('');
  const [showMockResult, setShowMockResult] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (appNumber.trim().length > 0) {
      setShowMockResult(true);
    }
  };

  const statuses = [
    {
      title: 'Formalities Check',
      icon: FileText,
      color: 'blue',
      description: 'The IP office is verifying if all required documents and fees are submitted correctly.',
      action: 'No action needed. Wait for the next stage.'
    },
    {
      title: 'Marked for Examination',
      icon: Clock,
      color: 'indigo',
      description: 'Your application is in the queue and will be reviewed by an IP examiner soon.',
      action: 'Monitor regularly. Ensure your attorney is ready to respond.'
    },
    {
      title: 'Objected / Examination Report',
      icon: AlertTriangle,
      color: 'amber',
      description: 'The examiner has raised objections (absolute or relative). A formal reply is required.',
      action: 'Critical stage! File a strong legal response within the stipulated time (usually 30 days).'
    },
    {
      title: 'Published / Opposed',
      icon: Shield,
      color: 'purple',
      description: 'The IP is published in the journal. Third parties can oppose it within 4 months.',
      action: 'If opposed, file a counter-statement. If unopposed, proceed to registration.'
    },
    {
      title: 'Registered',
      icon: CheckCircle,
      color: 'emerald',
      description: 'Congratulations! Your IP is officially registered and protected by law.',
      action: 'Download your certificate and start using the ® or © symbol.'
    }
  ];

  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    amber: 'bg-amber-50 text-amber-600 border-amber-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  };

  const faqs = [
    {
      q: "How often should I check my IP application status?",
      a: "It is highly recommended to check your Trademark, Patent, or Copyright status every 15-30 days. Missing a deadline during the 'Objected' or 'Opposed' stage can lead to the abandonment of your application."
    },
    {
      q: "What does 'Objected' status mean in Trademark tracking?",
      a: "An 'Objected' status means the Trademark Examiner has found issues with your application (e.g., similarity with an existing mark or lack of distinctiveness). You must file a formal legal reply to overcome the objection."
    },
    {
      q: "Can I track my application without an IPRveda account?",
      a: "Yes, you can use the public search bar above to get a quick status update. However, creating an IPRveda account gives you real-time email alerts, document access, and direct attorney support."
    },
    {
      q: "What happens if my application status shows 'Opposed'?",
      a: "If a third party opposes your IP, a legal proceeding begins. You must file a Counter-Statement within 2 months. IPRveda's legal team specializes in winning opposition cases."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Search Section */}
        <header className="text-center mb-12">
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Track Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">IP Application</span> Status
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Instantly check the live status of your Trademark, Copyright, or Patent application filed with the Indian IP Office.
          </p>

          {/* Search Box */}
          <form onSubmit={handleTrack} className="max-w-3xl mx-auto bg-white p-3 rounded-2xl shadow-lg border border-gray-200 flex flex-col sm:flex-row gap-3">
            <select 
              value={appType}
              onChange={(e) => setAppType(e.target.value)}
              className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-48"
            >
              <option value="trademark">Trademark</option>
              <option value="copyright">Copyright</option>
              <option value="patent">Patent</option>
            </select>
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={appNumber}
                onChange={(e) => setAppNumber(e.target.value)}
                placeholder="Enter Application Number (e.g., 4583920)"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button 
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Track Now <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </header>

        {/* Mock Result Display */}
        {showMockResult && (
          <div className="max-w-3xl mx-auto mb-16 bg-white border border-emerald-200 rounded-2xl p-6 shadow-md animate-fadeIn">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">Application Found</h3>
                  <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-semibold uppercase">
                    {appType}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">App No: {appNumber} | Status: <span className="font-bold text-emerald-600">Registered</span></p>
                <div className="flex gap-3">
                  <button className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium flex items-center gap-2">
                    <Download className="w-4 h-4" /> Download Certificate
                  </button>
                  <button className="text-sm px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 font-medium flex items-center gap-2">
                    <FileText className="w-4 h-4" /> View Full History
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Understanding Statuses (SEO Core Content) */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Understanding IP Application Statuses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Navigating the IP registry can be confusing. Here is a simple breakdown of what each status means and what action you need to take.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {statuses.map((status, idx) => {
              const Icon = status.icon;
              return (
                <div key={idx} className={`p-6 rounded-2xl border ${colorMap[status.color]} transition-all hover:shadow-lg hover:-translate-y-1`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6" />
                    <h3 className="text-lg font-bold text-gray-900">{status.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">{status.description}</p>
                  <div className="pt-4 border-t border-gray-200/50">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Required Action:</p>
                    <p className="text-sm font-medium text-gray-800">{status.action}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why IPRveda Tracker */}
        <section className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Track with IPRveda?</h2>
              <p className="text-indigo-200 mb-6 text-lg">
                Don't rely on manual checks. Our smart tracking system ensures you never miss a critical deadline.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Instant Email & SMS Alerts</h4>
                    <p className="text-sm text-indigo-200">Get notified the moment your status changes to 'Objected' or 'Opposed'.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Attorney Review</h4>
                    <p className="text-sm text-indigo-200">Every status update is reviewed by our IP attorneys before alerting you.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold">Centralized Document Vault</h4>
                    <p className="text-sm text-indigo-200">Access all examination reports, certificates, and legal notices in one dashboard.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
                  <span className="text-sm font-medium">App #4583920</span>
                  <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded">Registered</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
                  <span className="text-sm font-medium">App #4591022</span>
                  <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-300 rounded">Objected</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between">
                  <span className="text-sm font-medium">App #4602115</span>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Examined</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about tracking your IP applications.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default TrackApplication;