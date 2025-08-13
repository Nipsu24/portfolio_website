import { useState } from 'react'
import NavBar from './components/NavBar'
import PortfolioHeader from './components/PortfolioHeader'
import ProjectGrid from './components/ProjectGrid'
import SplitScreen from './components/SplitScreen'
import {headerTopThree, headerFurtherProjects} from './text'

const App = () => {
  const [count, setCount] = useState(0)

  return (
  	<>
		<NavBar/>
		<SplitScreen/>
		<div className="bg-neutral-50 dark:bg-black min-h-screen py-16 relative">
			<div className="absolute top-0 left-0 right-0 h-px bg-gray-300 shadow-lg"></div>
			<PortfolioHeader text={headerTopThree}/>
			<ProjectGrid isTopThree={true}/>
			<PortfolioHeader text={headerFurtherProjects}/>
			<ProjectGrid isTopThree={false}/>
		</div>
    </>
  )
}

export default App
