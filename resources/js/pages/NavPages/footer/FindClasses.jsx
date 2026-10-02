import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {
  Search,
  Shield,
  Copy,
  Check,
  Info,
  FileText,
  ChevronRight,
  Sparkles,
  Bookmark,
  X,
  Scale,
  Palette,
  Lightbulb,
  Package,
  Briefcase,
  Code,
  Music,
  Film,
  BookOpen,
  Atom,
  Zap,
  Wrench,
  Cpu,
  Heart,
  Shirt,
  ShoppingBag,
  GraduationCap,
  FlaskConical,
} from 'lucide-react';

// ============ MOCK DATA ============
const TRADEMARK_CLASSES = [
  {
    id: 'tm-3',
    number: 'Class 3',
    type: 'Goods',
    title: 'Cosmetics & Cleaning',
    subtitle: 'Bleaching, soaps, perfumery, essential oils',
    icon: Sparkles,
    color: 'pink',
    examples: ['Perfumes', 'Skincare', 'Makeup', 'Hair care', 'Toothpaste'],
    included: ['Cosmetics', 'Essential oils', 'Soaps', 'Dentifrices', 'Hair lotions'],
    excluded: ['Cleaning preparations for industrial use (Class 1)', 'Deodorants for personal use (Class 5)'],
  },
  {
    id: 'tm-5',
    number: 'Class 5',
    type: 'Goods',
    title: 'Pharmaceuticals',
    subtitle: 'Medical & veterinary preparations, sanitary preparations',
    icon: FlaskConical,
    color: 'rose',
    examples: ['Medicines', 'Supplements', 'Baby food', 'Disinfectants', 'Dietary supplements'],
    included: ['Pharmaceuticals', 'Veterinary preparations', 'Sanitary preparations', 'Dietetic food', 'Plasters'],
    excluded: ['Supportive bandages (Class 10)', 'Medical devices (Class 10)'],
  },
  {
    id: 'tm-9',
    number: 'Class 9',
    type: 'Goods',
    title: 'Electronics & Software',
    subtitle: 'Scientific, optical, and electronic apparatus',
    icon: Cpu,
    color: 'blue',
    examples: ['Mobile apps', 'Software', 'Laptops', 'Headphones', 'Wearable tech'],
    included: ['Computer software', 'Mobile applications', 'Electronic devices', 'Batteries', 'Eyewear'],
    excluded: ['Computer services (Class 42)', 'Repair services (Class 37)'],
  },
  {
    id: 'tm-25',
    number: 'Class 25',
    type: 'Goods',
    title: 'Clothing & Apparel',
    subtitle: 'Clothing, footwear, headgear',
    icon: Shirt,
    color: 'violet',
    examples: ['T-shirts', 'Shoes', 'Hats', 'Sportswear', 'Uniforms'],
    included: ['Clothing', 'Footwear', 'Headgear', 'Costumes', 'Swimwear'],
    excluded: ['Surgical clothing (Class 10)', 'Paper clothing (Class 16)'],
  },
  {
    id: 'tm-29',
    number: 'Class 29',
    type: 'Goods',
    title: 'Food Products',
    subtitle: 'Meat, fish, dairy, preserved fruits & vegetables',
    icon: Package,
    color: 'amber',
    examples: ['Cheese', 'Yogurt', 'Meat', 'Oils', 'Preserved fruits'],
    included: ['Meat', 'Fish', 'Dairy products', 'Preserved fruits', 'Edible oils'],
    excluded: ['Baby food (Class 5)', 'Salad dressings (Class 30)'],
  },
  {
    id: 'tm-30',
    number: 'Class 30',
    type: 'Goods',
    title: 'Staple Foods',
    subtitle: 'Coffee, tea, rice, flour, bakery products',
    icon: Package,
    color: 'orange',
    examples: ['Coffee', 'Chocolate', 'Bread', 'Pasta', 'Spices'],
    included: ['Coffee', 'Tea', 'Rice', 'Flour', 'Bread', 'Confectionery'],
    excluded: ['Dietetic foods (Class 5)', 'Fresh fruits (Class 31)'],
  },
  {
    id: 'tm-35',
    number: 'Class 35',
    type: 'Services',
    title: 'Business & Advertising',
    subtitle: 'Advertising, business management, e-commerce',
    icon: ShoppingBag,
    color: 'emerald',
    examples: ['E-commerce', 'Digital marketing', 'Retail services', 'Business consulting'],
    included: ['Advertising', 'Business management', 'Office functions', 'Online retail'],
    excluded: ['Financial affairs (Class 36)', 'Legal services (Class 45)'],
  },
  {
    id: 'tm-41',
    number: 'Class 41',
    type: 'Services',
    title: 'Education & Entertainment',
    subtitle: 'Education, training, sporting & cultural activities',
    icon: GraduationCap,
    color: 'cyan',
    examples: ['Online courses', 'Coaching', 'Events', 'Publishing', 'Fitness training'],
    included: ['Education', 'Training', 'Entertainment', 'Sporting activities', 'Publishing'],
    excluded: ['Software for education (Class 9)', 'Health club fitness (Class 44)'],
  },
  {
    id: 'tm-42',
    number: 'Class 42',
    type: 'Services',
    title: 'IT & Software Services',
    subtitle: 'Scientific & technological services, SaaS',
    icon: Code,
    color: 'indigo',
    examples: ['SaaS', 'Cloud services', 'Web development', 'AI services', 'API platforms'],
    included: ['SaaS', 'PaaS', 'Cloud computing', 'Software design', 'IT consulting'],
    excluded: ['Downloadable software (Class 9)', 'Business consulting (Class 35)'],
  },
  {
    id: 'tm-43',
    number: 'Class 43',
    type: 'Services',
    title: 'Food & Accommodation',
    subtitle: 'Restaurants, hotels, catering services',
    icon: Heart,
    color: 'red',
    examples: ['Restaurants', 'Cafes', 'Hotels', 'Catering', 'Food trucks'],
    included: ['Restaurant services', 'Hotel accommodation', 'Catering', 'Bar services'],
    excluded: ['Cooking classes (Class 41)', 'Food packaging (Class 16)'],
  },
];

