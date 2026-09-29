import React, { useState } from 'react';
import { Check, Copy, FileCode, X } from 'lucide-react';
import { LayoutId } from '../types';

interface CodeInspectorModalProps {
  layoutId: LayoutId;
  isOpen: boolean;
  onClose: () => void;
}

export const CodeInspectorModal: React.FC<CodeInspectorModalProps> = ({
  layoutId,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const codeSnippets: Record<LayoutId, string> = {
    dashboard: `// Clean White SaaS Dashboard Pattern
import React from 'react';
import { Compass, BarChart3, Users, Zap, ShieldCheck } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="w-full min-h-screen bg-white text-zinc-900 flex font-sans">
      {/* 1. Sidebar Navigation */}
      <aside className="w-64 border-r border-zinc-200/80 bg-zinc-50/50 p-4">
        {/* Workspace switch & Nav items */}
      </aside>

      {/* 2. Main Content Canvas */}
      <main className="flex-1 p-6 space-y-6">
        {/* Top Header with Cmd+K and Date Picker */}
        {/* Metric Cards Grid */}
        {/* Interactive Charts & Live Stream */}
        {/* Data Grid with Status Chips */}
      </main>
    </div>
  );
}`,
    landing: `// Clean White SaaS Landing & Hero Pattern
import React from 'react';
import { ArrowRight, Play, Zap, Globe2, Shield } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="w-full bg-white text-zinc-900 font-sans">
      {/* 3-Zone Top Bar */}
      <header className="border-b border-zinc-200/80 px-8 py-4 flex justify-between">
        <span className="font-bold">Kinetic Engine</span>
        <nav className="flex gap-8 text-xs font-medium text-zinc-600">...</nav>
        <button className="bg-zinc-900 text-white px-3.5 py-1.5 rounded-lg text-xs">Deploy Free</button>
      </header>

      {/* Hero with unboxed metadata and browser window frame */}
      <section className="max-w-5xl mx-auto px-6 pt-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">Edge computing built for deterministic speed.</h1>
        {/* Browser Mockup */}
      </section>
    </div>
  );
}`,
    ecommerce: `// Clean White Monograph E-Commerce Pattern
import React, { useState } from 'react';
import { ShoppingBag, Plus } from 'lucide-react';

export function AtelierStore() {
  const [cart, setCart] = useState([]);
  return (
    <div className="w-full bg-white text-zinc-900 font-sans">
      {/* Top catalog header */}
      {/* Asymmetric product gallery */}
      {/* Sliding bag drawer */}
    </div>
  );
}`,
    mobile: `// Clean White FinTech Mobile App Screen
import React, { useState } from 'react';
import { CreditCard, Send, PieChart, Home } from 'lucide-react';

export function MobileFintech() {
  return (
    <div className="w-full max-w-[380px] bg-white rounded-[44px] border-[8px] border-zinc-200 shadow-2xl">
      {/* Notch & status bar */}
      {/* Swipeable virtual cards */}
      {/* Quick circular action buttons */}
      {/* Recent activity timeline */}
      {/* Floating bottom tab bar */}
    </div>
  );
}`,
    documentation: `// Clean White 3-Column API Documentation Hub
export function Documentation() {
  return (
    <div className="w-full flex max-w-7xl mx-auto">
      {/* Col 1: Left Navigation Tree */}
      {/* Col 2: Main Documentation Article */}
      {/* Col 3: Interactive Request Tester & cURL */}
    </div>
  );
}`,
    portfolio: `// Clean White Exhibition Portfolio
export function StudioPortfolio() {
  return (
    <div className="w-full bg-white text-zinc-900">
      {/* Monograph gallery */}
      {/* Detail specification modal */}
    </div>
  );
}`,
    bento: `// Modular Bento Grid Layout
export function BentoMatrix() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* World clock tile */}
      {/* NVMe storage gauge tile */}
      {/* Synthesizer player tile */}
      {/* Deployment checklist tile */}
    </div>
  );
}`,
  };

  const activeSnippet = codeSnippets[layoutId];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/30 backdrop-blur-xs"></div>
      <div className="relative w-full max-w-2xl bg-zinc-950 text-zinc-100 rounded-2xl border border-zinc-800 shadow-2xl p-6 z-10 font-mono text-xs animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-zinc-300">
            <FileCode className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold">{layoutId.toUpperCase()}_LAYOUT.tsx</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
            <button onClick={onClose} className="p-1 rounded text-zinc-400 hover:text-zinc-100">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <pre className="mt-4 max-h-[60vh] overflow-y-auto leading-relaxed text-zinc-300">
          <code>{activeSnippet}</code>
        </pre>

        <div className="pt-3 border-t border-zinc-800 mt-4 flex items-center justify-between text-[11px] text-zinc-500">
          <span>Tailwind CSS v4 + TypeScript + Lucide React</span>
          <span>Single-elevation clean white design token system</span>
        </div>
      </div>
    </div>
  );
};
