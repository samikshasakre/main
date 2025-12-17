import React, { useState } from 'react';
import Header from './components/Header';
import CandidateIntro from './components/CandidateIntro';
import WorkGallery from './components/WorkGallery';
import './App.css';

function App() {
  const [language, setLanguage] = useState('marathi'); // 'marathi' or 'hindi'

  const toggleLanguage = () => {
    setLanguage(language === 'marathi' ? 'hindi' : 'marathi');
  };

  return (
    <div className="app">
      <button className="language-toggle" onClick={toggleLanguage}>
        {language === 'marathi' ? 'हिंदी में देखें | View in Hindi' : 'मराठीत पहा | View in Marathi'}
      </button>

      <Header language={language} />
      <main className="main-content">
        <div className="content-layout">
          <aside className="sidebar">
            <CandidateIntro language={language} />
          </aside>
          <section className="main-section">
            <WorkGallery language={language} />
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-candidate">समिक्षा सक्रे | Samiksha Sakre</p>
          {language === 'marathi' ? (
            <>
              <p className="footer-main">बृहन्मुंबई महानगरपालिका निवडणूक २०२६ | BMC Election 2026</p>
              <p className="footer-party">शिवसेना (उद्धव बाळासाहेब ठाकरे) | प्रभाग १३५</p>
            </>
          ) : (
            <>
              <p className="footer-main">बृहन्मुंबई महानगरपालिका चुनाव २०२६ | BMC Election 2026</p>
              <p className="footer-party">शिवसेना (उद्धव बालासाहेब ठाकरे) | वार्ड १३५</p>
            </>
          )}
          <p className="footer-tagline">
            {language === 'marathi' ? 'जय महाराष्ट्र | Jai Maharashtra' : 'जय हिन्द | Jai Hind'}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
