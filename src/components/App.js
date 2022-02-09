import React, {Component, useState} from "react";
import slides from "../data";
import '../styles/App.css';

const App = (props) => {
  console.log(props)
  const {slides}= props

  const[selectedIndex,setSelectedIndex]=useState(0)
  console.log(selectedIndex)
  return (
    <>
    <div>
      <h1 data-testid="title">{slides[selectedIndex].title}

      </h1>
      <p data-testid="text">{slides[selectedIndex].text}</p>
    </div>
    <button disabled={selectedIndex===0} onClick={()=>setSelectedIndex(selectedIndex-1) } data-testid="button-prev">Previous</button>
    <button disabled={selectedIndex===slides.length-1}  onClick={()=>setSelectedIndex(selectedIndex+1)} data-testid="button-next" >Next</button>
    <button onClick={()=>setSelectedIndex(0)  }  disabled={selectedIndex===0 } data-testid="button-restart" >Restart</button>
    </>
  )
}


export default App;
