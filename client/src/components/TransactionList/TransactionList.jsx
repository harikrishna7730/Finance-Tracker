import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./TransactionList.css";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();


  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/transactions');
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };
   // Delete a transaction
   const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        await axios.delete(`http://localhost:5000/api/transactions/${id}`);
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
    </div>
  );
}

export default TransactionList;

