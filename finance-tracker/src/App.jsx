
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import AddTransaction from './pages/AddTransaction'
import PieChart from './pages/PieChart'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/addtransaction' Component={AddTransaction}/>
      <Route path='/piechart' Component={PieChart}/>
    </Routes>
    </>
  )
}

export default App
