
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { COMPARISON_DATA, SUPPLY_GAP_DATA } from '../constants';

const ComparisonDashboard: React.FC = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Massive Wealth Gap</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">India's 1.4B people are underserved by just 7,000 listed companies. We're here to close that 21x market cap gap.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Metric Comparison */}
        <div className="glass-effect p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            US vs India: Listed Penetration
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COMPARISON_DATA.filter(d => d.name !== 'Population')}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Legend iconType="circle" />
                <Bar name="USA (Benchmark)" dataKey="usa" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={40} />
                <Bar name="India (Actual)" dataKey="india" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {COMPARISON_DATA.slice(1, 5).map(m => (
              <div key={m.name} className="p-3 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500 mb-1">{m.name}</p>
                <p className="font-bold text-red-500">{m.gap}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Gap */}
        <div className="glass-effect p-6 rounded-2xl shadow-sm">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
            ₹7 Lakh Cr Trapped Wealth
          </h3>
          <p className="text-sm text-slate-500 mb-6">Mutual Fund money is growing faster than new IPO supply, creating inflated valuations for the few while excluding the many.</p>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={SUPPLY_GAP_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Legend iconType="circle" />
                <Line name="MF Inflow (₹ Cr)" type="monotone" dataKey="mfInflow" stroke="#7c3aed" strokeWidth={3} dot={{r: 6}} />
                <Line name="IPO Raised (₹ Cr)" type="monotone" dataKey="ipoRaised" stroke="#10b981" strokeWidth={3} dot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
            <p className="text-sm text-purple-700 font-medium">
              Result: Supply Gap is forcing 6x more capital into the same limited assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonDashboard;