const COPYRIGHT_CATEGORIES = [
  {
    id: 'cr-1',
    number: 'Category 1',
    type: 'Literary',
    title: 'Literary Works & Code',
    subtitle: 'Books, articles, software source code, databases',
    icon: BookOpen,
    color: 'blue',
    examples: ['Novels', 'Blog posts', 'Source code', 'Databases', 'Scripts'],
    included: ['Books', 'Pamphlets', 'Tables', 'Compilations', 'Computer programs'],
    excluded: ['Titles (too short)', 'Ideas (not expression)'],
  },
  {
    id: 'cr-2',
    number: 'Category 2',
    type: 'Artistic',
    title: 'Artistic Works',
    subtitle: 'Paintings, photographs, logos, sculptures, architecture',
    icon: Palette,
    color: 'purple',
    examples: ['Logos', 'Photographs', 'Paintings', 'Illustrations', 'Architectural designs'],
    included: ['Paintings', 'Sculptures', 'Drawings', 'Photographs', 'Works of architecture'],
    excluded: ['Industrial designs (registered separately)', 'Titles'],
  },
  {
    id: 'cr-3',
    number: 'Category 3',
    type: 'Musical',
    title: 'Musical Works',
    subtitle: 'Musical compositions, notations, scores',
    icon: Music,
    color: 'pink',
    examples: ['Song compositions', 'Sheet music', 'Scores', 'Melodies', 'Instrumental works'],
    included: ['Musical notations', 'Compositions', 'Graphical notations'],
    excluded: ['Sound recordings (Category 4)', 'Lyrics (Literary work)'],
  },
  {
    id: 'cr-4',
    number: 'Category 4',
    type: 'Sound Recording',
    title: 'Sound Recordings',
    subtitle: 'Recorded audio, podcasts, music tracks',
    icon: Music,
    color: 'emerald',
    examples: ['Podcasts', 'Music albums', 'Audiobooks', 'Sound effects', 'Voice recordings'],
    included: ['Songs', 'Podcasts', 'Audiobooks', 'Recorded speeches'],
    excluded: ['Musical composition (Category 3)', 'Live performances'],
  },
  {
    id: 'cr-5',
    number: 'Category 5',
    type: 'Cinematograph',
    title: 'Cinematograph Films',
    subtitle: 'Movies, videos, web series, visual recordings',
    icon: Film,
    color: 'amber',
    examples: ['Movies', 'Web series', 'Short films', 'Documentaries', 'Music videos'],
    included: ['Films', 'Videos', 'Web series', 'Documentaries'],
    excluded: ['Scripts (Literary)', 'Music in film (Separate)'],
  },
  {
    id: 'cr-6',
    number: 'Category 6',
    type: 'Dramatic',
    title: 'Dramatic Works',
    subtitle: 'Plays, screenplays, choreography, recitations',
    icon: FileText,
    color: 'rose',
    examples: ['Plays', 'Screenplays', 'Choreography', 'Monologues', 'Mime works'],
    included: ['Dramatic works', 'Choreographic works', 'Dumb shows', 'Screenplays'],
    excluded: ['Cinematograph films (Category 5)', 'Performed works (separate)'],
  },
];

