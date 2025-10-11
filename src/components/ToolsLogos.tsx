import { toolSet } from '../text';
import { useState } from 'react';

const ToolsLogos = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-4 justify-center my-6 max-w-xs mx-auto">
      {toolSet.map((tool) => (
        <div key={tool.title} className="relative">
          <img
            src={tool.image}
            alt={tool.title}
            className="w-auto h-8 cursor-pointer"
            onMouseEnter={() => setHoveredTool(tool.title)}
            onMouseLeave={() => setHoveredTool(null)}
          />
          {hoveredTool === tool.title && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap">
              {tool.title.replace(/\s*logo$/i, '')}
              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToolsLogos;
