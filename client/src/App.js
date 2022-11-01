import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import StartOrder from './pages/StartOrder'
import Receipt from './pages/Receipt'
import Foods from './pages/Foods'
import Drinks from './pages/Drinks'
import Snacks from './pages/Snacks'
import { useState } from 'react'
import { set } from 'mongoose'

function App() {
  const initialState = {
    name: '',
    foods: [],
    drinks: [],
    snacks: []
  }

  const [formState, setFormState] = useState(initialState)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/startorder"
          element={
            <StartOrder
              formState={formState}
              initialState={initialState}
              setFormState={setFormState}
            />
          }
        />
        <Route
          path="/foods"
          element={<Foods formState={formState} setFormState={setFormState} />}
        />
        <Route
          path="/drinks"
          element={<Drinks formState={formState} setFormState={setFormState} />}
        />
        <Route
          path="/snacks"
          element={<Snacks formState={formState} setFormState={setFormState} />}
        />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </div>
  )
}

export default App
