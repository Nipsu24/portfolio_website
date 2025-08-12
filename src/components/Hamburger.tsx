interface HamburgerProps {
  isVisible: boolean;
}

const Hamburger: React.FC<HamburgerProps> = ({ isVisible }) => {
	return (
		isVisible ? (
			<div className="md:hidden">
				<button className="text-black dark:text-white hover:text-gray-500">
					<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		) : null
	);
}

export default Hamburger;