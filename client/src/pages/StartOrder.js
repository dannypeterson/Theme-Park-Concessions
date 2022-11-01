import { useNavigate } from 'react-router-dom'

const StartOrder = () => {
  const navigate = useNavigate()

  return (
    <div className="start-order">
      <h1>Build your plate! Select the options below to view our menus!</h1>
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
    </div>
  )
}

export default StartOrder
