
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'
import { Contact } from 'lucide-react'
import Portfolio from './pages/portfolio/Portfolio'
import Activity from './pages/activity/Activity'
import Wallet from './pages/wallet/Wallet'
import Withdrawal from './pages/withdrawal/Withdrawal'
import PaymentDetails from './pages/paymentDetails/PaymentDetails'
import StockDetails from './pages/stock details/StockDetails'
import Watchlist from './pages/watchlist/Watchlist'
import Profile from './pages/profile/Profile'
import SearchCoin from './pages/search/SearchCoin'
import Notfound from './pages/notfound/Notfound'
import Auth from './pages/auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from './state/Auth/Action'
import { store } from './state/Store'
function App() {

  const {auth} =useSelector(store=>store);
  const dispatch =useDispatch()

  console.log("auth--->",auth);

  useEffect( ()=>{
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")))
  } ,[auth.jwt])


  return (
    <>
      
   { auth.user ?<div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/withdrawal' element={<Withdrawal />} />
          <Route path='/payment-details' element={<PaymentDetails />} />
          <Route path='/market/:id' element={<StockDetails />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/search' element={<SearchCoin />} />
          <Route path='*' element={<Notfound />} />
        </Routes>

      </div> :<Auth />}

    </>
  )
}

export default App
