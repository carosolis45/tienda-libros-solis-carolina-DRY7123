import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar' // <-- NUEVO
import Home from './pages/Home'
import CategoriaDetalle from './pages/CategoriaDetalle'

function App() {
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar /> {/* <-- NUEVO */}
      <main className="pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:id" element={<CategoriaDetalle />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
