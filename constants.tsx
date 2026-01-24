
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
    experienceYears: "१५+ वर्षांचा अनुभव",
    experienceSubtitle: "शेकडो यशस्वी प्रकल्प पूर्ण केले.",
    serviceViewAll: "सर्व सेवा पहा",
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
      experience: "श्री जगन्नाथ इलेक्ट्रिकल्स & इंफ्रा. कं. चे नेतृत्व इंजिनिअर रुपेश धवस करत आहेत, ज्यांना या क्षेत्रातील तांत्रिक आणि व्यावहारिक कौशल्यांचा दीर्घ अनुभव आहे.",
      mission: "आमचे उद्दिष्ट",
      missionText: "आम्ही फक्त विद्युत कामे करत नाही, तर विश्वासाचे नाते निर्माण करतो. प्रत्येक प्रकल्प आमची गुणवत्ता आणि सुरक्षिततेप्रती असलेली वचनबद्धता सिद्ध करतो.",
      features: [
        { label: "प्रमाणित गुणवत्ता", desc: "आम्ही वापरतो फक्त आयएसआय प्रमाणित साहित्य." },
        { label: "अनुभवी टीम", desc: "प्रशिक्षित आणि अनुभवी तंत्रज्ञांचा ताफा." },
        { label: "ग्राहक समाधान", desc: "५००+ समाधानी ग्राहक आणि यशस्वी प्रकल्प." }
      ]
    },
    trustFactors: {
      title: "का निवडावे आम्हाला?",
      items: [
        { title: "वेळेवर पूर्तता", desc: "आम्ही दिलेली मुदत पाळतो." },
        { title: "सुरक्षिततेची हमी", desc: "सर्व कामांत उच्च सुरक्षा मानकांचे पालन." },
        { title: "परवडणारे दर", desc: "पारदर्शक आणि स्पर्धात्मक किंमत धोरण." }
      ]
    },
    contact: {
      title: "संपर्क साधा",
      intro: "आपल्या प्रकल्पाबद्दल चर्चा करण्यासाठी आजच आम्हाला संपर्क करा.",
      address: "पत्ता: संताजी नगर, तह. भद्रावती, जि. चंद्रपूर - ४४२९०२",
      phone: "फोन: +91 8411007259",
      whatsapp: "व्हॉट्सॲप",
      addressLabel: "आमचा पत्ता",
      phoneLabel: "संपर्क क्रमांक",
      emailLabel: "ईमेल",
      formName: "नाव",
      formEmail: "ईमेल / फोन",
      formSubject: "विषय",
      formMessage: "संदेश",
      formSubmit: "संदेश पाठवा",
      formNamePlaceholder: "आपले पूर्ण नाव",
      formEmailPlaceholder: "ईमेल किंवा फोन",
      formSubjectPlaceholder: "संदेशाचा विषय",
      formMessagePlaceholder: "तुमचा संदेश येथे लिहा...",
      whatsappAction: "व्हॉट्सॲपवर चॅट करा",
      locationBar: "कार्यक्षेत्र: भद्रावती, वरोरा, आणि चंद्रपूर",
      locationCallAction: "अधिक माहितीसाठी संपर्क साधा"
    },
    certsPage: {
      intro: "आम्ही सर्व शासकीय नियमांचे पालन करतो आणि आवश्यक सर्व प्रमाणपत्रांसह आपली सेवा बजावतो.",
      footerTitle: "आम्ही गुणवत्तेशी कधीच तडजोड करत नाही",
      footerDesc: "आमची सर्व कामे भारतीय विद्युत नियमावली (Indian Electricity Rules) नुसार आणि पूर्ण सुरक्षिततेसह केली जातात.",
      items: [
        {
          title: "महावितरण (MSEDCL) नोंदणी",
          authority: "महाराष्ट्र राज्य विद्युत वितरण कंपनी मर्यादित",
          desc: "उच्च दाब (HT) आणि लघु दाब (LT) कामांसाठी 'अ' वर्ग अधिकृत कंत्राटदार."
        },
        {
          title: "सरकारी परवाना (Electrical License)",
          authority: "विद्युत निरीक्षक विभाग, महाराष्ट्र शासन",
          desc: "सर्व प्रकारचे शासकीय विद्युत प्रकल्प हाताळण्याचा कायदेशीर परवाना."
        },
        {
          title: "जीएसटी नोंदणी (GST Registration)",
          authority: "वित्त मंत्रालय, भारत सरकार",
          desc: "नियमानुसार टॅक्स कॉम्प्लायन्स पाळणारी व्यावसायिक संस्था."
        }
      ]
    },
    servicesPage: {
      intro: "आम्ही महावितरण (MSEDCL) कडे अधिकृत नोंदणीकृत असून खालील सर्व विद्युत सेवा प्रदान करतो.",
      cardDetail: "आमचे तज्ञ सुरक्षित आणि नियमानुसार काम पूर्ण करण्याची खात्री देतात."
    }
  },
  hi: {
    companyName: "Shree Jagannath Electricals & Infra Co.",
    companyNameRegional: "श्री जगन्नाथ इलेक्ट्रिकल्स & इंफ्रा. कं.",
    tagline: "पंजीकृत सरकारी विद्युत ठेकेदार",
    govtReg: "शासकीय पंजीकृत विद्युत ठेकेदार",
    msedclApproved: "महावितरण (MSEDCL) अधिकृत ठेकेदार",
    experienceYears: "15+ वर्षों का अनुभव",
    experienceSubtitle: "सैकड़ों सफल प्रोजेक्ट्स पूरे किए गए।",
    serviceViewAll: "सभी सेवाएं देखें",
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
      experience: "श्री जगन्नाथ इलेक्ट्रिकल्स एंड इंफ्रा कंपनी का नेतृत्व इंजीनियर रुपेश धवस कर रहे हैं, जिन्हें इस क्षेत्र में गहरा अनुभव है।",
      mission: "हमारा लक्ष्य",
      missionText: "हम केवल विद्युत कार्य नहीं करते, बल्कि विश्वास का रिश्ता बनाते हैं। हमारी प्राथमिकता सुरक्षा और गुणवत्ता है।",
      features: [
        { label: "प्रमाणित गुणवत्ता", desc: "हम केवल ISI प्रमाणित सामग्री का उपयोग करते हैं।" },
        { label: "अनुभवी टीम", desc: "प्रशिक्षित और अनुभवी तकनीशियनों की टीम।" },
        { label: "ग्राहक संतुष्टि", desc: "500+ संतुष्ट ग्राहक और सफल प्रोजेक्ट्स।" }
      ]
    },
    trustFactors: {
      title: "हमें क्यों चुनें?",
      items: [
        { title: "समय पर पूर्णता", desc: "हम समय सीमा का पालन करते हैं।" },
        { title: "सुरक्षा की गारंटी", desc: "सभी कार्यों में उच्च सुरक्षा मानकों का पालन।" },
        { title: "किफायती दरें", desc: "पारदर्शी और प्रतिस्पर्धी मूल्य निर्धारण।" }
      ]
    },
    contact: {
      title: "संपर्क करें",
      intro: "अपने प्रोजेक्ट के बारे में चर्चा करने के लिए आज ही हमसे संपर्क करें।",
      address: "पता: संताजी नगर, तहसील भद्रावती, जिला चंद्रपुर - 442902",
      phone: "फोन: +91 8411007259",
      whatsapp: "व्हाट्सएप",
      addressLabel: "हमारा पता",
      phoneLabel: "संपर्क नंबर",
      emailLabel: "ईमेल",
      formName: "नाम",
      formEmail: "ईमेल / फोन",
      formSubject: "विषय",
      formMessage: "संदेश",
      formSubmit: "संदेश भेजें",
      formNamePlaceholder: "आपका पूरा नाम",
      formEmailPlaceholder: "ईमेल या फोन",
      formSubjectPlaceholder: "संदेश का विषय",
      formMessagePlaceholder: "अपना संदेश यहाँ लिखें...",
      whatsappAction: "व्हाट्सएप पर चैट करें",
      locationBar: "कार्यक्षेत्र: भद्रावती, वरोरा और चंद्रपुर",
      locationCallAction: "अधिक जानकारी के लिए संपर्क करें"
    },
    certsPage: {
      intro: "हम सभी सरकारी नियमों का पालन करते हैं और आवश्यक प्रमाणपत्रों के साथ सेवा प्रदान करते हैं।",
      footerTitle: "हम गुणवत्ता से कभी समझौता नहीं करते",
      footerDesc: "हमारे सभी कार्य भारतीय विद्युत नियमों और पूर्ण सुरक्षा के अनुसार किए जाते हैं।",
      items: [
        {
          title: "महावितरण (MSEDCL) पंजीकरण",
          authority: "महाराष्ट्र राज्य विद्युत वितरण कंपनी लिमिटेड",
          desc: "HT और LT कार्यों के लिए 'ए' श्रेणी अधिकृत ठेकेदार।"
        },
        {
          title: "सरकारी लाइसेंस (Electrical License)",
          authority: "विद्युत निरीक्षक विभाग, महाराष्ट्र सरकार",
          desc: "सभी प्रकार की सरकारी परियोजनाओं के लिए वैध लाइसेंस।"
        },
        {
          title: "जीएसटी पंजीकरण (GST Registration)",
          authority: "वित्त मंत्रालय, भारत सरकार",
          desc: "नियमों का पालन करने वाली पेशेवर संस्था।"
        }
      ]
    },
    servicesPage: {
      intro: "हम महावितरण (MSEDCL) के साथ पंजीकृत हैं और निम्नलिखित विद्युत सेवाएं प्रदान करते हैं।",
      cardDetail: "हमारे विशेषज्ञ सुरक्षित और नियमों के अनुसार कार्य पूरा करना सुनिश्चित करते हैं।"
    }
  },
  en: {
    companyName: "Shree Jagannath Electricals & Infra Co.",
    companyNameRegional: "Shree Jagannath Electricals & Infra Co.",
    tagline: "Registered Government Electrical Contractor",
    govtReg: "Registered Government Electrical Contractor",
    msedclApproved: "Authorized Mahavitaran (MSEDCL) Contractor",
    experienceYears: "15+ Years of Experience",
    experienceSubtitle: "Hundreds of successful projects completed.",
    serviceViewAll: "View All Services",
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
      experience: "Shree Jagannath Electricals & Infra Co. is led by Er. Rupesh Dhavas, who possesses extensive technical and practical expertise in the field.",
      mission: "Our Mission",
      missionText: "We don't just do electrical work; we build relationships of trust. Every project proves our commitment to quality and safety.",
      features: [
        { label: "Certified Quality", desc: "We use only ISI-certified materials." },
        { label: "Experienced Team", desc: "Fleet of trained and experienced technicians." },
        { label: "Customer Satisfaction", desc: "500+ satisfied customers and successful projects." }
      ]
    },
    trustFactors: {
      title: "Why Choose Us?",
      items: [
        { title: "Timely Completion", desc: "We strictly adhere to deadlines." },
        { title: "Safety Guarantee", desc: "High safety standards followed in all works." },
        { title: "Affordable Rates", desc: "Transparent and competitive pricing policy." }
      ]
    },
    contact: {
      title: "Get In Touch",
      intro: "Contact us today to discuss your project requirements.",
      address: "Address: Santaji Nagar, Th Bhadrawati, Dist Chandrapur, Pin - 442902",
      phone: "Phone: +91 8411007259",
      whatsapp: "WhatsApp",
      addressLabel: "Our Address",
      phoneLabel: "Contact Number",
      emailLabel: "Email",
      formName: "Name",
      formEmail: "Email / Phone",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send Message",
      formNamePlaceholder: "Your Full Name",
      formEmailPlaceholder: "Email or Phone",
      formSubjectPlaceholder: "Subject of Message",
      formMessagePlaceholder: "Write your message here...",
      whatsappAction: "Chat on WhatsApp",
      locationBar: "Working Areas: Bhadrawati, Warora, and Chandrapur",
      locationCallAction: "Contact us for more details"
    },
    certsPage: {
      intro: "We comply with all government regulations and operate with all necessary certifications.",
      footerTitle: "No Compromise on Quality",
      footerDesc: "All our works are performed according to Indian Electricity Rules with full safety.",
      items: [
        {
          title: "MSEDCL Registration",
          authority: "Maharashtra State Electricity Distribution Co. Ltd.",
          desc: "'A' Class authorized contractor for HT and LT works."
        },
        {
          title: "Government License (Electrical License)",
          authority: "Electrical Inspection Department, Govt. of Maharashtra",
          desc: "Legal license to handle all types of government electrical projects."
        },
        {
          title: "GST Registration",
          authority: "Ministry of Finance, Government of India",
          desc: "Professional organization maintaining full tax compliance."
        }
      ]
    },
    servicesPage: {
      intro: "We are officially registered with MSEDCL and provide the following electrical services.",
      cardDetail: "Our experts ensure safe and compliant project execution."
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