const PATENT_SECTIONS = [
  {
    id: 'pt-A',
    number: 'Section A',
    type: 'IPC',
    title: 'Human Necessities',
    subtitle: 'Agriculture, food, tobacco, personal & household items',
    icon: Heart,
    color: 'rose',
    examples: ['Farming tools', 'Food processing', 'Medical devices', 'Furniture', 'Toys'],
    included: ['Agriculture', 'Food processing', 'Tobacco', 'Personal items', 'Health & amusement'],
    excluded: ['Medical treatment methods (varies)', 'Chemical compounds (Section C)'],
  },
  {
    id: 'pt-B',
    number: 'Section B',
    type: 'IPC',
    title: 'Performing Operations & Transport',
    subtitle: 'Manufacturing, shaping, printing, transport',
    icon: Wrench,
    color: 'blue',
    examples: ['Manufacturing processes', 'Printing machines', 'Vehicles', 'Conveyors'],
    included: ['Separating', 'Mixing', 'Forming', 'Printing', 'Transport'],
    excluded: ['Personal items (Section A)', 'Chemical processes (Section C)'],
  },
  {
    id: 'pt-C',
    number: 'Section C',
    type: 'IPC',
    title: 'Chemistry & Metallurgy',
    subtitle: 'Chemistry, metallurgy, compositions',
    icon: FlaskConical,
    color: 'emerald',
    examples: ['Chemical compounds', 'Alloys', 'Fertilizers', 'Explosives', 'Coatings'],
    included: ['Organic chemistry', 'Inorganic chemistry', 'Metallurgy', 'Compositions'],
    excluded: ['Medical preparations (Section A)', 'Food compositions (Section A)'],
  },
  {
    id: 'pt-D',
    number: 'Section D',
    type: 'IPC',
    title: 'Textiles & Paper',
    subtitle: 'Textiles, textile manufacturing, paper',
    icon: FileText,
    color: 'violet',
    examples: ['Yarn spinning', 'Weaving', 'Paper making', 'Textile finishing'],
    included: ['Natural & man-made threads', 'Fabrics', 'Paper manufacture'],
    excluded: ['Paper products (Class 16)', 'Clothing (Section A)'],
  },
  {
    id: 'pt-E',
    number: 'Section E',
    type: 'IPC',
    title: 'Fixed Constructions',
    subtitle: 'Building structures, mining, drilling',
    icon: Package,
    color: 'amber',
    examples: ['Buildings', 'Bridges', 'Roads', 'Mining equipment', 'Pipes'],
    included: ['Buildings', 'Hydraulic engineering', 'Mining', 'Drilling'],
    excluded: ['Furniture (Section A)', 'Machines (Section B)'],
  },
  {
    id: 'pt-F',
    number: 'Section F',
    type: 'IPC',
    title: 'Mechanical Engineering',
    subtitle: 'Engines, pumps, lighting, heating, weapons',
    icon: Wrench,
    color: 'orange',
    examples: ['Engines', 'Pumps', 'HVAC systems', 'Lighting', 'Firearms'],
    included: ['Engines', 'Pumps', 'Lighting', 'Heating', 'Weapons', 'Blasting'],
    excluded: ['Electric apparatus (Section H)', 'Vehicles (Section B)'],
  },
  {
    id: 'pt-G',
    number: 'Section G',
    type: 'IPC',
    title: 'Physics & Computing',
    subtitle: 'Instruments, computing, information tech, nuclear',
    icon: Atom,
    color: 'indigo',
    examples: ['AI algorithms', 'Sensors', 'Measurement devices', 'Computer hardware', 'Nuclear tech'],
    included: ['Measuring', 'Testing', 'Optics', 'Photography', 'Computing', 'Nuclear'],
    excluded: ['Computer software per se (not patentable in India)', 'Business methods'],
  },
  {
    id: 'pt-H',
    number: 'Section H',
    type: 'IPC',
    title: 'Electricity',
    subtitle: 'Electric elements, communication, circuits',
    icon: Zap,
    color: 'cyan',
    examples: ['Circuits', 'Batteries', 'Telecom systems', 'Semiconductors', 'Antennas'],
    included: ['Electric elements', 'Electronic circuits', 'Communication tech'],
    excluded: ['Electric machines (Section F)', 'Digital data processing (Section G)'],
  },
];

