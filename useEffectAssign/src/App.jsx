import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Todo id={1}/>
      </div>
    </>
  )
}

function Todo({id}){
  const [todo, setTodo] = useState([]);

  
}

export default App
