import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function ScoreInputForm({ onPredict }) {
  const [daily, setDaily] = useState('');
  const [pts, setPts] = useState('');
  const [pas, setPas] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const d = parseFloat(daily) || 0;
    const p1 = parseFloat(pts) || 0;
    const p2 = parseFloat(pas) || 0;
    setLoading(true);
    try {
      await onPredict({ daily: d, pts: p1, pas: p2 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
          <Calculator size={18} />
        </div>
        <div>
          <h3 className="font-semibold">Enter Your Scores</h3>
          <p className="text-xs text-zinc-500">Daily tests, mid-term (PTS) and final (PAS)</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Daily Tests</label>
          <input
            type="number"
            step="0.01"
            value={daily}
            onChange={(e) => setDaily(e.target.value)}
            placeholder="e.g., 85"
            className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">PTS (Mid-term)</label>
          <input
            type="number"
            step="0.01"
            value={pts}
            onChange={(e) => setPts(e.target.value)}
            placeholder="e.g., 80"
            className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">PAS (Final)</label>
          <input
            type="number"
            step="0.01"
            value={pas}
            onChange={(e) => setPas(e.target.value)}
            placeholder="e.g., 90"
            className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="md:col-span-3 flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Predicting…' : 'Predict Success Probability'}
          </button>
        </div>
      </form>
    </div>
  );
}
