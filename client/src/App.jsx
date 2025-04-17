
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import AddTransactionPage from './pages/AddTransactionPage'
import PieChartPage from './pages/PieChartPage'
import EditTransaction from './components/EditTransacton/EditTransaction'
import Footer from './components/Footer/Footer'
import TransactionListPage from './pages/TransactionListPage'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/addtransaction' Component={AddTransactionPage}/>
      <Route path="/edit-transaction/:id" element={<EditTransaction/>} />
      <Route path='/transactionlist' Component={TransactionListPage}/>
      <Route path='/piechart' Component={PieChartPage}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
