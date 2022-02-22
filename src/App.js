import React, {useState} from "react"
import './App.css';
import Surprise from "./Principal_Nav";
import Images from "./Principal_Background"
function App() {
  const [showSurprise, setShowSurprise] = useState(false)
  return(
    <div id="MenuContainer">
      <button id="MenuBtn" onClick={(ev)=> setShowSurprise(!showSurprise)}>
        Menu
      </button>
      <Images/>
      {showSurprise && <Surprise />}
    </div>)
}

export default App;
