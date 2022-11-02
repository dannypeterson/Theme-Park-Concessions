import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

const Drinks = (props) => {
  const [drinks, setDrinks] = useState([])
  const [drinkId, setDrinkId] = useState([])

  const getDrinks = async () => {
    const response = await axios.get('/api/drinks')
    setDrinks(response.data)
  }

  useEffect(() => {
    getDrinks()
  }, [])

  const handleSubmitDrink = async (event) => {
    const response = await axios.get(`/api/drinks/${event.currentTarget.id}`)
    setDrinkId(response.data._id)
    console.log(response.data._id)

    if (!props.formState.drinks.includes(response.data._id)) {
      props.setFormState({
        ...props.formState,
        drinks: [...props.formState.drinks, response.data._id]
      })
      console.log(props.formState)
    }
  }

  return (
    <div className="main">
      <Header />
      <h1 id="item-header">Drinks</h1>
      {drinks.map((drink) => (
        <div key={drink._id}>
          <div className="food-map">
            <h2>{drink.name}</h2>
            <h4>{drink.price}</h4>
          </div>
          <button
            className="add-to-plate-button"
            onClick={handleSubmitDrink}
            id={drink._id}
            input="submit"
          >
            Add to Plate
          </button>
          <img src={drink.img} alt="img" />
        </div>
      ))}
    </div>
  )
}

export default Drinks
