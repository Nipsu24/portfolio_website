import { useState } from 'react'
import NavBar from './components/NavBar'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
		<div>
			<NavBar/>
		</div>
        <p>
          Hello World!!
        </p>
      </div>
    </>
  )
}

export default App
