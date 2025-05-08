import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Lastbanner from './Lastbanner'
Navbar
Lastbanner
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
        <Navbar></Navbar>
         <Lastbanner></Lastbanner>
    </>
  )
}

export default App

