import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/Landing';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* client site routing */}
      <div>
        <div className='topbar'>
          Top Bar
          <button onClick={() => {
            // 1st method global locatoin object in react 
            window.location.href="/landing";
          }}>
            landing
          </button>
          <button onClick={() => {
            window.location.href="/dashboard";
          }}> 
            dashboard
          </button>
        </div>
      <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/landing" element={<Landing />}/>
          </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
