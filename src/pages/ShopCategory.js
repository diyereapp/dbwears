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




const bgImage = `url("data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
    <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
  </svg>")`;
const ShopCategory = () => {

    const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [grandParents, setGrandParents] = useState([]);
  const [parents, setParents] = useState([]);
  const [children, setChildren] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedGrandParent, setSelectedGrandParent] = useState("");
  const [selectedParent, setSelectedParent] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
useEffect(() => {
  const fetchCategory = async () => {
    try {
      // 🔹 Fetch current category
      const { data: category } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/category/${id}`
      );
      console.log("📌 Current category:", category);

      setName(category.name);
      setPreview(category.image || "");

      // 🔹 Fetch all categories (with nested children)
      const { data: allCats } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/categories`
      );
      console.log("📌 All categories:", allCats);

      // Get all grandparent-level categories (no parent)
      setGrandParents(allCats.filter((cat) => !cat.parent));

      let grandParentId;

      if (!category.parent) {
        // Current category IS a grandparent
        grandParentId = category._id;
        console.log("✅ Current category is a GRANDPARENT:", grandParentId);
      } else {
        // Walk up one level
        const { data: parentCat } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/category/${category.parent}`
        );
        console.log("📌 Parent category:", parentCat);

        if (!parentCat.parent) {
          grandParentId = parentCat._id;
          console.log("✅ Parent is GRANDPARENT:", grandParentId);
        } else {
          const { data: grandCat } = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/db/category/${parentCat.parent}`
          );
          console.log("📌 Resolved grandparent category:", grandCat);
          grandParentId = grandCat._id;
        }
      }

      setSelectedGrandParent(grandParentId);
      console.log("🎯 Final grandParentId:", grandParentId);

      // ✅ Find the grandparent inside allCats (this one has children populated!)
      const grandParentCategory = allCats.find(
        (cat) => cat._id.toString() === grandParentId.toString()
      );

      // ✅ Use children of grandparent
      let resolvedParents = [];
      if (grandParentCategory && grandParentCategory.children) {
        resolvedParents = grandParentCategory.children.filter(
          (child) => !child.price // optional filter: exclude products
        );
      }

      console.log(
        "📌 Parents to display (from grandparent.children):",
        resolvedParents
      );

      setParents(resolvedParents);
      setChildren([]);
    } catch (err) {
      console.error("❌ Failed to fetch category:", err);
    }
  };

  fetchCategory();
}, [id]);





useEffect(() => {
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/products/category/${id}`
      );
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  fetchProducts();
}, [id]);


 const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/brands`
        );
        setBrands(res.data); // ✅ API should return [{ _id, name, image }]
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <>
  <div id="__next"><div className="__variable_0fe379 __variable_70c4e6 font-sans">
    
      
  <Header />
    </div>
    </div>


    <section class="page-title">
        <div class="auto-container">

			<div class="icons-box parallax-scene-1"   style={{
    transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    pointerEvents: "none",
  }}>
				<div class="icon-one" data-depth="0.10"  style={{
    transform: "translate3d(0px, 0px, 0px)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "relative",
    display: "block",
    left: "0px",
    top: "0px",
  }} ></div>
                				<div class="icon-two" data-depth="0.30"
                        
     
                        
                         style={{
    transform: "translate3d(0px, 0px, 0px)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "absolute",
    display: "block",
    left: "0px",
    top: "0px",
  }}
                        >
					<img src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/vector-9.png" alt="" />
				</div>
                                				<div class="icon-three" data-depth="0.30"
                                        
 style={{
    transform: "translate3d(0px, 0px, 0px)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "absolute",
    display: "block",
    left: "0px",
    top: "0px",
  }}
                                        
                                        
                                        
                                        >
                    <img src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/vector-34.png" alt="" />
				</div>
                				<div class="icon-four" data-depth="0.10"
                        
                       style={{
    transform: "translate3d(0px, 0px, 0px)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "absolute",
    display: "block",
    left: "0px",
    top: "0px",
  }}
                                        
         
                        
                        ></div>
			</div>            
			<h2 className="pro-ti">
                Shop {name} Product            </h2>
            <ul class="bread-crumb clearfix"><li class="breadcrumb-item"><a href="https://themexriver.com/wp/prinox-wp/">Home &nbsp;</a>   <span style={{ margin: "0 5px", fontSize: "0.8rem"  }}>›</span></li><li class="breadcrumb-item">{name}</li></ul>        </div>
    </section>


<section class="shop-page-section sidebar-page-container" style={{backgroundColor: "white"}}>
    <div class="auto-container">
        <div class="row clearfix">
			

			<div class="content-side content-side col-lg-12 col-md-12 col-sm-12 right-sidebar">
				                        
              
                <div class="filter-box">
				<div class="d-flex justify-content-between align-items-center flex-wrap">

							<div class="left-box d-flex align-items-center">
								<div class="results">
									<p class="woocommerce-result-count" role="alert" aria-relevant="all" aria-hidden="false">
	Showing all 12 results</p>
								</div>
							</div>
				
							<div class="right-box">
								<form class="woocommerce-ordering" method="get">
		<select name="orderby" class="orderby" aria-label="Shop order">
					<option value="menu_order" selected="selected">Default sorting</option>
					<option value="popularity">Sort by popularity</option>
					<option value="rating">Sort by average rating</option>
					<option value="date">Sort by latest</option>
					<option value="price">Sort by price: low to high</option>
					<option value="price-desc">Sort by price: high to low</option>
			</select>
	<input type="hidden" name="paged" value="1" />
	</form>
							</div>
						</div>
                    <div class="woocommerce-form">
                                                </div>
                        </div>   
                                                
                                
                            
               <div className="row clearfix">
  {products.map((product) => (
    <div
      key={product._id}
      className="shop-item col-lg-3 col-md-4 col-sm-6 product"
    >
      <div className="inner-box">
        {/* Product Image */}
        <div className="image" >
   <img
  loading="lazy"
  width="300"
  style={{ height: "230px",}}
  height="300"
  src={
    product.images && product.images.length > 0
      ? product.images[0] // first image from array
      : "https://via.placeholder.com/300"
  }
  alt={product.name}
/>

          <button
            className="button product_type_simple add_to_cart_button"
            style={{backgroundColor: "red",  fontWeight: "900", borderRadius: "10px", color: "white"}}
            onClick={() => console.log("Add to cart:", product._id)} // replace with real add-to-cart
          >
            Add to cart
          </button>
        </div>

        {/* Product Info */}
        <div className="lower-content">
          {/* Rating (example using ⭐) */}
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < product.rating ? "⭐" : "☆"}</span>
            ))}
          </div>

          <h6>
            <a href={`/single-product/${product._id}`}>{product.name}</a>
          </h6>

          {/* Price */}
          <span className="price">
            {product.oldPrice && (
              <del>
                <span className="woocommerce-Price-amount amount">
                  ${product.oldPrice}
                </span>
              </del>
            )}
            <ins>
              <span className="woocommerce-Price-amount amount">
                ${product.price}
              </span>
            </ins>
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

                            
                                
                            </div>
    
		</div>
	</div>
</section>



    
    
 


    <Footer />
    </>
  );
};

export default ShopCategory;
