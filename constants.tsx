
import React from 'react';
import { 
  TowerControl as Tower, 
  Zap, 
  UtilityPole, 
  Link, 
  Warehouse, 
  Building2, 
  Home as HomeIcon, 
  Truck 
} from 'lucide-react';
import { TranslationStrings, Language, Service } from './types';

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'mr', label: 'मराठी' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'en', label: 'English' }
];

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  mr: {
    companyName: "Shree Jagannath Electricals & Infra Co.",
    companyNameRegional: "श्री जगन्नाथ इलेक्ट्रिकल्स & इंफ्रा. कं.",
    tagline: "नोंदणीकृत सरकारी विद्युत कंत्राटदार",
    govtReg: "शासकीय नोंदणीकृत विद्युत कंत्राटदार",
    msedclApproved: "महावितरण (MSEDCL) अधिकृत कंत्राटदार",
    nav: {
      home: "मुख्यपृष्ठ",
      about: "आमच्याबद्दल",
      services: "सेवा",
      certs: "प्रमाणपत्रे",
      contact: "संपर्क"
    },
    hero: {
      title: "भद्रावती मधील अग्रगण्य सरकारी विद्युत कंत्राटदार",
      subtitle: "सुरक्षितता आणि गुणवत्तेसह महावितरण (MSEDCL) कामाचा दांडगा अनुभव.",
      ctaPrimary: "आत्ताच कॉल करा",
      ctaSecondary: "कोट मिळवा"
    },
    services: {
      htLine: "H.T. लाईन वर्क",
      ltLine: "L.T. लाईन वर्क",
      transformer: "ट्रान्सफॉर्मर इन्स्टॉलेशन आणि मेंटेनन्स",
      cable: "केबल लेइंग आणि केबल वर्क",
      substation: "सब-स्टेशन इलेक्ट्रिक वर्क",
      commercial: "व्यावसायिक इलेक्ट्रिक वायरिंग",
      domestic: "घरगुती / निवासी वायरिंग",
      supply: "विद्युत साहित्य पुरवठा",
      descriptions: {
        htLine: "उच्च दाबाच्या विद्युत वाहिन्यांचे नियोजन आणि उभारणी.",
        ltLine: "कमी दाबाच्या वितरण वाहिन्यांचे कार्यक्षम जाळे.",
        transformer: "ट्रान्सफॉर्मर बसवणे आणि त्यांची नियमित देखभाल.",
        cable: "जमीनखालून किंवा खांबावरून केबल टाकण्याचे काम.",
        substation: "सब-स्टेशन उभारणीतील तांत्रिक आणि विद्युत कामे.",
        commercial: "दुकाने आणि कार्यालयांसाठी सुरक्षित विद्युत व्यवस्था.",
        domestic: "घरांसाठी विश्वसनीय आणि दर्जेदार वायरिंग.",
        supply: "सर्व प्रकारचे दर्जेदार इलेक्ट्रिकल साहित्य पुरवठा."
      }
    },
    testimonials: {
      title: "आमच्या ग्राहकांचे मत",
      subtitle: "आमच्या कामाच्या दर्जाबद्दल ग्राहकांचे अनुभव",
      items: [
        {
          name: "राहुल देशमुख",
          role: "इंडस्ट्रियल उद्योजक",
          quote: "जगन्नाथ इलेक्ट्रिकल्सने आमच्या फॅक्टरीचे वायरिंग काम अत्यंत वेगाने आणि सुरक्षितरीतीने पूर्ण केले. त्यांचे तांत्रिक ज्ञान उत्तम आहे.",
          project: "इंडस्ट्रियल वायरिंग"
        },
        {
          name: "सुनील पवार",
          role: "प्रकल्प व्यवस्थापक",
          quote: "महावितरणच्या कामांसाठी रुपेश सर आणि त्यांची टीम खूप अनुभवी आहे. नवीन ट्रान्सफॉर्मर बसवण्याचे काम त्यांनी वेळेत पूर्ण केले.",
          project: "ट्रान्सफॉर्मर इन्स्टॉलेशन"
        },
        {
          name: "अमित गावरे",
          role: "व्यावसायिक ग्राहक",
          quote: "दर्जेदार साहित्य आणि सुरक्षित काम ही यांची वैशिष्ट्ये आहेत. भद्रावतीमधील सर्वोत्तम कंत्राटदार.",
          project: "सब-स्टेशन वर्क"
        }
      ]
    },
    about: {
      title: "आमची माहिती",
      proprietor: "प्रोप्रायटर: इंजिनिअर रुपेश धवस",
      experience: "अनेक वर्षांचा सरकारी आणि खाजगी प्रकल्पांचा अनुभव.",
      mission: "आमचे उद्दिष्ट",
      missionText: "ग्राहकांना सुरक्षित, दर्जेदार आणि नियमानुसार विद्युत सेवा प्रदान करणे हे आमचे ब्रीदवाक्य आहे."
    },
    contact: {
      title: "संपर्क साधा",
      address: "पत्ता: संताजी नगर, तह. भद्रावती, जि. चंद्रपूर - ४४२९०२",
      phone: "फोन: +91 8411007259",
      whatsapp: "व्हॉट्सॲप",
      formName: "नाव",
      formEmail: "ईमेल / फोन",
      formSubject: "विषय",
      formMessage: "संदेश",
      formSubmit: "संदेश पाठवा"
    }
  },
  hi: {
    companyName: "Shree Jagannath Electricals & Infra Co.",
    companyNameRegional: "श्री जगन्नाथ इलेक्ट्रिकल्स & इंफ्रा. कं.",
    tagline: "पंजीकृत सरकारी विद्युत ठेकेदार",
    govtReg: "शासकीय पंजीकृत विद्युत ठेकेदार",
    msedclApproved: "महावितरण (MSEDCL) अधिकृत ठेकेदार",
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      services: "सेवाएं",
      certs: "प्रमाणपत्र",
      contact: "संपर्क"
    },
    hero: {
      title: "भद्रावती के प्रमुख सरकारी विद्युत ठेकेदार",
      subtitle: "सुरक्षा और गुणवत्ता के साथ महावितरण (MSEDCL) कार्यों में विशेषज्ञता।",
      ctaPrimary: "अभी कॉल करें",
      ctaSecondary: "कोट प्राप्त करें"
    },
    services: {
      htLine: "H.T. लाइन कार्य",
      ltLine: "L.T. line कार्य",
      transformer: "ट्रांसफार्मर स्थापना एवं रखरखाव",
      cable: "केबल बिछाने और केबल कार्य",
      substation: "सब-स्टेशन इलेक्ट्रिकल कार्य",
      commercial: "वाणिज्यिक इलेक्ट्रिकल वायरिंग",
      domestic: "घरेलू / आवासीय वायरिंग",
      supply: "विद्युत सामग्री की आपूर्ति",
      descriptions: {
        htLine: "उच्च वोल्टेज बिजली लाइनों का नियोजन और स्थापना।",
        ltLine: "कुशल लो वोल्टेज वितरण नेटवर्क कार्य।",
        transformer: "ट्रांसफार्मर की स्थापना और नियमित सर्विसिंग।",
        cable: "भूमिगत और ओवरहेड केबल बिछाने के विशेषज्ञ।",
        substation: "सब-स्टेशन निर्माण में पूर्ण तकनीकी समाधान।",
        commercial: "शोरूम और कार्यालयों के लिए सुरक्षित वायरिंग।",
        domestic: "घरों के लिए आधुनिक और सुरक्षित बिजली फिटिंग।",
        supply: "उच्च गुणवत्ता वाली विद्युत सामग्री का विश्वसनीय स्रोत।"
      }
    },
    testimonials: {
      title: "ग्राहकों की राय",
      subtitle: "हमारे काम के प्रति ग्राहकों का विश्वास",
      items: [
        {
          name: "राहुल देशमुख",
          role: "औद्योगिक उद्यमी",
          quote: "जगन्नाथ इलेक्ट्रिकल्स ने हमारी फैक्ट्री का काम बहुत ही पेशेवर तरीके से किया। उनकी टीम बहुत मेहनती है।",
          project: "इंडस्ट्रियल वायरिंग"
        },
        {
          name: "सुनील पवार",
          role: "प्रोजेक्ट मैनेजर",
          quote: "MSEDCL प्रोजेक्ट्स के लिए इनका अनुभव वाकई काबिले तारीफ है। ट्रांसफार्मर इंस्टॉलेशन बहुत सुचारू रहा।",
          project: "ट्रांसफार्मर इंस्टॉलेशन"
        },
        {
          name: "अमित गावरे",
          role: "व्यावसायिक ग्राहक",
          quote: "सुरक्षित काम और बेहतरीन सर्विस। भद्रावती में इनसे अच्छा ठेकेदार कोई नहीं है।",
          project: "सब-स्टेशन वर्क"
        }
      ]
    },
    about: {
      title: "हमारे बारे में",
      proprietor: "प्रोप्रायटर: इंजिनिअर रुपेश धवस",
      experience: "सरकारी और निजी विद्युत परियोजनाओं में वर्षों का अनुभव।",
      mission: "हमारा लक्ष्य",
      missionText: "हमारा उद्देश्य नियमों के अनुसार सुरक्षित और सर्वोत्तम विद्युत सेवाएं प्रदान करना है।"
    },
    contact: {
      title: "संपर्क करें",
      address: "पता: संताजी नगर, तह. भद्रावती, जिला चंद्रपुर - 442902",
      phone: "फोन: +91 8411007259",
      whatsapp: "व्हाट्सएप",
      formName: "नाम",
      formEmail: "ईमेल / फोन",
      formSubject: "विषय",
      formMessage: "संदेश",
      formSubmit: "संदेश भेजें"
    }
  },
  en: {
    companyName: "Shree Jagannath Electricals & Infra Co.",
    companyNameRegional: "Shree Jagannath Electricals & Infra Co.",
    tagline: "Registered Government Electrical Contractor",
    govtReg: "Registered Government Electrical Contractor",
    msedclApproved: "Authorized Mahavitaran (MSEDCL) Contractor",
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      certs: "Certifications",
      contact: "Contact"
    },
    hero: {
      title: "Leading Government Electrical Contractor in Bhadravati",
      subtitle: "Expertise in MSEDCL projects with a commitment to safety and excellence.",
      ctaPrimary: "Call Now",
      ctaSecondary: "Get Quote"
    },
    services: {
      htLine: "H.T. Line Work",
      ltLine: "L.T. Line Work",
      transformer: "Transformer Installation & Maintenance",
      cable: "Cable Laying & Cable Work",
      substation: "Sub-Station Electrical Work",
      commercial: "Commercial Electrical Wiring",
      domestic: "Domestic / Residential Wiring",
      supply: "Electrical Material Supply",
      descriptions: {
        htLine: "Strategic planning and installation of High Tension power lines.",
        ltLine: "Efficient Low Tension distribution network solutions.",
        transformer: "Turnkey installation and scheduled maintenance of transformers.",
        cable: "Professional underground and overhead cable infrastructure.",
        substation: "Comprehensive electrical works for sub-station setups.",
        commercial: "Certified wiring solutions for commercial spaces and offices.",
        domestic: "Safe and reliable electrical installations for homes.",
        supply: "One-stop destination for high-quality electrical components."
      }
    },
    testimonials: {
      title: "Customer Testimonials",
      subtitle: "What our clients say about our service quality",
      items: [
        {
          name: "Rahul Deshmukh",
          role: "Industrialist",
          quote: "Jagannath Electricals completed our factory wiring with extreme precision and safety. Highly recommended.",
          project: "Industrial Wiring"
        },
        {
          name: "Sunil Pawar",
          role: "Project Manager",
          quote: "Rupesh sir and his team are highly experienced in MSEDCL projects. The transformer setup was done seamlessly.",
          project: "Transformer Installation"
        },
        {
          name: "Amit Gaware",
          role: "Commercial Client",
          quote: "The best government contractor in Bhadravati. Reliable materials and professional execution.",
          project: "Sub-Station Work"
        }
      ]
    },
    about: {
      title: "About Our Company",
      proprietor: "Proprietor: Er. Rupesh Dhavas",
      experience: "Extensive experience in government and private sector projects.",
      mission: "Our Mission",
      missionText: "To deliver compliant, safe, and top-tier electrical infrastructure services."
    },
    contact: {
      title: "Get In Touch",
      address: "Address: Santaji Nagar, Th Bhadrawati, Dist Chandrapur, Pin - 442902",
      phone: "Phone: +91 8411007259",
      whatsapp: "WhatsApp",
      formName: "Name",
      formEmail: "Email / Phone",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send Message"
    }
  }
};

export const SERVICES_CONFIG: Service[] = [
  { id: 'ht-line', icon: Tower, titleKey: 'htLine' },
  { id: 'lt-line', icon: UtilityPole, titleKey: 'ltLine' },
  { id: 'transformer', icon: Zap, titleKey: 'transformer' },
  { id: 'cable', icon: Link, titleKey: 'cable' },
  { id: 'substation', icon: Warehouse, titleKey: 'substation' },
  { id: 'commercial', icon: Building2, titleKey: 'commercial' },
  { id: 'domestic', icon: HomeIcon, titleKey: 'domestic' },
  { id: 'supply', icon: Truck, titleKey: 'supply' }
];
