
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, SERVICES_CONFIG } from '../constants';
import { AIQuoteAssistant } from '../components/AIQuoteAssistant';

export const Home: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = t.testimonials.items;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-white pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6 border border-red-100 shadow-sm animate-trust-badge">
                <ShieldCheck className="w-4 h-4 text-red-700" />
                <span className="text-sm font-bold devanagari trust-shimmer animate-jump">
                  {t.govtReg}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] mb-6 devanagari">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed devanagari">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:+918411007259"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-700 text-white font-bold rounded-xl hover:bg-red-800 transition-all shadow-lg hover:shadow-red-200/50 devanagari"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-200 hover:border-red-700 hover:text-red-700 transition-all devanagari"
                >
                  {t.hero.ctaSecondary}
                </Link>
              </div>
              
              <div className="mt-12 flex items-center space-x-8 opacity-80 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center">
                   <img 
                    src="https://www.mypunepulse.com/wp-content/uploads/2023/02/msedcl-1.jpg" 
                    alt="MSEDCL Logo" 
                    className="h-10 w-auto object-contain" 
                   />
                   <span className="text-[10px] mt-1 font-bold text-gray-500">MSEDCL AUTH</span>
                </div>
                <div className="flex flex-col items-center border-l pl-8">
                   <img 
                    src="https://tse3.mm.bing.net/th/id/OIP.NVPwkB7P2LUDOReA1Gl5KQHaE8?pid=Api&P=0&h=180" 
                    alt="ISO 9001 Logo" 
                    className="h-10 w-auto object-contain" 
                   />
                   <span className="text-[10px] mt-1 font-bold text-gray-500">ISO 9001:2015</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src="https://www.osha.gov/sites/default/files/inline-images/substation_energy_flow.jpg" 
                  alt="Electrical Contractor Work" 
                  className="w-full h-auto object-cover min-h-[400px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-700 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <Award className="w-10 h-10 mb-4" />
                <h4 className="font-bold text-xl mb-2 devanagari">{t.experienceYears}</h4>
                <p className="text-sm opacity-90 devanagari">{t.experienceSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -z-0" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -z-0" />
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 devanagari">{t.nav.services}</h2>
            <p className="text-gray-600 devanagari">{t.servicesPage.intro}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_CONFIG.slice(0, 4).map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-red-50 text-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 devanagari">{t.services[service.titleKey]}</h3>
                <p className="text-gray-500 text-sm devanagari leading-relaxed">
                  {t.services.descriptions[service.titleKey]}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="text-red-700 font-bold hover:underline inline-flex items-center space-x-2 devanagari">
              <span>{t.serviceViewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 devanagari">{t.testimonials.title}</h2>
            <p className="text-gray-600 devanagari">{t.testimonials.subtitle}</p>
          </div>

          <div className="relative bg-gray-50 rounded-[2.5rem] p-8 md:p-16 overflow-hidden border border-gray-100">
            {/* Background Icon */}
            <Quote className="absolute top-10 right-10 w-48 h-48 text-gray-200/50 -rotate-12 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 p-3 bg-red-700 text-white rounded-full">
                  <Quote className="w-6 h-6 fill-current" />
                </div>
                
                <div className="min-h-[200px] flex flex-col justify-center">
                  <p className="text-xl md:text-2xl text-gray-800 font-medium italic mb-8 devanagari leading-relaxed">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 devanagari">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-sm text-red-700 font-bold uppercase tracking-widest mt-1">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <div className="mt-4 px-4 py-1.5 bg-white border border-gray-200 inline-block rounded-full shadow-sm">
                      <span className="text-xs font-bold text-gray-500 devanagari">
                        Project: {testimonials[activeTestimonial].project}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-12">
                  <button 
                    onClick={handlePrev}
                    className="p-3 bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-red-700 hover:text-white hover:border-red-700 transition-all shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeTestimonial === i ? 'w-8 bg-red-700' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={handleNext}
                    className="p-3 bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-red-700 hover:text-white hover:border-red-700 transition-all shadow-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors & AI Assistant */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 devanagari">{t.trustFactors.title}</h2>
                <div className="space-y-6">
                  {t.trustFactors.items.map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="p-1 bg-green-100 text-green-700 rounded-full mt-1">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 devanagari">{item.title}</h4>
                        <p className="text-gray-500 devanagari">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="relative">
                <AIQuoteAssistant lang={lang} />
                <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full border-2 border-dashed border-gray-200 rounded-3xl" />
             </div>
          </div>
        </div>
      </section>
      
      {/* Location Bar */}
      <div className="bg-red-700 py-6 text-white text-center">
         <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="font-bold devanagari">{t.contact.locationBar}</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-white/20" />
            <span className="devanagari">{t.contact.locationCallAction}</span>
         </div>
      </div>
    </div>
  );
};
