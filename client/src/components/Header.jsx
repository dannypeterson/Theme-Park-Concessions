import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

const navigate = useNavigate()

return(
  <header>
    <img src="../../images/logo.png" className="logo" alt="logo"></img>
  <nav>
    <ul className="nav_links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <p className='Back' onClick={() => navigate(-1)}>Back</p>
      </li>
    </ul>
  </nav>
</header>
)



}

export default Header;