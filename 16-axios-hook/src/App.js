import logo from './logo.svg';
import './App.css';
import useFetcher from './hooks/useFetcher'
import { useEffect } from 'react'


function App() {

  const fetcher = useFetcher()
  const fetcherII = useFetcher()

  useEffect(()=>{
    fetcher.fetch({
      url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    })

    fetcherII.fetch({
      url: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552'
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {fetcher.loading || fetcherII.loading ? 
          <div> Caricamento dati</div>
          :
          <>
          {fetcher.error || fetcherII.error ? 
            <div> Errore {fetcher.error || fetcherII.error}</div>
            :
            <p>
              Ho caricato i dati
            </p>
          }
          </>
      }
        
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
