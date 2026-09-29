import React, { useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  CreditCard,
  Download,
  Filter,
  Layers,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Server,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

export const DashboardLayout: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState('Last 30 days');
  const [activeTab, setActiveTab] = useState<'all' | 'enterprise' | 'pro' | 'starter'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [chartMetric, setChartMetric] = useState<'revenue' | 'users' | 'requests'>('revenue');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const tableData = [
    {
      id: 'ws-891',
      name: 'Vercel Deployment Pipeline',
      team: 'Platform Engineering',
      plan: 'Enterprise',
      status: 'Active',
      requests: '14.8M',
      latency: '112ms',
      cost: '$4,280/mo',
    },
    {
      id: 'ws-892',
      name: 'Stripe Webhook Gateway',
      team: 'Fintech Core',
      plan: 'Enterprise',
      status: 'Active',
      requests: '28.4M',
      latency: '89ms',
      cost: '$8,140/mo',
    },
    {
      id: 'ws-893',
      name: 'Autonomous Vector Sync',
      team: 'Intelligence Labs',
      plan: 'Pro',
      status: 'Provisioning',
      requests: '3.1M',
      latency: '240ms',
      cost: '$1,290/mo',
    },
    {
      id: 'ws-894',
      name: 'Global CDN Asset Mesh',
      team: 'Edge Infra',
      plan: 'Enterprise',
      status: 'Active',
      requests: '94.2M',
      latency: '34ms',
      cost: '$12,450/mo',
    },
    {
      id: 'ws-895',
      name: 'Audit Log Ingestion Sink',
      team: 'Security & Trust',
      plan: 'Starter',
      status: 'Idle',
      requests: '820K',
      latency: '145ms',
      cost: '$320/mo',
    },
  ];

  const filteredData = tableData.filter((item) => {
    const matchesTab = activeTab === 'all' || item.plan.toLowerCase() === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.team.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full min-h-[820px] bg-white text-zinc-900 flex font-sans antialiased select-none">
      {/* 1. Left Sidebar Navigation */}
      <aside className="w-64 border-r border-zinc-200/80 bg-zinc-50/50 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* Workspace Switcher */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-zinc-200/80 shadow-xs mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-xs">
                A
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-zinc-900">Acme Cloud HQ</div>
                <div className="text-[11px] text-zinc-500">Scale Plan · 18 seats</div>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400 px-3 py-1">
              Platform
            </div>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium bg-zinc-900 text-white shadow-xs">
              <Compass className="w-4 h-4" />
              <span>Overview</span>
            </button>
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 transition-colors">
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-zinc-500" />
                <span>Workspaces</span>
              </div>
              <span className="text-[10px] bg-zinc-200/70 text-zinc-700 px-1.5 py-0.5 rounded-md font-mono">
                12
              </span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 transition-colors">
              <BarChart3 className="w-4 h-4 text-zinc-500" />
              <span>Analytics & Metrics</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 transition-colors">
              <Users className="w-4 h-4 text-zinc-500" />
              <span>Team & RBAC</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 transition-colors">
              <CreditCard className="w-4 h-4 text-zinc-500" />
              <span>Billing & Usage</span>
            </button>
          </div>

          <div className="space-y-1 mt-6">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400 px-3 py-1">
              Infrastructure
            </div>
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 transition-colors">
              <div className="flex items-center gap-3">
                <Server className="w-4 h-4 text-zinc-500" />
                <span>Clusters</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 transition-colors">
              <ShieldCheck className="w-4 h-4 text-zinc-500" />
              <span>Audit & Compliance</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 transition-colors">
              <Settings className="w-4 h-4 text-zinc-500" />
              <span>Settings</span>
            </button>
          </div>
        </div>

        {/* User Card */}
        <div className="pt-4 border-t border-zinc-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-semibold text-zinc-700">
              EK
            </div>
            <div>
              <div className="text-xs font-medium text-zinc-900">Elena Rostova</div>
              <div className="text-[11px] text-zinc-500">elena@acme.inc</div>
            </div>
          </div>
          <button className="text-zinc-400 hover:text-zinc-600 p-1">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* 2. Main Content Canvas */}
      <main className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Top Operational Navigation */}
        <header className="h-16 border-b border-zinc-200/80 px-6 flex items-center justify-between gap-4 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search workspaces, clusters, or logs..."
                className="w-full bg-zinc-50 border border-zinc-200/80 rounded-lg pl-9 pr-14 py-1.5 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-400 bg-white border border-zinc-200 rounded px-1.5 py-0.5">
                ⌘K
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Date Range Selector */}
            <div className="relative">
              <select
                aria-label="Date Range"
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
                className="bg-white border border-zinc-200 text-xs font-medium text-zinc-700 rounded-lg px-3 py-1.5 pr-8 appearance-none focus:outline-none focus:border-zinc-400 cursor-pointer shadow-2xs"
              >
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Year to date</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            </div>

            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              title="Refresh telemetry"
              className="p-1.5 rounded-lg border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors shadow-2xs"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-zinc-900' : ''}`} />
            </button>

            {/* Notifications */}
            <button className="relative p-1.5 rounded-lg border border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors shadow-2xs">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500"></span>
            </button>

            {/* Primary Action Button */}
            <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-3.5 py-1.5 rounded-lg shadow-xs transition-colors">
              <Plus className="w-3.5 h-3.5" />
              <span>Create Cluster</span>
            </button>
          </div>
        </header>

        {/* Dashboard View Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-zinc-900">
                Operational Telemetry
              </h1>
              <p className="text-xs text-zinc-500 mt-0.5">
                Real-time latency, throughput, and cluster provisioning metrics across 4 regions.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 shadow-2xs transition-colors">
                <Download className="w-3.5 h-3.5" />
                <span>Export Report</span>
              </button>
              <button className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 shadow-2xs transition-colors">
                <Filter className="w-3.5 h-3.5" />
                <span>Custom View</span>
              </button>
            </div>
          </div>

          {/* 4 Clean White KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-zinc-200/90 rounded-xl p-4 shadow-xs hover:border-zinc-300 transition-all">
              <div className="flex items-center justify-between text-zinc-500 text-xs font-medium mb-2">
                <span>Monthly Recurring ARR</span>
                <span className="p-1 rounded-md bg-zinc-100 text-zinc-700">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-2xl font-bold font-mono tracking-tight text-zinc-900">
                $148,250
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 mt-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+14.8% vs last month</span>
              </div>
            </div>

            <div className="bg-white border border-zinc-200/90 rounded-xl p-4 shadow-xs hover:border-zinc-300 transition-all">
              <div className="flex items-center justify-between text-zinc-500 text-xs font-medium mb-2">
                <span>Active Workspaces</span>
                <span className="p-1 rounded-md bg-zinc-100 text-zinc-700">
                  <Layers className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-2xl font-bold font-mono tracking-tight text-zinc-900">
                1,842
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 mt-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+8.2% new clusters</span>
              </div>
            </div>

            <div className="bg-white border border-zinc-200/90 rounded-xl p-4 shadow-xs hover:border-zinc-300 transition-all">
              <div className="flex items-center justify-between text-zinc-500 text-xs font-medium mb-2">
                <span>Edge P99 Latency</span>
                <span className="p-1 rounded-md bg-zinc-100 text-zinc-700">
                  <Zap className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-2xl font-bold font-mono tracking-tight text-zinc-900">
                38.4<span className="text-sm font-normal text-zinc-500 ml-1">ms</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 mt-2">
                <ArrowDownRight className="w-3.5 h-3.5" />
                <span>-6.4ms improvement</span>
              </div>
            </div>

            <div className="bg-white border border-zinc-200/90 rounded-xl p-4 shadow-xs hover:border-zinc-300 transition-all">
              <div className="flex items-center justify-between text-zinc-500 text-xs font-medium mb-2">
                <span>Success Rate (SLO)</span>
                <span className="p-1 rounded-md bg-zinc-100 text-zinc-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-2xl font-bold font-mono tracking-tight text-zinc-900">
                99.985<span className="text-sm font-normal text-zinc-500 ml-1">%</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 mt-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Zero major incidents</span>
              </div>
            </div>
          </div>

          {/* Interactive Chart & Live Event Feed Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Cols: Interactive Graph Card */}
            <div className="lg:col-span-2 bg-white border border-zinc-200/90 rounded-xl p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-100">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">Throughput & Provisioning Trend</h3>
                  <p className="text-xs text-zinc-500">Aggregated payload traffic across all global PoPs</p>
                </div>

                {/* Metric Selector Tabs */}
                <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg text-xs font-medium">
                  <button
                    onClick={() => setChartMetric('revenue')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      chartMetric === 'revenue'
                        ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    Throughput (TB)
                  </button>
                  <button
                    onClick={() => setChartMetric('users')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      chartMetric === 'users'
                        ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    API Ops
                  </button>
                  <button
                    onClick={() => setChartMetric('requests')}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      chartMetric === 'requests'
                        ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    Cost Curve
                  </button>
                </div>
              </div>

              {/* Clean White Vector Bar/Line Chart Visualization */}
              <div className="h-56 mt-4 flex items-end gap-3 pt-6 pb-2 px-2">
                {[
                  { label: '01 Sep', height: '42%', val: '24.2 TB' },
                  { label: '05 Sep', height: '58%', val: '31.4 TB' },
                  { label: '09 Sep', height: '51%', val: '29.1 TB' },
                  { label: '13 Sep', height: '69%', val: '38.6 TB' },
                  { label: '17 Sep', height: '62%', val: '34.8 TB' },
                  { label: '21 Sep', height: '84%', val: '46.2 TB' },
                  { label: '25 Sep', height: '76%', val: '41.9 TB' },
                  { label: '28 Sep', height: '94%', val: '52.7 TB' },
                ].map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <div className="text-[10px] font-mono text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.val}
                    </div>
                    <div className="w-full bg-zinc-100 group-hover:bg-zinc-900 rounded-t-md transition-all duration-300 relative overflow-hidden" style={{ height: item.height }}>
                      <div className="absolute inset-x-0 top-0 h-1 bg-zinc-300 group-hover:bg-zinc-700"></div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Real-time Event Feed */}
            <div className="bg-white border border-zinc-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-zinc-700" />
                    <h3 className="text-sm font-bold text-zinc-900">Live Activity Feed</h3>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    LIVE STREAM
                  </span>
                </div>

                <div className="space-y-3.5 mt-3">
                  {[
                    {
                      title: 'Tokyo Edge PoP Autoscaled',
                      desc: '+4 high-memory nodes allocated',
                      time: '2m ago',
                      type: 'scale',
                    },
                    {
                      title: 'SOC2 Annual Key Rotation',
                      desc: 'Executed via KMS automated pipeline',
                      time: '18m ago',
                      type: 'security',
                    },
                    {
                      title: 'Webhook Redundancy Verified',
                      desc: '99.99% ACK across 14 endpoints',
                      time: '42m ago',
                      type: 'check',
                    },
                    {
                      title: 'New API Key Provisioned',
                      desc: 'Granted to service account worker-us-east',
                      time: '1h ago',
                      type: 'key',
                    },
                  ].map((evt, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <div className="w-2 h-2 rounded-full bg-zinc-400 mt-1.5 shrink-0"></div>
                      <div className="flex-1">
                        <div className="font-semibold text-zinc-800">{evt.title}</div>
                        <div className="text-zinc-500 text-[11px]">{evt.desc}</div>
                      </div>
                      <span className="text-[10px] text-zinc-400 font-mono shrink-0">{evt.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-4 py-2 text-center text-xs font-medium text-zinc-600 hover:text-zinc-900 border border-zinc-200 rounded-lg bg-zinc-50/50 hover:bg-zinc-100/50 transition-colors">
                View Full Audit History
              </button>
            </div>
          </div>

          {/* Clean White Data Table */}
          <div className="bg-white border border-zinc-200/90 rounded-xl overflow-hidden shadow-xs">
            <div className="p-4 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-zinc-900">Provisioned Workspaces</span>
                <span className="text-xs bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded-full font-mono font-medium">
                  {filteredData.length} records
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-lg text-xs font-medium">
                {(['all', 'enterprise', 'pro', 'starter'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-md capitalize transition-all ${
                      activeTab === tab
                        ? 'bg-white text-zinc-900 shadow-2xs font-semibold'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-zinc-50/80 border-b border-zinc-200/80 text-zinc-500 font-medium">
                    <th className="py-3 px-4">Workspace Name</th>
                    <th className="py-3 px-4">Team</th>
                    <th className="py-3 px-4">Tier</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Requests (30d)</th>
                    <th className="py-3 px-4">Latency</th>
                    <th className="py-3 px-4">Monthly Cost</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-700">
                  {filteredData.map((row) => (
                    <tr key={row.id} className="hover:bg-zinc-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-zinc-900 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                        <span>{row.name}</span>
                      </td>
                      <td className="py-3.5 px-4 text-zinc-600">{row.team}</td>
                      <td className="py-3.5 px-4">
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-zinc-200 bg-white">
                          {row.plan}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium ${
                            row.status === 'Active'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/50'
                              : row.status === 'Provisioning'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200/50'
                              : 'bg-zinc-100 text-zinc-600 border border-zinc-200/50'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              row.status === 'Active'
                                ? 'bg-emerald-500'
                                : row.status === 'Provisioning'
                                ? 'bg-amber-500'
                                : 'bg-zinc-400'
                            }`}
                          ></span>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono">{row.requests}</td>
                      <td className="py-3.5 px-4 font-mono text-zinc-500">{row.latency}</td>
                      <td className="py-3.5 px-4 font-mono font-medium text-zinc-900">{row.cost}</td>
                      <td className="py-3.5 px-4 text-right">
                        <button className="text-zinc-400 hover:text-zinc-800 p-1 rounded hover:bg-zinc-100 transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
