// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Slider from "react-slick";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// // fallback demo products
// const demoProducts = [
//   {
//     id: 1,
//     name: "Coffees Mugs",
//     price: 40,
//     oldPrice: 48,
//     image:
//       "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/pakcage-1-300x300.jpg",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Print Book Cover",
//     price: 16,
//     oldPrice: 32,
//     image:
//       "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/bookcover-1-300x300.jpg",
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Accessories Lather Shoes",
//     price: 19,
//     oldPrice: 29,
//     image:
//       "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/prob-v-1-300x300.jpg",
//     rating: 2,
//   },
//   {
//     id: 4,
//     name: "Box Package",
//     price: 19,
//     oldPrice: 49,
//     image:
//       "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/box-1-300x300.jpg",
//     rating: 5,
//   },
//   {
//     id: 5,
//     name: "Box Package",
//     price: 19,
//     oldPrice: 49,
//     image:
//       "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/box-1-300x300.jpg",
//     rating: 5,
//   },
// ];

// const Featured = () => {
//   const [products, setProducts] = useState(demoProducts); // show fallback by default

//   useEffect(() => {
//     const fetchBestSellers = async () => {
//       try {
//         const { data } = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/products/featured`
//         );

//         if (data && data.length > 0) {
//           setProducts(data); // replace with API data
//         }
//       } catch (err) {
//         console.error("Error fetching featured products:", err);
//         // keep demoProducts if API fails
//       }
//     };

//     fetchBestSellers();
//   }, []);

//   // const settings = {
//   //   dots: true,
//   //   arrows: true,
//   //   infinite: true,
//   //   autoplay: true,
//   //   autoplaySpeed: 4000,
//   //   slidesToShow: 4,
//   //   slidesToScroll: 1,
//   //   responsive: [
//   //     { breakpoint: 1024, settings: { slidesToShow: 3 } },
//   //     { breakpoint: 768, settings: { slidesToShow: 2 } },
//   //     { breakpoint: 480, settings: { slidesToShow: 1 } },
//   //   ],
//   // };
//   const settings = {
//   dots: true,
//   infinite: true,
// autoplaySpeed: 4000,
//   slidesToShow: 4, // default desktop
//   slidesToScroll: 1,
//   arrows: true,
//   // nextArrow: <NextArrow />,
//   // prevArrow: <PrevArrow />,
//   responsive: [
//     {
//       breakpoint: 1024, // tablet
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//     {
//       breakpoint: 768, // mobile
//       settings: {
//         slidesToShow: 1, // 👈 show 1 slide per view on mobile
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };


//   return (
//     <section
//       className="seller-section"
//       style={{ padding: "40px 0", background: "#f9f9f9" }}
//     >
//       <div className="auto-container">
//         <div className="sec-title centered" style={{ marginBottom: "30px" }}>
//           <h2>
//             <span>Featured Product</span>
//           </h2>
//           <div className="text">
//             There are many variations of passages of Lorem Ipsum available, but
//             the majority have suffered alteration in some form.
//           </div>
//         </div>

