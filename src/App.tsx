import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Main from './pages/Main'
import Apps from './pages/Apps'
import Plugins from './pages/Plugins'
import Footer from './components/Footer'
import './App.css'
import { createContext, useState } from 'react'

export const LanguageContext = createContext({ lang: 'en', toggleLang: () => {} });

function App() {
  const [lang, setLang] = useState('en');
  const toggleLang = () => setLang(lang === 'en' ? 'fr' : 'en');

  return (
    <Router>
      <LanguageContext.Provider value={{ lang, toggleLang }}>
        <div className="app">
          <header>
            <h1>Elouann Domenech</h1>
            <button onClick={toggleLang} className="lang-switch">
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <nav>
              <Link to="/">Main</Link>
              <Link to="/apps">Apps</Link>
              <Link to="/plugins">Plugins</Link>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/plugins" element={<Plugins />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </LanguageContext.Provider>
    </Router>
  )
}

export default App
