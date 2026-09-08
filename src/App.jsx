import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Informatica from './pages/Informatica'
import Alimentos from './pages/Alimentos'
import Apicultura from './pages/Apicultura'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/informatica">Informática</Link>
        <Link to="/alimentos">Alimentos</Link>
        <Link to="/apicultura">Apicultura</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/informatica" element={<Informatica />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/apicultura" element={<Apicultura />} />
      </Routes>

    </div>
  )
}

export default App
