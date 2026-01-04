import React, { useState } from 'react';
import '../styles/AhwalPage.css';

function AhwalPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="ahwal-page">
      {isLoading && (
        <div className="pdf-loading-overlay">
          <div className="loading-spinner"></div>
          <p className="loading-text">
            अहवाल लोड हो रहा है... Loading Report...
            <br />
            <span className="loading-subtext">कृपया प्रतीक्षा करा / Please wait</span>
          </p>
        </div>
      )}
      <iframe
        src="/main/Ahwal Samiksha Deepak Sakre.pdf#view=FitH"
        title="Ahwal Samiksha Deepak Sakre"
        className="pdf-viewer-fullscreen"
        onLoad={() => setIsLoading(false)}
        loading="eager"
      />
    </div>
  );
}

export default AhwalPage;
