import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./TransactionList.css";
<<<<<<< HEAD
=======
import toast, { Toaster } from 'react-hot-toast';
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();


  const fetchTransactions = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get('http://localhost:5000/api/transactions');
=======
      const response = await axios.get('https://finance-tracker-r6ea.onrender.com/api/transactions');
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };
   // Delete a transaction
   const handleDelete = async (id) => {
<<<<<<< HEAD
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        await axios.delete(`http://localhost:5000/api/transactions/${id}`);
=======
    if (toast((t) => (
      <span>
        Are you sure want to <b>delete</b>
        <button style={{padding:"0.23rem 0.46rem",fontWeight:"500",marginLeft:"6px"}} onClick={() => toast.dismiss(t.id)}>
          Yes
        </button>
      </span>
    ))) {
      try {
        await axios.delete(`https://finance-tracker-r6ea.onrender.com/api/transactions/${id}`);
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
        fetchTransactions();  // refresh list after delete
      } catch (error) {
        console.error('Error deleting transaction:', error);
      }
    }
  };

  // Edit a transaction
  const handleEdit = (id) => {
    navigate(`/edit-transaction/${id}`);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className='transaction-list-container'>
      <h1 style={{fontSize:"48px",textDecoration:"underline"}}>Track All Your Transactions</h1>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        transactions.map(({ _id, title, amount, category, date }) => (
          <div key={_id} className="transaction-item">
            <h1>{title} - ₹{amount}</h1>
            <p>{category} | {new Date(date).toLocaleDateString()}</p>
            <div className="button-group">
              <button onClick={() => handleEdit(_id)}>Edit</button>
              <button onClick={() => handleDelete(_id)}>Delete</button>
            </div>
          </div>
        ))
      )}
<<<<<<< HEAD
=======
       <Toaster/>
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
    </div>
  );
}

export default TransactionList;

