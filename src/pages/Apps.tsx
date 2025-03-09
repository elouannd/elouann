import { useContext } from 'react';
import Card from '../components/Card';
import { projects, translations } from '../data/projects';
import { LanguageContext } from '../App';

const Apps = () => {
  const { lang } = useContext(LanguageContext);
  const appProjects = projects.filter(project => project.type === 'app');
  
  return (
    <div className="page">
      <h2>{translations[lang].myApps}</h2>
      <div className="cards-grid">
        {appProjects.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
