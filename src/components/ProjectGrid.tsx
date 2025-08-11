import ProjectTile from './ProjectTile'
import spaceImage from '../assets/space.jpg';

const projects = [
	  {
    id: 1,
    image: spaceImage,
    title: "Shell Interpreter",
    description: "A project written in C, orienting on the behaviour of the bash shell.",
    link: "https://github.com/Nipsu24/42_minishell"
  },
  {
    id: 2,
    image: spaceImage,
    title: "React Portfolio",
    description: "A modern portfolio website built with React and Tailwind CSS.",
    link: "#"
  },
  {
    id: 3,
    image: spaceImage,
    title: "Data Visualization",
    description: "Interactive charts and graphs using D3.js and modern web technologies.",
    link: "#"
  },
]

const ProjectGrid = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectTile
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;