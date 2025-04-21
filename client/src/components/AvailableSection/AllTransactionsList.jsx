import React from 'react'
import "./AvailableSection.css"
import { Link } from 'react-router-dom'
const AllTransactionsList = () => {
  return (
    <div className='All-transactions-list-container'>
      <div>
        <h1 style={{color:"#08086C",fontSize:"48px",padding:"20px"}}><u><center>Available Sections</center></u></h1>
        <div>
            <ul className='All-trans-list-items'>
                <li><Link to='/addtransaction' className='tran-list-links' onClick={window.scrollTo(0,0)}>Add New Transaction</Link></li>
                <li><Link to='/transactionlist' className='tran-list-links'  onClick={window.scrollTo(0,0)}>Transactions List</Link></li>
                <li><Link to='/piechart' className='tran-list-links'  onClick={window.scrollTo(0,0)}>Pie Chart Presentation</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default AllTransactionsList
