import { memo, useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function logClick() {
    console.log("child clicked")
  }

  return <div>
    <Child InputFunc={logClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({InputFunc}) => {
  console.log("child render")

  return <div>
    <button onClick={InputFunc}>Click Me to log</button>
  </div>
})

export default App;
