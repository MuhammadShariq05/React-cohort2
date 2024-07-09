import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then(function (response) {
      setTodo(response.data.todos);
    });
  }, []);

  return (
    <>
      {todos.map(todo => <Todo id={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  );
}

function Todo({ title, description }) {
  

  return (
    <>
      <div>
        <h3>{title}</h3>
        <h5>{description}</h5>
      </div>
    </>
  );
}

export default App;
