import React from 'react';
import { Brain, Gauge, Shield } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 rounded-2xl border border-zinc-200 p-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-white/70 border border-white rounded-xl shadow-sm">
          <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center mb-3">
            <Brain size={18} />
          </div>
          <h3 className="font-semibold mb-1">AI Classification</h3>
          <p className="text-sm text-zinc-600">A model learns from your scores to classify success likelihood and propose next steps.</p>
        </div>
        <div className="p-4 bg-white/70 border border-white rounded-xl shadow-sm">
          <div className="h-9 w-9 rounded-lg bg-sky-600 text-white flex items-center justify-center mb-3">
            <Gauge size={18} />
          </div>
          <h3 className="font-semibold mb-1">Real-time Input</h3>
          <p className="text-sm text-zinc-600">Update daily test, PTS, and PAS scores any time. See the impact instantly.</p>
        </div>
        <div className="p-4 bg-white/70 border border-white rounded-xl shadow-sm">
          <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3">
            <Shield size={18} />
          </div>
          <h3 className="font-semibold mb-1">Privacy First</h3>
          <p className="text-sm text-zinc-600">Your academic data stays secure. Only you control what is shared.</p>
        </div>
      </div>
    </section>
  );
}
