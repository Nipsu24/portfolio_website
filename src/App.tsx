import { useState } from 'react'
import NavBar from './components/NavBar'
import PortfolioHeader from './components/PortfolioHeader'

const App = () => {
  const [count, setCount] = useState(0)

  return (
  	<>
		<NavBar/>
		<PortfolioHeader/>
    </>
  )
}

export default App
