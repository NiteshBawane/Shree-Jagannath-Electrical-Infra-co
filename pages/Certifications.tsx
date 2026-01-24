
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { ShieldCheck, FileCheck, CheckCircle, Award } from 'lucide-react';

export const Certifications: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const certs = [
    {
      title: "महावितरण (MSEDCL) नोंदणी",
      authority: "महाराष्ट्र राज्य विद्युत वितरण कंपनी मर्यादित",
      desc: "उच्च दाब (HT) आणि लघु दाब (LT) कामांसाठी 'अ' वर्ग अधिकृत कंत्राटदार.",
      icon: ShieldCheck
    },
    {
      title: "सरकारी परवाना (Electrical License)",
      authority: "विद्युत निरीक्षक विभाग, महाराष्ट्र शासन",
      desc: "सर्व प्रकारचे शासकीय विद्युत प्रकल्प हाताळण्याचा कायदेशीर परवाना.",
      icon: FileCheck
    },
    {
      title: "जीएसटी नोंदणी (GST Registration)",
      authority: "वित्त मंत्रालय, भारत सरकार",
      desc: "नियमानुसार टॅक्स कॉम्प्लायन्स पाळणारी व्यावसायिक संस्था.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 devanagari">{t.nav.certs}</h1>
          <p className="text-gray-600 devanagari">
            आम्ही सर्व शासकीय नियमांचे पालन करतो आणि आवश्यक सर्व प्रमाणपत्रांसह आपली सेवा बजावतो.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:border-red-200 transition-colors">
              <div className="mb-6 md:mb-0 md:mr-8 p-4 bg-white rounded-2xl shadow-sm text-red-700">
                <cert.icon className="w-12 h-12" />
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
          ))}
        </div>

        <div className="mt-24 p-12 bg-red-700 rounded-3xl text-white overflow-hidden relative">
           <div className="relative z-10 text-center">
              <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl font-bold mb-4 devanagari">आम्ही गुणवत्तेशी कधीच तडजोड करत नाही</h2>
              <p className="text-red-100 max-w-2xl mx-auto devanagari leading-relaxed">
                 आमची सर्व कामे भारतीय विद्युत नियमावली (Indian Electricity Rules) नुसार आणि पूर्ण सुरक्षिततेसह केली जातात.
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
