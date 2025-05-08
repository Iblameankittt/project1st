import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Navbar'






function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='overflow-x-hidden bg-amber-50'>
      <div className='relative overflow-hidden'>
     <Navbar></Navbar>
     </div>
    </div>
  )
}

export default App
