import logo from './logo.svg';
import useItem from './hooks/useItem'
import './App.css';

function App() {

  const itemHook = useItem()

  const onAddFavorite = event =>{
    itemHook.addFavorite()
    console.log("Il numero di preferiti ", itemHook.favorite)
  }

  const onAddChart = event =>{
    itemHook.addToChart()
    console.log("Chart", itemHook.cart)
  }

  const onViewItem = event =>{
    itemHook.viewItem()
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Il numero dei preferiti è {itemHook.favorite}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={onAddFavorite}>Aggiungi Preferito</button>
        <button onClick={onAddChart}>Aggiungi al carrello</button>
        <button onClick={onViewItem} >Vedi prodotto</button>

      </header>
    </div>
  );
}

export default App;
