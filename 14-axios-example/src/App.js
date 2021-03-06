import {useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

//www.thecocktaildb.com/api/json/v1/1/random.php

function App() {

  const [cocktail, setCocktail] = useState()

  const fetchRandomCocktail = async () =>{
    try{
      const result = await axios({
        method: "GET",
        url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      })

      setCocktail(result.data.drinks[0])      
    }catch(e){
      console.error(e)
    }
  }

  useEffect(()=>{
    fetchRandomCocktail()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>The cocktail is: {cocktail?.strDrink}</div>
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
