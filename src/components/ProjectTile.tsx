interface ProjectTileProps {
  image: string;
  title: string;
  description: string;
  link?: string;
  highlightProject: boolean;
}

const ProjectTile = ({
  image, title, description, link = '#'
} : ProjectTileProps) => {
  const handleTileClick = () => {
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="max-w-sm overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={handleTileClick}
       aria-label={`View ${title} project`}>
      <img
        className="h-48 w-full object-cover"
        src={image}
        alt={title}
      />
      <div className="p-8">
        <h3 className="mt-1 block text-lg leading-tight font-medium text-black dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectTile;

