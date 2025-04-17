import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const[menuOpen,setMenuOpen]=useState(false)
  return (
   <nav>
    <h1>Finance Tracker</h1>
    <div className='menu' onClick={()=>setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open": ""}>
        <li><NavLink to={"/"} className="NavLink">Home</NavLink></li>
        <li><NavLink to={"/addtransaction"} className="NavLink">Add Transactions</NavLink></li>
        <li><NavLink to={"/transactionlist"} className="NavLink">Transactions List</NavLink></li>
        <li><NavLink to={"/piechart"} className="NavLink">Pie Charts</NavLink></li>
    </ul>
   </nav>
  )
}

export default Navbar
