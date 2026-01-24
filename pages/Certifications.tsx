
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { ShieldCheck, FileCheck, CheckCircle, Award } from 'lucide-react';

export const Certifications: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const icons = [ShieldCheck, FileCheck, CheckCircle];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 devanagari">{t.nav.certs}</h1>
          <p className="text-gray-600 devanagari">
            {t.certsPage.intro}
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {t.certsPage.items.map((cert, i) => {
            const IconComp = icons[i] || ShieldCheck;
            return (
              <div key={i} className="flex flex-col md:flex-row items-center bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:border-red-200 transition-colors">
                <div className="mb-6 md:mb-0 md:mr-8 p-4 bg-white rounded-2xl shadow-sm text-red-700">
                  <IconComp className="w-12 h-12" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 devanagari">{cert.title}</h3>
                  <p className="text-sm font-semibold text-red-700 mb-3 devanagari">{cert.authority}</p>
                  <p className="text-gray-600 devanagari leading-relaxed">{cert.desc}</p>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8">
                   <div className="px-4 py-2 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase tracking-widest border border-green-200">
                      Verified
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 p-12 bg-red-700 rounded-3xl text-white overflow-hidden relative">
           <div className="relative z-10 text-center">
              <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4 devanagari">{t.certsPage.footerTitle}</h2>
              <p className="text-red-100 max-w-2xl mx-auto devanagari leading-relaxed">
                 {t.certsPage.footerDesc}
              </p>
           </div>
           <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
           </div>
        </div>
      </div>
    </div>
  );
};
