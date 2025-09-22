// import React, {useEffect} from "react";

// import axios from "axios"

// import { useState } from "react";
// import {
//   ChevronDown,
//   User,
//   Package,
//   Settings,
//   LogOut,
// } from "lucide-react"; // ✅ added icons
// import { FaShippingFast, FaLock, FaHeadset, FaBars, FaTimes , FaWallet,FaShoppingBag, FaShoppingCart, FaArrowRight } from "react-icons/fa";

// import { Link } from "react-router-dom";
// import { FiHelpCircle } from "react-icons/fi"; // Feather icon (react-icons)
// import { MessageCircle, Phone } from "lucide-react";
// import { useCart } from "../context/CartContext";

// const bgImage = `url("data:image/svg+xml;utf8,
//   <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
//     <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
//   </svg>")`;
// const Header = ({ cartCount = 1 }) => {
//  const [open, setOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // for mobile menu
// const [cartOpen, setCartOpen] = useState(false); // for cart dropdown
//   const [accountOpen, setAccountOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const { cartItems, clearCart } = useCart();
//   // const { cartItems } = useCart();
//   // const [open, setOpen] = useState(false);

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/categories`
//         );
//         setCategories(res.data);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };
//     fetchCategories();
//   }, []);


//   return (
//     <>
// <header class="main-header primery-header" style={{backgroundColor: "white"}}>    	    
    
//     <div class="header-lower">
        
//         <div class="auto-container">
//             <div class="inner-container d-flex justify-content-between align-items-center">
                
//                 <div class="logo-box d-flex align-items-center">
     
                                      
//                     <div class="logo">                        <a href="/" style={{fontWeight: "900", fontSize: "18px"}}>
//                {/*} <img src="https://themexriver.com/wp/prinox-wp/wp-content/themes/prinox/assets/images/logo.svg" alt="Logo" />*/}
//                DB WEARS
//             </a>
//             </div>
//                 </div>
//                 <div class="nav-outer clearfix">
                    
                 
//                     <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
                   
//                     <nav class="main-menu show navbar-expand-md">
//                         <div class="navbar-header">
//                             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span class="icon-bar"></span>
//                                 <span class="icon-bar"></span>
//                                 <span class="icon-bar"></span>
//                             </button>
//                         </div>
                        
//                         <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
//                             <ul id="prinoix-primary-menu" class="navigation clearfix">
// <li id="menu-item-734" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-734"><a href="https://themexriver.com/wp/prinox-wp/about/">About</a></li>


// <li id="menu-item-736" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-736"><a href="https://themexriver.com/wp/prinox-wp/contact-us/">Contact Us</a></li>
// </ul>                        </div>
                        
//                     </nav>
     
                    
//                 </div>
                
           
//                 <div class="outer-box d-flex align-items-center">
                                
                    
//                <div className="cart-box">
//       <div className="box-inner">
//         <a
//           href="https://themexriver.com/wp/prinox-wp/cart"
//           className="icon-box"
//         >
//           {/* Cart Icon */}
//           <FaShoppingBag size={28} className="icon" />

//           {/* Cart Counter */}
//           {cartCount > 0 && <span className="total-cart">{cartCount}</span>}
//         </a>
//       </div>
//     </div>
                
//                   <div className="button-box">
// <a
//   href="https://themexriver.com/wp/prinox-wp/contact-us/"
//   className="theme-btn btn-style-one clearfix"
// >
//   <span className="btn-wrap">
//     <span className="text-one">Contact Us</span>
//     <span className="text-two">Contact Us</span>
//   </span>

// </a>


//     </div>
//                                     </div>
           
                
//             </div>
            
//         </div>
//     </div>

//     <div class="sticky-header">
//         <div class="auto-container d-flex justify-content-between align-items-center clearfix">
        
//             <div class="logo">
//                                         <a href="/" style={{fontWeight: "900", fontSize: "18px"}}>
//                 {/*<img src="https://themexriver.com/wp/prinox-wp/wp-content/themes/prinox/assets/images/logo.svg" alt="Logo" />*/}
//                 DBWEARS
//             </a>
//                         </div>
            
     
//             <div class="menu-pull ml-auto">
                
//                 <nav class="main-menu">
       
                
//                         <div class="navbar-header">
//                             <button class="navbar-toggler"  onClick={() => setMenuOpen(!menuOpen)} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span class="icon-bar"></span>
//                                 <span class="icon-bar"></span>
//                                 <span class="icon-bar"></span>
//                             </button>
//                         </div>
                        
//                         <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
//                             <ul id="prinoix-primary-menu" class="navigation clearfix">
                                
                               
// <li id="menu-item-734" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-734"><a href="https://themexriver.com/wp/prinox-wp/about/">About</a></li>

// <li id="menu-item-736" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-736"><a href="https://themexriver.com/wp/prinox-wp/contact-us/">Contact Us</a></li>
// </ul>                        </div>
                        
//                     </nav>
              
//                 <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
                
//             </div>
//         </div>
//     </div>

//           <div class="mobile-menu">
//         <div class="menu-backdrop"></div>
//         <div class="close-btn"><span class="icon flaticon-multiply"></span></div>
//         <nav class="menu-box">
//             <div class="nav-logo">                        <a href="/" style={{fontWeight: "900", fontSize: "18px"}}>
//               {/*}  <img src="https://themexriver.com/wp/prinox-wp/wp-content/themes/prinox/assets/images/logo-light.svg" alt="Logo" />*/}
//               DBWEARS
//             </a>
//             </div>
          
//             <div class="search-box">
//                 <form method="post" action="https://themexriver.com/wp/prinox-wp/">
//                     <div class="form-group">
//                         <input type="search" name="s" value="" placeholder="Search Here" required="" />
//                         <button type="submit"><span class="icon flaticon-search-1"></span></button>
//                     </div>
//                 </form>
//             </div>
//             <div class="menu-outer">
//                         <div class="navbar-header">
//                             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span class="icon-bar"></span>
//                                 <span class="icon-bar"></span>
//                                 <span class="icon-bar"></span>
//                             </button>
//                         </div>
                        
//                         <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
//                             <ul id="prinoix-primary-menu" class="navigation clearfix">
                                
                        
// <li id="menu-item-734" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-734"><a href="https://themexriver.com/wp/prinox-wp/about/">About</a></li>

// <li id="menu-item-736" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-736"><a href="https://themexriver.com/wp/prinox-wp/contact-us/">Contact Us</a></li>
// </ul>                        </div>
                        
//                     </div>
//         </nav>
//     </div>

// </header>

//     </>
//   );
// };

// // export default Header;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaShoppingBag, FaArrowRight } from "react-icons/fa";
// import { useCart } from "../context/CartContext";

// const Header = ({ cartCount = 1 }) => {
//   const [menuOpen, setMenuOpen] = useState(false); // mobile menu
//   const [categories, setCategories] = useState([]);
//   const { cartItems } = useCart();

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/categories`
//         );
//         setCategories(res.data);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <header className="main-header relative bg-white shadow-sm">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <div className="logo font-bold text-lg">
//           <a href="/">DBWEARS</a>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           {categories.map((cat) => (
//             <a
//               key={cat._id}
//               href={`/category/${cat._id}`}
//               className="font-medium hover:text-blue-500"
//             >
//               {cat.name}
//             </a>
//           ))}
//           {/* Static links */}
//           <a
//             href="/about"
//             className="font-medium hover:text-blue-500"
//           >
//             About
//           </a>
//           <a
//             href="/contact-us"
//             className="font-medium hover:text-blue-500"
//           >
//             Contact Us
//           </a>
//         </nav>

