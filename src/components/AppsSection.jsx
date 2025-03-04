import React from 'react';
import SoundKeeperCard from './SoundKeeperCard';

const AppsSection = ({ t, handleDownload, playHoverSound, playClickSound }) => (
  <div className="project-grid">
    <SoundKeeperCard 
      t={t}
      handleDownload={handleDownload}
      playHoverSound={playHoverSound}
      playClickSound={playClickSound}
    />
    <div className="project-card">
      <div className="card-content">
        <div className="card-inner">
          <h3 className="card-title">Applications</h3>
          <p className="card-description">{t.comingSoon}</p>
        </div>
      </div>
    </div>
  </div>
);

export default AppsSection;