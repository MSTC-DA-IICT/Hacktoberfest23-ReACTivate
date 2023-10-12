import './App.css'
import { HomePage } from './pages/HomePage'
import { AppearancePage } from './pages/AppearancePage'
import ClublistPage from './pages/ClublistPage'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import {NavBar} from "./components/NavBar";

function App() {

   return (
      <div className="App">
         <BrowserRouter>
         <NavBar />
            <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/clubs" element={<ClublistPage />} />
               <Route exact path="/appearance" element={<AppearancePage />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App

