import NavLink from './NavLink'

interface NavigationLinksProps {
  isVisible: boolean;
  items: Array<{href: string, label: string}>;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ isVisible, items }) => {
	return (
		isVisible ? (
			<div className="hidden md:block">
				<div className="ml-10 flex items-baseline space-x-4">
					{items.map((item) => (
						<NavLink key={item.href} href={item.href}>
							{item.label}
						</NavLink>
					))}
				</div>
			</div>
		) : null
	);
}

export default NavigationLinks;