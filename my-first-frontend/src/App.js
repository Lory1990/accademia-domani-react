import logo from './logo.svg';

import MyComponent from './MyComponent'

import './App.css';

function App() {

  const products = [
    {
      title: "Apple"
    },
    {
      title: "Tomato"
    },
    {
      title: "Tomato"
    }
  ]

  const isThereTwoItems = products.length === 2

  return (
    <div className="App">
      <header className="App-header">
        {products.map((item, index)=>{
          //console.log("[products][SingleItem]",item.title)
          return <MyComponent key={item.title} title={item.title} /> 
        })}
        {isThereTwoItems && <p>There are two items</p>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi I am an app React
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
