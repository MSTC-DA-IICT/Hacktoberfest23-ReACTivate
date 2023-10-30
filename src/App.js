import './App.css';
import Clublist from './Clublist';
import Academic from './committees/Academic_Committee';
import Cultural from './committees/Cultural_Committee';
import Dance from './committees/Dance_Club';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Dcei from './committees/DCEI';

import ProgrammingClubEvent from "./committees/Programming_Club";
import Sambhav from './committees/Sambhav';
import AI_club from './committees/AI_Club';

const App = () => {
  return (
    <div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Clublist />}></Route>
          <Route path='/1' element={<Academic />}></Route>
          <Route path='/5' element={<Cultural />}></Route>
          <Route path='/13' element={<Dance/>}></Route>
            <Route path='/14' element={<Dcei/>}></Route>

            <Route path='/20' element={<ProgrammingClubEvent/>}></Route>

            <Route path ='/19' element={<Sambhav/>}></Route>
            <Route path='/2' element={<AI_club/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
