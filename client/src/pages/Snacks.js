import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Snacks = () => {
  const [snacks, setSnacks] = useState([])

  const getSnacks = async () => {
    const response = await axios.get('http://localhost:3001/snacks')
    setSnacks(response.data.name)
    console.log(response)
  }

  useEffect(() => {
    getSnacks()
  }, [])

  return (
    <div>
      {snacks.map((snack) => (
        <div>
          <h2>{snack.name}</h2>
          <p>{snack.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Snacks
