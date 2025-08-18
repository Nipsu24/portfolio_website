import { toolSet } from '../text';

const ToolsLogos = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center my-6 max-w-xs mx-auto">
      {toolSet.map((tool) => (
        <img
          key={tool.title}
          src={tool.image}
          alt={tool.title}
          className="w-auto h-8"
        />
      ))}
    </div>
  );
};

export default ToolsLogos;
