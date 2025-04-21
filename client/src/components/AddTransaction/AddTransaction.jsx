import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AddTransaction.css"
<<<<<<< HEAD
=======
import toast, { Toaster } from 'react-hot-toast';
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a

function AddTransaction() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch transaction if id exists (for editing)
  useEffect(() => {
    if (id) {
<<<<<<< HEAD
      axios.get(`http://localhost:5000/api/transactions/${id}`)
=======
      axios.get(`https://finance-tracker-r6ea.onrender.com/api/transactions/${id}`)
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
        .then(res => {
          const t = res.data;
          setTitle(t.title);
          setAmount(t.amount);
          setCategory(t.category);
        })
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validations
    if (!title.trim()) {
      setError("Please enter a valid title.");
      return;
    }
    if (Number(amount) < 100) {
      setError("Amount should be at least ₹100.");
      return;
    }
    if (!category.trim()) {
      setError("Please enter a valid category.");
      return;
    }

    setError('');

    try {
      if (id) {
        // Update transaction
<<<<<<< HEAD
        await axios.put(`http://localhost:5000/api/transactions/${id}`, {
          title, amount, category
        });
        alert('Transaction Updated!');
      } else {
        // Add new transaction
        await axios.post('http://localhost:5000/api/transactions', {
          title, amount, category
        });
        alert('Transaction Added!');
      }
      navigate('/');
=======
        await axios.put(`https://finance-tracker-r6ea.onrender.com/api/transactions/${id}`, {
          title, amount, category
        });
        toast.success("Transaction Updated")
      } else {
        // Add new transaction
        await axios.post('https://finance-tracker-r6ea.onrender.com/api/transactions', {
          title, amount, category
        });
        // alert('Transaction Added!');
        toast.success('Transaction Added Successfully')

      }
      setTimeout(()=>{
        navigate('/');
      },3000)
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='AddTransaction-container'>
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Update Transaction' : 'Add New Transaction'}</h2>

      {error && <p className="error-message">{error}</p>}

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount (Min ₹100)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">{id ? 'Update Transaction' : 'Add Transaction'}</button>
    </form>
<<<<<<< HEAD
=======
    <Toaster/>
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
    </div>
  );
}

export default AddTransaction;
