import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Download,
  Filter,
  Layers,
  Lock,
  Mail,
  Plus,
  Search,
  Sliders,
  Sparkles,
  ToggleLeft,
  Trash2,
  Zap,
} from 'lucide-react';

export const ElementsStudio: React.FC = () => {
  const [sliderVal, setSliderVal] = useState(65);
  const [toggleA, setToggleA] = useState(true);
  const [toggleB, setToggleB] = useState(false);
  const [activeSegment, setActiveSegment] = useState<'day' | 'week' | 'month'>('week');
  const [inputVal, setInputVal] = useState('elena@acme.dev');
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const copySnippet = (name: string, snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedLabel(name);
    setTimeout(() => setCopiedLabel(null), 1800);
  };

  return (
    <div className="w-full bg-white text-zinc-900 font-sans min-h-[900px] p-8 max-w-6xl mx-auto select-none">
      {/* Title & Introduction */}
      <div className="mb-10 pb-6 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            Design Tokens & Primitives
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900">
            Interface Elements System
          </h1>
          <p className="text-xs text-zinc-500 mt-1 max-w-xl">
            Atomic components engineered in an ultra-clean white style. Featuring single-elevation surfaces, hairline borders, and tactile micro-interactions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-lg border border-zinc-200">
            WCAG AA Compliant
          </span>
        </div>
      </div>

      <div className="space-y-12">
        {/* Section 1: Buttons & Interactive Affordances */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold tracking-tight text-zinc-900 uppercase tracking-wider text-[11px] font-mono text-zinc-400">
              01. Buttons & Controls
            </h2>
            <span className="text-[11px] text-zinc-400 font-mono">Single-line whitespace-nowrap</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary & Secondary */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 bg-zinc-50/40 flex flex-col justify-between space-y-4">
              <span className="text-xs font-bold text-zinc-800">Primary Actions</span>
              <div className="flex flex-wrap gap-2.5">
                <button className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium shadow-xs transition-colors flex items-center gap-2">
                  <span>Primary Solid</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button className="px-4 py-2 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-700 text-xs font-medium shadow-2xs transition-colors">
                  Outline Subtle
                </button>
              </div>
              <div className="text-[10px] text-zinc-400 font-mono">Padding py-2 px-4 · Nested radius math</div>
            </div>

            {/* Segmented Control */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 bg-zinc-50/40 flex flex-col justify-between space-y-4">
              <span className="text-xs font-bold text-zinc-800">Segmented Tab Switcher</span>
              <div className="inline-flex p-1 bg-zinc-200/70 rounded-xl text-xs font-medium">
                {(['day', 'week', 'month'] as const).map((seg) => (
                  <button
                    key={seg}
                    onClick={() => setActiveSegment(seg)}
                    className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                      activeSegment === seg
                        ? 'bg-white text-zinc-900 shadow-xs font-bold'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    {seg}
                  </button>
                ))}
              </div>
              <div className="text-[10px] text-zinc-400 font-mono">Zero-pill discipline · Active surface lift</div>
            </div>

            {/* Icon Buttons & Badge */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 bg-zinc-50/40 flex flex-col justify-between space-y-4">
              <span className="text-xs font-bold text-zinc-800">Icon Affordances</span>
              <div className="flex items-center gap-2">
                <button className="p-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 shadow-2xs transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 shadow-2xs transition-colors relative">
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500"></span>
                </button>
                <button className="p-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 shadow-xs transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="text-[10px] text-zinc-400 font-mono">Strict 40px+ touch target</div>
            </div>
          </div>
        </div>

        {/* Section 2: Input Elements */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold tracking-tight text-zinc-900 uppercase tracking-wider text-[11px] font-mono text-zinc-400">
              02. Form Controls & Inputs
            </h2>
            <span className="text-[11px] text-zinc-400 font-mono">Focus states with visible ring</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Search Input */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 bg-zinc-50/40 space-y-3">
              <label className="text-xs font-bold text-zinc-800 block">Command Search</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Find anything..."
                  className="w-full bg-white border border-zinc-200/90 rounded-xl pl-9 pr-14 py-2 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 shadow-2xs"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-400 bg-zinc-100 border border-zinc-200 rounded px-1.5 py-0.5">
                  ⌘K
                </span>
              </div>
            </div>

            {/* Email with validation */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 bg-zinc-50/40 space-y-3">
              <label className="text-xs font-bold text-zinc-800 block">Verified Input</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="email"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="w-full bg-white border border-zinc-200/90 rounded-xl pl-9 pr-9 py-2 text-xs text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 shadow-2xs font-mono"
                />
                <CheckCircle2 className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" />
              </div>
            </div>

            {/* Range Slider */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 bg-zinc-50/40 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-zinc-800">
                <span>Concurrency Limit</span>
                <span className="font-mono text-zinc-900">{sliderVal}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(Number(e.target.value))}
                className="w-full accent-zinc-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>0 isolates</span>
                <span>1,000 max</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Metadata Clusters & Surfaces */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold tracking-tight text-zinc-900 uppercase tracking-wider text-[11px] font-mono text-zinc-400">
              03. Metadata Clusters & Callouts
            </h2>
            <span className="text-[11px] text-zinc-400 font-mono">Unboxed metadata with delimiters</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Unboxed Metadata (Strict rule DO) */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 bg-white shadow-xs space-y-3">
              <span className="text-xs font-bold text-zinc-800 block">Clean Metadata Format</span>
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                <span className="text-zinc-900 font-semibold">Engineering</span>
                <span aria-hidden="true" className="text-zinc-300">·</span>
                <span>Published Sep 2026</span>
                <span aria-hidden="true" className="text-zinc-300">·</span>
                <span>4 min read</span>
                <span aria-hidden="true" className="text-zinc-300">·</span>
                <span className="text-emerald-600 font-bold">Verified SOC2</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Rendered as clean, quiet typography with separators rather than colorful candy pill boxes.
              </p>
            </div>

            {/* Informational Callout */}
            <div className="p-6 rounded-2xl border border-zinc-200/90 bg-zinc-50/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                <Sparkles className="w-4 h-4 text-zinc-800" />
                <span>Deterministic Zero Cold-Start Guarantee</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                V8 isolates are continuously kept in pre-warmed memory pages across 310 physical edge locations worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
