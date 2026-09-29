import React, { useState } from 'react';
import {
  Activity,
  AlertCircle,
  Archive,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BarChart2,
  BarChart3,
  Battery,
  Bell,
  BookOpen,
  Calendar,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Compass,
  Copy,
  Cpu,
  CreditCard,
  Database,
  Download,
  Eye,
  FileText,
  Filter,
  Fingerprint,
  Folder,
  Globe,
  Grid,
  HardDrive,
  Heart,
  Home,
  Inbox,
  Info,
  Key,
  Layers,
  Layout,
  LifeBuoy,
  Lock,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  MessageSquare,
  Minus,
  Moon,
  MoreHorizontal,
  PieChart,
  Play,
  Plus,
  RefreshCw,
  Search,
  Send,
  Server,
  Settings,
  Shield,
  ShoppingBag,
  Sliders,
  Smartphone,
  Sparkles,
  Sun,
  Terminal,
  Trash2,
  TrendingUp,
  User,
  Users,
  Volume2,
  Wifi,
  X,
  Zap,
} from 'lucide-react';

interface IconDef {
  name: string;
  category: 'navigation' | 'system' | 'data' | 'commerce' | 'tools';
  component: React.FC<{ className?: string; strokeWidth?: number; size?: number }>;
}

export const IconGallery: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'navigation' | 'system' | 'data' | 'commerce' | 'tools'>('all');
  const [strokeWidth, setStrokeWidth] = useState<number>(2);
  const [iconSize, setIconSize] = useState<number>(20);
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

  const icons: IconDef[] = [
    // Navigation
    { name: 'ArrowRight', category: 'navigation', component: ArrowRight },
    { name: 'ArrowUpRight', category: 'navigation', component: ArrowUpRight },
    { name: 'ChevronRight', category: 'navigation', component: ChevronRight },
    { name: 'ChevronDown', category: 'navigation', component: ChevronDown },
    { name: 'Compass', category: 'navigation', component: Compass },
    { name: 'Home', category: 'navigation', component: Home },
    { name: 'Menu', category: 'navigation', component: Menu },
    { name: 'Grid', category: 'navigation', component: Grid },
    { name: 'Layers', category: 'navigation', component: Layers },
    { name: 'MapPin', category: 'navigation', component: MapPin },

    // System & Hardware
    { name: 'Cpu', category: 'system', component: Cpu },
    { name: 'Server', category: 'system', component: Server },
    { name: 'HardDrive', category: 'system', component: HardDrive },
    { name: 'Database', category: 'system', component: Database },
    { name: 'Cloud', category: 'system', component: Cloud },
    { name: 'Wifi', category: 'system', component: Wifi },
    { name: 'Smartphone', category: 'system', component: Smartphone },
    { name: 'Shield', category: 'system', component: Shield },
    { name: 'Lock', category: 'system', component: Lock },
    { name: 'Key', category: 'system', component: Key },
    { name: 'Fingerprint', category: 'system', component: Fingerprint },
    { name: 'Terminal', category: 'system', component: Terminal },
    { name: 'Zap', category: 'system', component: Zap },
    { name: 'Activity', category: 'system', component: Activity },

    // Data & Analytics
    { name: 'BarChart3', category: 'data', component: BarChart3 },
    { name: 'PieChart', category: 'data', component: PieChart },
    { name: 'TrendingUp', category: 'data', component: TrendingUp },
    { name: 'Clock', category: 'data', component: Clock },
    { name: 'Calendar', category: 'data', component: Calendar },
    { name: 'Globe', category: 'data', component: Globe },
    { name: 'FileText', category: 'data', component: FileText },
    { name: 'CheckCircle2', category: 'data', component: CheckCircle2 },
    { name: 'AlertCircle', category: 'data', component: AlertCircle },

    // Commerce & Financial
    { name: 'CreditCard', category: 'commerce', component: CreditCard },
    { name: 'ShoppingBag', category: 'commerce', component: ShoppingBag },
    { name: 'Users', category: 'commerce', component: Users },
    { name: 'User', category: 'commerce', component: User },
    { name: 'Send', category: 'commerce', component: Send },
    { name: 'Inbox', category: 'commerce', component: Inbox },
    { name: 'Mail', category: 'commerce', component: Mail },

    // Tools & Interface
    { name: 'Search', category: 'tools', component: Search },
    { name: 'Settings', category: 'tools', component: Settings },
    { name: 'Sliders', category: 'tools', component: Sliders },
    { name: 'Filter', category: 'tools', component: Filter },
    { name: 'Bell', category: 'tools', component: Bell },
    { name: 'Copy', category: 'tools', component: Copy },
    { name: 'Download', category: 'tools', component: Download },
    { name: 'Plus', category: 'tools', component: Plus },
    { name: 'Minus', category: 'tools', component: Minus },
    { name: 'Trash2', category: 'tools', component: Trash2 },
    { name: 'Code2', category: 'tools', component: Code2 },
    { name: 'RefreshCw', category: 'tools', component: RefreshCw },
    { name: 'Eye', category: 'tools', component: Eye },
    { name: 'Sparkles', category: 'tools', component: Sparkles },
    { name: 'Volume2', category: 'tools', component: Volume2 },
    { name: 'Play', category: 'tools', component: Play },
  ];

  const filteredIcons = icons.filter((icon) => {
    const matchesCat = selectedCategory === 'all' || icon.category === selectedCategory;
    const matchesSearch = icon.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopy = (iconName: string) => {
    navigator.clipboard.writeText(`<${iconName} size={${iconSize}} strokeWidth={${strokeWidth}} />`);
    setCopiedIcon(iconName);
    setTimeout(() => setCopiedIcon(null), 1800);
  };

  return (
    <div className="w-full bg-white text-zinc-900 font-sans min-h-[900px] p-8 max-w-6xl mx-auto select-none">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            Iconography System
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900">
            Clean White Icons & Glyphs
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Vector stroke icons formatted with consistent geometric grid, optical alignment, and affordance-only purpose.
          </p>
        </div>

        {/* Adjusters: Stroke & Size */}
        <div className="flex items-center gap-3">
          {/* Stroke Width Selector */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-xl text-xs font-medium">
            <span className="text-[10px] text-zinc-400 px-2 font-mono">Stroke:</span>
            {[1.5, 2, 2.5].map((sw) => (
              <button
                key={sw}
                onClick={() => setStrokeWidth(sw)}
                className={`px-2 py-0.5 rounded-lg font-mono text-[11px] transition-all ${
                  strokeWidth === sw
                    ? 'bg-white text-zinc-900 font-bold shadow-2xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {sw}px
              </button>
            ))}
          </div>

          {/* Size Selector */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-xl text-xs font-medium">
            <span className="text-[10px] text-zinc-400 px-2 font-mono">Size:</span>
            {[16, 20, 24].map((sz) => (
              <button
                key={sz}
                onClick={() => setIconSize(sz)}
                className={`px-2 py-0.5 rounded-lg font-mono text-[11px] transition-all ${
                  iconSize === sz
                    ? 'bg-white text-zinc-900 font-bold shadow-2xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {sz}px
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl text-xs font-medium overflow-x-auto">
          {(['all', 'navigation', 'system', 'data', 'commerce', 'tools'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg capitalize whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-zinc-900 font-bold shadow-2xs'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {cat === 'all' ? 'All Glyphs' : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search 60+ icons..."
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
          />
        </div>
      </div>

      {/* Grid of Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredIcons.map((icon) => {
          const IconComp = icon.component;
          const isCopied = copiedIcon === icon.name;

          return (
            <button
              key={icon.name}
              onClick={() => handleCopy(icon.name)}
              className="p-4 rounded-2xl border border-zinc-200/80 bg-zinc-50/40 hover:bg-white hover:border-zinc-300 hover:shadow-xs transition-all duration-200 flex flex-col items-center justify-center gap-2 group text-center relative"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-100 flex items-center justify-center text-zinc-800 group-hover:text-zinc-950 group-hover:scale-105 transition-all shadow-2xs">
                <IconComp size={iconSize} strokeWidth={strokeWidth} />
              </div>
              <span className="text-[11px] font-mono text-zinc-600 group-hover:text-zinc-900 truncate w-full">
                {icon.name}
              </span>
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                {isCopied ? (
                  <span className="text-emerald-600 font-bold">Copied!</span>
                ) : (
                  icon.category
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
