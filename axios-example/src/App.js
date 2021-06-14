import {useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

//www.thecocktaildb.com/api/json/v1/1/random.php

function App() {

  const [cocktail, setCocktail] = useState()

  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const fetchRandomCocktail = async () =>{
    try{
      setLoading(true)
      setError(undefined)
      const result = await axios({
        method: "GET",
        url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      })

      console.log("Cocktail result", result.data.drinks[0])
      setCocktail(result.data.drinks[0])      
      return result
    }catch(e){
      setError(e.message)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchRandomCocktail()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {loading ? 
            <code>We are loadig the cocktail</code>
            :
            <>
              {error ? 
                <div>Error is: {error}</div>  
                :
                <>
                  {cocktail ?
                    <div>The cocktail is: {cocktail?.strDrink}</div>
                    :
                    <div>There are no cocktails</div>
                  }
                </>
              }
            </>
          }          
        </div>
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
