import { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../data/projects';

interface CardProps {
  title: string;
  description: {
    en: string;
    fr: string;
  };
  type: 'plugin' | 'app';
  version: string;
  githubUrl: string;
  downloadUrl: string;
}

const Card = ({ title, description, type, version, githubUrl, downloadUrl }: CardProps) => {
  const { lang } = useContext(LanguageContext);
  
  return (
    <div className="project-card">
      <h3>{title} <span className="version">{translations[lang].version} {version}</span></h3>
      <span className="type-badge">{translations[lang][type]}</span>
      <p>{description[lang]}</p>
      <div className="card-actions">
        <a href={downloadUrl} className="button">{translations[lang].download}</a>
        <a href={githubUrl} className="button github">GitHub</a>
      </div>
    </div>
  );
};

export default Card;
