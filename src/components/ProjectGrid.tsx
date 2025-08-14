import ProjectTile from './ProjectTile';
import PortfolioHeader from './PortfolioHeader';
import { projects } from '../text';
import { headerFurtherProjects } from '../text';
import { headerTopThree } from '../text';

const ProjectGrid = () => {

	 const highlighted = projects.filter(p => p.highlightProject);
  	const normal = projects.filter(p => !p.highlightProject);

  return (
    <>
      <PortfolioHeader text={headerTopThree}/>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center md:justify-items-start">
          {highlighted.map(project => (
            <ProjectTile key={project.title} {...project} />
          ))}
        </div>
        <PortfolioHeader text={headerFurtherProjects}/>
	  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center md:justify-items-start">
          {normal.map(project => (
            <ProjectTile key={project.title} {...project} />
          ))}
        </div>
      </div>
    </>
	  );
};

export default ProjectGrid;
