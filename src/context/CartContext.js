
//  import { createContext, useContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
// import { toast } from "react-toastify"; // make sure react-toastify is installed

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartId, setCartId] = useState(localStorage.getItem("cartId") || uuidv4());

//   // Ensure cartId persists
//   useEffect(() => {
//     localStorage.setItem("cartId", cartId);
//   }, [cartId]);

//   // Load cartItems from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem("cartItems");
//     if (stored) {
//       try {
//         setCartItems(JSON.parse(stored));
//       } catch {
//         console.warn("Invalid cart in localStorage");
//       }
//     }
//   }, []);

//   // Save cartItems to localStorage & backend
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));

//     if (cartItems.length) {
//       axios.post(`${process.env.REACT_APP_API_URL}/api/cart`, {
//         cartId,
//         items: cartItems.map((i) => ({
//           product: i._id || i.product?._id,
//           quantity: i.quantity,
//           color: i.color,
//         })),
//       }).catch(err => console.error("Error saving cart:", err));
//     }
//   }, [cartItems, cartId]);

//   // Cart actions
//   const addToCart = (product, selectedColor) => {
//     const exists = cartItems.find(
//       (item) => item._id === product._id && item.color === selectedColor
//     );

//     if (exists) {
//       toast.info("This product is already in your cart!"); // toast if already exists
//       return; // stop here
//     }

//     setCartItems((prev) => [...prev, { ...product, color: selectedColor, quantity: 1 }]);
//     toast.success("Product added to cart!"); // toast on success
//   };

//   const removeFromCart = (id, color) => {
//     setCartItems((prev) =>
//       prev.filter((item) => !(item._id === id && item.color === color))
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState(localStorage.getItem("cartId") || uuidv4());

  // Persist cartId
  useEffect(() => {
    localStorage.setItem("cartId", cartId);
  }, [cartId]);

  // Load cart from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch {
        console.warn("Invalid cart in localStorage");
      }
    }
  }, []);

  // Save cart to localStorage & backend
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    if (cartItems.length) {
      axios.post(`${process.env.REACT_APP_API_URL}/api/cart`, {
        cartId,
        items: cartItems.map((i) => ({
          product: i._id || i.product?._id,
          quantity: i.quantity,
          color: i.color,
        })),
      }).catch(err => console.error("Error saving cart:", err));
    }
  }, [cartItems, cartId]);

  // Add to cart
  const addToCart = (product, selectedColor) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item._id === product._id && item.color === selectedColor
      );

      if (existing) {
        // Increase quantity if already in cart
        toast.info("Product quantity updated in cart!");
        return prev.map((item) =>
          item._id === product._id && item.color === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new product
      toast.success("Product added to cart!");
      return [...prev, { ...product, color: selectedColor, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (id, color) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item._id === id && item.color === color))
    );
  };
// Clear the cart
const clearCart = () => {
  setCartItems([]);
  localStorage.removeItem("cartItems"); // optional: also clear from localStorage
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
