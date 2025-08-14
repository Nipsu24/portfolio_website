import { externalLinks } from "../text";
import { navItems } from "../text";

{ externalLinks}

interface HamburgerProps {
  isVisible: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isVisible, isOpen, onToggle }) => {
if (!isVisible) return null;

  return (
    <div className="md:hidden">
      <button 
        onClick={onToggle}
        className="text-black dark:text-white hover:text-gray-500 p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {/* Hamburger to X animation */}
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg transform transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        } origin-top z-50`}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
			<a
			href={item.href}
			className="block text-black dark:text-white hover:text-gray-500 py-2 text-lg"
			onClick={onToggle}
			>
				{item.label}
			</a>
		  ))}
			{externalLinks.map((link) => (
			<a
				key={link.href}
				href={link.href}
				className="block text-black dark:text-white hover:text-gray-500 py-2 text-lg"
				target={link.target}
				rel={link.rel}
				aria-label={link.text}
			>
				{link.text}
			</a>
			))}
        </div>
      </div>
    </div>
  );
};

export default Hamburger;