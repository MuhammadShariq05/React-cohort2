import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [selectedId, setSelectedId] = useState(1);
  return (
    <>
      <div>
        <button onClick={function(){
          setSelectedId(1)
        }}>1</button>
        <button onClick={function(){
          setSelectedId(2)
        }}>2</button>

        <button onClick={function(){
          setSelectedId(3)
        }}>3</button>

        <button onClick={function(){
          setSelectedId(4)
        }}>4</button>

        <Todo id={selectedId}/>
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
   }, [id])


   return (
    <>
    <div>
      Id: {id}
    </div>
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
