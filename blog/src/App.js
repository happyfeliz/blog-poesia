import React, {useState} from "react"
import './App.css';
import Surprise from "./Principal_Nav";
function App() {
  const [showSurprise, setShowSurprise] = useState(false)
  return(
    <div>
      <button onClick={(ev)=> setShowSurprise(!showSurprise)}>
        Menu
      </button>
      {showSurprise && <Surprise />}
    </div>)
}

export default App;