// ============ HELPER FUNCTIONS ============
const COLOR_MAP = {
  blue: {
    bg: 'bg-brand-primary/5',
    border: 'border-brand-primary/20',
    badge: 'bg-brand-primary/10 text-brand-primary',
    icon: 'bg-brand-primary/10 text-brand-primary',
    accent: 'text-brand-primary',
    hover: 'hover:border-brand-primary/40 hover:shadow-brand',
    gradient: 'from-brand-primary to-brand-primary',
  },
  indigo: {
    bg: 'bg-brand-primary/5',
    border: 'border-brand-primary/20',
    badge: 'bg-brand-primary/10 text-brand-primary',
    icon: 'bg-brand-primary/10 text-brand-primary',
    accent: 'text-brand-primary',
    hover: 'hover:border-brand-primary/40 hover:shadow-brand',
    gradient: 'from-brand-primary to-brand-darker',
  },
  violet: {
    bg: 'bg-brand-primary/5',
    border: 'border-brand-primary/20',
    badge: 'bg-brand-primary/10 text-brand-primary',
    icon: 'bg-brand-primary/10 text-brand-primary',
    accent: 'text-brand-primary',
    hover: 'hover:border-brand-primary/40 hover:shadow-brand',
    gradient: 'from-brand-primary to-brand-darker',
  },
  pink: {
    bg: 'bg-danger/5',
    border: 'border-danger/20',
    badge: 'bg-danger/10 text-danger',
    icon: 'bg-danger/10 text-danger',
    accent: 'text-danger',
    hover: 'hover:border-danger/40 hover:shadow-brand',
    gradient: 'from-danger to-danger',
  },
  rose: {
    bg: 'bg-danger/5',
    border: 'border-danger/20',
    badge: 'bg-danger/10 text-danger',
    icon: 'bg-danger/10 text-danger',
    accent: 'text-danger',
    hover: 'hover:border-danger/40 hover:shadow-brand',
    gradient: 'from-danger to-danger',
  },
  emerald: {
    bg: 'bg-success/5',
    border: 'border-success/20',
    badge: 'bg-success/10 text-success',
    icon: 'bg-success/10 text-success',
    accent: 'text-success',
    hover: 'hover:border-success/40 hover:shadow-brand',
    gradient: 'from-success to-success',
  },
  amber: {
    bg: 'bg-warning/5',
    border: 'border-warning/20',
    badge: 'bg-warning/10 text-warning',
    icon: 'bg-warning/10 text-warning',
    accent: 'text-warning',
    hover: 'hover:border-warning/40 hover:shadow-brand',
    gradient: 'from-warning to-warning',
  },
  orange: {
    bg: 'bg-warning/5',
    border: 'border-warning/20',
    badge: 'bg-warning/10 text-warning',
    icon: 'bg-warning/10 text-warning',
    accent: 'text-warning',
    hover: 'hover:border-warning/40 hover:shadow-brand',
    gradient: 'from-warning to-warning',
  },
  cyan: {
    bg: 'bg-brand-primary/5',
    border: 'border-brand-primary/20',
    badge: 'bg-brand-primary/10 text-brand-primary',
    icon: 'bg-brand-primary/10 text-brand-primary',
    accent: 'text-brand-primary',
    hover: 'hover:border-brand-primary/40 hover:shadow-brand',
    gradient: 'from-brand-primary to-brand-darker',
  },
  red: {
    bg: 'bg-danger/5',
    border: 'border-danger/20',
    badge: 'bg-danger/10 text-danger',
    icon: 'bg-danger/10 text-danger',
    accent: 'text-danger',
    hover: 'hover:border-danger/40 hover:shadow-brand',
    gradient: 'from-danger to-danger',
  },
  purple: {
    bg: 'bg-brand-primary/5',
    border: 'border-brand-primary/20',
    badge: 'bg-brand-primary/10 text-brand-primary',
    icon: 'bg-brand-primary/10 text-brand-primary',
    accent: 'text-brand-primary',
    hover: 'hover:border-brand-primary/40 hover:shadow-brand',
    gradient: 'from-brand-primary to-brand-darker',
  },
};

