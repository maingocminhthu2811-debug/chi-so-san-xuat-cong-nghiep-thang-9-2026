import React from 'react';
import {
  CanvasBackground,
  DeviceViewport,
  LayoutId,
  LayoutMeta,
  StudioTab,
} from '../types';
import {
  Code2,
  Columns,
  Grid,
  Laptop,
  Maximize2,
  Monitor,
  Moon,
  Smartphone,
  Sparkles,
  Tablet,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';

interface NavigationProps {
  activeTab: StudioTab;
  setActiveTab: (tab: StudioTab) => void;
  activeLayout: LayoutId;
  setActiveLayout: (id: LayoutId) => void;
  layouts: LayoutMeta[];
  viewport: DeviceViewport;
  setViewport: (vp: DeviceViewport) => void;
  background: CanvasBackground;
  setBackground: (bg: CanvasBackground) => void;
  zoom: number;
  setZoom: (z: number) => void;
  onOpenCode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  activeLayout,
  setActiveLayout,
  layouts,
  viewport,
  setViewport,
  background,
  setBackground,
  zoom,
  setZoom,
  onOpenCode,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/90 bg-white/90 backdrop-blur-xl">
      {/* Primary Top Bar (Three-Zone Contract) */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            A
          </div>
          <div>
            <span className="text-sm font-extrabold tracking-tight text-zinc-900 block leading-tight">
              Aura Studio
            </span>
            <span className="text-[10px] font-mono text-zinc-400">
              Clean White Webpage Layouts
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation / Studio Tabs */}
        <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-xl text-xs font-medium">
          <button
            onClick={() => setActiveTab('layouts')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'layouts'
                ? 'bg-white text-zinc-900 font-bold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Diverse Layouts
          </button>
          <button
            onClick={() => setActiveTab('elements')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'elements'
                ? 'bg-white text-zinc-900 font-bold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Interface Elements
          </button>
          <button
            onClick={() => setActiveTab('icons')}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'icons'
                ? 'bg-white text-zinc-900 font-bold shadow-xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Iconography System
          </button>
        </div>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2">
          {activeTab === 'layouts' && (
            <button
              onClick={onOpenCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-medium text-zinc-700 shadow-2xs transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Inspect Source</span>
            </button>
          )}

          <a
            href="#explore"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 380, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium shadow-xs transition-colors"
          >
            <span>Live Canvas</span>
          </a>
        </div>
      </div>

      {/* Secondary Bar: Device Viewports & Layout Switchers (Visible when in 'layouts' tab) */}
      {activeTab === 'layouts' && (
        <div className="border-t border-zinc-100 bg-zinc-50/70 px-6 py-2">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            {/* Layout Dropdown Selector & Category Pill */}
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider shrink-0">
                Screens:
              </span>
              <div className="flex items-center gap-1">
                {layouts.map((layout) => (
                  <button
                    key={layout.id}
                    onClick={() => {
                      setActiveLayout(layout.id);
                      if (layout.id === 'mobile') {
                        setViewport('mobile');
                      }
                    }}
                    className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-all ${
                      activeLayout === layout.id
                        ? 'bg-zinc-900 text-white shadow-2xs font-semibold'
                        : 'bg-white border border-zinc-200/80 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                    }`}
                  >
                    {layout.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Viewport Frame Pickers & Canvas Controls */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Device Viewport Icons */}
              <div className="flex items-center gap-1 p-0.5 bg-white border border-zinc-200 rounded-lg shadow-2xs">
                <button
                  onClick={() => setViewport('fluid')}
                  title="Fluid 100%"
                  className={`p-1.5 rounded ${
                    viewport === 'fluid' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewport('desktop')}
                  title="Desktop 1440px"
                  className={`p-1.5 rounded ${
                    viewport === 'desktop' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewport('laptop')}
                  title="Laptop 1200px"
                  className={`p-1.5 rounded ${
                    viewport === 'laptop' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewport('tablet')}
                  title="Tablet 768px"
                  className={`p-1.5 rounded ${
                    viewport === 'tablet' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  <Tablet className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewport('mobile')}
                  title="Mobile 390px"
                  className={`p-1.5 rounded ${
                    viewport === 'mobile' ? 'bg-zinc-900 text-white' : 'text-zinc-500 hover:text-zinc-800'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Background Canvas Selector */}
              <div className="flex items-center gap-1 bg-white border border-zinc-200 rounded-lg p-0.5 shadow-2xs text-[11px] font-mono">
                {(['dots', 'pure', 'warm', 'grid'] as const).map((bg) => (
                  <button
                    key={bg}
                    onClick={() => setBackground(bg)}
                    className={`px-2 py-1 rounded capitalize ${
                      background === bg ? 'bg-zinc-900 text-white font-bold' : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    {bg}
                  </button>
                ))}
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center gap-1 bg-white border border-zinc-200 rounded-lg p-0.5 shadow-2xs font-mono text-[11px]">
                <button
                  onClick={() => setZoom(Math.max(50, zoom - 10))}
                  title="Zoom Out"
                  className="p-1 text-zinc-500 hover:text-zinc-900"
                >
                  <ZoomOut className="w-3 h-3" />
                </button>
                <span className="px-1.5 text-zinc-700 font-semibold">{zoom}%</span>
                <button
                  onClick={() => setZoom(Math.min(125, zoom + 10))}
                  title="Zoom In"
                  className="p-1 text-zinc-500 hover:text-zinc-900"
                >
                  <ZoomIn className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
