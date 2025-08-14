import NavigationLinks from './NavigationLinks'
import Hamburger from './Hamburger'
import { useState, useEffect } from 'react';
import Logo from './Logo'
import { imgItems } from '../text';
import NavImg from './NavImg'

export const navItems = [
{ href: "#about", label: "About" },
{ href: "#portfolio", label: "Portfolio" },
{ href: "#contact", label: "Contact" }
];

const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

  useEffect(() => {
	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		
	// Close mobile menu on scroll
		if (isMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}

		if (currentScrollY < lastScrollY) {
			// Scrolls up - shows full name and navbar
			setIsScrolled(false);
			setIsVisible(true);
		} else if (currentScrollY > 100) {
			// Scrolls down and past 100px - show MM and hide navbar
			setIsScrolled(true);
			setIsVisible(false);
		}
		setLastScrollY(currentScrollY);
	};
	window.addEventListener('scroll', handleScroll);
	return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY, isMobileMenuOpen]);

	return (
		<nav className={`sticky top-0 z-50 transition-all duration-300 ${
			isVisible ? 'bg-white dark:bg-black' : 'bg-transparent'
		}`}>
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-start">
					{/* Logo/Brand - Always visible */}
					<Logo isScrolled={isScrolled}/>
					{/* Navigation Links - Hide/show with scroll */}
					<NavigationLinks isVisible={isVisible} items={navItems}/>
					{/* Mobile menu button - Hide/show with scroll */}
					<div className="ml-auto">
						<NavImg isVisible={isVisible} items={imgItems}/>
						<Hamburger 
							isVisible={isVisible} 
              				isOpen={isMobileMenuOpen}
              				onToggle={toggleMobileMenu} />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;