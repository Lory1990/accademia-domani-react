import { useState } from 'react'

export default function useItem(initialConfiguration){

    const [favorite, setFavorite] = useState(0) // Number of favorite
    const [cart, setChart] = useState(0) // Number of chart

    const addFavorite = () =>{
        setFavorite(favorite+1)
    }

    const addToChart = () =>{
        setChart(cart+1)
    }

    const viewItem = () =>{
        //...
    }

    return {
        addFavorite,
        addToChart,
        viewItem,

        favorite,
        cart
    }

}