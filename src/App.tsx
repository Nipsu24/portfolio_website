import { useState } from 'react'
import NavBar from './components/NavBar'
import PortfolioHeader from './components/PortfolioHeader'
import ProjectGrid from './components/ProjectGrid'

const App = () => {
  const [count, setCount] = useState(0)

  return (
  	<>
		<NavBar/>
		 <div className="bg-neutral-50 dark:bg-gray-800 min-h-screen py-16">
			<PortfolioHeader/>
			<ProjectGrid/>
		</div>
    </>
  )
}

export default App
