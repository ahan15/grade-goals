import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './ResponsiveNavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <ResponsiveAppBar />
      <p>Hello World!</p>     
    </div>
  )
}

export default App
