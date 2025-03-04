import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en');
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Detect browser language on component mount
  useEffect(() => {
    const browserLang = navigator.language.substring(0, 2).toLowerCase();
    if (browserLang === 'fr') {
      setLanguage('fr');
    }
  }, []);
  
  // Translations
  const translations = {
    en: {
      title: 'Elouann Domenech',
      projects: 'Projects',
      soundkeeperTitle: 'SoundKeeper',
      soundkeeperDesc: 'A simple backup system for your audio plugin',
      download: 'Download',
      macosOnly: '🍎 macOS only',
      contact: 'Contact',
      comingSoon: 'Coming Soon'
    },
    fr: {
      title: 'Elouann Domenech',
      projects: 'Projets',
      soundkeeperTitle: 'SoundKeeper',
      soundkeeperDesc: 'Un système de sauvegarde simple pour vos plugins audio',
      download: 'Télécharger',
      macosOnly: '🍎 macOS uniquement',
      contact: 'Contact',
      comingSoon: 'Bientôt Disponible'
    }
  };
  
  const t = translations[language];
  
  // Function to handle direct downloads from GitHub
  const handleDownload = (projectName, repoName) => {
    // Direct download link for macOS
    window.location.href = 'https://github.com/elouannd/SoundKeeper/releases/download/macOS/SoundKeeper.zip';
  }
  
  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  }

  return (
    <div className="portfolio-container">
      <header>
        <h1 className="name-title">{t.title}</h1>
        <p className="tagline">🎵🎵🎼🎶🎼🎹🎷🎹🥁🎤🎺🎻🎶</p>
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
        </button>
      </header>

     
      <section className="projects">
        <h2>{t.projects}</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>{t.soundkeeperTitle}</h3>
            <p>{t.soundkeeperDesc}</p>
            <div className="project-links">
              <div className="buttons-row">
                <div className="download-container">
                  <button onClick={() => handleDownload('SoundKeeper', 'soundkeeper')}>
                    {t.download}
                  </button>
                  <span className="macos-badge">{t.macosOnly}</span>
                </div>
                <a 
                  href="https://github.com/elouannd/soundkeeper" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Hidden projects - they're still in the code but not displayed */}
          {showAllProjects && (
            <>
              {/* Project 2 */}
              <div className="project-card">
                <h3>Project 2</h3>
                <p>Description of project 2</p>
                <div className="project-links">
                  <div className="buttons-row">
                    <button disabled>{t.comingSoon}</button>
                    <a 
                      href="#" 
                      className="button-link disabled"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="project-card">
                <h3>Project 3</h3>
                <p>Description of project 3</p>
                <div className="project-links">
                  <div className="buttons-row">
                    <button disabled>{t.comingSoon}</button>
                    <a 
                      href="#" 
                      className="button-link disabled"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 4 */}
              <div className="project-card">
                <h3>Project 4</h3>
                <p>Description of project 4</p>
                <div className="project-links">
                  <div className="buttons-row">
                    <button disabled>{t.comingSoon}</button>
                    <a 
                      href="#" 
                      className="button-link disabled"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      
      <section className="contact">
        <h2>{t.contact}</h2>
        <p>Email: eloudom@icloud.com</p>
        <p>GitHub: <a href="https://github.com/elouannd" target="_blank" rel="noopener noreferrer">github.com/elouannd</a></p>
        <p>LinkedIn: naN</p>
      </section>
    </div>
  )
}

export default App