//         <Slider {...settings}>
//           {products.map((product) => (
//             <div key={product.id} className="shop-item-two" style={{ padding: "15px" }}>
//               <div
//                 className="inner-box"
//                 style={{
//                   border: "1px solid #eee",
//                   borderRadius: "8px",
//                   background: "#fff",
//                   padding: "15px",
//                   textAlign: "center",
//                 }}
//               >
//                 {/* Image */}
//                 <div className="image" style={{ marginBottom: "15px" }}>
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     style={{
//                       width: "100%",
//                       maxWidth: "200px",
//                       margin: "0 auto",
//                     }}
//                   />
//                   <div
//                     className="options-box"
//                     style={{
//                       marginTop: "10px",
//                       display: "flex",
//                       justifyContent: "center",
//                       gap: "10px",
//                     }}
//                   >
//                     <button
//                       style={{
//                         border: "none",
//                         background: "transparent",
//                         cursor: "pointer",
//                       }}
//                     >
//                       <FaHeart style={{ color: "red" }} />
//                     </button>
//                     <button
//                       style={{
//                         border: "none",
//                         background: "transparent",
//                         cursor: "pointer",
//                       }}
//                     >
//                       <FaShoppingCart style={{ color: "#333" }} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="lower-content">
//                   {/* Rating */}
//            <div
//   className="rating"
//   style={{
//     marginBottom: "10px",
//     color: "#f1c40f",
//     display: "flex",          // 👈 force horizontal layout
//     justifyContent: "center", // 👈 optional, center stars
//     gap: "3px",               // 👈 add spacing between stars
//   }}
// >
//   {[...Array(5)].map((_, i) => (
//     <FaStar
//       key={i}
//       color={i < product.rating ? "#f1c40f" : "#ccc"}
//     />
//   ))}
// </div>

//                   <h6 style={{ marginBottom: "10px" }}>
//                     <a
//                       href={`/product/${product.id}`}
//                       style={{ textDecoration: "none", color: "#333" }}
//                     >
//                       {product.name}
//                     </a>
//                   </h6>
//                   <div
//                     className="price"
//                     style={{ fontSize: "1.1rem", fontWeight: "bold" }}
//                   >
//                     <del style={{ marginRight: "8px", color: "#999" }}>
//                       ${product.oldPrice}
//                     </del>
//                     <ins style={{ color: "red", textDecoration: "none" }}>
//                       ${product.price}
//                     </ins>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Featured;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/products/featured`
        );
        setProducts(data || []);
      } catch (err) {
        console.error("Error fetching featured products:", err);
      }
    };

    fetchFeatured();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 4, // default desktop
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="seller-section"
      style={{ padding: "40px 0", background: "#f9f9f9" }}
    >
      <div className="auto-container">
        <div className="sec-title centered" style={{ marginBottom: "30px" }}>
          <h2>
            <span>Featured Product</span>
          </h2>
          <div className="text">
            Our most popular and trending products right now.
          </div>
        </div>

        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product._id}
              className="shop-item-two"
              style={{ padding: "15px" }}
            >
              <div
                className="inner-box"
                style={{
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  background: "#fff",
                  padding: "15px",
                  textAlign: "center",
                }}
              >
                {/* Image */}
                <div className="image" style={{ marginBottom: "15px" ,     height: "220px",}}>
             <img
  src={product.images && product.images.length > 0 ? product.images[0] : "/placeholder.png"}
  alt={product.name}
  style={{
    width: "100%",
    maxWidth: "200px",
    margin: "0 auto",
  }}
/>

                  <div
                    className="options-box"
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <button
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <FaHeart style={{ color: "red" }} />
                    </button>
                    <button
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <FaShoppingCart style={{ color: "#333" }} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="lower-content">
                  {/* Rating */}
                  <div
                    className="rating"
                    style={{
                      marginBottom: "10px",
                      color: "#f1c40f",
                      display: "flex",
                      justifyContent: "center",
                      gap: "3px",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < product.rating ? "#f1c40f" : "#ccc"}
                      />
                    ))}
                  </div>

                  <h6 style={{ marginBottom: "10px" }}>
                    <Link
                      to={`/single-product/${product._id}`}
                      style={{ textDecoration: "none", color: "#333" }}
                    >
                      {product.name}
                    </Link>
                  </h6>

                  <div
                    className="price"
                    style={{ fontSize: "1.1rem", fontWeight: "bold" }}
                  >
                    {product.oldPrice && (
                      <del style={{ marginRight: "8px", color: "#999" }}>
                        ${product.oldPrice}
                      </del>
                    )}
                    <ins style={{ color: "red", textDecoration: "none" }}>
                      ${product.price}
                    </ins>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Featured;
