
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Award, Briefcase, Heart, User } from 'lucide-react';

export const About: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 devanagari">{t.about.title}</h1>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                 <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white">
                    <User className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-red-700 devanagari">{t.about.proprietor}</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Chartered Electrical Engineer</p>
                 </div>
              </div>
              <p className="text-gray-700 devanagari leading-relaxed">
                {t.about.experience} श्री जगन्नाथ इलेक्ट्रिकल्स & इंफ्रा. कं. चे नेतृत्व इंजिनिअर रुपेश धवस करत आहेत, ज्यांना या क्षेत्रातील तांत्रिक आणि व्यावहारिक कौशल्यांचा दीर्घ अनुभव आहे.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4 devanagari">{t.about.mission}</h2>
            <p className="text-gray-600 devanagari leading-relaxed">
              {t.about.missionText} आम्ही फक्त विद्युत कामे करत नाही, तर विश्वासाचे नाते निर्माण करतो. प्रत्येक प्रकल्प आमची गुणवत्ता आणि सुरक्षिततेप्रती असलेली वचनबद्धता सिद्ध करतो.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/elec1/400/500" className="rounded-2xl w-full h-64 object-cover" alt="Office" />
              <img src="https://picsum.photos/seed/elec2/400/300" className="rounded-2xl w-full h-48 object-cover" alt="Team" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://picsum.photos/seed/elec3/400/300" className="rounded-2xl w-full h-48 object-cover" alt="Work" />
              <img src="https://picsum.photos/seed/elec4/400/500" className="rounded-2xl w-full h-64 object-cover" alt="Safety" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Award, label: "प्रमाणित गुणवत्ता", desc: "आम्ही वापरतो फक्त आयएसआय प्रमाणित साहित्य." },
            { icon: Briefcase, label: "अनुभवी टीम", desc: "प्रशिक्षित आणि अनुभवी तंत्रज्ञांचा ताफा." },
            { icon: Heart, label: "ग्राहक समाधान", desc: "५००+ समाधानी ग्राहक आणि यशस्वी प्रकल्प." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 border border-gray-100 rounded-2xl bg-gray-50">
               <item.icon className="w-10 h-10 text-red-700 mx-auto mb-4" />
               <h4 className="font-bold text-gray-900 mb-2 devanagari">{item.label}</h4>
               <p className="text-sm text-gray-500 devanagari">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
