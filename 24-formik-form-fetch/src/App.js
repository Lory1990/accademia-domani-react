import { useState, useEffect } from 'react'
import './App.css';
import { useFormik } from 'formik'

function App() {
 
  const [error, setError] = useState()
  
  const [errorFetch, setFetchError] = useState()
  const [loadingFetch, setLoadingFetch] = useState(true)

  useEffect(()=>{
    loadData()
  }, [])

  
  const loadData = async () =>{
    try{
      setLoadingFetch(true)
      let result = await fakeFetch()
      formikForm.setValues(result)
    }catch(e){
      setFetchError(e)
    }finally{
      setLoadingFetch(false)
    }
  }

  const formikForm = useFormik({
    initialValues: {},
    onSubmit: async (values, formikBag)=>{
      try{
        //alert(JSON.stringify(values))
        await fakeSubmit(values)
      }catch(e){
        setError(e)
      }finally{
        formikBag.setSubmitting(false)
      }
    }
  })

  const fakeFetch = (values) =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({
          name: "Lorenzo",
          surname: "De Francesco"
        })
        //reject("Error, no data")
      }, 2500) 
    })
  }

  const fakeSubmit = (values) =>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
        //reject("Error, no data")
      }, 500) 
    })
  }

  const isSubmittingForm = formikForm.isSubmitting
  //console.log("isSubmittingForm", isSubmittingForm)
  return (
    <div className="App">
      <header className="App-header">
      {loadingFetch ? 
        <div>Caricamento dati...</div>
        :
        <>
        {errorFetch ? 
          <div>Errore nel Caricamento dati</div>
          :
        <form onSubmit={formikForm.handleSubmit}>  
              {error && <div className='error'>
                  {error}
              </div>}
              Inserisci il nome 
              <input
                name='name'
                type='text'
                disabled={isSubmittingForm}
                onChange={formikForm.handleChange}
                value={formikForm?.values?.name}
              />
              <br />

              Inserisci il cognome 
              <input
                name='surname'
                type='text'
                disabled={isSubmittingForm}
                onChange={formikForm.handleChange}
                value={formikForm?.values?.surname}
              />
              <br />
              {formikForm.isSubmitting ? 
                "Loading..."
                :
                <button type='submit'>Invia</button>
              }
              
        </form>
        }
        </>
      }      
      </header>
    </div>
  );
}

export default App;
