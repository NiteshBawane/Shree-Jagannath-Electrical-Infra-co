
import React, { useState } from 'react';
import { Send, Sparkles, Loader2, User, Bot } from 'lucide-react';
import { getSmartQuoteAdvice } from '../geminiService';
import { Language, TranslationStrings } from '../types';
import { TRANSLATIONS } from '../constants';

interface AIQuoteAssistantProps {
  lang: Language;
}

export const AIQuoteAssistant: React.FC<AIQuoteAssistantProps> = ({ lang }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const t = TRANSLATIONS[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    const advice = await getSmartQuoteAdvice(userText, lang);
    setMessages(prev => [...prev, { role: 'bot', text: advice || "Sorry, I'm having trouble connecting. Please call us directly." }]);
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[500px]">
      <div className="flex items-center space-x-2 mb-6">
        <div className="p-2 bg-red-100 rounded-lg">
          <Sparkles className="w-5 h-5 text-red-700" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 devanagari">AI प्रोजेक्ट असिस्टंट</h3>
          <p className="text-xs text-gray-500">Instant Project Guidance</p>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar">
        {messages.length === 0 && (
          <div className="text-center py-10 opacity-50">
            <Bot className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p className="text-sm devanagari">तुमच्या प्रकल्पाबद्दल विचारून पहा (उदा: "मला ट्रान्सफॉर्मर बसवायचा आहे")</p>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
              m.role === 'user' 
                ? 'bg-red-700 text-white rounded-tr-none' 
                : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none shadow-sm'
            }`}>
              <div className="flex items-center space-x-2 mb-1">
                {m.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">
                  {m.role === 'user' ? 'You' : 'Advisor'}
                </span>
              </div>
              <p className="devanagari leading-relaxed">{m.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2 shadow-sm rounded-tl-none">
              <Loader2 className="w-4 h-4 animate-spin text-red-700" />
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="relative mt-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={lang === 'mr' ? "तुमचा प्रश्न विचारा..." : "Ask your question..."}
          className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none devanagari"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-red-700 text-white rounded-lg hover:bg-red-800 disabled:opacity-50 transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
