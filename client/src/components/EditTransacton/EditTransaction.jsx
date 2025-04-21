import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./EditTransaction.css";
<<<<<<< HEAD
=======
import toast, { Toaster } from 'react-hot-toast';
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a

function EditTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: ''
  });

  // Fetch transaction by id
  const fetchTransactionById = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get(`http://localhost:5000/api/transactions/${id}`);
=======
      const response = await axios.get(`https://finance-tracker-r6ea.onrender.com/api/transactions/${id}`);
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching transaction details:", error);
    }
  };

  useEffect(() => {
    fetchTransactionById();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      await axios.put(`http://localhost:5000/api/transactions/${id}`, formData);
      alert("Transaction updated successfully!");
=======
      await axios.put(`https://finance-tracker-r6ea.onrender.com/api/transactions/${id}`, formData);
      toast.success("Transaction updated successfully!");
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
      navigate("/transactionlist");
    } catch (error) {
      console.error("Error updating transaction:", error);
    }
  };

  return (
    <div className="edit-transaction-container">
      <h1>Edit Transaction</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date?.slice(0, 10)} // to make it compatible with input[type="date"]
          onChange={handleChange}
          required
        />

        <button type="submit">Update Transaction</button>
      </form>
<<<<<<< HEAD
=======
      <Toaster/>
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
    </div>
  );
}

export default EditTransaction;
