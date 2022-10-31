import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import StartOrder from './pages/StartOrder'
import Receipt from './pages/Receipt'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/startorder" element={<StartOrder />} />
        <Route path="/foods" element={<Home />} />
        <Route path="/drinks" element={<Home />} />
        <Route path="/snacks" element={<Home />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </div>
  )
}

export default App
