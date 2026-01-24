
// Import React to resolve namespace 'React' error in TypeScript
import React from 'react';

export type Language = 'mr' | 'hi' | 'en';

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  project: string;
}

export interface TranslationStrings {
  companyName: string;
  companyNameRegional: string;
  tagline: string;
  govtReg: string;
  msedclApproved: string;
  experienceYears: string;
  experienceSubtitle: string;
  serviceViewAll: string;
  nav: {
    home: string;
    about: string;
    services: string;
    certs: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    htLine: string;
    ltLine: string;
    transformer: string;
    cable: string;
    substation: string;
    commercial: string;
    domestic: string;
    supply: string;
    descriptions: Record<string, string>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  about: {
    title: string;
    proprietor: string;
    experience: string;
    mission: string;
    missionText: string;
    features: { label: string; desc: string }[];
  };
  trustFactors: {
    title: string;
    items: { title: string; desc: string }[];
  };
  contact: {
    title: string;
    intro: string;
    address: string;
    phone: string;
    whatsapp: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formNamePlaceholder: string;
    formEmailPlaceholder: string;
    formSubjectPlaceholder: string;
    formMessagePlaceholder: string;
    whatsappAction: string;
    locationBar: string;
    locationCallAction: string;
  };
  certsPage: {
    intro: string;
    footerTitle: string;
    footerDesc: string;
    items: { title: string; authority: string; desc: string }[];
  };
  servicesPage: {
    intro: string;
    cardDetail: string;
  };
}

export interface Service {
  id: string;
  icon: React.ElementType;
  titleKey: Exclude<keyof TranslationStrings['services'], 'descriptions'>;
}
