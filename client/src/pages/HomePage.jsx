// import React, { useEffect, useState } from 'react'
import TransactionList from '../components/TransactionList/TransactionList'
// import axios from 'axios';
import Hero from "../components/HeroSection/Hero"
import AllTransactionsList from '../components/AvailableSection/AllTransactionsList';
const HomePage = () => {
    // const [transactions, setTransactions] = useState([]);

    // const fetchTransactions = async () => {
    //   const res = await axios.get('http://localhost:5000/api/transactions');
    //   setTransactions(res.data);
    // };
  
    // const handleDelete = async (id) => {
    //   await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    //   fetchTransactions();
    // };
  
    // const handleEdit = (id) => {
    //   // your edit logic here
    //   console.log('Editing transaction:', id);
    // };
  
    // useEffect(() => {
    //   fetchTransactions();
    // }, []);
  return (
    <div>
      <Hero/>
      <AllTransactionsList/>
      {/* <TransactionList 
        transactions={transactions} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      /> */}
    </div>
  )
}

export default HomePage
