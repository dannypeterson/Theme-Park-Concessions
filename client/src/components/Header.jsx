import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
<header>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <p onClick={() => navigate(-1)}>Back</p>
      </li>
    </ul>
  </nav>
</header>

}

export default Header;