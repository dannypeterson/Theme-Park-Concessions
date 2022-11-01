import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const StartOrder = (props) => {
  const navigate = useNavigate()

  const handleChange = (event) => {
    props.setFormState({
      ...props.formState,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async () => {
    console.log(props.formState)
    let response = await axios.post(`/receipt`, props.formState)
    props.setFormState(props.initialState)
    navigate(`/receipt`)
  }

  return (
    <div className="start-order">
      <h1>Build your plate! Select the options below to view our menus!</h1>

      <div className="nameplate">
        <input
          placeholder="Name your plate:"
          onChange={handleChange}
          id="name"
          type="text"
          value={props.formState.name}
        ></input>
      </div>

      <div id="food-order" onClick={() => navigate('/foods')}>
        <h2>Food</h2>
        <img></img>
      </div>
      <div id="drinks-order" onClick={() => navigate('/drinks')}>
        <h2>Drinks</h2>
        <img></img>
      </div>
      <div id="snacks-order" onClick={() => navigate('/snacks')}>
        <h2>Snacks</h2>
        <img></img>
      </div>
      <div id="receipt-order">
        <h2>
          <button id="submit-order-button" onClick={handleSubmit}>
            Submit Order
          </button>
        </h2>
        <img></img>
      </div>
    </div>
  )
}

export default StartOrder
