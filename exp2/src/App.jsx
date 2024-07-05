function App() {
  

  return (
    <>
      <div>
        <button>Click me to chNGE THE TITLE</button>
      <Header title="Shariq"/>
      <Header title="Iqra"/>
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