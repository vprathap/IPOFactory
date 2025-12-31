
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">The Unicorn Factory Engine</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">ScaleShop Path: From pen-and-paper to a ₹3,000Cr listing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
