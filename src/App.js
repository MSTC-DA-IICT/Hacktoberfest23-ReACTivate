import './App.css';
import Clublist from './Clublist';
import Academic from './committees/Academic_Committee';
import Cultural from './committees/Cultural_Committee';
import Dance from './committees/Dance_Club';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Dcei from './committees/DCEI';
import ClubDetails from './ClubDetails';
import Navbar from './NavBar';

const App = () => {
  return (
    <div>
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Clublist />}></Route>
          <Route path='/1' element={<Academic />}></Route>
          <Route path='/5' element={<Cultural />}></Route>
          <Route path='/13' element={<Dance/>}></Route>
            <Route path='/14' element={<Dcei/>}></Route>
            <Route path='/:id' element={<ClubDetails />} /> {/* Dynamic route for ClubDetails */}

        </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
