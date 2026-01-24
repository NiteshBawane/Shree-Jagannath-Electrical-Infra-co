
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SERVICES_CONFIG } from '../constants';

export const Services: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  // Mapping specific high-quality photos for each service
  const servicePhotos: Record<string, string> = {
    'ht-line': "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    'lt-line': "https://tse3.mm.bing.net/th/id/OIP.T1bVGNHX9YIIJayem79-GgHaDt?pid=Api&P=0&h=180",
    'transformer': "https://transformermfg.net/wp-content/uploads/2024/08/Dry-Type-Transformer-Maintenance-Checklist_-Key-Tips.png",
    'cable': "https://i.ytimg.com/vi/4GISdbhD1ro/maxresdefault.jpg",
    'substation': "https://images.squarespace-cdn.com/content/v1/55070a56e4b082eea4ce48e5/1597232664079-KPK27V4F7LYZ7KIYWX73/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/aldridge-electric-top-electrical-infrastructure-construction-contractor-nationwide-utility-substation-power.jpg",
    'commercial': "https://img.freepik.com/premium-photo/construction-workers-installing-electrical-systems-wiring-building_372999-15945.jpg?w=2000",
    'domestic': "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800",
    'supply': "https://www.robertselectrical.ca/wp-content/uploads/2017/12/Electrical-suuplies001.jpg"
  };

  return (
    <div className="bg-white">
      {/* Services List Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 devanagari">{t.nav.services}</h1>
            <p className="text-gray-600 devanagari">
              {t.servicesPage.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CONFIG.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                 <div className="h-56 bg-gray-200 overflow-hidden relative">
                    <img 
                      src={servicePhotos[service.id] || `https://picsum.photos/seed/${service.id}/600/400`} 
                      alt={t.services[service.titleKey]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                 </div>
                 <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 bg-gray-50 text-gray-400 rounded-lg shrink-0 transition-all duration-300 group-hover:bg-red-50 group-hover:text-red-700 group-hover:scale-110">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 devanagari leading-tight transition-colors group-hover:text-red-700">
                        {t.services[service.titleKey]}
                      </h3>
                    </div>
                    <p className="text-gray-600 devanagari text-sm leading-relaxed mb-4">
                      {t.services.descriptions[service.titleKey]} {t.servicesPage.cardDetail}
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
