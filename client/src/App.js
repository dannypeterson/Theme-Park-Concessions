import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import StartOrder from './pages/StartOrder'
import Receipt from './pages/Receipt'
import Foods from './pages/Foods'
import Drinks from './pages/Drinks'
import Snacks from './pages/Snacks'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startorder" element={<StartOrder />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </div>
  )
}

export default App
