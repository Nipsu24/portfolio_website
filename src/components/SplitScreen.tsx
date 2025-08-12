import me from '../assets/me.jpeg';

const SplitScreen = () => {
	return (
		<div>
			<div id="about" className="flex flex-col lg:flex-row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  bg-white dark:bg-black">
				{/* Left Half - Content Area */}
				<div className="w-full lg:w-2/3 bg-white dark:bg-black flex items-center justify-center">
					<div className="text-center py-16">
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome</h1>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Nice to meet you!</p>
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