import axios from 'axios'
import { useState } from 'react'

export default function useFetcher(initialConfig){

    const [loading, setLoading]  = useState()
    const [error, setError]  = useState()
    const [data, setData]  = useState()

    const fetch = async (options) =>{
        try{
            setError(undefined)
            setLoading(true)
            console.log("Fetching data", options)
            let result = await axios(options)

            setData(result.data)
            return result.data
        }catch(e){
            setError(e.message)
            console.error(e, "Error in fetching data", options)
        }finally{
            setLoading(false)
        }
    }


    return { 
        loading,
        error,
        data,
        fetch
         
    }

}