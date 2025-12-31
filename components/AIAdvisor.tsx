
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { getAIAdvisorResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Namaste! I'm your ScaleShop Strategy Advisor. How can I help you take your shop to the next level today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const context = "ScaleShop AI helps Indian SMEs scale. Focus on Inventory, Franchise model, Investor Readiness, and IPO goals.";
    const response = await getAIAdvisorResponse(userMsg, context);

    setMessages(prev => [...prev, { role: 'ai', content: response || "I'm having trouble thinking clearly. Let me try again." }]);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-white" id="advisor">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Ask the Strategy AI</h2>
          <p className="text-slate-600">Get instant advice on how to scale your specific business type.</p>
        </div>

        <div className="border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Bot size={20} />
            </div>
            <div>
              <p className="font-bold text-sm">ScaleShop Strategy Advisor</p>
              <p className="text-xs text-emerald-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Ready to Scale
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-slate-200' : 'bg-blue-600 text-white'}`}>
                    {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 shadow-sm'}`}>
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ex: How do I scale my pharmacy to 10 cities?"
                className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
