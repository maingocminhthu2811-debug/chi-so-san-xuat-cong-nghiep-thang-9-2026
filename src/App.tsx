import React, { useState } from 'react';
import {
  CanvasBackground,
  DeviceViewport,
  LayoutId,
  LayoutMeta,
  StudioTab,
} from './types';
import { Navigation } from './components/Navigation';
import { DeviceFrame } from './components/DeviceFrame';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import { LandingHeroLayout } from './components/layouts/LandingHeroLayout';
import { EcommerceLayout } from './components/layouts/EcommerceLayout';
import { MobileAppLayout } from './components/layouts/MobileAppLayout';
import { DocumentationLayout } from './components/layouts/DocumentationLayout';
import { PortfolioLayout } from './components/layouts/PortfolioLayout';
import { BentoGridLayout } from './components/layouts/BentoGridLayout';
import { ElementsStudio } from './components/ElementsStudio';
import { IconGallery } from './components/IconGallery';
import { CodeInspectorModal } from './components/CodeInspectorModal';
import {
  ArrowRight,
  Code2,
  Columns,
  Grid,
  Laptop,
  Maximize2,
  Monitor,
  Smartphone,
  Sparkles,
  Tablet,
  Check,
} from 'lucide-react';

const LAYOUTS_META: LayoutMeta[] = [
  {
    id: 'dashboard',
    title: 'SaaS Command Center',
    category: 'Enterprise App',
    description: 'Operational analytics with collapsible sidebar, KPI metrics, interactive throughput charts, and filtered data grids.',
    screens: ['Overview', 'Clusters', 'Workspaces'],
    tags: ['Sidebar', 'Data Table', 'Metrics Grid', 'Charts'],
    suggestedViewport: 'fluid',
  },
  {
    id: 'landing',
    title: 'Minimalist SaaS Landing',
    category: 'Marketing & Hero',
    description: 'Top Bar contract, clean unboxed metadata, interactive simulated browser window, and 3-column feature bento.',
    screens: ['Hero Screen', 'Browser Mockup', 'Bento Cards'],
    tags: ['Hero Section', 'Browser Frame', 'Bento', 'Code Preview'],
    suggestedViewport: 'fluid',
  },
  {
    id: 'ecommerce',
    title: 'Editorial Atelier Store',
    category: 'E-Commerce Monograph',
    description: 'Minimalist industrial design catalog with asymmetric product gallery, tactile materials, and sliding bag drawer.',
    screens: ['Catalog', 'Product Spec', 'Bag Drawer'],
    tags: ['Product Grid', 'Cart Drawer', 'Tabular Prices'],
    suggestedViewport: 'fluid',
  },
  {
    id: 'mobile',
    title: 'FinTech Mobile App',
    category: 'Mobile Screen Viewport',
    description: 'Sleek simulated smartphone chassis featuring virtual card carousel, biometric actions, and transaction timeline.',
    screens: ['Home', 'Virtual Cards', 'Activity Feed'],
    tags: ['Mobile Chassis', 'Dynamic Island', 'FinTech UI'],
    suggestedViewport: 'mobile',
  },
  {
    id: 'documentation',
    title: 'Developer Docs Hub',
    category: 'Knowledge Base',
    description: '3-column documentation system with API navigation tree, parameter tables, callout banners, and live cURL tester.',
    screens: ['Reference', 'Parameter Table', 'API Playground'],
    tags: ['3-Column', 'API Console', 'Code Snippets'],
    suggestedViewport: 'fluid',
  },
  {
    id: 'portfolio',
    title: 'Architecture Portfolio',
    category: 'Creative Studio',
    description: 'Exhibition gallery for architecture and industrial design with project filtering and interactive monograph modals.',
    screens: ['Exhibition Wall', 'Project Detail Modal'],
    tags: ['Full-Bleed Grid', 'Spec Sheet', 'Monograph'],
    suggestedViewport: 'fluid',
  },
  {
    id: 'bento',
    title: 'Modular Bento Matrix',
    category: 'Interactive Modules',
    description: 'Multi-aspect ratio interconnected widgets: World clock, NVMe storage gauge, audio player, and policy toggles.',
    screens: ['World Clock', 'Storage Gauge', 'Synthesizer'],
    tags: ['Bento Grid', 'Micro-Interactions', 'Toggles'],
    suggestedViewport: 'fluid',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<StudioTab>('layouts');
  const [activeLayout, setActiveLayout] = useState<LayoutId>('dashboard');
  const [viewport, setViewport] = useState<DeviceViewport>('fluid');
  const [background, setBackground] = useState<CanvasBackground>('dots');
  const [zoom, setZoom] = useState<number>(100);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  const currentLayoutMeta = LAYOUTS_META.find((l) => l.id === activeLayout)!;

  const renderActiveLayoutComponent = () => {
    switch (activeLayout) {
      case 'dashboard':
        return <DashboardLayout />;
      case 'landing':
        return <LandingHeroLayout />;
      case 'ecommerce':
        return <EcommerceLayout />;
      case 'mobile':
        return <MobileAppLayout />;
      case 'documentation':
        return <DocumentationLayout />;
      case 'portfolio':
        return <PortfolioLayout />;
      case 'bento':
        return <BentoGridLayout />;
      default:
        return <DashboardLayout />;
    }
  };

  const getCanvasBackgroundClass = () => {
    switch (background) {
      case 'dots':
        return 'bg-dot-pattern bg-white';
      case 'grid':
        return 'bg-grid-pattern bg-white';
      case 'warm':
        return 'bg-[#faf8f5]';
      case 'pure':
        return 'bg-white';
      default:
        return 'bg-dot-pattern bg-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 font-sans flex flex-col antialiased">
      {/* 1. Studio Navigation & Control Bar */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeLayout={activeLayout}
        setActiveLayout={setActiveLayout}
        layouts={LAYOUTS_META}
        viewport={viewport}
        setViewport={setViewport}
        background={background}
        setBackground={setBackground}
        zoom={zoom}
        setZoom={setZoom}
        onOpenCode={() => setIsCodeModalOpen(true)}
      />

      {/* 2. Studio Introduction Hero (Shown on 'layouts' tab) */}
      {activeTab === 'layouts' && (
        <section className="bg-white border-b border-zinc-200/90 py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                <span>White Minimalist Design Language · 7 Diverse Webpage Archetypes</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                Diverse Webpage Layouts & Screen Studio
              </h1>
              <p className="text-xs sm:text-sm text-zinc-500 mt-2 max-w-2xl leading-relaxed">
                Explore production-ready interface layouts rendered in an uncompromising clean white aesthetic. Test responsive simulated hardware viewports, inspect atomic interface tokens, and copy architectural patterns.
              </p>
            </div>

            {/* Quick Layout Carousel Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {LAYOUTS_META.map((meta) => (
                <button
                  key={meta.id}
                  onClick={() => {
                    setActiveLayout(meta.id);
                    if (meta.id === 'mobile') {
                      setViewport('mobile');
                    } else if (viewport === 'mobile') {
                      setViewport('fluid');
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                    activeLayout === meta.id
                      ? 'bg-zinc-900 text-white shadow-xs font-semibold'
                      : 'bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                  }`}
                >
                  <span>{meta.title}</span>
                  {activeLayout === meta.id && <Check className="w-3 h-3 text-white" />}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Main Studio Workspace */}
      <main className="flex-1 flex flex-col">
        {activeTab === 'layouts' && (
          <div id="explore" className={`flex-1 p-6 md:p-10 ${getCanvasBackgroundClass()} transition-colors flex flex-col items-center justify-start min-h-[900px] overflow-x-hidden`}>
            {/* Active Layout Metadata Banner */}
            <div className="w-full max-w-7xl mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-zinc-200/80 shadow-xs">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-zinc-900">
                    {currentLayoutMeta.title}
                  </span>
                  <span className="text-zinc-300">·</span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {currentLayoutMeta.category}
                  </span>
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  {currentLayoutMeta.description}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-lg">
                  <span>Viewport:</span>
                  <span className="font-semibold text-zinc-700 uppercase">{viewport}</span>
                </div>
                <button
                  onClick={() => setIsCodeModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors shadow-2xs"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Inspect Code</span>
                </button>
              </div>
            </div>

            {/* Simulated Device Frame Container */}
            <div className="w-full max-w-7xl flex justify-center items-start">
              <DeviceFrame
                viewport={viewport}
                zoom={zoom}
                layoutTitle={currentLayoutMeta.title}
              >
                {renderActiveLayoutComponent()}
              </DeviceFrame>
            </div>
          </div>
        )}

        {/* 4. Interface Elements Tab */}
        {activeTab === 'elements' && (
          <div className="flex-1 bg-white">
            <ElementsStudio />
          </div>
        )}

        {/* 5. Iconography System Tab */}
        {activeTab === 'icons' && (
          <div className="flex-1 bg-white">
            <IconGallery />
          </div>
        )}
      </main>

      {/* 6. Footer */}
      <footer className="border-t border-zinc-200 bg-white px-8 py-6 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-zinc-900 text-white flex items-center justify-center font-bold text-[9px]">
              A
            </div>
            <span className="font-bold text-zinc-800">Aura Clean White Layout Studio</span>
            <span className="text-zinc-300">·</span>
            <span>Screens, Icons, and Interface Elements</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px] text-zinc-400">
            <span>Tailwind CSS v4</span>
            <span>TypeScript</span>
            <span>Single-Elevation Architecture</span>
          </div>
        </div>
      </footer>

      {/* 7. Code Inspector Drawer/Modal */}
      <CodeInspectorModal
        layoutId={activeLayout}
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />
    </div>
  );
}