// ============ SUB-COMPONENTS ============

const TabButton = ({ active, onClick, icon: Icon, label, count, color }) => (
  <button
    onClick={onClick}
    className={`group relative flex items-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
      active
        ? `bg-gradient-to-r ${color} text-white shadow-lg scale-[1.02]`
        : 'bg-white text-brand-dark/70 hover:bg-brand-light hover:text-brand-dark border border-brand-border'
    }`}
  >
    <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-brand-dark/50 group-hover:text-brand-dark'}`} />
    <span className="hidden sm:inline">{label}</span>
    <span
      className={`text-xs px-2 py-0.5 rounded-full ${
        active ? 'bg-white/20 text-white' : 'bg-brand-light text-brand-dark/70'
      }`}
    >
      {count}
    </span>
  </button>
);

const FilterChip = ({ active, onClick, label, count }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
      active
        ? 'bg-brand-dark text-white shadow-md'
        : 'bg-white text-brand-dark border border-brand-border hover:border-brand-primary/50 hover:bg-brand-light'
    }`}
  >
    {label}
    <span
      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
        active ? 'bg-white/20 text-white' : 'bg-brand-light text-brand-dark/70'
      }`}
    >
      {count}
    </span>
  </button>
);

const ClassCard = ({ item, onOpen, onCopy, onBookmark, isBookmarked, colors }) => {
  const Icon = item.icon;
  return (
    <div
      className={`group relative bg-white rounded-2xl border ${colors.border} ${colors.hover} p-5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
      onClick={() => onOpen(item)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2.5 rounded-xl ${colors.icon} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark(item.id);
            }}
            className={`p-1.5 rounded-lg transition-all ${
              isBookmarked ? 'bg-warning/20 text-warning' : 'text-brand-dark/40 hover:bg-brand-light hover:text-brand-dark'
            }`}
            aria-label="Bookmark"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCopy(item);
            }}
            className="p-1.5 rounded-lg text-brand-dark/40 hover:bg-brand-light hover:text-brand-dark transition-all"
            aria-label="Copy info"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Number Badge */}
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-bold px-2 py-1 rounded-md ${colors.badge}`}>
          {item.number}
        </span>
        <span className="text-xs font-medium text-brand-dark/50 uppercase tracking-wide">
          {item.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-brand-dark mb-1 group-hover:text-brand-dark">
        {item.title}
      </h3>
      <p className="text-sm text-brand-dark/50 mb-4 line-clamp-2">{item.subtitle}</p>

      {/* Examples */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {item.examples.slice(0, 4).map((ex, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-1 bg-brand-light text-brand-dark rounded-md border border-brand-border"
          >
            {ex}
          </span>
        ))}
        {item.examples.length > 4 && (
          <span className="text-xs px-2 py-1 text-brand-dark/50">
            +{item.examples.length - 4} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-brand-border">
        <span className={`text-xs font-semibold ${colors.accent}`}>View Details</span>
        <ChevronRight className={`w-4 h-4 ${colors.accent} transition-transform group-hover:translate-x-1`} />
      </div>
    </div>
  );
};

const EmptyState = ({ query }) => (
  <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-light to-brand-border flex items-center justify-center mb-4">
      <Search className="w-8 h-8 text-brand-dark/40" />
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-2">No classes found</h3>
    <p className="text-brand-dark/60 max-w-md">
      We couldn't find any classes matching "<span className="font-semibold text-brand-dark">{query}</span>". Try different keywords or clear the filters.
    </p>
  </div>
);

const DetailModal = ({ item, onClose, colors }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!item) return null;
  const Icon = item.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`relative bg-gradient-to-br ${colors.gradient} p-6 rounded-t-3xl text-white`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm">
              <Icon className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm">
                  {item.number}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide opacity-90">
                  {item.type}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-1">{item.title}</h2>
              <p className="text-sm opacity-90">{item.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Examples */}
          <div>
            <h3 className="text-sm font-bold text-brand-dark mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-dark/50" />
              Common Examples
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.examples.map((ex, idx) => (
                <span
                  key={idx}
                  className={`text-sm px-3 py-1.5 rounded-lg ${colors.bg} ${colors.accent} font-medium border ${colors.border}`}
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

          {/* Included / Excluded */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-success/10 border border-success/20 rounded-xl p-4">
              <h4 className="text-sm font-bold text-brand-dark mb-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                Included in this Class
              </h4>
              <ul className="space-y-2">
                {item.included.map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-brand-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 flex-shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-danger/10 border border-danger/20 rounded-xl p-4">
              <h4 className="text-sm font-bold text-brand-dark mb-3 flex items-center gap-2">
                <X className="w-4 h-4 text-danger" />
                Excluded from this Class
              </h4>
              <ul className="space-y-2">
                {item.excluded.map((exc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-brand-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-danger mt-1.5 flex-shrink-0" />
                    {exc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-light to-brand-light border border-brand-border rounded-xl p-4 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white shadow-sm">
              <Info className="w-5 h-5 text-brand-dark/70" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-brand-dark">Need help with filing?</p>
              <p className="text-xs text-brand-dark/70">Our IP experts can guide you through the registration process.</p>
            </div>
            <button className="px-4 py-2 bg-brand-dark text-white text-sm font-semibold rounded-lg hover:bg-brand-darker transition-colors">
              Get Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ MAIN COMPONENT ============
const FindClasses = () => {
  const [activeTab, setActiveTab] = useState('trademark');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCard, setSelectedCard] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  const tabs = [
    { id: 'trademark', label: 'Trademark', icon: Shield, count: TRADEMARK_CLASSES.length, color: 'from-brand-primary to-brand-darker' },
    { id: 'copyright', label: 'Copyright', icon: FileText, count: COPYRIGHT_CATEGORIES.length, color: 'from-success to-success' },
    { id: 'patent', label: 'Patent', icon: Lightbulb, count: PATENT_SECTIONS.length, color: 'from-warning to-warning' },
  ];

  const currentData = useMemo(() => {
    if (activeTab === 'trademark') return TRADEMARK_CLASSES;
    if (activeTab === 'copyright') return COPYRIGHT_CATEGORIES;
    return PATENT_SECTIONS;
  }, [activeTab]);

  const filterOptions = useMemo(() => {
    const types = [...new Set(currentData.map((d) => d.type))];
    return [
      { id: 'all', label: 'All', count: currentData.length },
      ...types.map((t) => ({ id: t, label: t, count: currentData.filter((d) => d.type === t).length })),
    ];
  }, [currentData]);

  const filteredData = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return currentData.filter((item) => {
      const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
      if (!query) return matchesFilter;
      const matchesSearch =
        item.number.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.examples.some((ex) => ex.toLowerCase().includes(query));
      return matchesFilter && matchesSearch;
    });
  }, [currentData, searchQuery, activeFilter]);

  // Reset filter when tab changes
  useEffect(() => {
    setActiveFilter('all');
  }, [activeTab]);

  const handleCopy = useCallback((item) => {
    const text = `${item.number} - ${item.title}: ${item.subtitle}. Examples: ${item.examples.join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const handleBookmark = useCallback((id) => {
    setBookmarks((prev) => (prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]));
  }, []);

  const tabDescriptions = {
    trademark: 'Find the right class for your brand among 45 trademark classifications (Goods 1-34, Services 35-45).',
    copyright: 'Identify the correct category for your creative work across 6 core copyright classifications.',
    patent: 'Locate the appropriate IPC section for your invention across 8 patent classification sections.',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-brand-light">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-primary/5 border border-brand-primary/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
            <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
              IP Class Finder
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark mb-3 tracking-tight">
            Intellectual Property{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-darker to-brand-primary bg-clip-text text-transparent">
              Class Finder
            </span>
          </h1>
          <p className="text-brand-dark/70 max-w-2xl mx-auto text-base sm:text-lg">
            {tabDescriptions[activeTab]}
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              icon={tab.icon}
              label={tab.label}
              count={tab.count}
              color={tab.color}
            />
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/40 group-focus-within:text-brand-primary transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search by class number, name, or keywords...`}
              className="w-full pl-12 pr-12 py-4 bg-white border-2 border-brand-border rounded-2xl text-brand-dark placeholder-brand-dark/40 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-brand-light transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4 text-brand-dark/50" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {filterOptions.map((filter) => (
            <FilterChip
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              label={filter.label}
              count={filter.count}
            />
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-sm text-brand-dark/70">
            Showing <span className="font-bold text-brand-dark">{filteredData.length}</span>{' '}
            {filteredData.length === 1 ? 'class' : 'classes'}
            {searchQuery && (
              <>
                {' '}for "<span className="font-semibold text-brand-dark">{searchQuery}</span>"
              </>
            )}
          </p>
          {bookmarks.length > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-brand-dark/60">
              <Bookmark className="w-3.5 h-3.5 fill-warning text-warning" />
              <span>{bookmarks.length} saved</span>
            </div>
          )}
        </div>

        {/* Cards Grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredData.map((item) => {
              const colors = COLOR_MAP[item.color] || COLOR_MAP.blue;
              return (
                <ClassCard
                  key={item.id}
                  item={item}
                  colors={colors}
                  onOpen={setSelectedCard}
                  onCopy={handleCopy}
                  onBookmark={handleBookmark}
                  isBookmarked={bookmarks.includes(item.id)}
                />
              );
            })}
          </div>
        ) : (
          <EmptyState query={searchQuery} />
        )}

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-border shadow-sm">
            <Info className="w-4 h-4 text-brand-dark/60" />
            <span className="text-xs text-brand-dark/70">
              Classification data based on Indian IP Office guidelines. For legal advice, consult an IP attorney.
            </span>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCard && (
        <DetailModal
          item={selectedCard}
          colors={COLOR_MAP[selectedCard.color] || COLOR_MAP.blue}
          onClose={() => setSelectedCard(null)}
        />
      )}
      

      {/* Copy Toast */}
      {copiedId && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slideUp">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-brand-dark text-white text-sm font-medium rounded-full shadow-xl">
            <Check className="w-4 h-4 text-success" />
            Class info copied to clipboard
          </div>
        </div>
      )}
    </div>
  );
};

export default FindClasses;