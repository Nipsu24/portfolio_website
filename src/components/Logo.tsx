interface LogoProps {
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <div className="flex-shrink-0">
      <a href="#" className="text-gray-800 dark:text-white text-xl font-bold transition-all duration-300">
        {isScrolled ? '{MM}' : '{Marius Meier}'}
      </a>
    </div>
  );
};

export default Logo;
