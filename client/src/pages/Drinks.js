import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

const Drinks = (props) => {
  const [drinks, setDrinks] = useState([])
  const [drinkId, setDrinkId] = useState([])

  const getDrinks = async () => {
    const response = await axios.get('http://localhost:3001/drinks')
    setDrinks(response.data)
  }

  useEffect(() => {
    getDrinks()
  }, [])

  const handleSubmitDrink = async (event) => {
    const response = await axios.get(
      `http://localhost:3001/drinks/${event.currentTarget.id}`
    )
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
    <div>
      <Header />
      {drinks.map((drink) => (
        <div key={drink._id}>
          <h2>
            {drink.name}
            <button onClick={handleSubmitDrink} id={drink._id} input="submit">
              Add to Plate
            </button>
          </h2>
          <p>{drink.price}</p>
          <img src={drink.img} alt="img" />
        </div>
      ))}
    </div>
  )
}

export default Drinks
