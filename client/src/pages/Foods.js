import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header'

const Base_URL = '/api/'

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
      <h1 id="item-header">Food</h1>
      <section className="foodList-container">
        {foods.map((food) => (
          <div key={food._id}>
            <div className="food-map">
              <h2>{food.name}</h2>
              <h4>{food.price}</h4>
            </div>

            <button
              className="add-to-plate-button"
              id={food._id}
              onClick={handleSubmitFood}
            >
              Add to Plate
            </button>
            <img src={food.img} alt="img" />
          </div>
        ))}
      </section>
      <div></div>
    </div>
  )
}

export default ViewFood
