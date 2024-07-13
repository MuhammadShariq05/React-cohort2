import { useState } from 'react'
import './App.css'
import { CounterProvider, useCounter } from './Context';


const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h4>Counter: {count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='count'>
        <Count count={count}/>
        <Button count={count} setCount={setCount}/>
      </div>

      <div>
      <CounterProvider>
      <div className="App">
        <h4>Counter with Context API</h4>
        <Counter />
      </div>
    </CounterProvider>  
      </div>    
    </>
  )
}

// Porp drilling
function Count({count}){
  return(
    <div>
      {count}
      {/* <Button count={count} setCount={setCount}/> */}
    </div>
  )
}

function Button({count, setCount}){
  return(
    <>
      <div>
        <button onClick={()=>{
          setCount(count-1)
        }}>-</button>
        <button onClick={()=>{
          setCount(count+1)
        }}>+</button>
      </div>
    </>
  )
}

export default App
