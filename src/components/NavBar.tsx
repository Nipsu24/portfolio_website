import NavLink from './NavLink'
import { useState, useEffect } from 'react';

const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const navItems = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		
		// Check scroll direction first
		if (currentScrollY < lastScrollY) {
			// Scrolling up - show full name and navbar
			setIsScrolled(false);
			setIsVisible(true);
		} else if (currentScrollY > 100) {
			// Scrolling down and past 100px - show MM and hide navbar
			setIsScrolled(true);
			setIsVisible(false);
		}
		
		setLastScrollY(currentScrollY);
	};
	window.addEventListener('scroll', handleScroll);
	return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

	return (
		<nav className={`sticky top-0 z-50 transition-all duration-300 ${
			isVisible ? 'bg-white dark:bg-black' : 'bg-transparent'
		}`}>
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					{/* Logo/Brand - Always visible */}
					<div className="flex-shrink-0">
						<a href="#" className="text-black dark:text-white text-xl font-bold transition-all duration-300">
							{isScrolled ? "{MM}" : "{Marius Meier}"}
						</a>
					</div>

					{/* Navigation Links - Hide/show with scroll */}
					{isVisible ? (
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								{navItems.map((item) => (
									<NavLink key={item.href} href={item.href}>
										{item.label}
									</NavLink>
								))}
							</div>
						</div>
					) : null}

					{/* Mobile menu button - Hide/show with scroll */}
					{isVisible ? (
						<div className="md:hidden">
							<button className="text-black dark:text-white hover:text-gray-500">
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>
					) : null}
				</div>
			</div>
		</nav>
	);
}

export default NavBar;