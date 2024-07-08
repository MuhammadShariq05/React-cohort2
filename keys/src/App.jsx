import { useState } from 'react'
import './App.css'

function App() {
  //Initialise a state array that has 3 todos
  // Hard codeded
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to Gym",
    description: "10 push ups"
  },
  {
    id: 2,
    title: "Go to Swimming",
    description: "At 10 am"
  },
  {
    id: 3,
    title: "Go to Shopping",
    description: "1 black tshirt, 1 white jeans"
  }
])

  // Using spread operator, [...todos]
  function addTodo(){
    setTodos([...todos, {
      id: 4,
       title: Math.random(),
       description: Math.random()
    }])
  }

  // Iterate over the array to render all the TODOs
  return (
    <>
      <div>
        <button onClick={addTodo}>Add a todo</button><br />
         {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)} 
      </div>
    </>
  )
}

// Create a Todo component that accepts title, description as input
function Todo({title, description}){
  return(
    <div>
      <h1>
        {title}
      </h1>
      <h3>
        {description}
      </h3>
    </div>
  )
}

export default App
