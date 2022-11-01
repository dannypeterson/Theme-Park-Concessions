import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

const Snacks = (props) => {
  const [snacks, setSnacks] = useState([])
  const [snackId, setSnackId] = useState([])

  const getSnacks = async () => {
    const response = await axios.get('/snacks')
    setSnacks(response.data)
  }

  useEffect(() => {
    getSnacks()
  }, [])

  const handleSubmitSnack = async (event) => {
    const response = await axios.get(`/snacks/${event.currentTarget.id}`)
    setSnackId(response.data._id)
    console.log(response.data._id)

    if (!props.formState.snacks.includes(response.data._id)) {
      props.setFormState({
        ...props.formState,
        snacks: [...props.formState.snacks, response.data._id]
      })
      console.log(props.formState)
    }
  }

  return (
    <div>
      <Header />
      {snacks.map((snack) => (
        <div key={snack._id}>
          <h2>
            {snack.name}
            <button id={snack._id} onClick={handleSubmitSnack} input="submit">
              Add to Plate
            </button>
          </h2>
          <p>{snack.price}</p>

          <img src={snack.img} alt="img"></img>
        </div>
      ))}
    </div>
  )
}

export default Snacks
