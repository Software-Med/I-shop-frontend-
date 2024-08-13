import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <h3 className="heading">I-Sales</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Products</Link></li>
        <li><Link to="/add">Cart</Link></li>
      </ul>
    </nav>
    
  )
}

export default Nav
