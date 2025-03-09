import { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../data/projects';

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  
  return (
    <footer className="footer">
      <div>
        <a href="mailto:your.email@example.com">{translations[lang].email}</a>
        <a href="https://github.com/yourusername">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
