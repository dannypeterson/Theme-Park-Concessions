import Food from '../components/Food'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Base_URL = '/'

const ViewFood = (props) => {
  const [foods, setFoods] = useState([])
  const [foodId, setFoodId] = useState([])

  const getFoods = async () => {
    const response = await axios.get(`${Base_URL}foods`)
    setFoods(response.data)
  }

  useEffect(() => {
    getFoods()
  }, [])

  const handleSubmitFood = async (event) => {
    const response = await axios.get(
      `${Base_URL}foods/${event.currentTarget.id}`
    )
    setFoodId(response.data._id)
    console.log(response.data._id)

    if (!props.formState.foods.includes(response.data._id)) {
      props.setFormState({
        ...props.formState,
        foods: [...props.formState.foods, response.data._id]
      })
      console.log(props.formState)
    }
  }

  return (
    <div className="main">
      <Header />
      <h1>Food</h1>
      <section className="foodList-container">
        {foods.map((food) => (
          <div key={food._id}>
            <h2>
              {food.name}
              <button id={food._id} onClick={handleSubmitFood}>
                Add to Plate
              </button>
            </h2>
            <p>{food.price}</p>
            <img src={food.img} alt="img" />
          </div>
        ))}
      </section>
      <div>
        <button>
          <Link className="Add-Food" to={`/food/foods`}>
            Add a Food Item
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ViewFood
