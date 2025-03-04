import React from 'react';

const PluginsSection = ({ t }) => (
  <div className="project-grid">
    <div className="project-card">
      <div className="card-content">
        <div className="card-inner">
          <h3 className="card-title">Audio Plugins</h3>
          <p className="card-description">{t.comingSoon}</p>
        </div>
      </div>
    </div>
  </div>
);

export default PluginsSection;