//         {/* Right icons */}
//         <div className="flex items-center space-x-4">
//           {/* Cart */}
//           <a href="/cart" className="relative">
//             <FaShoppingBag size={24} />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                 {cartCount}
//               </span>
//             )}
//           </a>

//           {/* Contact button */}
//           <a
//             href="/contact-us"
//             className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//           >
//             Contact Us <FaArrowRight size={12} />
//           </a>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden flex flex-col items-center text-xs font-bold"
//           >
//             {menuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-6 w-6"
//               >
//                 <path d="M18 6 6 18"></path>
//                 <path d="m6 6 12 12"></path>
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-6 w-6"
//               >
//                 <line x1="4" y1="6" x2="20" y2="6"></line>
//                 <line x1="4" y1="12" x2="20" y2="12"></line>
//                 <line x1="4" y1="18" x2="20" y2="18"></line>
//               </svg>
//             )}
//             Menu
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu panel */}
//       <div
//         className={`absolute top-full left-0 right-0 w-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out overflow-hidden ${
//           menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="p-4">
//           <ul className="flex flex-col divide-y">
//             {categories.map((cat) => (
//               <li key={cat._id}>
//                 <a
//                   href={`/category/${cat._id}`}
//                   className="block px-4 py-3 text-center font-semibold text-gray-900 hover:bg-gray-100"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {cat.name}
//                 </a>
//               </li>
//             ))}
//             <li>
//               <a
//                 href="/about"
//                 className="block px-4 py-3 text-center font-semibold text-gray-900 hover:bg-gray-100"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/contact-us"
//                 className="block px-4 py-3 text-center font-semibold text-gray-900 hover:bg-gray-100"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>

//           {/* Shop Now button */}
//           <div className="mt-4 flex justify-center">
//             <a
//               href="/collections"
//               className="px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition"
//               onClick={() => setMenuOpen(false)}
//             >
//               Shop Now
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingBag } from "react-icons/fa";
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
              <div className="mobile-nav-toggler" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="icon flaticon-menu"></span>
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

            <div className="mobile-nav-toggler" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="icon flaticon-menu"></span>
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
