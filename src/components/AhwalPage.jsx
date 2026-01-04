import React from 'react';
import '../styles/AhwalPage.css';

function AhwalPage() {
  return (
    <div className="ahwal-page">
      <iframe
        src="/main/Ahwal Samiksha Deepak Sakre.pdf"
        title="Ahwal Samiksha Deepak Sakre"
        className="pdf-viewer-fullscreen"
      />
    </div>
  );
}

export default AhwalPage;
