
function App() {
  return(
    <>
      <div>
        <CardWrapper>
          Hi There
          </CardWrapper>
          <CardWrapper>
          lets code!
          </CardWrapper>
      </div>
    </>   
  )
} 

function CardWrapper({children}){
  return(
    <div style={{border: "4px solid white", padding: 20, alignText: "center"}}>
      {children}
    </div>
  )
}


export default App
