interface ProjectTileProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectTile = ({ image, title, description, link = "#" } : ProjectTileProps) => {
	return (
		<div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
			<img
				className="h-48 w-full object-cover"
				src={image}
				alt={title}
			/>
			<div className="p-8">
			<a href={link} className="mt-1 block text-lg leading-tight font-medium text-black">
				{title}
			</a>
			<p className="mt-2 text-gray-500">
				{description}
			</p>
			</div>
		</div>
	);
}

export default ProjectTile;

