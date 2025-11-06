import React from 'react';
import { GraduationCap, Rocket, LineChart } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
            <GraduationCap size={22} />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Pathway AI</h1>
            <p className="text-xs text-zinc-500 -mt-0.5">Predictive Academic Roadmap</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
          <span className="inline-flex items-center gap-2"><LineChart size={16}/> Real-time scoring</span>
          <span className="inline-flex items-center gap-2"><Rocket size={16}/> University-ready</span>
        </div>
      </div>
    </header>
  );
}
