import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const Receipt = () => {
  const [name, setName] = useState([])
  const [foods, setFoods] = useState([])
  const [drinks, setDrinks] = useState([])
  const [snacks, setSnacks] = useState([])
  const [id, setId] = useState([])

  const getItems = async () => {
    const response = await axios.get(`/api/receipt`)
    setName(response.data[response.data.length - 1].name)
    setFoods(response.data[response.data.length - 1].foods)
    setDrinks(response.data[response.data.length - 1].drinks)
    setSnacks(response.data[response.data.length - 1].snacks)
    setId(response.data[response.data.length - 1]._id)
  }

  useEffect(() => {
    getItems()
  }, [])

  const navigate = useNavigate()

  const deleteReceipt = async () => {
    const response = await axios.delete(`/api/receipt/${id}`)
    navigate('/startorder')
  }

  return (
    <div>
      <Header />
      <h1>{name}</h1>
      <div>
        {foods.map((food) => (
          <div key={food._id}>
            <h2>Food:</h2>
            <h3>{food.name}</h3>
            <p>{food.price}</p>
            <img src={food.img} alt="img" />
          </div>
        ))}
      </div>
      <div>
        {drinks.map((drink) => (
          <div key={drink._id}>
            <h2>Drinks:</h2>
            <h3>{drink.name}</h3>
            <p>{drink.price}</p>
            <img src={drink.img} alt="img" />
          </div>
        ))}
      </div>
      <div>
        {snacks.map((snack) => (
          <div key={snack._id}>
            <h2>Snacks:</h2>
            <h3>{snack.name}</h3>
            <p>{snack.price}</p>
            <img src={snack.img} alt="img" />
          </div>
        ))}
      </div>
      <h3 id={id} onClick={deleteReceipt}>
        Delete {name}'s order
      </h3>
    </div>
  )
}

export default Receipt
