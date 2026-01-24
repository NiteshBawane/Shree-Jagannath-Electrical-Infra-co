
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Certifications } from './pages/Certifications';
import { Contact } from './pages/Contact';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('mr');

  return (
    <Router>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/certifications" element={<Certifications lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
