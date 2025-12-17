import React, { useState } from 'react';
import WorkCard from './WorkCard';
import { workCategories, categories } from '../data/workData';
import '../styles/WorkGallery.css';

const WorkGallery = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState('सर्व | All');

  const filteredWorks = selectedCategory === 'सर्व | All'
    ? workCategories
    : workCategories.filter(work => work.category === selectedCategory);

  return (
    <section className="work-gallery">
      <div className="gallery-header">
        {language === 'marathi' ? (
          <>
            <h2 className="gallery-title">विकास कामे (२०१७-२०२२)</h2>
            <h3 className="gallery-subtitle-main">Development Works (2017-2022)</h3>
            <p className="gallery-tagline">कार्य बोलतात | Works Speak</p>
          </>
        ) : (
          <>
            <h2 className="gallery-title">विकास कार्य (२०१७-२०२२)</h2>
            <h3 className="gallery-subtitle-main">Development Works (2017-2022)</h3>
            <p className="gallery-tagline">कार्य बोलते हैं | Works Speak</p>
          </>
        )}
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="works-grid">
        {filteredWorks.map(work => (
          <WorkCard key={work.id} work={work} language={language} />
        ))}
      </div>

      {filteredWorks.length === 0 && (
        <div className="no-works">
          <p>
            {language === 'marathi'
              ? 'या प्रकारात कोणतेही कार्य आढळले नाही | No works found in this category'
              : 'इस श्रेणी में कोई कार्य नहीं मिला | No works found in this category'}
          </p>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;
