import { useState,useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import './App.css';

const columns = [
  { field: 'name', headerName: 'Nome', width: 150 },
  { field: 'surname', headerName: 'Cognome', width: 150 },
  { field: 'fullName',
    width: 160,
    headerName: 'Full name',
    valueGetter: (params) =>{
      console.log(params)
      return params.row.name + " " +params.row.surname
    }
  },
]

function App() {

  const [loadingFetch, setLoadingFetch] = useState(true)
  const [errorFetch, setFetchError] = useState()
  const [data, setData] = useState()

  useEffect(()=>{
    loadData()
  }, [])

  const loadData = async () =>{
    try{
      setLoadingFetch(true)
      let result = await fakeFetch()      
      setData(result)
    }catch(e){
      setFetchError(e)
    }finally{
      setLoadingFetch(false)
    }
  }

  const fakeFetch = (values) =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          {
            id: 1,
            name: "Lorenzo",
            surname: "De Francesco"
          },
          {
            id: 2,
            name: "Mario",
            surname: "Rossi"
          },
          {
            id: 4,
            name: "Mario",
            surname: "Bianchi"
          },
        ])
        //reject("Error, no data")
      }, 2500) 
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {loadingFetch ? 
          <div>Sto caricando</div>
          :
          <>
          {errorFetch ? 
            <div>Errore</div>
            :
            <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
          }
          </>
        }
      </header>
    </div>
  );
}

export default App;
