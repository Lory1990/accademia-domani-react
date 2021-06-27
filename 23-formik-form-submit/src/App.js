import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik'

function App() {

  const [error, setError] = useState()

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

              Inserisci il surname 
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
