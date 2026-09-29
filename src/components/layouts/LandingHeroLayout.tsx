import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Cpu,
  Globe2,
  Play,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';

export const LandingHeroLayout: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'typescript' | 'python' | 'curl'>('typescript');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    typescript: `import { Kinetic } from '@kinetic/edge';

const client = new Kinetic({ apiKey: process.env.KINETIC_KEY });

// Dispatch sub-millisecond edge orchestration
export async function handleRequest(event: WebhookEvent) {
  const session = await client.orchestrate({
    region: 'auto-select',
    spec: 'high-concurrency',
    payload: event.data
  });
  return session.stream();
}`,
    python: `from kinetic import EdgeClient

client = EdgeClient()

# Execute distributed inference pipeline
session = client.orchestrate(
    region="auto-select",
    spec="high-concurrency",
    payload=event.data
)
for token in session.stream():
    yield token`,
    curl: `curl -X POST https://api.kinetic.dev/v1/orchestrate \\
  -H "Authorization: Bearer $KINETIC_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"region":"auto-select","spec":"high-concurrency"}'`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white text-zinc-900 font-sans min-h-[900px] select-none">
      {/* 1. Clean Top Bar Contract (3 Zones) */}
      <header className="border-b border-zinc-200/80 px-8 py-4 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-30">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center text-white text-[10px] font-black">
            K
          </div>
          <span className="text-base font-bold tracking-tight text-zinc-900">
            Kinetic Engine
          </span>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-600">
          <a href="#features" className="hover:text-zinc-900 transition-colors">
            Architecture
          </a>
          <a href="#benchmarks" className="hover:text-zinc-900 transition-colors">
            Benchmarks
          </a>
          <a href="#integrations" className="hover:text-zinc-900 transition-colors">
            Global Mesh
          </a>
          <a href="#pricing" className="hover:text-zinc-900 transition-colors">
            Pricing
          </a>
          <a href="#docs" className="hover:text-zinc-900 transition-colors">
            Documentation
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <button className="text-xs font-medium text-zinc-600 hover:text-zinc-900 px-3 py-1.5 transition-colors">
            Sign In
          </button>
          <button className="text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-3.5 py-1.5 rounded-lg shadow-xs transition-colors flex items-center gap-1.5">
            <span>Deploy Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        {/* Unboxed clean metadata kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 mb-6 bg-zinc-50 border border-zinc-200/80 px-3 py-1 rounded-full shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Kinetic v4.2 Public Mesh Live</span>
          <span className="text-zinc-300">|</span>
          <span className="text-zinc-500 flex items-center gap-1">
            Global p95 &lt; 14ms <ChevronRight className="w-3 h-3" />
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 max-w-3xl mx-auto leading-[1.1] mb-6">
          Edge computing built for deterministic speed.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-8">
          Deploy stateful workflows, global caching, and low-latency workloads with zero server configuration. Write in TypeScript or Python and execute anywhere.
        </p>

        {/* CTA Button Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs shadow-md transition-all flex items-center justify-center gap-2">
            <span>Start Free with GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 text-zinc-700 font-medium text-xs shadow-xs transition-all flex items-center justify-center gap-2">
            <Play className="w-3.5 h-3.5 fill-current text-zinc-600" />
            <span>Watch 2-min Architecture Tour</span>
          </button>
        </div>

        {/* Trust Badges - Clean Text Only */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500 font-mono">
          <span>SOC2 Type II Certified</span>
          <span className="text-zinc-300">·</span>
          <span>99.995% Availability SLA</span>
          <span className="text-zinc-300">·</span>
          <span>Zero Cold Starts</span>
          <span className="text-zinc-300">·</span>
          <span>310+ Global Edge PoPs</span>
        </div>
      </section>

      {/* 3. Interactive Clean White Browser Frame Preview */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-xl overflow-hidden">
          {/* Browser Top Window Bar */}
          <div className="bg-zinc-50 border-b border-zinc-200/80 px-4 py-3 flex items-center justify-between">
            {/* macOS traffic light dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-zinc-300 border border-zinc-400/40"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-300 border border-zinc-400/40"></span>
              <span className="w-3 h-3 rounded-full bg-zinc-300 border border-zinc-400/40"></span>
            </div>

            {/* Address Bar */}
            <div className="bg-white border border-zinc-200/80 text-zinc-600 text-xs font-mono px-6 py-1 rounded-md max-w-sm w-full text-center flex items-center justify-center gap-2 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>https://console.kinetic.dev/edge/worker-primary</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-400 text-xs">
              <Terminal className="w-4 h-4" />
            </div>
          </div>

          {/* Browser Interior: Interactive Code & Execution View */}
          <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200/80 min-h-[380px]">
            {/* Left 3 Cols: Code Editor */}
            <div className="lg:col-span-3 p-6 bg-zinc-950 text-zinc-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs">
                  <div className="flex items-center gap-2">
                    {(['typescript', 'python', 'curl'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveCodeTab(lang)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                          activeCodeTab === lang
                            ? 'bg-zinc-800 text-white font-semibold'
                            : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 text-[11px] font-mono transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy snippet</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Preformatted Code Content */}
                <pre className="font-mono text-xs text-zinc-300 leading-relaxed mt-4 overflow-x-auto">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Terminal status bar */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Build verified · bundle size: 4.8kb
                </span>
                <span>Ready to deploy</span>
              </div>
            </div>

            {/* Right 2 Cols: Live Execution Visualizer */}
            <div className="lg:col-span-2 p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-4">
                  <span className="text-xs font-bold text-zinc-900">Topology Execution Map</span>
                  <span className="text-[10px] font-mono bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded">
                    3 nodes routed
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <div>
                        <div className="font-semibold text-zinc-900">us-east (Virginia)</div>
                        <div className="text-[11px] text-zinc-500">Primary routing ingress</div>
                      </div>
                    </div>
                    <span className="font-mono text-zinc-700 font-semibold">4.2ms</span>
                  </div>

                  <div className="p-3 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <div>
                        <div className="font-semibold text-zinc-900">eu-central (Frankfurt)</div>
                        <div className="text-[11px] text-zinc-500">Replica pool active</div>
                      </div>
                    </div>
                    <span className="font-mono text-zinc-700 font-semibold">12.8ms</span>
                  </div>

                  <div className="p-3 rounded-lg border border-zinc-200/80 bg-zinc-50/50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <div>
                        <div className="font-semibold text-zinc-900">ap-northeast (Tokyo)</div>
                        <div className="text-[11px] text-zinc-500">Edge cache warm</div>
                      </div>
                    </div>
                    <span className="font-mono text-zinc-700 font-semibold">18.1ms</span>
                  </div>
                </div>
              </div>

              {/* Simulation Result */}
              <div className="pt-4 border-t border-zinc-100">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-zinc-500">Aggregated Consensus Latency:</span>
                  <span className="font-mono font-bold text-zinc-900">11.7ms</span>
                </div>
                <div className="w-full bg-zinc-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-zinc-900 h-full w-[88%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three-Column Feature Bento Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs hover:border-zinc-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">Zero Cold Starts</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              V8 isolates spin up in less than 5 milliseconds worldwide. No containers to provision, no sleeping instances.
            </p>
          </div>

          <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs hover:border-zinc-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">Anycast Network</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Requests automatically terminate at the nearest physical PoP, reducing round-trips and maximizing packet speed.
            </p>
          </div>

          <div className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-xs hover:border-zinc-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 mb-2">Hardware Enclaves</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Cryptographic memory isolation on every cluster node guarantees zero cross-tenant contamination or data leakage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
