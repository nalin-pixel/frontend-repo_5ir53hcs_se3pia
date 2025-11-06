import React, { useState } from 'react';
import Header from './components/Header';
import ScoreInputForm from './components/ScoreInputForm';
import PredictionCard from './components/PredictionCard';
import RoadmapSteps from './components/RoadmapSteps';
import HowItWorks from './components/HowItWorks';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handlePredict = async ({ daily, pts, pas }) => {
    setError('');
    setResult(null);

    try {
      // Fallback client-side logistic calculation if backend is not available
      if (!API_BASE) {
        const z = -5 + 0.03 * daily + 0.04 * pts + 0.05 * pas; // simple heuristic
        const probability = 1 / (1 + Math.exp(-z));
        const label = probability >= 0.6 ? 'High Chance' : probability >= 0.4 ? 'Moderate' : 'Needs Work';
        const recommendation =
          label === 'High Chance'
            ? 'Great trajectory. Maintain consistent practice and polish your application materials.'
            : label === 'Moderate'
            ? 'Focus on weaker subjects and increase practice intensity before the next assessment.'
            : 'Prioritize fundamentals. Create a weekly plan and seek targeted help for tricky topics.';
        setResult({ probability, label, recommendation });
        return;
      }

      const res = await fetch(`${API_BASE}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ daily, pts, pas }),
      });

      if (!res.ok) throw new Error('Prediction failed');
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError(e.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 gap-6">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <ScoreInputForm onPredict={handlePredict} />
            {error && (
              <div className="bg-rose-50 text-rose-700 border border-rose-200 rounded-xl p-4 text-sm">
                {error}
              </div>
            )}
            <PredictionCard result={result} />
          </div>
          <div className="space-y-6">
            <HowItWorks />
            <RoadmapSteps />
          </div>
        </div>

        <section className="text-center text-xs text-zinc-500">
          Designed for ambitious high school students aiming for their dream university.
        </section>
      </main>
    </div>
  );
}
