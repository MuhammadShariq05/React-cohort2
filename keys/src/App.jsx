
function App() {
  return(
    <div><CardWrapper innerComponent={<TextWrapper />} /></div>    
  )
}

function CardWrapper({innerComponent}){
  return(
    <div style={{border: "4px solid white"}}>
      {innerComponent}
    </div>
  )
}

function TextWrapper(){
  return(
    <div>
      Hi there
    </div>
  )
}

export default App
