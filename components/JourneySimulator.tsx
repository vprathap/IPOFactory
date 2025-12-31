
import React, { useState } from 'react';
import { JOURNEY_STAGES } from '../constants';
import { ArrowRight, TrendingUp, Store, Target } from 'lucide-react';

const JourneySimulator: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stage = JOURNEY_STAGES[activeStage];

  return (
    <section className="bg-slate-900 py-24 text-white overflow-hidden" id="simulator">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
              Scaling Roadmap
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Watch a <span className="text-blue-400">Kirana</span> turn into a <span className="text-purple-400">Unicorn</span>.
            </h2>
            <p className="text-slate-400 text-lg">
              Raju bhai's story isn't just a dream. With ScaleShop AI, it's a predictable, 7-year automated journey to the public markets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {JOURNEY_STAGES.map((s, idx) => (
                <button
                  key={s.label}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                    activeStage === idx 
                    ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/20 translate-x-2' 
                    : 'bg-slate-800 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <p className="text-sm opacity-70 mb-1">{s.label}</p>
                  <p className="font-bold flex items-center justify-between">
                    {s.milestone}
                    <ArrowRight className={`w-4 h-4 transition-transform ${activeStage === idx ? 'translate-x-1' : ''}`} />
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Simulation Card */}
            <div className="glass-effect bg-white/5 border-white/10 p-8 rounded-3xl relative z-10 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-1">Current Scale</h3>
                  <p className="text-3xl font-bold">{stage.shops} {stage.shops === 1 ? 'Shop' : 'Shops'}</p>
                </div>
                <div className="text-right">
                  <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-1">Monthly Revenue</h3>
                  <p className="text-3xl font-bold text-emerald-400">{stage.revenue}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <TrendingUp className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Estimated Valuation</h4>
                    <p className="text-2xl font-black text-white">{stage.valuation}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                        <Target className="w-4 h-4 text-emerald-400" />
                        <span>Key Objective: {stage.milestone}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ease-out"
                            style={{ width: `${((activeStage + 1) / JOURNEY_STAGES.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/30 border border-white/5 text-center">
                    <p className="text-xs text-slate-400 mb-1 uppercase">Jobs Created</p>
                    <p className="text-xl font-bold">~{stage.shops * 8}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/30 border border-white/5 text-center">
                    <p className="text-xs text-slate-400 mb-1 uppercase">Tech ROI</p>
                    <p className="text-xl font-bold text-blue-400">{(activeStage + 1) * 3}x</p>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-purple-600/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySimulator;
