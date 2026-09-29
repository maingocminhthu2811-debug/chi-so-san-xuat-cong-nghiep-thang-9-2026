import React, { useState } from 'react';
import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  CreditCard,
  Eye,
  EyeOff,
  Fingerprint,
  Home,
  PieChart,
  Plus,
  Send,
  Settings,
  Shield,
  Smartphone,
  Sparkles,
  User,
  Wallet,
  Wifi,
} from 'lucide-react';

export const MobileAppLayout: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'cards' | 'stats' | 'profile'>('home');
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cards = [
    {
      type: 'Titanium Obsidian',
      number: '•••• 4892',
      expiry: '09/29',
      balance: '$24,850.40',
      theme: 'bg-zinc-900 text-white',
    },
    {
      type: 'Cloud White Virtual',
      number: '•••• 1204',
      expiry: '12/28',
      balance: '$6,210.00',
      theme: 'bg-white border border-zinc-200 text-zinc-900 shadow-sm',
    },
  ];

  const transactions = [
    {
      id: 'tx-1',
      name: 'Apple Store Regent St',
      category: 'Electronics',
      date: 'Today, 2:45 PM',
      amount: '-$1,299.00',
      isIncome: false,
    },
    {
      id: 'tx-2',
      name: 'Stripe SaaS Payout',
      category: 'Income',
      date: 'Yesterday',
      amount: '+$4,820.00',
      isIncome: true,
    },
    {
      id: 'tx-3',
      name: 'Aesop Fragrance Labs',
      category: 'Lifestyle',
      date: '24 Sep',
      amount: '-$185.50',
      isIncome: false,
    },
    {
      id: 'tx-4',
      name: 'Figma Organization',
      category: 'Software Subscription',
      date: '22 Sep',
      amount: '-$45.00',
      isIncome: false,
    },
  ];

  return (
    <div className="w-full py-10 px-4 flex items-center justify-center bg-zinc-50/50 min-h-[850px] select-none font-sans">
      {/* Smartphone Device Frame in Clean White / Silver */}
      <div className="w-full max-w-[380px] bg-white rounded-[44px] border-[8px] border-zinc-200 shadow-2xl overflow-hidden flex flex-col justify-between h-[760px] relative">
        {/* Phone Top Notch & Status Bar */}
        <div className="pt-3 px-6 pb-2 flex items-center justify-between text-xs font-semibold text-zinc-800 shrink-0">
          <span className="font-mono text-[11px]">9:41</span>
          {/* Dynamic Island pill */}
          <div className="w-20 h-4 bg-zinc-900 rounded-full mx-auto"></div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <Wifi className="w-3.5 h-3.5" />
            <div className="w-4 h-2.5 border border-zinc-800 rounded-xs p-0.5 flex items-center">
              <div className="w-full h-full bg-zinc-800 rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* Scrollable Mobile App Body */}
        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-5">
          {/* App Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center font-bold text-xs text-zinc-800">
                SC
              </div>
              <div>
                <div className="text-[11px] text-zinc-400">Welcome back</div>
                <div className="text-xs font-bold text-zinc-900">Soren Claesson</div>
              </div>
            </div>
            <button className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors">
              <Bell className="w-4 h-4" />
            </button>
          </div>

          {/* Balance Presentation */}
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-4">
            <div className="flex items-center justify-between text-[11px] text-zinc-500 font-medium mb-1">
              <span>Total Liquid Wealth</span>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-zinc-400 hover:text-zinc-700"
              >
                {showBalance ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div className="text-2xl font-bold font-mono text-zinc-900">
              {showBalance ? cards[activeCardIndex].balance : '••••••••'}
            </div>
            <div className="text-[10px] text-emerald-600 font-mono mt-1 flex items-center gap-1">
              <span>+8.4% monthly gain</span>
            </div>
          </div>

          {/* Swipeable Virtual Cards */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-zinc-800 mb-2">
              <span>Payment Cards</span>
              <div className="flex gap-1">
                {cards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCardIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeCardIndex === i ? 'w-4 bg-zinc-900' : 'bg-zinc-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div
              className={`w-full rounded-2xl p-4 aspect-[1.6/1] flex flex-col justify-between transition-all duration-300 ${cards[activeCardIndex].theme}`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-xs">{cards[activeCardIndex].type}</span>
                <Fingerprint className="w-4 h-4 opacity-75" />
              </div>
              <div className="text-base font-mono tracking-widest my-2">
                {cards[activeCardIndex].number}
              </div>
              <div className="flex items-center justify-between text-[10px] opacity-75 font-mono">
                <span>SOREN CLAESSON</span>
                <span>EXP {cards[activeCardIndex].expiry}</span>
              </div>
            </div>
          </div>

          {/* 4 Quick Action Buttons */}
          <div className="grid grid-cols-4 gap-2 pt-1 text-center">
            <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-zinc-100 transition-colors">
              <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center">
                <Send className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-medium text-zinc-700">Transfer</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-zinc-100 transition-colors">
              <div className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-800 flex items-center justify-center border border-zinc-200">
                <Plus className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-medium text-zinc-700">Top up</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-zinc-100 transition-colors">
              <div className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-800 flex items-center justify-center border border-zinc-200">
                <PieChart className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-medium text-zinc-700">Insights</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-zinc-100 transition-colors">
              <div className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-800 flex items-center justify-center border border-zinc-200">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-medium text-zinc-700">Vault</span>
            </button>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-zinc-800 mb-2">
              <span>Recent Transactions</span>
              <button className="text-[11px] text-zinc-500 hover:text-zinc-900">See all</button>
            </div>

            <div className="space-y-2">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        tx.isIncome
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-zinc-100 text-zinc-700'
                      }`}
                    >
                      {tx.isIncome ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-zinc-900">{tx.name}</div>
                      <div className="text-[10px] text-zinc-400">{tx.date}</div>
                    </div>
                  </div>
                  <span
                    className={`font-mono text-xs font-bold ${
                      tx.isIncome ? 'text-emerald-600' : 'text-zinc-900'
                    }`}
                  >
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Mobile Tab Bar */}
        <div className="border-t border-zinc-200/80 bg-white/90 backdrop-blur-md px-6 py-3 flex items-center justify-between text-zinc-400 shrink-0">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'home' ? 'text-zinc-900' : 'hover:text-zinc-600'}`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[9px] font-medium">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('cards')}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'cards' ? 'text-zinc-900' : 'hover:text-zinc-600'}`}
          >
            <CreditCard className="w-5 h-5" />
            <span className="text-[9px] font-medium">Cards</span>
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'stats' ? 'text-zinc-900' : 'hover:text-zinc-600'}`}
          >
            <PieChart className="w-5 h-5" />
            <span className="text-[9px] font-medium">Activity</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'profile' ? 'text-zinc-900' : 'hover:text-zinc-600'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-[9px] font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};
