import React from 'react';
import { CheckCircle2, Target, BookOpen, FlaskConical } from 'lucide-react';

const steps = [
  {
    title: 'Foundation Review',
    desc: 'Strengthen core subjects: Math, Science, Language. Focus on weak topics from daily tests.',
    icon: BookOpen,
  },
  {
    title: 'Mid-term Optimization',
    desc: 'Simulate PTS with timed practice. Target consistency before increasing difficulty.',
    icon: FlaskConical,
  },
  {
    title: 'Final Sprint',
    desc: 'Refine exam strategy for PAS: past papers, error logs, spaced repetition.',
    icon: Target,
  },
  {
    title: 'Application Readiness',
    desc: 'Compile achievements and recommendation letters. Prepare personal statement.',
    icon: CheckCircle2,
  },
];

export default function RoadmapSteps() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-6">
      <h3 className="font-semibold mb-2">Personalized Roadmap</h3>
      <p className="text-xs text-zinc-500 mb-4">Actionable steps to improve your odds</p>
      <ul className="grid md:grid-cols-2 gap-4">
        {steps.map((s, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
              <s.icon size={18} />
            </div>
            <div>
              <h4 className="font-medium">{s.title}</h4>
              <p className="text-sm text-zinc-600">{s.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
