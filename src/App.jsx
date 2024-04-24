import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/login'
import Signup from './components/signup'
import './App.css'
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      
      <Routes>
        <Route exact path='/' element={ <Login />}/>
        <Route  path='/signup' element={ <Signup />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
