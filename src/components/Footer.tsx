import { navItems } from "./NavBar";
import NavLink from "./NavLink";
import { externalLinks } from "../text";

const Footer = () => {
	return (
		<div className="bg-neutral-100 dark:bg-black py-8">
  			<div className="flex flex-col md:flex-row md:items-center md:justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-gray-500 space-y-4 md:space-y-0 text-center md:text-left text-sm">
    			<span>© 2025 Marius Meier</span>
    			<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 items-center md:justify-end">
					{navItems.map((item) => (
						<NavLink key={item.href} href={item.href} className="text-gray-500 text-sm hover:text-gray-400">
							{item.label}
						</NavLink>
					))}
					  {externalLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-gray-500 text-sm hover:text-gray-400"
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
}

export default Footer;