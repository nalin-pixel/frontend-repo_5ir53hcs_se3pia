import React from 'react';
import { LineChart, Star } from 'lucide-react';

export default function PredictionCard({ result }) {
  if (!result) return null;

  const { probability, label, recommendation } = result;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
            <LineChart size={18} />
          </div>
          <div>
            <h3 className="font-semibold">Predicted Outcome</h3>
            <p className="text-xs text-zinc-500">AI classification result</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-amber-500">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
        </div>
      </div>

      <div className="mt-2">
        <div className="text-4xl font-bold tracking-tight">
          {(probability * 100).toFixed(1)}%
        </div>
        <div className="mt-1 text-sm uppercase tracking-wide text-zinc-500">{label}</div>
        {recommendation && (
          <p className="mt-4 text-zinc-700 leading-relaxed">{recommendation}</p>
        )}
      </div>

      <div className="mt-4 h-3 w-full bg-zinc-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500"
          style={{ width: `${Math.min(probability * 100, 100)}%` }}
        />
      </div>
    </div>
  );
}
