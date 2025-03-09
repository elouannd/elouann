import { useContext } from 'react';
import Card from '../components/Card';
import { projects, translations } from '../data/projects';
import { LanguageContext } from '../App';

const Plugins = () => {
  const { lang } = useContext(LanguageContext);
  const pluginProjects = projects.filter(project => project.type === 'plugin');
  
  return (
    <div className="page">
      <h2>{translations[lang].myPlugins}</h2>
      <div className="cards-grid">
        {pluginProjects.map(project => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Plugins;
