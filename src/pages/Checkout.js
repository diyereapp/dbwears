import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "./Header";
import Footer from "./Footer";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState("card");

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + (item.discountPrice || item.price) * item.quantity,
      0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ⚡ Here you would usually send the order details to backend
    console.log({
      address,
      delivery,
      payment,
      cartItems,
      total: getTotalPrice(),
    });

    clearCart();
    navigate("/order-success"); // redirect after checkout
  };

  return (
    <>
      <Header />

      <main className="bg-slate-100 min-h-screen p-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6 space-y-6"
        >
          <h1 className="text-2xl font-bold mb-4">🛒 Checkout</h1>

          {/* Customer Address */}
          <section>
            <h2 className="text-xl font-semibold mb-3">1️⃣ Customer Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={address.fullName}
                onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={address.email}
                onChange={(e) => setAddress({ ...address, email: e.target.value })}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={address.phone}
                onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="Street Address"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                className="border rounded-lg p-3 w-full col-span-2"
                required
              />
              <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="State"
                value={address.state}
                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                className="border rounded-lg p-3 w-full"
                required
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={address.zip}
                onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                className="border rounded-lg p-3 w-full"
                required
              />
            </div>
          </section>

          {/* Delivery Details */}
          <section>
            <h2 className="text-xl font-semibold mb-3">2️⃣ Delivery Details</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="delivery"
                  value="standard"
                  checked={delivery === "standard"}
                  onChange={(e) => setDelivery(e.target.value)}
                />
                Standard Delivery (3-5 days) – Free
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="delivery"
                  value="express"
                  checked={delivery === "express"}
                  onChange={(e) => setDelivery(e.target.value)}
                />
                Express Delivery (1-2 days) – $9.99
              </label>
            </div>
          </section>

          {/* Payment Method */}
          <section>
            <h2 className="text-xl font-semibold mb-3">3️⃣ Payment Method</h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={payment === "card"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                Credit / Debit Card
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={payment === "paypal"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                PayPal
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === "cod"}
                  onChange={(e) => setPayment(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>
          </section>

          {/* Summary + Place Order */}
          <section className="border-t pt-4">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </section>
        </form>
      </main>

      <Footer />
    </>
  );
};

export default Checkout;
