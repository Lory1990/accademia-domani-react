import { useState } from 'react'
import logo from './logo.svg';
import SubComponent from './SubComponent'
import './App.css';

function App() {

  const [text, setText] = useState("testo iniziale")

  const onClickOnButton = (event) =>{
    //alert("Cliccato su bottone")
    setText("Sono cambiato")
  }

  const onClickOnButtonFromSubComponent = (event) =>{
    setText("Sono cambiato dal sotto componente")
  }

  const onChangeSelect = (event) =>{
    //console.log(event)
    console.log(event.target.value)
  }

  const onFocus = () =>{
    console.log("onFocus")
  }

  const onBlur = () =>{
    console.log("onBlur")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Il testo dello stato è {text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onClickOnButton}>Il mio bottone</button>
        <SubComponent onClickOnButton={onClickOnButtonFromSubComponent} />
        <select onChange={onChangeSelect}> 
          <option value="01">Opzione 1</option>
          <option value="02">Opzione 2</option>
        </select>
        <input onFocus={onFocus} onBlur={onBlur} />
      </header>
    </div>
  );
}

export default App;
