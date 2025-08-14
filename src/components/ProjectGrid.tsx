import ProjectTile from './ProjectTile';
import { projects } from '../text';

interface ProjectGridProps {
  isTopThree: boolean;
}

const ProjectGrid = ({ isTopThree } : ProjectGridProps) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center md:justify-items-start">
        {isTopThree
          ? projects.slice(0, 3).map(project => (
            <ProjectTile
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))
          : projects.slice(3).map(project => (
            <ProjectTile
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ProjectGrid;
