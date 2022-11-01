import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-header">
      <h1>Welcome to the Concession Stand!</h1>
      <div id="theme park-1" className="theme-picture"></div>
      <div onClick={() => navigate('/startorder')} className="start-order">
        Start Order
      </div>
    </div>
  )
}

export default Home
