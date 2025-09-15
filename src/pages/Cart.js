import React, {useState, useEffect} from "react";
import white from "./home.png";
import young from "./a1.jpeg";
import old from "./a3.jpg";
import Navbar from "../components/Navbar";
import step from "./newsprint.png";
import oil from "./safe.png";
import hiab from "./ran.png";
import "./home.css";
import "./style.css";
import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // ✅ include updateQuantity from context

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + (item.discountPrice || item.price) * item.quantity,
      0
    );
  };

  return (
    <>
      <Header />

      <main className="bg-slate-100 min-h-screen p-6">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-6">🛒 Your Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <ul className="space-y-4">
                  {cartItems.map((item) => (
                    <li
                      key={`${item._id}-${item.color}`}
                      className="flex items-center justify-between border rounded-xl p-4 shadow-sm"
                    >
                      {/* Product Info */}
                      <div className="flex items-center gap-4">
                        <figure  className="w-16 h-16 flex-shrink-0">
                          <img
                            src={item.images?.[0] || "https://via.placeholder.com/80"}
                            alt={item.name}
                            className="w-full h-full object-cover rounded"
                            style={{width: "30px", height: "30px"}}
                          />
                        </figure>

                        <div>
                          <p className="font-semibold text-lg">{item.name}</p>
                          <p className="text-sm text-gray-500">Color: {item.color}</p>

                          {/* Prices */}
                          <div className="flex items-center gap-2 mt-1">
                            {item.discountPrice ? (
                              <>
                                <span className="text-gray-400 line-through">
                                  ${item.price}
                                </span>
                                <span className="text-red-600 font-bold">
                                  ${item.discountPrice}
                                </span>
                              </>
                            ) : (
                              <span className="text-gray-900 font-bold">
                                ${item.price}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quantity + Remove */}
                      <div className="flex flex-col items-center">
                        {/* Quantity Control */}
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item._id, item.color, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="px-2 py-1 text-lg font-bold text-gray-600 hover:text-black"
                          >
                            −
                          </button>
                          <span className="px-3">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item._id, item.color, item.quantity + 1)
                            }
                            className="px-2 py-1 text-lg font-bold text-gray-600 hover:text-black"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item._id, item.color)}
                          className="mt-2 text-sm text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cart Summary */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  style={{backgroundColor: "green"}}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
