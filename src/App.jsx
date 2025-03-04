import { useState } from 'react'
import './App.css'

function App() {
  // Function to handle direct downloads from GitHub
  const handleDownload = (projectName, repoName) => {
    // Direct download link for macOS
    window.location.href = 'https://github.com/elouannd/SoundKeeper/releases/download/macOS/SoundKeeper.zip';
  }

  return (
    <div className="portfolio-container">
      <header>
        <h1 className="name-title">Elouann Domenech</h1>
        <p className="tagline">🎵🎵🎼🎶🎼🎹🎷🎹🥁🎤🎺🎻🎶</p>
      </header>

     
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>SoundKeeper</h3>
            <p>A simple backup system for your audio plugin</p>
            <div className="project-links">
              <div className="buttons-row">
                <div className="download-container">
                  <button onClick={() => handleDownload('SoundKeeper', 'soundkeeper')}>
                    Download
                  </button>
                  <span className="macos-badge">🍎 macOS only</span>
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
          
          {/* Project 2 */}
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Description of project 2</p>
            <div className="project-links">
              <div className="buttons-row">
                <button disabled>Coming Soon</button>
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
                <button disabled>Coming Soon</button>
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
                <button disabled>Coming Soon</button>
                <a 
                  href="#" 
                  className="button-link disabled"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: eloudom@icloud.com</p>
        <p>GitHub: <a href="https://github.com/elouannd" target="_blank" rel="noopener noreferrer">github.com/elouannd</a></p>
        <p>LinkedIn: naN</p>
      </section>
    </div>
  )
}

export default App
