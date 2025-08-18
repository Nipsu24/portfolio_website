interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleLinkClick}
      className={className ? className : 'text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors'}
    >
      {children}
    </a>
  );
};

export default NavLink;
