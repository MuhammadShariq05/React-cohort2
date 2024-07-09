import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {

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
  // initial logic
   useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then(function(response){
      setTodo(response.data.todo)
    })
   }, [])


   return (
    <>
      <div>
        <h3>
          {todo.title}
        </h3>
        <h5>
          {todo.description}
        </h5>
      </div>
    </>
   )

}

export default App
