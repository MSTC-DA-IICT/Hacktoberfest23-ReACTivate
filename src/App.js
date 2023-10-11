
import './App.css';
import Clublist from './Clublist';
import Academic from './committees/Academic_Committee';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import React from 'react'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Clublist/>}></Route>
            <Route path='/1' element={<Academic/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
