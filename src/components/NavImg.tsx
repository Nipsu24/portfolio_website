interface NavImgProps {
  isVisible: boolean;
  items: Array<{
    href: string;
    label: string;
    lightSource: string;
    darkSource: string;
	type: 'image' | 'pdf';
  }>;
}

const NavImg: React.FC<NavImgProps> = ({ isVisible, items }) => {
  if (!isVisible) return null;

  return (
    <div className="hidden md:flex items-center space-x-3">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label={item.label}
        >
          <img
            src={item.lightSource}
            alt={item.label}
            className="size-5 align-middle dark:hidden"
          />
          <img
            src={item.darkSource}
            alt={item.label}
            className="size-5 align-middle hidden dark:block"
          />
        </a>
      ))}
    </div>
  );
};


export default NavImg;
