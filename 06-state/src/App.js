import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState("react")

  useEffect(()=>{
    setTimeout(()=>{
      setName("lorenzo")
    }, 5000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload {name}.
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
