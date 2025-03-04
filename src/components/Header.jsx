import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ 
  t, 
  activeSection, 
  setActiveSection, 
  playClickSound, 
  playHoverSound, 
  toggleLanguage, 
  language 
}) => (
  <header className="header-panel">
    <div className="header-content">
      <h1 className="title">{t.title}</h1>
      <p className="subtitle">{t.subtitle}</p>
      <nav className="site-nav">
        <Link 
          to="/"
          className={`nav-button ${activeSection === 'main' ? 'active' : ''}`}
          onClick={() => {
            playClickSound();
            setActiveSection('main');
          }}
          onMouseEnter={playHoverSound}
        >
          {t.nav.main}
        </Link>
        <Link 
          to="/plugins"
          className={`nav-button ${activeSection === 'plugins' ? 'active' : ''}`}
          onClick={() => {
            playClickSound();
            setActiveSection('plugins');
          }}
          onMouseEnter={playHoverSound}
        >
          {t.nav.plugins}
        </Link>
        <Link 
          to="/apps"
          className={`nav-button ${activeSection === 'apps' ? 'active' : ''}`}
          onClick={() => {
            playClickSound();
            setActiveSection('apps');
          }}
          onMouseEnter={playHoverSound}
        >
          {t.nav.apps}
        </Link>
      </nav>
      <div className="music-icons">
        🎵 🎼 🎹 🎷 🥁
      </div>
    </div>
    <button 
      onClick={toggleLanguage} 
      className="language-toggle"
      onMouseEnter={playHoverSound}
    >
      {language === 'en' ? '🇫🇷' : '🇬🇧'}
    </button>
  </header>
);

export default Header;