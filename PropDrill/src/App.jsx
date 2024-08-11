import { useState } from "react";
import "./App.css";
import { CounterProvider, useCounter } from "./Context";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h4>Counter: {count}</h4>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="count">
        <h4>Counter without context API</h4>
        <h4>
          <Count count={count} setCount={setCount} />
        </h4>
        {/* <Button count={count} setCount={setCount}/> */}
      </div>

      {/* context api code */}
      <div>
        {/* Wrap anyone that wants to use the teleported value inside a provider */}
        <CounterProvider>
          <div className="App">
            <h4>Counter with Context API</h4>
            <Counter />
          </div>
        </CounterProvider>
      </div>
    </>
  );
}

// Porp drilling
function Count({ count, setCount }) {
  return (
    <div>
      {count}
      <Button count={count} setCount={setCount} />
    </div>
  );
}

function Button({ count, setCount }) {
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
