import axios from "axios";
import { useState, useEffect } from "react";
import { OrderSummary } from "./ordersummary";
import { PaymentSummary } from "./Paymentsummary";
import "./checkout-header.css";
import "./CheckoutPage.css";

export function ChechoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setpaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/delivery-options?expand=estimatedDeliveryTimeMs`,
      );
      setDeliveryOptions(response.data);

      response = await axios.get(`${import.meta.env.VITE_API_URL}/api/payment-summary`);
      setpaymentSummary(response.data);
    };

    fetchCheckoutData();
  }, [cart]);

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>{" "}
      //Homework
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
