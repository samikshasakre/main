import React, { useState, useEffect } from 'react';
import { getCategoryColor } from '../data/workData';
import '../styles/WorkCard.css';

const WorkCard = ({ work, language }) => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [galleryData, setGalleryData] = useState({});

  useEffect(() => {
    // Load gallery data
    const loadGalleryData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}gallery-data.json`);
        const data = await response.json();
        setGalleryData(data);

        // Set images for this work folder
        if (data[work.folder]) {
          setImages(data[work.folder]);
        }
      } catch (error) {
        console.error('Error loading gallery data:', error);
      }
    };
    loadGalleryData();
  }, [work.folder]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const categoryColor = getCategoryColor(work.category);

  return (
    <>
      <div className="work-card" onClick={() => setShowModal(true)}>
        <div className="work-card-header" style={{ backgroundColor: categoryColor }}>
          <span className="work-icon">{work.icon}</span>
          <span className="work-category">{work.category}</span>
        </div>
        {images.length > 0 && (
          <div className="work-card-preview">
            <img src={images[0]} alt={work.title} className="preview-image" />
            <div className="image-count">{images.length} Photos</div>
          </div>
        )}
        <div className="work-card-body">
          <h3 className="work-title">
            {language === 'marathi' ? work.title : work.hindiTitle}
          </h3>
          <p className="work-subtitle-english">
            {work.category.split('|')[1].trim()}
          </p>
          <button className="view-button">
            {language === 'marathi' ? 'फोटो पहा | View Photos' : 'देखें | View Photos'} <span>→</span>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <h2 className="modal-title">
              {language === 'marathi' ? work.title : work.hindiTitle}
            </h2>
            <p className="modal-subtitle">{work.category.split('|')[1].trim()}</p>
            <div className="modal-category" style={{ backgroundColor: categoryColor }}>
              {work.icon} {work.category.split('|')[0].trim()}
            </div>

            {images.length > 0 ? (
              <div className="image-gallery">
                <div className="gallery-main">
                  <img
                    src={images[currentImageIndex]}
                    alt={`${work.title} - Image ${currentImageIndex + 1}`}
                    className="gallery-image"
                  />
                  {images.length > 1 && (
                    <>
                      <button className="gallery-nav gallery-prev" onClick={prevImage}>
                        ‹
                      </button>
                      <button className="gallery-nav gallery-next" onClick={nextImage}>
                        ›
                      </button>
                    </>
                  )}
                </div>
                <div className="gallery-counter">
                  {currentImageIndex + 1} / {images.length}
                </div>
                <div className="gallery-thumbnails">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="no-images">
                <p>
                  {language === 'marathi'
                    ? 'या प्रकारासाठी फोटो उपलब्ध नाहीत | No photos available for this category'
                    : 'इस श्रेणी के लिए फोटो उपलब्ध नहीं हैं | No photos available for this category'}
                </p>
              </div>
            )}

            <div className="modal-note">
              <p className="note-main">
                {language === 'marathi'
                  ? '२०१७-२०२२ कार्यकाळात पूर्ण झालेले विकास कार्य'
                  : '२०१७-२०२२ कार्यकाल में पूर्ण किया गया विकास कार्य'}
              </p>
              <p className="note-english">Development work completed during 2017-2022 tenure</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkCard;
