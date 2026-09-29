import React, { useState, useEffect } from 'react';
import {
  Bell,
  Check,
  CheckCircle2,
  Clock,
  Cpu,
  Globe,
  HardDrive,
  Moon,
  Pause,
  Play,
  Radio,
  Sliders,
  Sparkles,
  Users,
  Volume2,
  Wifi,
  Zap,
} from 'lucide-react';

export const BentoGridLayout: React.FC = () => {
  // 1. Timezone clock state
  const [selectedCity, setSelectedCity] = useState<'sf' | 'london' | 'zurich' | 'tokyo'>('tokyo');
  const cityTimes = {
    sf: { name: 'San Francisco', time: '04:12 AM', offset: 'UTC-7', temp: '16°C' },
    london: { name: 'London', time: '12:12 PM', offset: 'UTC+1', temp: '18°C' },
    zurich: { name: 'Zurich', time: '01:12 PM', offset: 'UTC+2', temp: '20°C' },
    tokyo: { name: 'Tokyo', time: '08:12 PM', offset: 'UTC+9', temp: '24°C' },
  };

  // 2. Audio player state
  const [isPlaying, setIsPlaying] = useState(false);

  // 3. Task queue state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Migrate Redis cluster to v7.4', done: true, tag: 'Infra' },
    { id: 2, title: 'Verify SOC2 automated evidence collector', done: true, tag: 'Security' },
    { id: 3, title: 'Benchmark WebSocket throughput under 50k peers', done: false, tag: 'Perf' },
    { id: 4, title: 'Publish TypeScript SDK v3.2 to npm', done: false, tag: 'DevRel' },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  // 4. System preference toggles
  const [preferences, setPreferences] = useState({
    twoFactor: true,
    telemetry: false,
    hardwareAccel: true,
    autoBackup: true,
  });

  const togglePref = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full bg-white text-zinc-900 font-sans min-h-[850px] p-8 select-none">
      {/* Bento Header */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            Modular Component Architecture
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900">
            Bento Interface Matrix
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-50 border border-zinc-200 text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            6 Micro-Modules Online
          </span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Module 1: World Clock & Timezone (Col span 2) */}
        <div className="md:col-span-2 bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-zinc-700" />
              <span className="text-xs font-bold text-zinc-900">Distributed Team Clock</span>
            </div>
            {/* City Tabs */}
            <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg text-xs font-medium">
              {(['sf', 'london', 'zurich', 'tokyo'] as const).map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-2 py-0.5 rounded capitalize transition-all ${
                    selectedCity === city
                      ? 'bg-white text-zinc-900 font-bold shadow-2xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="py-6 flex items-baseline justify-between">
            <div>
              <div className="text-4xl font-extrabold font-mono tracking-tight text-zinc-900">
                {cityTimes[selectedCity].time}
              </div>
              <div className="text-xs text-zinc-500 mt-1 font-mono">
                {cityTimes[selectedCity].name} · {cityTimes[selectedCity].offset}
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-mono text-zinc-600">
                {cityTimes[selectedCity].temp}
              </span>
              <div className="text-[11px] text-emerald-600 font-medium mt-0.5">
                Optimal Working Window
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>Latency to PoP: 18ms</span>
            <span className="flex items-center gap-1 text-zinc-600">
              <Globe className="w-3.5 h-3.5" />
              Synced via NTP Protocol
            </span>
          </div>
        </div>

        {/* Module 2: Memory & Storage Gauge (Col span 1) */}
        <div className="md:col-span-1 bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
            <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-zinc-700" />
              Storage Vol.
            </span>
            <span className="text-[10px] font-mono text-zinc-500">SSD-NVMe</span>
          </div>

          <div className="my-auto flex flex-col items-center py-4">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#f4f4f5"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#18181b"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset="75"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute text-center">
                <div className="text-xl font-bold font-mono text-zinc-900">70%</div>
                <div className="text-[9px] text-zinc-400 font-mono">350/500 GB</div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-100 text-center text-[11px] text-zinc-500">
            150 GB Provisioned Margin
          </div>
        </div>

        {/* Module 3: Audio Waveform Player (Col span 1) */}
        <div className="md:col-span-1 bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
            <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-zinc-700" />
              Acoustic Stream
            </span>
            <span className="text-[10px] font-mono text-zinc-500">FLAC 24-bit</span>
          </div>

          <div className="my-4">
            <div className="text-xs font-bold text-zinc-900">Subterranean Echoes</div>
            <div className="text-[11px] text-zinc-500 mb-3">Modular Synthesizer No. 04</div>

            {/* Simulated Animated Waveform Bars */}
            <div className="h-10 flex items-end gap-1 px-1">
              {[40, 65, 80, 45, 95, 70, 30, 85, 60, 40, 75, 90, 50, 65, 30, 80].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-full transition-all duration-300 ${
                    isPlaying ? 'bg-zinc-900' : 'bg-zinc-200'
                  }`}
                  style={{ height: isPlaying ? `${Math.max(20, Math.round(h * Math.random()))}%` : `${h * 0.5}%` }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors shadow-2xs"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlaying ? 'Pause Synthesis' : 'Play Ambient'}</span>
          </button>
        </div>

        {/* Module 4: Checkable Task Queue (Col span 2) */}
        <div className="md:col-span-2 bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-3">
            <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-zinc-700" />
              Continuous Delivery Checklist
            </span>
            <span className="text-xs font-mono text-zinc-500">
              {tasks.filter((t) => t.done).length} / {tasks.length} Completed
            </span>
          </div>

          <div className="space-y-2.5 my-auto">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-100 hover:bg-zinc-50/70 transition-colors cursor-pointer text-xs"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                      task.done
                        ? 'bg-zinc-900 border-zinc-900 text-white'
                        : 'border-zinc-300 bg-white'
                    }`}
                  >
                    {task.done && <Check className="w-3 h-3" />}
                  </div>
                  <span
                    className={`${
                      task.done ? 'line-through text-zinc-400' : 'text-zinc-800 font-medium'
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                  {task.tag}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
            <span>Automated checks triggered via GitHub Action</span>
          </div>
        </div>

        {/* Module 5: System Preference Toggles (Col span 2) */}
        <div className="md:col-span-2 bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-zinc-300 transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-3">
            <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-zinc-700" />
              Runtime Policies
            </span>
            <span className="text-[10px] font-mono text-zinc-500">Cluster Security</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto">
            {[
              { key: 'twoFactor', label: 'Enforce MFA / WebAuthn', desc: 'Hardware FIDO2 keys' },
              { key: 'telemetry', label: 'Public Audit Telemetry', desc: 'Real-time uptime log' },
              { key: 'hardwareAccel', label: 'AVX-512 Math Co-proc', desc: 'Hardware SIMD acceleration' },
              { key: 'autoBackup', label: 'Continuous Snapshotting', desc: 'Every 60s to multi-cloud' },
            ].map((item) => {
              const active = preferences[item.key as keyof typeof preferences];
              return (
                <div
                  key={item.key}
                  onClick={() => togglePref(item.key as keyof typeof preferences)}
                  className="p-3 rounded-xl border border-zinc-100 hover:bg-zinc-50/70 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <div className="text-xs font-semibold text-zinc-800">{item.label}</div>
                    <div className="text-[10px] text-zinc-400">{item.desc}</div>
                  </div>
                  {/* Clean toggle switch */}
                  <div
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                      active ? 'bg-zinc-900' : 'bg-zinc-200'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        active ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-100 text-[11px] text-zinc-400">
            Changes apply instantaneously across all regional instances
          </div>
        </div>

      </div>
    </div>
  );
};
