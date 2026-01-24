
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 devanagari">{t.nav.contact}</h1>
          <p className="text-gray-600 devanagari">
            {t.contact.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
               <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-50 text-red-700 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 devanagari">{t.contact.addressLabel}</h4>
                    <p className="text-sm text-gray-500 devanagari">{t.contact.address}</p>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
               <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 text-green-700 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 devanagari">{t.contact.phoneLabel}</h4>
                    <p className="text-sm text-gray-500 devanagari">{t.contact.phone}</p>
                  </div>
               </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
               <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 devanagari">{t.contact.emailLabel}</h4>
                    <p className="text-sm text-gray-500">shreejagannathelectrical@gmail.com</p>
                  </div>
               </div>
            </div>
            
            <a 
              href="https://wa.me/918411007259" 
              className="flex items-center justify-center space-x-3 w-full p-6 bg-green-600 text-white rounded-3xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="devanagari">{t.contact.whatsappAction}</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            <form className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 devanagari">{t.contact.formName}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-700 outline-none transition-all" 
                      placeholder={t.contact.formNamePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 devanagari">{t.contact.formEmail}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-700 outline-none transition-all" 
                      placeholder={t.contact.formEmailPlaceholder}
                    />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 devanagari">{t.contact.formSubject}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-700 outline-none transition-all" 
                    placeholder={t.contact.formSubjectPlaceholder}
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 devanagari">{t.contact.formMessage}</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-700 outline-none transition-all resize-none" 
                    placeholder={t.contact.formMessagePlaceholder}
                  />
               </div>
               <button 
                 type="submit" 
                 className="w-full py-4 bg-red-700 text-white font-bold rounded-xl hover:bg-red-800 transition-all shadow-lg hover:shadow-red-200 flex items-center justify-center space-x-2 devanagari"
               >
                  <Send className="w-5 h-5" />
                  <span>{t.contact.formSubmit}</span>
               </button>
            </form>
            
            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 flex-col">
                  <MapPin className="w-12 h-12 mb-2" />
                  <p className="font-bold devanagari">भद्रावती, महाराष्ट्र</p>
                  <p className="text-xs">Google Maps Loading...</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
