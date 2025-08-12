import me from '../assets/me.jpeg';
import NavLink from './NavLink';

const SplitScreen = () => {
	const descriptiveText = "I am an aspiring software developer with main interest in backend/api development. Open minded and always up to learn about new tech and tools"
	return (
		<div>
			<div id="about" className="flex flex-col lg:flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  bg-white dark:bg-black">
				{/* Left Half - Content Area */}
				<div className="w-full lg:w-2/3 bg-white dark:bg-black flex items-center justify-center">
					<div className="text-center py-16">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white pr-8">{"<Hi there, nice to meet you>"}</h1>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300 pr-8">{descriptiveText}</p>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300 pr-8">Check out what I have been working on recently</p>
						<NavLink href="#portfolio" className="bg-neutral-50 dark:bg-gray-800 rounded-full p-3 animate-bounce mt-8 mx-auto cursor-pointer w-fit inline-flex">
						<svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
						</NavLink>
					</div>
				</div>
				
				{/* Right Half - Image */}
				<div className="w-full lg:w-1/3 bg-white dark:bg-black flex items-center justify-center relative">
					<div className="relative max-w-sm lg:max-w-none">
						<img
							src={me}
							alt="Profile picture"
							className="w-full h-auto object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SplitScreen