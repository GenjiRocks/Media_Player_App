
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'


function App() {
 

  return (
    <>
      <Header/>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/watchhistory" element={<Watchhistory/>}/>
    </Routes>
     
    </>
  )
}

export default App
