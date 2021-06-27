import logo from './logo.svg';
import './App.css';
import { useFormik } from 'formik'

function App() {

  const formikForm = useFormik({
    initialValues: {},
    onSubmit: (values, formikBag)=>{
      alert(JSON.stringify(values))
    }
  })


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={formikForm.handleSubmit}>  
              Inserisci il nome 
              <input
                name='name'
                type='text'
                onChange={formikForm.handleChange}
                value={formikForm?.values?.name}
              />
              <br />

              Inserisci il surname 
              <input
                name='surname'
                type='text'
                onChange={formikForm.handleChange}
                value={formikForm?.values?.surname}
              />

            <br />
              <button type='submit'>Invia</button>
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
