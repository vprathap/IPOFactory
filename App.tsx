
import React, { useEffect, useState } from 'react';
import { Rocket, ShieldCheck, Globe, ArrowUpRight, Menu, X } from 'lucide-react';
import ComparisonDashboard from './components/ComparisonDashboard';
import JourneySimulator from './components/JourneySimulator';
import AIAdvisor from './components/AIAdvisor';
import Features from './components/Features';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen hero-gradient">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3 shadow-md' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
              <Rocket size={24} />
            </div>
            <span className="text-xl font-extrabold tracking-tight">ScaleShop <span className="text-blue-600">AI</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Platform</a>
            <a href="#simulator" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Roadmap</a>
            <a href="#advisor" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Strategy AI</a>
            <button className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95">
              Launch My Shop
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold animate-fade-in">
              <ShieldCheck size={16} />
              The IPO Factory for India's 1 Million Shops
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
              India's <span className="gradient-text">Shopify</span> for Kiranas.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              99.9% of Indian shops close in 5 years. We provide the AI, Franchise tools, and IPO automation to turn Raju bhai's shop into a ₹3,000Cr public company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group">
                Scale My Business Now
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:border-slate-300 transition-all shadow-sm">
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i + 100}/100/100`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                ))}
              </div>
              <p className="text-sm text-slate-500">
                <span className="font-bold text-slate-900">7,000+</span> Shop owners already scaling
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
                <img 
                    src="https://picsum.photos/seed/retail/800/600" 
                    alt="Indian Shop" 
                    className="rounded-3xl shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl shadow-xl space-y-3 max-w-[200px] border border-white/50">
                    <p className="text-xs font-bold text-slate-500 uppercase">AI Boost</p>
                    <p className="text-2xl font-black text-emerald-600">+27.4%</p>
                    <p className="text-[10px] text-slate-400">Monthly revenue growth after Month 6</p>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        <ComparisonDashboard />
        <Features />
        <JourneySimulator />
        <AIAdvisor />

        {/* Impact Section */}
        <section className="py-24 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-black">Economic Impact 2030</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="text-5xl font-black">100</p>
                <p className="text-blue-100 text-lg">New Unicorns Created</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-black">₹3L Cr</p>
                <p className="text-blue-100 text-lg">Market Cap Addition</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-black">7Cr</p>
                <p className="text-blue-100 text-lg">New Retail Investors</p>
              </div>
            </div>
            <p className="text-blue-100 max-w-2xl mx-auto italic">
              "India doesn't lack entrepreneurs; it lacks the infrastructure to scale them. ScaleShop AI is that missing bridge."
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto glass-effect bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight relative z-10">
              Ready to take your shop <br className="hidden md:block" /> to the NSE/BSE?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto relative z-10">
              Join the movement that's unlocking ₹50 lakh crore in household wealth for the Indian middle class.
            </p>
            <div className="pt-4 relative z-10">
              <button className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-xl hover:bg-slate-100 transition-all shadow-xl active:scale-95">
                Start My Scaling Journey
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50 grayscale">
            <Rocket size={20} />
            <span className="font-bold">ScaleShop AI © 2025</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Governance</a>
            <a href="#" className="hover:text-blue-600">Case Studies</a>
            <a href="#" className="hover:text-blue-600">Documentation</a>
          </div>
          <div className="flex gap-4">
            <Globe size={20} className="text-slate-400" />
            <span className="text-slate-500 text-sm">Empowering Tirupati to Mumbai</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
