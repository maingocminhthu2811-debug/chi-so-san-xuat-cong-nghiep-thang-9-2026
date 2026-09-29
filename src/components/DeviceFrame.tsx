import React from 'react';
import { DeviceViewport } from '../types';
import { Globe, Lock, RotateCw, Wifi } from 'lucide-react';

interface DeviceFrameProps {
  viewport: DeviceViewport;
  zoom: number;
  layoutTitle: string;
  children: React.ReactNode;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  viewport,
  zoom,
  layoutTitle,
  children,
}) => {
  // If viewport is fluid, render naturally with soft container
  if (viewport === 'fluid') {
    return (
      <div
        className="w-full transition-transform origin-top duration-200"
        style={{ transform: `scale(${zoom / 100})` }}
      >
        <div className="w-full bg-white rounded-2xl border border-zinc-200/90 shadow-sm overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  // Desktop 1440px Window Frame
  if (viewport === 'desktop') {
    return (
      <div
        className="transition-transform origin-top duration-200"
        style={{ transform: `scale(${zoom / 100})` }}
      >
        <div className="w-[1440px] bg-white rounded-2xl border border-zinc-300 shadow-2xl overflow-hidden mx-auto">
          {/* macOS Browser Header */}
          <div className="bg-zinc-100/90 border-b border-zinc-200 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-zinc-300 border border-zinc-400/30"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-300 border border-zinc-400/30"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-300 border border-zinc-400/30"></span>
            </div>

            <div className="bg-white border border-zinc-200 rounded-md px-6 py-1 text-xs font-mono text-zinc-600 flex items-center gap-2 shadow-2xs w-96 justify-center">
              <Lock className="w-3 h-3 text-zinc-400" />
              <span>https://cleanwhite.studio/{layoutTitle.toLowerCase().replace(/\s+/g, '-')}</span>
            </div>

            <div className="text-[11px] font-mono text-zinc-400">1440 × 900 (Desktop)</div>
          </div>

          <div className="w-full overflow-x-auto">{children}</div>
        </div>
      </div>
    );
  }

  // Laptop 1200px Window Frame
  if (viewport === 'laptop') {
    return (
      <div
        className="transition-transform origin-top duration-200"
        style={{ transform: `scale(${zoom / 100})` }}
      >
        <div className="w-[1200px] bg-white rounded-2xl border border-zinc-300 shadow-2xl overflow-hidden mx-auto">
          <div className="bg-zinc-100/90 border-b border-zinc-200 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
            </div>
            <div className="bg-white border border-zinc-200 rounded-md px-4 py-0.5 text-[11px] font-mono text-zinc-600 shadow-2xs">
              Laptop 1200px Viewport
            </div>
            <span className="text-[11px] font-mono text-zinc-400">1200 × 780</span>
          </div>
          <div className="w-full overflow-x-auto">{children}</div>
        </div>
      </div>
    );
  }

  // Tablet 768px Window Frame
  if (viewport === 'tablet') {
    return (
      <div
        className="transition-transform origin-top duration-200"
        style={{ transform: `scale(${zoom / 100})` }}
      >
        <div className="w-[768px] bg-white rounded-[32px] border-[10px] border-zinc-300 shadow-2xl overflow-hidden mx-auto">
          <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-2 flex items-center justify-between text-xs text-zinc-600 font-mono">
            <span>iPad Air · 768px</span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-400"></span>
            <span>100%</span>
          </div>
          <div className="w-full overflow-x-auto">{children}</div>
        </div>
      </div>
    );
  }

  // Mobile 390px Window Frame
  return (
    <div
      className="transition-transform origin-top duration-200"
      style={{ transform: `scale(${zoom / 100})` }}
    >
      <div className="w-[390px] bg-white rounded-[44px] border-[8px] border-zinc-300 shadow-2xl overflow-hidden mx-auto">
        <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-2 flex items-center justify-between text-xs text-zinc-800 font-mono">
          <span className="text-[11px]">9:41</span>
          <div className="w-20 h-4 bg-zinc-900 rounded-full mx-auto"></div>
          <Wifi className="w-3.5 h-3.5" />
        </div>
        <div className="w-full overflow-x-auto">{children}</div>
      </div>
    </div>
  );
};
