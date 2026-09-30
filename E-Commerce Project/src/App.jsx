import axios from 'axios';
import {Routes,Route} from 'react-router';
import {useState,useEffect } from 'react';
import {HomePage} from './Pages/Home/HomePage';
import {ChechoutPage} from './Pages/Checkout/CheackoutPage';
import {OrdersPage} from './Pages/Order/OrdersPage';
import './App.css'


function App() {
  const [cart, setCart] = useState([]);
  
  useEffect(() =>{
    const fetchAppData = async () =>{
 const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data);
    };
    fetchAppData();
  },[]);
 

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<ChechoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart}/>} />
    </Routes>
  )
}

export default App
