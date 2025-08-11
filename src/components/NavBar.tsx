import NavLink from './NavLink'

const NavBar = () => {
	const navItems = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
  ];

	return (
		<nav className="bg-white dark:bg-black">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					{/* Logo/Brand */}
					<div className="flex-shrink-0">
						<a href="#" className="text-black dark:text-white text-xl font-bold">
							Marius Meier
						</a>
					</div>

					{/* Navigation Links */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navItems.map((item) => (
								<NavLink key={item.href} href={item.href}>
									{item.label}
								</NavLink>
							))}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button className="text-black dark:text-white hover:text-gray-500">
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;