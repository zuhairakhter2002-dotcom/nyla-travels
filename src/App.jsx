import { Routes,Route } from 'react-router-dom'
import './App.css'
import MainLayout from './Pages/MainLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Visa from './pages/Visa'
import Contact from './pages/Contact'
import Packages from './Pages/Packages'


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>} />
        <Route path='/packages' element={<Packages/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/visa' element={<Visa/>}/>   
        <Route path='/contact' element={<Contact/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
