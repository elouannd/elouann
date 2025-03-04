import React from 'react';
import SoundKeeperCard from './SoundKeeperCard';

const MainSection = ({ t, handleDownload, playHoverSound, playClickSound }) => (
  <div className="project-grid">
    <SoundKeeperCard 
      t={t}
      handleDownload={handleDownload}
      playHoverSound={playHoverSound}
      playClickSound={playClickSound}
    />
  </div>
);

export default MainSection;