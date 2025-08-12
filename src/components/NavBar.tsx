import NavigationLinks from './NavigationLinks'
import Hamburger from './Hamburger'
import { useState, useEffect } from 'react';
import Logo from './Logo'
import GithubLogo from '../assets/github-mark.png'
import GithubLogoWhite from '../assets/github-mark-white.png'
import LinkedInLogo from '../assets/linkedin-Black.png'
import LinkedInLogoWhite from '../assets/linkedin.png'
import CvLogo from '../assets/resume.jpeg'
import NavImg from './NavImg'

const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const navItems = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
  ];

  	const imgItems = [
		{ href: "https://github.com/nipsu24", label: "Github", lightSource: GithubLogo, darkSource: GithubLogoWhite, type: "image" as const},
		{ href: "https://linkedin.com/in/marius-meier-msc", label: "LinkedIn", lightSource: LinkedInLogo, darkSource: LinkedInLogoWhite, type: "image" as const},
		{ href: "/resume.pdf", label: "Resume", lightSource: CvLogo, darkSource: CvLogo, type: "pdf" as const}
	]

  useEffect(() => {
	const handleScroll = () => {
		const currentScrollY = window.scrollY;
		
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
}, [lastScrollY]);

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
						<Hamburger isVisible={isVisible} />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;