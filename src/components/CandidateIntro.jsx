import React, { useState } from 'react';
import '../styles/CandidateIntro.css';

const CandidateIntro = ({ language }) => {
  const [currentImage, setCurrentImage] = useState(1);

  const toggleImage = () => {
    setCurrentImage(currentImage === 1 ? 2 : 1);
  };

  return (
    <section className="candidate-intro">
      <div className="candidate-container">
        <div className="candidate-image-section">
          <div className="image-wrapper" onClick={toggleImage}>
            <img
              src={`/image${currentImage}.jpg`}
              alt="शिवसेना उमेदवार | Shiv Sena Candidate"
              className="candidate-image"
            />
            <div className="image-indicator">
              <span className={currentImage === 1 ? 'active' : ''}>●</span>
              <span className={currentImage === 2 ? 'active' : ''}>●</span>
            </div>
          </div>
        </div>

        <div className="candidate-info-section">
          {language === 'marathi' ? (
            <>
              <div className="candidate-header">
                <h1 className="candidate-name">समिक्षा सक्रे</h1>
                <h2 className="candidate-subtitle">Samiksha Sakre</h2>
                <div className="candidate-designation">
                  <p><strong>माजी नगरसेविका, प्रभाग १३५, मुंबई</strong></p>
                  <p className="english">Former Corporator, Ward 135, Mumbai</p>
                  <p className="party-name">शिवसेना (उद्धव बाळासाहेब ठाकरे) | Shiv Sena (UBT)</p>
                </div>
              </div>

              <div className="candidate-details">
                <div className="detail-item">
                  <span className="icon">📅</span>
                  <div className="detail-text">
                    <p><strong>कार्यकाळ:</strong> २०१७ - २०२२</p>
                    <p className="english">Tenure: 2017 - 2022</p>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="icon">🗳️</span>
                  <div className="detail-text">
                    <p><strong>आगामी निवडणूक:</strong> बृहन्मुंबई महानगरपालिका २०२६</p>
                    <p className="english">Upcoming Election: BMC 2026</p>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="icon">🏛️</span>
                  <div className="detail-text">
                    <p><strong>पक्ष:</strong> शिवसेना (उद्धव बाळासाहेब ठाकरे)</p>
                    <p className="english">Party: Shiv Sena (UBT)</p>
                  </div>
                </div>
              </div>

              <div className="candidate-message">
                <p className="message-main">
                  "२०१७-२०२२ च्या कार्यकाळात आमच्या प्रभागाच्या विकासासाठी केलेली कामे आपल्या समोर आहेत.
                  पायाभूत सुविधा, शिक्षण, स्वच्छता आणि समाजकल्याणाच्या क्षेत्रात आम्ही नेहमीच जनतेच्या सेवेत राहिलो.
                  २०२६ च्या निवडणुकीत पुन्हा एकदा आपला पाठिंबा मिळावा ही विनंती."
                </p>
                <p className="message-english">
                  "The work done for the development of our ward during 2017-2022 is before you.
                  We have always been in service of the people in the areas of infrastructure, education, sanitation and social welfare.
                  We request your support once again in the 2026 election."
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="candidate-header">
                <h1 className="candidate-name">समिक्षा सक्रे</h1>
                <h2 className="candidate-subtitle">Samiksha Sakre</h2>
                <div className="candidate-designation">
                  <p><strong>पूर्व पार्षद, वार्ड १३५, मुंबई</strong></p>
                  <p className="english">Former Corporator, Ward 135, Mumbai</p>
                  <p className="party-name">शिवसेना (उद्धव बालासाहेब ठाकरे) | Shiv Sena (UBT)</p>
                </div>
              </div>

              <div className="candidate-details">
                <div className="detail-item">
                  <span className="icon">📅</span>
                  <div className="detail-text">
                    <p><strong>कार्यकाल:</strong> २०१७ - २०२२</p>
                    <p className="english">Tenure: 2017 - 2022</p>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="icon">🗳️</span>
                  <div className="detail-text">
                    <p><strong>आगामी चुनाव:</strong> बृहन्मुंबई महानगरपालिका २०२६</p>
                    <p className="english">Upcoming Election: BMC 2026</p>
                  </div>
                </div>

                <div className="detail-item">
                  <span className="icon">🏛️</span>
                  <div className="detail-text">
                    <p><strong>पार्टी:</strong> शिवसेना (उद्धव बालासाहेब ठाकरे)</p>
                    <p className="english">Party: Shiv Sena (UBT)</p>
                  </div>
                </div>
              </div>

              <div className="candidate-message">
                <p className="message-main">
                  "२०१७-२०२२ के कार्यकाल में हमारे वार्ड के विकास के लिए किए गए कार्य आपके सामने हैं।
                  बुनियादी सुविधाएं, शिक्षा, स्वच्छता और समाज कल्याण के क्षेत्र में हम हमेशा जनता की सेवा में रहे।
                  २०२६ के चुनाव में फिर से आपका समर्थन मिले यही विनती है।"
                </p>
                <p className="message-english">
                  "The work done for the development of our ward during 2017-2022 is before you.
                  We have always been in service of the people in the areas of infrastructure, education, sanitation and social welfare.
                  We request your support once again in the 2026 election."
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CandidateIntro;
