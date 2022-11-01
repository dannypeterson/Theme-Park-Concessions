import Food from '../components/Food'
import React from 'react'
import Drink from '../components/Drink'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Base_URL = 'http://localhost:3001/'

const ViewFood = () => {
  const [foods, setFoods] = useState([])

  const getFoods = async () => {
    const response = await axios.get(`${Base_URL}drinks`)

    setFoods(response.data.drinks)
    console.log(response.data.drinks)
  }

  useEffect(() => {
    getFoods()
  }, [])

  return (
    <div className="main">
      <h1>Drinks</h1>
      <section className="foodList-container">
        {foods.map((food) => (
          <>
            <Food
              key={food._id}
              foodName={food.name}
              price={food.price}
              image={food.image}
            />
          </>
        ))}
      </section>
      <div>
        <button>
          <Link to={`/food/foods`}>Add a Food Item</Link>
        </button>
      </div>
    </div>
  )
}

export default ViewFood
