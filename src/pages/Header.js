

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ cartCount = 1 }) => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/categories`
        );
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="main-header primery-header" style={{ backgroundColor: "white" }}>
      {/* Header Lower */}
      <div className="header-lower">
        <div className="auto-container">
          <div className="inner-container d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div className="logo-box d-flex align-items-center">
              <div className="logo">
                <a href="/" style={{ fontWeight: "900", fontSize: "18px" }}>
                  DB WEARS
                </a>
              </div>
            </div>

            {/* Nav Outer */}
            <div className="nav-outer clearfix">
              {/* Mobile Toggler */}
      {/* Mobile Toggler */}
<div className="mobile-nav-toggler" onClick={() => setMenuOpen(!menuOpen)}>
  {menuOpen ? <FaTimes size={24} className="text-black" /> : <FaBars size={24} className="text-black" />}
</div>


              {/* Desktop Menu */}
              <nav className="main-menu show navbar-expand-md">
                <div className="navbar-collapse collapse clearfix">
                  <ul id="prinoix-primary-menu" className="navigation clearfix">
                    {categories.map((cat) => (
                      <li key={cat._id}>
                        <a href={`/category/${cat._id}`}>{cat.name}</a>
                      </li>
                    ))}
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Outer Box */}
            <div className="outer-box d-flex align-items-center">
              {/* Cart */}
              <div className="cart-box">
                <div className="box-inner">
                  <a href="/cart" className="icon-box">
                    <FaShoppingBag size={28} />
                    {cartCount > 0 && (
                      <span className="total-cart">{cartCount}</span>
                    )}
                  </a>
                </div>
              </div>

              {/* Contact Button */}
              <div className="button-box">
                <a
                  href="/contact-us"
                  className="theme-btn btn-style-one clearfix"
                >
                  <span className="btn-wrap">
                    <span className="text-one">Contact Us</span>
                    <span className="text-two">Contact Us</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="sticky-header">
        <div className="auto-container d-flex justify-content-between align-items-center clearfix">
          <div className="logo">
            <a href="/" style={{ fontWeight: "900", fontSize: "18px" }}>
              DBWEARS
            </a>
          </div>

          <div className="menu-pull ml-auto">
            <nav className="main-menu">
              <div className="navbar-header">
                <button
                //   className="navbar-toggler"
                       className="flex flex-col justify-between h-6 w-6"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
              <span className="block h-0.5 w-full bg-black"></span>
        <span className="block h-0.5 w-full bg-black"></span>
        <span className="block h-0.5 w-full bg-black"></span>
                </button>
              </div>

              <div className="navbar-collapse collapse clearfix">
                <ul id="prinoix-primary-menu" className="navigation clearfix">
                  {categories.map((cat) => (
                    <li key={cat._id}>
                      <a href={`/category/${cat._id}`}>{cat.name}</a>
                    </li>
                  ))}
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
<div className="menu-pull ml-auto">
<button
  className="md:hidden p-2"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes size={24} className="text-black" /> : <FaBars size={24} className="text-black" />}
</button>

</div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
 
    <div
        className={`md:hidden absolute top-full left-0 right-0 w-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4">
          <ul className="flex flex-col divide-y">
            {categories.map((cat) => (
              <li key={cat._id}>
                <a
                  href={`/category/${cat._id}`}
                  className="block px-4 py-3 text-center font-semibold text-gray-900 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/about"
                className="block px-4 py-3 text-center font-semibold text-gray-900 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="block px-4 py-3 text-center font-semibold text-gray-900 hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Shop Now button */}
          <div className="mt-4 flex justify-center">
            <a
              href="/collections"
              className="px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Shop Now
            </a>
          </div>
          </div>
          </div>
       
    </header>
  );
};

export default Header;
