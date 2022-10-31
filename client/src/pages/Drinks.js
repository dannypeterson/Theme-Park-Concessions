import axios from 'axios'
import { useEffect, useState } from 'react'

const Drinks = () => {
  const [drinks, setDrinks] = useState([])

  const getDrinks = async () => {
    const response = await axios.get('http://localhost:3001/drinks')
    setDrinks(response.data.name)
    console.log(response)
  }

  useEffect(() => {
    getDrinks()
  }, [])

  return (
    <div>
      {drinks.map((drink) => (
        <div>
          <h2>{drink.name}</h2>
          <p>{drink.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Drinks
