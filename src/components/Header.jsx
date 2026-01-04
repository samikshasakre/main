import React from 'react';
import '../styles/Header.css';

const Header = ({ language }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="शिवसेना उद्धव बाळासाहेब ठाकरे लोगो" className="logo" />
        </div>
        <div className="header-text">
          {language === 'marathi' ? (
            <>
              <div className="candidate-name-header">
                <h1 className="name-main">समीक्षा दीपक सक्रे</h1>
                <p className="name-english">Samiksha Deepak Sakre</p>
              </div>
              <h2 className="election-title">बृहन्मुंबई महानगरपालिका निवडणूक २०२६</h2>
              <p className="election-subtitle">BMC Election 2026</p>
              <p className="ward-info">शिवसेना (उद्धव बाळासाहेब ठाकरे) | प्रभाग १३५</p>
              <div className="work-period">
                <p className="period-text">
                  केलेल्या कामांचा आढावा (२०१७-२०२२)
                  <br />
                  <span className="english">Work Review (2017-2022)</span>
                </p>
              </div>
              <p className="tagline">सेवा हीच आमची प्राथमिकता | Service is Our Priority</p>
            </>
          ) : (
            <>
              <div className="candidate-name-header">
                <h1 className="name-main">समीक्षा दीपक सक्रे</h1>
                <p className="name-english">Samiksha Deepak Sakre</p>
              </div>
              <h2 className="election-title">बृहन्मुंबई महानगरपालिका चुनाव २०२६</h2>
              <p className="election-subtitle">BMC Election 2026</p>
              <p className="ward-info">शिवसेना (उद्धव बालासाहेब ठाकरे) | वार्ड १३५</p>
              <div className="work-period">
                <p className="period-text">
                  किए गए कार्यों की समीक्षा (२०१७-२०२२)
                  <br />
                  <span className="english">Work Review (2017-2022)</span>
                </p>
              </div>
              <p className="tagline">सेवा ही हमारी प्राथमिकता | Service is Our Priority</p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
