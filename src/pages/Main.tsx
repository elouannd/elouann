import { useContext } from 'react';
import Card from '../components/Card';
import { projects, translations } from '../data/projects';
import { LanguageContext } from '../App';

const Main = () => {
  const { lang } = useContext(LanguageContext);
  
  return (
    <div className="page">
      <h2>{translations[lang].welcome}</h2>
      <p>{translations[lang].welcomeSubtitle}</p>
      <div className="cards-grid">
        {projects.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Main;
