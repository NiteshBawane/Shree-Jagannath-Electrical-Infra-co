
import React, { useState, useEffect, useRef } from 'react';
import { Send, Sparkles, Loader2, User, Bot, Zap, Building, Home, Trash2 } from 'lucide-react';
import { getSmartQuoteAdvice } from '../geminiService';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface AIQuoteAssistantProps {
  lang: Language;
}

export const AIQuoteAssistant: React.FC<AIQuoteAssistantProps> = ({ lang }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[lang];

  // Initial Greeting
  useEffect(() => {
    const greeting = lang === 'mr' 
      ? "नमस्कार! मी श्री जगन्नाथ इलेक्ट्रिकल्सचा डिजिटल असिस्टंट आहे. मी तुम्हाला प्रोजेक्ट प्लॅनिंग किंवा कोटेशनमध्ये कशी मदत करू शकतो?"
      : lang === 'hi'
      ? "नमस्कार! मैं श्री जगन्नाथ इलेक्ट्रिकल्स का डिजिटल असिस्टेंट हूँ। मैं प्रोजेक्ट प्लानिंग में आपकी क्या मदद कर सकता हूँ?"
      : "Hello! I am the Digital Assistant for Shree Jagannath Electricals. How can I help you with your project planning or quotation today?";
    
    if (messages.length === 0) {
      setMessages([{ role: 'bot', text: greeting }]);
    }
  }, [lang]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e?: React.FormEvent, customText?: string) => {
    if (e) e.preventDefault();
    const messageToSend = customText || input;
    
    if (!messageToSend.trim() || loading) return;

    setMessages(prev => [...prev, { role: 'user', text: messageToSend }]);
    setInput('');
    setLoading(true);

    const advice = await getSmartQuoteAdvice(messageToSend, lang);
    setMessages(prev => [...prev, { role: 'bot', text: advice || "Error connecting to AI service." }]);
    setLoading(false);
  };

  const suggestions = [
    { label: lang === 'mr' ? "नवीन ट्रान्सफॉर्मर" : "New Transformer", icon: Zap, text: "मला नवीन ट्रान्सफॉर्मर इन्स्टॉलेशनबद्दल माहिती हवी आहे." },
    { label: lang === 'mr' ? "HT/LT लाईन वर्क" : "HT/LT Line Work", icon: Building, text: "मला HT/LT लाईन वर्कसाठी कोटेशन हवे आहे." },
    { label: lang === 'mr' ? "घरगुती वायरिंग" : "House Wiring", icon: Home, text: "नवीन घराच्या वायरिंगसाठी काय खर्च येईल?" }
  ];

  const clearChat = () => setMessages([]);

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl overflow-hidden flex flex-col h-[600px] relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-50 pb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-red-700 rounded-xl shadow-lg shadow-red-100">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-extrabold text-gray-900 devanagari text-lg leading-none">AI प्रोजेक्ट असिस्टंट</h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Technical Advisor v2.0</p>
          </div>
        </div>
        <button 
          onClick={clearChat}
          className="p-2 text-gray-300 hover:text-red-700 transition-colors"
          title="Clear Chat"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Window */}
      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar scroll-smooth"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm shadow-sm ${
              m.role === 'user' 
                ? 'bg-red-700 text-white rounded-tr-none' 
                : 'bg-gray-50 border border-gray-100 text-gray-800 rounded-tl-none'
            }`}>
              <div className="flex items-center space-x-2 mb-1.5 opacity-60">
                {m.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                <span className="text-[9px] uppercase font-black tracking-tighter">
                  {m.role === 'user' ? 'Customer' : 'Er. Rupesh Assistant'}
                </span>
              </div>
              <p className="devanagari leading-relaxed text-[15px]">{m.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 shadow-sm rounded-tl-none">
              <div className="flex items-center space-x-3">
                <Loader2 className="w-4 h-4 animate-spin text-red-700" />
                <span className="text-xs font-bold text-gray-400 animate-pulse">Thinking technical solution...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Suggestions */}
      {messages.length < 4 && !loading && (
        <div className="flex flex-wrap gap-2 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSubmit(undefined, s.text)}
              className="flex items-center space-x-2 px-3 py-2 bg-red-50 text-red-700 border border-red-100 rounded-full text-xs font-bold hover:bg-red-700 hover:text-white transition-all transform hover:-translate-y-0.5 devanagari shadow-sm"
            >
              <s.icon className="w-3 h-3" />
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Input Form - Fixed closing tag from div to form */}
      <form onSubmit={handleSubmit} className="relative mt-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={lang === 'mr' ? "प्रकल्प प्रश्नासाठी येथे लिहा..." : "Type your project query..."}
          className="w-full pl-5 pr-14 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-red-700/10 focus:border-red-700 outline-none transition-all devanagari text-gray-700 bg-gray-50/50"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 bg-red-700 text-white rounded-xl hover:bg-red-800 disabled:opacity-30 disabled:hover:bg-red-700 transition-all shadow-lg shadow-red-200"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
