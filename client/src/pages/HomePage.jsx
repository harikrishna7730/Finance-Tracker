// import React, { useEffect, useState } from 'react'
import TransactionList from '../components/TransactionList/TransactionList'
// import axios from 'axios';
import Hero from "../components/HeroSection/Hero"
import AllTransactionsList from '../components/AvailableSection/AllTransactionsList';
const HomePage = () => {
    // const [transactions, setTransactions] = useState([]);

    // const fetchTransactions = async () => {
<<<<<<< HEAD
    //   const res = await axios.get('http://localhost:5000/api/transactions');
=======
    //   const res = await axios.get('https://finance-tracker-r6ea.onrender.com/api/transactions');
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
    //   setTransactions(res.data);
    // };
  
    // const handleDelete = async (id) => {
<<<<<<< HEAD
    //   await axios.delete(`http://localhost:5000/api/transactions/${id}`);
=======
    //   await axios.delete(`https://finance-tracker-r6ea.onrender.com/api/transactions/${id}`);
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
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
<<<<<<< HEAD
      <div >
      <Hero/>
      </div>
    <div>
      <AllTransactionsList/>
      </div>
=======
      <Hero/>
      <AllTransactionsList/>
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
      {/* <TransactionList 
        transactions={transactions} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      /> */}
    </div>
  )
}

export default HomePage
