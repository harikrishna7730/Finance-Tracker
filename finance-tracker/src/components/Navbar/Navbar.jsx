import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav>
    <h1>Finance Tracker</h1>
    
    <ul>
        <li><NavLink to={"/"} className="NavLink">Home</NavLink></li>
        <li><NavLink to={"/addtransaction"} className="NavLink">Add Transactions</NavLink></li>
        <li><NavLink to={"/piechart"} className="NavLink">Pie Charts</NavLink></li>
    </ul>
   </nav>
  )
}

export default Navbar
