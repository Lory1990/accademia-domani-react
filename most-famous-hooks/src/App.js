import { useState, useMemo, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [number, setNumber] = useState(-1)

  // const [numberToSquare, setNumberToSquare] = useState(1)
  // useEffect(()=>{
  //   console.log("numberToSquare", numberToSquare)
  // }, [numberToSquare])
  

  useEffect(()=>{
    console.log("number in useEffect" + number)
    //setNumberToSquare(number*number)
    return ()=>{
      console.log("On unload")
    }
  },[number])

  const numberToSquare = useMemo(()=>{
    console.log("Evauating square")
    return number*number
  },[number])

  console.log("Number square", numberToSquare)

  const onAddOne = () =>{
    setNumber(number+1)
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <br />
          Il numero è {number}
          <button onClick={onAddOne}>Aggiungi uno</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
