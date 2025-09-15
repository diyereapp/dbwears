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




// const bgImage = `url("data:image/svg+xml;utf8,
//   <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
//     <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
//   </svg>")`;
// const Cart = () => {


//   const navigate = useNavigate();
// const { cartItems, removeFromCart } = useCart(); // <-- add this
//   const [open, setOpen] = useState(false);

//   const [name, setName] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");

//   const [grandParents, setGrandParents] = useState([]);
//   const [parents, setParents] = useState([]);
//   const [children, setChildren] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [selectedGrandParent, setSelectedGrandParent] = useState("");
//   const [selectedParent, setSelectedParent] = useState("");
//   const [selectedChild, setSelectedChild] = useState("");
//     const [categories, setCategories] = useState([]);

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





// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_API_URL}/api/db/products/category`
//       );
//       setProducts(data);
//     } catch (err) {
//       console.error("Failed to fetch products:", err);
//     }
//   };

//   fetchProducts();
// }, );


//  const [brands, setBrands] = useState([]);

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/brands`
//         );
//         setBrands(res.data); // ✅ API should return [{ _id, name, image }]
//       } catch (error) {
//         console.error("Failed to fetch brands:", error);
//       }
//     };

//     fetchBrands();
//   }, []);

//   return (
//     <>
//   <div id="__next"><div className="__variable_0fe379 __variable_70c4e6 font-sans">
    
      
//   <Header />
//     </div>
//     </div>

// <main><div class="bg-slate-100"><div class="text-slate-900 bg-inherit">
// <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul className="space-y-4">
//           {cartItems.map((item) => (
//             <li key={`${item._id}-${item.color}`} className="flex items-center justify-between">
//               <div>
//                 <p className="font-bold">{item.name}</p>
            
//                 <figure className="w-16 h-16 flex-shrink-0">
//                   <img
//                     src={item.images?.[0] || "https://via.placeholder.com/60"}
//                     alt={item.name}
//                     className="w-full h-full object-cover rounded"
//                   />
//                 </figure>
//                 <p className="text-sm text-gray-500">Color: {item.color}</p>
//                 <p>Qty: {item.quantity}</p>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item._id, item.color)}
//                 className="text-red-600 hover:underline"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>




// </div>


    
//     </div>
//     </main>
    
  


//     <Footer />
//     </>
//   );
// };

// export default Cart;



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
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
