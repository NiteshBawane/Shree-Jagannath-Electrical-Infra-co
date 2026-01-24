
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Globe } from 'lucide-react';
import { Language } from '../types';
import { LANGUAGES, TRANSLATIONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<Omit<LayoutProps, 'children'>> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang];
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/certifications', label: t.nav.certs },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-red-700 font-bold text-xl leading-tight devanagari">
                {t.companyNameRegional}
              </span>
              <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                {t.companyName}
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  location.pathname === link.path ? 'text-red-700' : 'text-gray-600'
                } hover:text-red-600 font-medium transition-colors devanagari`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 border-l pl-8 ml-4">
              <Globe className="w-4 h-4 text-gray-400" />
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-xs px-2 py-1 rounded transition-all ${
                    lang === l.code ? 'bg-red-700 text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-red-700 p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-700 hover:bg-gray-50 rounded-md devanagari"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-5 py-3 border-t border-gray-100 flex items-center space-x-2 overflow-x-auto">
            <Globe className="w-4 h-4 text-gray-400 shrink-0" />
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setIsOpen(false);
                }}
                className={`text-sm px-4 py-1.5 rounded-full transition-all shrink-0 ${
                  lang === l.code ? 'bg-red-700 text-white shadow-lg' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  
  const getWhatsAppLink = () => {
    const msg = lang === 'mr' 
      ? "नमस्कार, मला श्री जगन्नाथ इलेक्ट्रिकल्सच्या सेवांबद्दल अधिक माहिती हवी आहे." 
      : lang === 'hi' 
      ? "नमस्ते, मुझे श्री जगन्नाथ इलेक्ट्रिकल्स की सेवाओं के बारे में और जानकारी चाहिए।" 
      : "Hello, I would like to know more about the services offered by Shree Jagannath Electricals.";
    return `https://wa.me/918411007259?text=${encodeURIComponent(msg)}`;
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4 devanagari">{t.companyNameRegional}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t.govtReg} <br />
              {t.msedclApproved}
            </p>
            <div className="flex space-x-4">
              <a href="tel:+918411007259" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 transition-all hover:scale-110">
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-700 transition-all hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 devanagari">{t.nav.services}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>{t.services.htLine}</li>
              <li>{t.services.ltLine}</li>
              <li>{t.services.transformer}</li>
              <li>{t.services.substation}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 devanagari">{t.nav.contact}</h4>
            <div className="text-gray-400 text-sm space-y-4">
              <p>{t.contact.address}</p>
              <p>Email: shreejagannathelectrical@gmail.com</p>
              <p>Phone: +91 8411007259</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Shree Jagannath Electricals & Infra Co. All rights reserved.</p>
          <p className="mt-4 md:mt-0 uppercase tracking-widest font-bold opacity-60">Design & Approved for MSEDCL Projects</p>
        </div>
      </div>
      
      {/* Sticky Quick Contact Buttons (Mobile) */}
      <div className="md:hidden fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        <a 
          href={getWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-600 text-white p-5 rounded-full shadow-[0_10px_30px_rgba(22,163,74,0.4)] hover:scale-110 transition-transform animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a href="tel:+918411007259" className="bg-red-700 text-white p-5 rounded-full shadow-[0_10px_30px_rgba(185,28,28,0.4)] hover:scale-110 transition-transform">
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, lang, setLang }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar lang={lang} setLang={setLang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  );
};
