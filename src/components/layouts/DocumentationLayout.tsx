import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Code2,
  Copy,
  ExternalLink,
  FileCode,
  Folder,
  Layers,
  Play,
  Search,
  Terminal,
} from 'lucide-react';

export const DocumentationLayout: React.FC = () => {
  const [activeEndpoint, setActiveEndpoint] = useState<'create' | 'list' | 'delete'>('create');
  const [requestMethod, setRequestMethod] = useState<'POST' | 'GET'>('POST');
  const [copied, setCopied] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionResult, setExecutionResult] = useState<string | null>(null);

  const sampleResponse = `{
  "id": "dep_98a72b14",
  "status": "provisioned",
  "region": "iad1",
  "concurrency": 250,
  "created_at": 1727548291,
  "endpoints": {
    "http": "https://dep_98a72b14.edge.kinetic.dev",
    "grpc": "grpc://dep_98a72b14.edge.kinetic.dev:443"
  }
}`;

  const handleTestRequest = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setExecutionResult(sampleResponse);
    }, 450);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(`curl -X POST https://api.kinetic.dev/v1/deployments \\
  -H "Authorization: Bearer sec_live_998124" \\
  -H "Content-Type: application/json" \\
  -d '{"region":"iad1","concurrency":250}'`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white text-zinc-900 font-sans min-h-[850px] flex flex-col select-none">
      {/* Top Docs Header */}
      <header className="border-b border-zinc-200/80 px-8 py-3.5 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-zinc-900 text-white flex items-center justify-center font-bold text-xs">
              K
            </div>
            <span className="font-bold text-sm tracking-tight text-zinc-900">
              Kinetic Docs
            </span>
          </div>

          <div className="relative w-64 hidden sm:block">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search guides, endpoints..."
              className="w-full bg-zinc-50 border border-zinc-200/80 rounded-lg pl-8 pr-3 py-1 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-zinc-600">
          <a href="#" className="hover:text-zinc-900">API Reference</a>
          <a href="#" className="hover:text-zinc-900">SDKs</a>
          <a href="#" className="hover:text-zinc-900">Changelog</a>
          <button className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
            Get API Key
          </button>
        </div>
      </header>

      {/* 3-Column Documentation Layout */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        {/* Col 1: Left Navigation Tree */}
        <aside className="w-64 border-r border-zinc-200/80 p-6 shrink-0 space-y-6 hidden md:block">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Getting Started
            </div>
            <div className="space-y-1 text-xs">
              <a href="#" className="block py-1 px-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50">
                Introduction
              </a>
              <a href="#" className="block py-1 px-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50">
                Quickstart Guide
              </a>
              <a href="#" className="block py-1 px-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50">
                Authentication & Keys
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Edge Deployments
            </div>
            <div className="space-y-1 text-xs font-medium">
              <button
                onClick={() => {
                  setActiveEndpoint('create');
                  setRequestMethod('POST');
                }}
                className={`w-full flex items-center justify-between py-1 px-2 rounded-md transition-colors ${
                  activeEndpoint === 'create'
                    ? 'bg-zinc-100 text-zinc-900 font-bold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <span>Create deployment</span>
                <span className="font-mono text-[9px] bg-emerald-100 text-emerald-800 px-1 rounded">
                  POST
                </span>
              </button>
              <button
                onClick={() => {
                  setActiveEndpoint('list');
                  setRequestMethod('GET');
                }}
                className={`w-full flex items-center justify-between py-1 px-2 rounded-md transition-colors ${
                  activeEndpoint === 'list'
                    ? 'bg-zinc-100 text-zinc-900 font-bold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <span>List deployments</span>
                <span className="font-mono text-[9px] bg-blue-100 text-blue-800 px-1 rounded">
                  GET
                </span>
              </button>
              <button
                onClick={() => {
                  setActiveEndpoint('delete');
                  setRequestMethod('POST');
                }}
                className={`w-full flex items-center justify-between py-1 px-2 rounded-md transition-colors ${
                  activeEndpoint === 'delete'
                    ? 'bg-zinc-100 text-zinc-900 font-bold'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <span>Evict deployment</span>
                <span className="font-mono text-[9px] bg-rose-100 text-rose-800 px-1 rounded">
                  DEL
                </span>
              </button>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Core Resources
            </div>
            <div className="space-y-1 text-xs">
              <a href="#" className="block py-1 px-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50">
                Cron Jobs & Workers
              </a>
              <a href="#" className="block py-1 px-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50">
                Encrypted Secrets
              </a>
              <a href="#" className="block py-1 px-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50">
                Rate Limits & Headers
              </a>
            </div>
          </div>
        </aside>

        {/* Col 2: Main Editorial Documentation Article */}
        <main className="flex-1 p-8 overflow-y-auto max-w-2xl border-r border-zinc-200/80">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-3 font-mono">
            <span>API Reference</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Deployments</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-800 font-semibold">Create</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 mb-3">
            Create an Edge Deployment
          </h1>
          <p className="text-xs text-zinc-600 leading-relaxed mb-6">
            Provisions a stateful V8 isolate instance onto the Kinetic global anycast network. The deployment will initialize warm within 5ms and replicate across all designated routing regions.
          </p>

          {/* Endpoint URL Pill */}
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-zinc-50 border border-zinc-200 font-mono text-xs mb-6">
            <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
              POST
            </span>
            <span className="text-zinc-700">/v1/deployments</span>
          </div>

          {/* Parameters Table */}
          <div className="mb-8">
            <h2 className="text-sm font-bold text-zinc-900 mb-3">Request Body Parameters</h2>
            <div className="border border-zinc-200 rounded-xl overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-medium">
                    <th className="p-3">Field</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Required</th>
                    <th className="p-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="p-3 font-mono font-semibold text-zinc-900">region</td>
                    <td className="p-3 font-mono text-zinc-500 text-[11px]">string</td>
                    <td className="p-3 text-emerald-600 font-semibold">Yes</td>
                    <td className="p-3 text-zinc-600">The primary target datacenter (e.g. <code>iad1</code>, <code>fra1</code>).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-semibold text-zinc-900">concurrency</td>
                    <td className="p-3 font-mono text-zinc-500 text-[11px]">integer</td>
                    <td className="p-3 text-zinc-400">Optional</td>
                    <td className="p-3 text-zinc-600">Max concurrent requests per worker before autoscaling.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-semibold text-zinc-900">environment</td>
                    <td className="p-3 font-mono text-zinc-500 text-[11px]">object</td>
                    <td className="p-3 text-zinc-400">Optional</td>
                    <td className="p-3 text-zinc-600">Key-value dictionary of non-sensitive runtime parameters.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Callout Notice Block */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Idempotency Token Required:</span> Pass the <code>Idempotency-Key</code> header to ensure that network interruptions never trigger duplicate container allocations.
            </div>
          </div>
        </main>

        {/* Col 3: Interactive Request Playground */}
        <aside className="w-80 p-6 shrink-0 hidden lg:block bg-zinc-50/40">
          <div className="sticky top-20 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
              <span className="text-xs font-bold text-zinc-900">Live API Tester</span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy cURL'}</span>
              </button>
            </div>

            {/* Request Payload Box */}
            <div className="bg-zinc-900 text-zinc-200 rounded-xl p-3 text-xs font-mono shadow-xs">
              <div className="text-[10px] text-zinc-400 mb-2 flex items-center justify-between">
                <span>cURL Request</span>
                <span className="text-emerald-400 font-bold">{requestMethod}</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-zinc-300">
                {`curl -X POST \\
  https://api.kinetic.dev/v1/deployments \\
  -H "Authorization: Bearer sec_live_..." \\
  -d '{"region":"iad1","concurrency":250}'`}
              </pre>
            </div>

            <button
              onClick={handleTestRequest}
              disabled={isExecuting}
              className="w-full py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Play className={`w-3.5 h-3.5 fill-current ${isExecuting ? 'animate-spin' : ''}`} />
              <span>{isExecuting ? 'Executing Request...' : 'Send Live Request'}</span>
            </button>

            {/* Response Console */}
            {executionResult && (
              <div className="bg-white border border-zinc-200 rounded-xl p-3 text-xs font-mono shadow-xs animate-in fade-in duration-200">
                <div className="flex items-center justify-between text-[10px] pb-2 border-b border-zinc-100 mb-2">
                  <span className="font-bold text-zinc-700">RESPONSE (200 OK)</span>
                  <span className="text-emerald-600 font-semibold">18ms</span>
                </div>
                <pre className="text-[10px] text-zinc-700 overflow-x-auto">
                  {executionResult}
                </pre>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};
