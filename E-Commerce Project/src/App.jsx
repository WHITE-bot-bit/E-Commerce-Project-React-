import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomePage } from "./Pages/Home/HomePage";
import { ChechoutPage } from "./Pages/Checkout/CheackoutPage";
import { OrdersPage } from "./Pages/Order/OrdersPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/cart-items?expand=product`,
    );
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="checkout"
        element={<ChechoutPage cart={cart} loadCart={loadCart} />}
      />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
