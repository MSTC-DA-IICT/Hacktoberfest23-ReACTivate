import './App.css'
import { HomePage } from './pages/HomePage'
import Clublist from './Clublist'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

function App() {

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/clubs" element={<Clublist />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App

