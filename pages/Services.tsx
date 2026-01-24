
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SERVICES_CONFIG } from '../constants';

export const Services: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  // Mapping specific high-quality Unsplash photos to each service ID
  const servicePhotos: Record<string, string> = {
    'ht-line': "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    'lt-line': "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800",
    'transformer': "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800",
    'cable': "https://images.unsplash.com/photo-1551846230-050495867160?auto=format&fit=crop&q=80&w=800",
    'substation': "https://images.unsplash.com/photo-1621905252507-b35242f8969d?auto=format&fit=crop&q=80&w=800",
    'commercial': "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    'domestic': "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800",
    'supply': "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&q=80&w=800"
  };

  return (
    <div className="bg-white">
      {/* Services List Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 devanagari">{t.nav.services}</h1>
            <p className="text-gray-600 devanagari">
              आम्ही महावितरण (MSEDCL) कडे अधिकृत नोंदणीकृत असून खालील सर्व विद्युत सेवा प्रदान करतो.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CONFIG.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                 <div className="h-56 bg-gray-200 overflow-hidden group">
                    <img 
                      src={servicePhotos[service.id] || `https://picsum.photos/seed/${service.id}/600/400`} 
                      alt={t.services[service.titleKey]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-red-50 text-red-700 rounded-lg shrink-0">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 devanagari leading-tight">
                        {t.services[service.titleKey]}
                      </h3>
                    </div>
                    <p className="text-gray-600 devanagari text-sm leading-relaxed mb-4">
                      {t.services.descriptions[service.titleKey]} आमचे तज्ञ सुरक्षित आणि नियमानुसार काम पूर्ण करण्याची खात्री देतात.
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-red-700 uppercase tracking-widest bg-red-50 px-2 py-1 rounded">MSEDCL Approved</span>
                      <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest bg-green-50 px-2 py-1 rounded">Certified</span>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
