import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="topnav">
        <button>Home</button>
        <button>My Network</button>
        <button>Jobs</button>
        <button>Messaging</button>
        <button>Notification</button>
        <button>Me</button>
      </div>
    </>
  )
}

export default App
