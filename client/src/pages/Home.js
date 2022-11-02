import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-header">
      <div className="home-header1"></div>
      <div className="home-header2"></div>
      <div className="home-header3"></div>
      <marquee behavior="scroll" direction="left" scrollamount="30">
        <h1 className="home-title"> Welcome to the Concession Stand!</h1>
      </marquee>
      <div id="theme park-1" className="theme-picture"></div>
      <div className="order-button">
        <button onClick={() => navigate('/startorder')} className="home-order">
          Start Order
        </button>
      </div>
    </div>
  )
}

export default Home
