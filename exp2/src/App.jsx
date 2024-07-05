import { useState } from "react";


function App() { 
  return(
    <div>
      <UpdateApp />
      <Header title="Iqra"/><br />
      <Header title="Nawab"/><br />
      <Header title="Ayan"/><br />
      <Header title="Aliza"/><br />
    </div>
  )
}
// Push the state down method, can use React.memo for re-render
function UpdateApp(){

  const [title, setTitle] = useState("Shariq");
  function updateTitle(){
    setTitle(`My name is ${Math.random()}`);
  }

  return (
    <>
      <div>
        <button onClick={updateTitle}>Click me to change the title</button><br />
      <Header title={title}/><br />
      </div>
    </>
  )
}

function Header({title}){

  return(
    <>
      {title}
    </>
  )
}

export default App