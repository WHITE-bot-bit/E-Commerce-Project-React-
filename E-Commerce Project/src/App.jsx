import axios from 'axios';
import {Routes,Route} from 'react-router';
import {useState,useEffect } from 'react';
import {HomePage} from './Pages/HomePage';
import {ChechoutPage} from './Pages/CheackoutPage';
import {OrdersPage} from './Pages/OrdersPage';
import './App.css'


function App() {
  const [cart, setCart] = useState([]);
  
  useEffect(() =>{
     axios.get('/api/cart-items').then((response) =>{
      console.log("CART DATA:", response.data);
    setCart(response.data);
  });
  },[]);
 

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<ChechoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage />} />
    </Routes>
  )
}

export default App
