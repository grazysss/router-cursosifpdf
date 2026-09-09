import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Informatica from './pages/Informatica'
import Alimentos from './pages/Alimentos'
import Apicultura from './pages/Apicultura'
import NaoEncontrada from './pages/NaoEncontrada'
import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='header'>
      <img src={logo} alt="LOGO IFPDF" />
      <nav>
        <Link to="/" className='a'>Início</Link>
        <Link to="/informatica" className='a'>Informática</Link>
        <Link to="/alimentos" className='a'>Alimentos</Link>
        <Link to="/apicultura" className='a'>Apicultura</Link>
      </nav>

    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/informatica" element={<Informatica />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/apicultura" element={<Apicultura />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      </div>
    </div>
  )
}

export default App
