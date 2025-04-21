import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import "./Chart.css"

function Charts() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    axios.get('http://localhost:5000/api/transactions')
=======
    axios.get('https://finance-tracker-r6ea.onrender.com/api/transactions')
>>>>>>> d2d481ea9888fea317d1a3a15b1035ef09364b9a
      .then(res => setTransactions(res.data));
  }, []);

  const data = transactions.reduce((acc, curr) => {
    const found = acc.find(i => i.name === curr.category);
    if (found) found.value += Number(curr.amount);
    else acc.push({ name: curr.category, value: Number(curr.amount) });
    return acc;
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="chart-container">
      <h1 className="chart-title">Your Transaction Overview</h1>
      <PieChart width={400} height={350}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
}

export default Charts;
