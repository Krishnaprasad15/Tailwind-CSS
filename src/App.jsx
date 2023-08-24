import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' font-bold font-poppins underline text-2xl border-spacing-2 py-4 px-20 bg-gray-500 flex justify-center '>
       Hello world
      </div>
    </>
  )
}

export default App
