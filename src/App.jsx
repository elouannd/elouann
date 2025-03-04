import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [hoverSound] = useState(new Audio('/hover.mp3'));
  const [clickSound] = useState(new Audio('/click.mp3'));
  const [hapticSupported, setHapticSupported] = useState(false);
  
  // Check for haptic support on component mount
  useEffect(() => {
    setHapticSupported('vibrate' in navigator);
  }, []);
  
  // Play haptic feedback
  const playHaptic = (type) => {
    if (!hapticSupported) return;
    
    switch (type) {
      case 'light':
        navigator.vibrate(10);
        break;
      case 'medium':
        navigator.vibrate(30);
        break;
      case 'heavy':
        navigator.vibrate([40, 30, 40]);
        break;
      default:
        navigator.vibrate(20);
    }
  };
  
  // Play sound effects
  const playHoverSound = () => {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});
    playHaptic('light');
  };
  
  const playClickSound = () => {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
    playHaptic('medium');
  };
  
  // Detect browser language on component mount
  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    if (browserLang === 'fr') {
      setLanguage('fr');
    }
    
    // Add grid animation
    const gridAnimation = document.createElement('div');
    gridAnimation.className = 'grid-animation';
    document.body.appendChild(gridAnimation);
    
    return () => {
      document.body.removeChild(gridAnimation);
    };
  }, []);
  
  // Translations
  const translations = {
    en: {
      title: 'Elouann Domenech',
      subtitle: 'Audio Software Developer',
      projects: 'Projects',
      soundkeeperTitle: 'SoundKeeper',
      soundkeeperDesc: 'A simple backup system for your audio plugins',
      download: 'Download',
      macosOnly: 'macOS only',
      contact: 'Contact',
      comingSoon: 'Coming Soon'
    },
    fr: {
      title: 'Elouann Domenech',
      subtitle: 'Développeur Audio',
      projects: 'Projets',
      soundkeeperTitle: 'SoundKeeper',
      soundkeeperDesc: 'Un système de sauvegarde simple pour vos plugins audio',
      download: 'Télécharger',
      macosOnly: 'macOS uniquement',
      contact: 'Contact',
      comingSoon: 'Bientôt Disponible'
    }
  };
  
  const t = translations[language];
  
  // Function to handle direct downloads from GitHub
  const handleDownload = (projectName, repoName) => {
    playClickSound();
    playHaptic('heavy');
    
    // Add download animation
    const downloadAnimation = document.createElement('div');
    downloadAnimation.className = 'download-animation';
    document.body.appendChild(downloadAnimation);
    
    setTimeout(() => {
      document.body.removeChild(downloadAnimation);
      window.location.href = 'https://github.com/elouannd/SoundKeeper/releases/download/macOS/SoundKeeper.zip';
    }, 1500);
  }
  
  // Function to toggle language
  const toggleLanguage = () => {
    playClickSound();
    setLanguage(language === 'en' ? 'fr' : 'en');
  }

  // Special component that uses Force Touch trackpad capabilities
  const HapticFeedbackArea = ({ children }) => {
    return (
      <div className="haptic-area">
        {children}
      </div>
    );
  };

  return (
    <div className="tech-container">
      <div className="background-grid"></div>
      <div className="moving-gradient"></div>
      
      <header className="header-panel">
        <div className="header-content">
          <h1 className="title">{t.title}</h1>
          <p className="subtitle">{t.subtitle}</p>
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

      <section className="section-container">
        <h2 className="section-title">{t.projects}</h2>
        
        <div className="project-grid">
          <div className="project-card">
            <div className="card-content">
              <div className="card-inner">
                <h3 className="card-title">{t.soundkeeperTitle}</h3>
                <p className="card-description">{t.soundkeeperDesc}</p>
                <div className="card-actions">
                  <button 
                    onClick={() => handleDownload('SoundKeeper', 'soundkeeper')}
                    className="download-button"
                    onMouseEnter={playHoverSound}
                  >
                    <span className="button-edge"></span>
                    <span className="button-face">{t.download}</span>
                  </button>
                  <span className="macos-badge">{t.macosOnly}</span>
                  <a 
                    href="https://github.com/elouannd/soundkeeper" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-button"
                    onMouseEnter={playHoverSound}
                    onClick={playClickSound}
                  >
                    <span className="github-icon">
                      <svg viewBox="0 0 16 16" width="16" height="16">
                        <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <h2 className="section-title">{t.contact}</h2>
        <div className="contact-grid">
          <a href="mailto:eloudom@icloud.com" className="contact-item" onMouseEnter={playHoverSound} onClick={playClickSound}>
            <div className="contact-icon">✉️</div>
            <span>eloudom@icloud.com</span>
          </a>
          <a href="https://github.com/elouannd" target="_blank" rel="noopener noreferrer" className="contact-item" onMouseEnter={playHoverSound} onClick={playClickSound}>
            <div className="contact-icon">
              <svg viewBox="0 0 16 16" width="20" height="20">
                <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </div>
            <span>github.com/elouannd</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
