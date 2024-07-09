import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

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
   useEffect(()=>{
    axios.get
   }, [])

}

export default App
