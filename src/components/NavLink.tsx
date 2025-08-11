interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children}) => {
	return (
		<a 
		href={href} 
		className={`text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
		>
		{children}
		</a>
	);
};

export default NavLink;