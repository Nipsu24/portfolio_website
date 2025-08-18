import me from '../assets/me.jpeg';
import NavLink from './NavLink';
import { useState, useEffect } from 'react';
import { greeting, aboutText, hintToProjects } from '../text';
import ToolsLogos from './ToolsLogos';

const SplitScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      <div id="about" className="flex flex-col lg:flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 min-h-screen lg:min-h-0">
        {/* Left Half - Content Area */}
        <div className="w-full lg:w-2/3 flex items-center justify-center py-8 lg:py-0 pr-8">
          <div className={`text-center py-16 transition-all duration-1000 ease-out ${
        				isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      				}`}>
            <h1 className="text-4xl font-bold text-gray-700 dark:text-white">{greeting}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{aboutText}</p>
            <ToolsLogos />
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{hintToProjects}</p>
            <NavLink href="#portfolio" className="bg-neutral-50 hover:bg-neutral-200 dark:bg-gray-800 dark:hover:bg-gray-600 rounded-full p-3 animate-bounce mt-8 mx-auto cursor-pointer w-fit inline-flex">
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </NavLink>
          </div>
        </div>

        {/* Right Half - Image */}
        <div className="w-full lg:w-1/3 flex items-end justify-center relative pb-0 pt-8 lg:py-0">
          <div className="relative w-full max-w-sm lg:max-w-none">
            <img
              src={me}
              alt="Profile picture"
              className="w-full h-auto object-cover object-bottom block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;
