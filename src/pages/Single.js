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
import ProductTabs from "./ProductTabs";
import { FaChevronRight } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const bgImage = `url("data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
    <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
  </svg>")`;
const Single = () => {

    const { id } = useParams();
  const navigate = useNavigate();
const [currentImageIndex, setCurrentImageIndex] = useState(0); // <-- add this

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
 const [product, setProduct] = useState(null);
  const [grandParents, setGrandParents] = useState([]);
  const [parents, setParents] = useState([]);
  const [children, setChildren] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedGrandParent, setSelectedGrandParent] = useState("");
  const [selectedParent, setSelectedParent] = useState("");
  const [selectedChild, setSelectedChild] = useState("");
   const { addToCart } = useCart();
    const [activeTab, setActiveTab] = useState("description");
  const [selectedSize, setSelectedSize] = useState("");
useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data: product } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/product/${id}`
        );

        setProduct(product);

        // Category info
        const category = product.category;
        if (category) {
          setSelectedChild(category._id);
          if (category.parent) {
            setSelectedParent(category.parent._id);
            if (category.parent.parent) {
              setSelectedGrandParent(category.parent.parent._id);
            }
          }
        }

        // Debugging
        console.log("Fetched product:", product);
        console.log("Child:", category?.name);
        console.log("Parent:", category?.parent?.name);
        console.log("Grandparent:", category?.parent?.parent?.name);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [id]);
const [selectedColor, setSelectedColor] = useState(null);

useEffect(() => {
  if (product?.color?.length > 0) {
    // pick the first color from DB as default
    setSelectedColor(product.color[0]);
  }
}, [product]);
useEffect(() => {
  const fetchRelatedProducts = async () => {
    if (!product?.category?._id) return;

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/products/category/${product.category._id}`
      );

      // filter out the current product
      const filtered = data.filter((p) => p._id !== product._id);

      setProducts(filtered);
    } catch (err) {
      console.error("Failed to fetch related products:", err);
    }
  };

  fetchRelatedProducts();
}, [product]);

const availableColors = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Red", hex: "#FF0000" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Green", hex: "#008000" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Purple", hex: "#800080" },
  { name: "Gray", hex: "#808080" },
  { name: "Navy", hex: "#001F54" },
  { name: "Orange", hex: "#FFA500" },
];
  return (
    <>
  <div id="__next"><div className="__variable_0fe379 __variable_70c4e6 font-sans">
  <Header />
    </div>
    </div>



    <section class="page-title" >
        <div class="auto-container">

			<div class="icons-box parallax-scene-1"  style={{
    transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    pointerEvents: "none",
  }}>
				<div class="icon-one" data-depth="0.10"   style={{
    transform: "translate3d(0px, 0px, 0px)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "relative",
    display: "block",
    left: "0px",
    top: "0px",
  }}></div>
                				<div class="icon-two" data-depth="0.30"  style={{
    transform: "translate3d(0px, 0px, 0px)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "absolute",
    display: "block",
    left: "0px",
    top: "0px",
  }}>
					<img src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/vector-9.png" alt="" />
				</div>
                                				<div class="icon-three" data-depth="0.30"  style={{
    transform: "translate3d(0px, 0px, 0px)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "absolute",
    display: "block",
    left: "0px",
    top: "0px",
  }}>
                    <img src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/vector-34.png" alt="" />
				</div>
                				<div class="icon-four" data-depth="0.10"  style={{
    transform: "translate3d(0px, 0px, 0px)",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    position: "absolute",
    display: "block",
    left: "0px",
    top: "0px",
  }}></div>
			</div>    
                            <h2 className="pro-ti">  {product?.name}</h2>
              
<ul className="bread-crumb clearfix">
  <li className="breadcrumb-item">
    <a href="/">Home&nbsp;</a>
    <span style={{ margin: "0 5px", fontSize: "0.8rem"  }}>›</span>

  </li>
  <li className="breadcrumb-item">{product?.category?.name}</li>
</ul>

       </div>
    </section>

<section class="shop-detail-section"  style={{backgroundColor: "white"}}>
	<div class="auto-container">
											<div class="woocommerce-notices-wrapper"></div><div id="product-1546" class="product type-product post-1546 status-publish first outofstock product_cat-begs-package product_cat-book-paper product_cat-gift-brochure has-post-thumbnail sale shipping-taxable purchasable product-type-variable">
	<div class="upper-box">
		<div class="row clearfix">
	





<div className="gallery-column col-lg-6 col-md-12 col-sm-12">
  <div className="inner-column">
    {product?.images && product.images.length > 0 ? (
      <div
        className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
        data-columns="4"
        style={{
          opacity: 1,
          transition: "opacity 0.25s ease-in-out",
        }}
      >
        {/* Flex viewport */}
        <div
          className="flex-viewport"
          style={{
            overflow: "hidden",
            position: "relative",
            height: "387.305px",
            transition: "none",
          }}
        >
          <figure
            className="woocommerce-product-gallery__wrapper relative"
            style={{
              width: "1200%",
              transitionDuration: "0s",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            {/* Navigation buttons */}
            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prev) =>
                    (prev - 1 + product.images.length) %
                    product.images.length
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
            >
              ◀
            </button>

            <div
              className="woocommerce-product-gallery__image flex-active-slide"
              style={{
                width: "323.734px",
                marginRight: "0px",
                float: "left",
                display: "block",
              }}
            >
              <a href={product.images[currentImageIndex]}>
                <img
                  src={product.images[currentImageIndex]}
                  alt={product?.name}
                  className="w-full max-h-[500px] object-contain"
                  draggable="false"
                />
              </a>
            </div>

            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prev) => (prev + 1) % product.images.length
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
            >
              ▶
            </button>
          </figure>
        </div>

        {/* Thumbnail navigation */}
        <ol className="flex-control-nav flex-control-thumbs mt-2 flex gap-2">
          {product.images.map((thumb, index) => (
            <li key={index}>
              <img
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                width="100"
                height="100"
                draggable="false"
                className={`cursor-pointer border ${
                  index === currentImageIndex
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            </li>
          ))}
        </ol>
      </div>
    ) : (
      <p>Loading images...</p> // fallback if no images
    )}
  </div>
</div>

			<div class="content-column col-lg-6 col-md-12 col-sm-12">
								<div class="inner-column">
					<h3 class="product_title entry-title pro-ti">  {product?.name}</h3>					<div class="rating">
						
	<div class="woocommerce-product-rating">
							<a href="#reviews" class="woocommerce-review-link" rel="nofollow">(<span class="count">2</span> customer reviews)</a>
						</div>

					</div>
					<div class="text">
						<div class="woocommerce-product-details__short-description">
	<p>{product?.description}</p>
</div>
					</div>
					<div class="price">
						<p class="price" style={{fontWeight: "900", color: "black"}}><span class="woocommerce-Price-amount amount"  style={{fontWeight: "900", color: "black"}} aria-hidden="true"><bdi><span class="woocommerce-Price-currencySymbol" style={{fontWeight: "900", color: "black"}}>$</span>{product?.discountPrice}</bdi></span> <span aria-hidden="true"></span> <span class="woocommerce-Price-amount amount" aria-hidden="true"></span></p>
					</div>		
					<div class="categories">
						<div class="product_meta">

	
	


	
	<span class="posted_in">Category: <a href="https://themexriver.com/wp/prinox-wp/product-category/begs-package/" rel="tag">{product?.category?.name}</a> </span>
	
	
</div>
					</div>		
					
<form class="variations_form cart wvs-loaded" action="https://themexriver.com/wp/prinox-wp/product/accesories-lather-shoes/" method="post" 
enctype="multipart/form-data" data-product_id="1546" data-product_variations="[{&quot;attributes&quot;:{&quot;attribute_pa_color&quot;:&quot;
  blue&quot;,&quot;attribute_pa_size&quot;:&quot;&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;
  dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;
  :&quot;N\/A&quot;,&quot;display_price&quot;:22,&quot;display_regular_price&quot;:25,&quot;image&quot;:{&quot;title&quot;:&quot;box&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;alt&quot;:&quot;box&quot;,&quot;src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg&quot;,&quot;srcset&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg 600w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-251x300.jpg 251w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-856x1024.jpg 856w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-768x919.jpg 768w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg 1003w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;full_src_w&quot;:1003,&quot;full_src_h&quot;:1200,&quot;gallery_thumbnail_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-100x100.jpg&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-300x300.jpg&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:718},&quot;image_id&quot;:1852,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&lt;span class=\&quot;price\&quot;&gt;&lt;del aria-hidden=\&quot;true\&quot;&gt;&lt;span class=\&quot;woocommerce-Price-amount amount\&quot;&gt;&lt;bdi&gt;&lt;span class=\&quot;woocommerce-Price-currencySymbol\&quot;&gt;&amp;#36;&lt;\/span&gt;25.00&lt;\/bdi&gt;&lt;\/span&gt;&lt;\/del&gt; &lt;span class=\&quot;screen-reader-text\&quot;&gt;Original price was: &amp;#036;25.00.&lt;\/span&gt;&lt;ins aria-hidden=\&quot;true\&quot;&gt;&lt;span class=\&quot;woocommerce-Price-amount amount\&quot;&gt;&lt;bdi&gt;&lt;span class=\&quot;woocommerce-Price-currencySymbol\&quot;&gt;&amp;#36;&lt;\/span&gt;22.00&lt;\/bdi&gt;&lt;\/span&gt;&lt;\/ins&gt;&lt;span class=\&quot;screen-reader-text\&quot;&gt;Current price is: &amp;#036;22.00.&lt;\/span&gt;&lt;\/span&gt;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:1576,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;,&quot;woosq_image_id&quot;:1852,&quot;woosq_image_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;woosq_image&quot;:&quot;&lt;img width=\&quot;384\&quot; height=\&quot;460\&quot; src=\&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg\&quot; class=\&quot;attachment-woosq size-woosq\&quot; alt=\&quot;\&quot; decoding=\&quot;async\&quot; srcset=\&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg 1003w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg 600w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-251x300.jpg 251w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-856x1024.jpg 856w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-768x919.jpg 768w\&quot; sizes=\&quot;(max-width: 384px) 100vw, 384px\&quot; \/&gt;&quot;},{&quot;attributes&quot;:{&quot;attribute_pa_color&quot;:&quot;red&quot;,&quot;attribute_pa_size&quot;:&quot;&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;:&quot;N\/A&quot;,&quot;display_price&quot;:49,&quot;display_regular_price&quot;:49,&quot;image&quot;:{&quot;title&quot;:&quot;box&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;alt&quot;:&quot;box&quot;,&quot;src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg&quot;,&quot;srcset&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg 600w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-251x300.jpg 251w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-856x1024.jpg 856w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-768x919.jpg 768w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg 1003w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;full_src_w&quot;:1003,&quot;full_src_h&quot;:1200,&quot;gallery_thumbnail_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-100x100.jpg&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-300x300.jpg&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:718},&quot;image_id&quot;:1852,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&lt;span class=\&quot;price\&quot;&gt;&lt;span class=\&quot;woocommerce-Price-amount amount\&quot;&gt;&lt;bdi&gt;&lt;span class=\&quot;woocommerce-Price-currencySymbol\&quot;&gt;&amp;#36;&lt;\/span&gt;49.00&lt;\/bdi&gt;&lt;\/span&gt;&lt;\/span&gt;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:1577,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;,&quot;woosq_image_id&quot;:1852,&quot;woosq_image_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;woosq_image&quot;:&quot;&lt;img width=\&quot;384\&quot; height=\&quot;460\&quot; src=\&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg\&quot; class=\&quot;attachment-woosq size-woosq\&quot; alt=\&quot;\&quot; decoding=\&quot;async\&quot; srcset=\&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg 1003w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg 600w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-251x300.jpg 251w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-856x1024.jpg 856w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-768x919.jpg 768w\&quot; sizes=\&quot;(max-width: 384px) 100vw, 384px\&quot; \/&gt;&quot;},{&quot;attributes&quot;:{&quot;attribute_pa_color&quot;:&quot;black&quot;,&quot;attribute_pa_size&quot;:&quot;&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;:&quot;N\/A&quot;,&quot;display_price&quot;:19,&quot;display_regular_price&quot;:29,&quot;image&quot;:{&quot;title&quot;:&quot;box&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;alt&quot;:&quot;box&quot;,&quot;src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg&quot;,&quot;srcset&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg 600w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-251x300.jpg 251w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-856x1024.jpg 856w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-768x919.jpg 768w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg 1003w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;full_src_w&quot;:1003,&quot;full_src_h&quot;:1200,&quot;gallery_thumbnail_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-100x100.jpg&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-300x300.jpg&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:718},&quot;image_id&quot;:1852,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&lt;span class=\&quot;price\&quot;&gt;&lt;del aria-hidden=\&quot;true\&quot;&gt;&lt;span class=\&quot;woocommerce-Price-amount amount\&quot;&gt;&lt;bdi&gt;&lt;span class=\&quot;woocommerce-Price-currencySymbol\&quot;&gt;&amp;#36;&lt;\/span&gt;29.00&lt;\/bdi&gt;&lt;\/span&gt;&lt;\/del&gt; &lt;span class=\&quot;screen-reader-text\&quot;&gt;Original price was: &amp;#036;29.00.&lt;\/span&gt;&lt;ins aria-hidden=\&quot;true\&quot;&gt;&lt;span class=\&quot;woocommerce-Price-amount amount\&quot;&gt;&lt;bdi&gt;&lt;span class=\&quot;woocommerce-Price-currencySymbol\&quot;&gt;&amp;#36;&lt;\/span&gt;19.00&lt;\/bdi&gt;&lt;\/span&gt;&lt;\/ins&gt;&lt;span class=\&quot;screen-reader-text\&quot;&gt;Current price is: &amp;#036;19.00.&lt;\/span&gt;&lt;\/span&gt;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:1574,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;,&quot;woosq_image_id&quot;:1852,&quot;woosq_image_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;woosq_image&quot;:&quot;&lt;img width=\&quot;384\&quot; height=\&quot;460\&quot; src=\&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg\&quot; class=\&quot;attachment-woosq size-woosq\&quot; alt=\&quot;\&quot; decoding=\&quot;async\&quot; srcset=\&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg 1003w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg 600w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-251x300.jpg 251w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-856x1024.jpg 856w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-768x919.jpg 768w\&quot; sizes=\&quot;(max-width: 384px) 100vw, 384px\&quot; \/&gt;&quot;},{&quot;attributes&quot;:{&quot;attribute_pa_color&quot;:&quot;blue&quot;,&quot;attribute_pa_size&quot;:&quot;&quot;},&quot;availability_html&quot;:&quot;&quot;,&quot;backorders_allowed&quot;:false,&quot;dimensions&quot;:{&quot;length&quot;:&quot;&quot;,&quot;width&quot;:&quot;&quot;,&quot;height&quot;:&quot;&quot;},&quot;dimensions_html&quot;:&quot;N\/A&quot;,&quot;display_price&quot;:39,&quot;display_regular_price&quot;:49,&quot;image&quot;:{&quot;title&quot;:&quot;box&quot;,&quot;caption&quot;:&quot;&quot;,&quot;url&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;alt&quot;:&quot;box&quot;,&quot;src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg&quot;,&quot;srcset&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg 600w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-251x300.jpg 251w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-856x1024.jpg 856w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-768x919.jpg 768w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg 1003w&quot;,&quot;sizes&quot;:&quot;(max-width: 600px) 100vw, 600px&quot;,&quot;full_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;full_src_w&quot;:1003,&quot;full_src_h&quot;:1200,&quot;gallery_thumbnail_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-100x100.jpg&quot;,&quot;gallery_thumbnail_src_w&quot;:100,&quot;gallery_thumbnail_src_h&quot;:100,&quot;thumb_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-300x300.jpg&quot;,&quot;thumb_src_w&quot;:300,&quot;thumb_src_h&quot;:300,&quot;src_w&quot;:600,&quot;src_h&quot;:718},&quot;image_id&quot;:1852,&quot;is_downloadable&quot;:false,&quot;is_in_stock&quot;:true,&quot;is_purchasable&quot;:true,&quot;is_sold_individually&quot;:&quot;no&quot;,&quot;is_virtual&quot;:false,&quot;max_qty&quot;:&quot;&quot;,&quot;min_qty&quot;:1,&quot;price_html&quot;:&quot;&lt;span class=\&quot;price\&quot;&gt;&lt;del aria-hidden=\&quot;true\&quot;&gt;&lt;span class=\&quot;woocommerce-Price-amount amount\&quot;&gt;&lt;bdi&gt;&lt;span class=\&quot;woocommerce-Price-currencySymbol\&quot;&gt;&amp;#36;&lt;\/span&gt;49.00&lt;\/bdi&gt;&lt;\/span&gt;&lt;\/del&gt; &lt;span class=\&quot;screen-reader-text\&quot;&gt;Original price was: &amp;#036;49.00.&lt;\/span&gt;&lt;ins aria-hidden=\&quot;true\&quot;&gt;&lt;span class=\&quot;woocommerce-Price-amount amount\&quot;&gt;&lt;bdi&gt;&lt;span class=\&quot;woocommerce-Price-currencySymbol\&quot;&gt;&amp;#36;&lt;\/span&gt;39.00&lt;\/bdi&gt;&lt;\/span&gt;&lt;\/ins&gt;&lt;span class=\&quot;screen-reader-text\&quot;&gt;Current price is: &amp;#036;39.00.&lt;\/span&gt;&lt;\/span&gt;&quot;,&quot;sku&quot;:&quot;&quot;,&quot;variation_description&quot;:&quot;&quot;,&quot;variation_id&quot;:1575,&quot;variation_is_active&quot;:true,&quot;variation_is_visible&quot;:true,&quot;weight&quot;:&quot;&quot;,&quot;weight_html&quot;:&quot;N\/A&quot;,&quot;woosq_image_id&quot;:1852,&quot;woosq_image_src&quot;:&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg&quot;,&quot;woosq_image&quot;:&quot;&lt;img width=\&quot;384\&quot; height=\&quot;460\&quot; src=\&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg\&quot; class=\&quot;attachment-woosq size-woosq\&quot; alt=\&quot;\&quot; decoding=\&quot;async\&quot; srcset=\&quot;https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1.jpg 1003w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-600x718.jpg 600w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-251x300.jpg 251w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-856x1024.jpg 856w, https:\/\/themexriver.com\/wp\/prinox-wp\/wp-content\/uploads\/2022\/08\/box-1-768x919.jpg 768w\&quot; sizes=\&quot;(max-width: 384px) 100vw, 384px\&quot; \/&gt;&quot;}]" current-image="">
	<div data-product_id="1546" data-threshold_min="30" data-threshold_max="100" data-total="4">
			<table class="variations" cellspacing="0" role="presentation">
			<tbody>
							<tr>
  <th className="label">
    <label htmlFor="pa_color">Color</label>
    <span
      className="woo-selected-variation-item-name"
      data-default=""
    >
      {selectedColor}
    </span>
  </th>

  <td className="value woo-variation-items-wrapper">
    {/* Hidden select (to match WooCommerce markup) */}
    <select
      style={{ display: "none" }}
      id="pa_color"
      className="woo-variation-raw-select"
      name="attribute_pa_color"
      data-attribute_name="attribute_pa_color"
      data-show_option_none="yes"
      value={selectedColor || ""}
      onChange={(e) => setSelectedColor(e.target.value)}
    >
      <option value="">Choose an option</option>
      {product?.color?.map((colorName) => (
        <option key={colorName} value={colorName} className="attached enabled">
          {colorName}
        </option>
      ))}
    </select>

    {/* Custom color list like Woo UI */}
    <ul
      role="radiogroup"
      aria-label="color"
      className="variable-items-wrapper button-variable-items-wrapper wvs-style-squared"
      data-attribute_name="attribute_pa_color"
      data-attribute_values={JSON.stringify(product?.color || [])}
    >
      {product?.color?.map((colorName) => {
        const colorObj = availableColors.find((c) => c.name === colorName);
        return (
          <li
            key={colorName}
            aria-checked={selectedColor === colorName}
            tabIndex={0}
            data-attribute_name="attribute_pa_color"
            data-wvstooltip={colorName}
            className={`variable-item button-variable-item button-variable-item-${colorName.toLowerCase()} ${
              selectedColor === colorName ? "selected" : ""
            }`}
            title={colorName}
            data-title={colorName}
            data-value={colorName}
            role="radio"
            onClick={() => setSelectedColor(colorName)}
          >
            <div className="variable-item-contents">
              <span
                className="variable-item-span variable-item-span-button"
                style={{
                  backgroundColor: colorObj?.hex || "#ddd", // fallback color
                  display: "inline-block",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  color: "#fff",
                }}
              >
                {colorName}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  </td>
</tr>

<tr>
  <th className="label">
    <label htmlFor="pa_size">Size</label>
    <span
      className="woo-selected-variation-item-name"
      data-default=""
    >
      {selectedSize}
    </span>
  </th>

  <td className="value woo-variation-items-wrapper">
    {/* Hidden select (Woo style) */}
    <select
      style={{ display: "none" }}
      id="pa_size"
      className="woo-variation-raw-select"
      name="attribute_pa_size"
      data-attribute_name="attribute_pa_size"
      data-show_option_none="yes"
      value={selectedSize || ""}
      onChange={(e) => setSelectedSize(e.target.value)}
    >
      <option value="">Choose an option</option>

      {Array.isArray(product?.size) &&
        product.size.length > 0 &&
        product.size[0]
          .split(",")
          .map((size) => size.trim())
          .map((size) => (
            <option key={size} value={size} className="attached enabled">
              {size.toUpperCase()}
            </option>
          ))}
    </select>

    {/* Custom size list */}
    <ul
      role="radiogroup"
      aria-label="size"
      className="variable-items-wrapper button-variable-items-wrapper wvs-style-squared"
      data-attribute_name="attribute_pa_size"
      data-attribute_values={JSON.stringify(
        Array.isArray(product?.size) && product.size.length > 0
          ? product.size[0].split(",").map((s) => s.trim())
          : []
      )}
    >
      {Array.isArray(product?.size) &&
        product.size.length > 0 &&
        product.size[0]
          .split(",")
          .map((size) => size.trim())
          .map((size) => (
            <li
              key={size}
              aria-checked={selectedSize === size}
              tabIndex={0}
              data-attribute_name="attribute_pa_size"
              data-wvstooltip={size.toUpperCase()}
              className={`variable-item button-variable-item button-variable-item-${size.toLowerCase()} ${
                selectedSize === size ? "selected" : ""
              }`}
              title={size.toUpperCase()}
              data-title={size.toUpperCase()}
              data-value={size}
              role="radio"
              onClick={() => setSelectedSize(size)}
            >
              <div className="variable-item-contents">
                <span className="variable-item-span variable-item-span-button">
                  {size.toUpperCase()}
                </span>
              </div>
            </li>
          ))}
    </ul>

    {/* Reset link */}
    <a
      className="reset_variations"
      href="#"
      aria-label="Clear options"
      style={{ visibility: selectedSize ? "visible" : "hidden" }}
      onClick={(e) => {
        e.preventDefault();
        setSelectedSize("");
      }}
    >
      Clear
    </a>
  </td>
</tr>


							</tbody>
		</table>
		<div class="reset_variations_alert screen-reader-text" role="alert" aria-live="polite" aria-relevant="all"></div>
		
		<div class="single_variation_wrap">
			<div class="woocommerce-variation single_variation" role="alert" aria-relevant="additions" style={{display: "none"}}></div><div class="woocommerce-variation-add-to-cart variations_button d-flex align-items-center  woocommerce-variation-add-to-cart-disabled">
	
	
	<div class="buttons-box">
		<button type="submit" name="add-to-cart" value="1546" class="theme-btn btn-style-four clearfix">
			<span class="btn-wrap">
				<span class="text-one">Add to cart</span>
				<span class="text-two">Add to cart</span>
			</span>			
		</button>
	</div>
		<div class="quantity">
				<label class="screen-reader-text" for="quantity_68cc4096f118e">Accesories Lather Shoes quantity</label>
		<input type="number" id="quantity_68cc4096f118e" class="input-text qty text" step="1" min="1" max=""
     name="quantity" value="1" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off" />
			</div>
		
	<input type="hidden" name="add-to-cart" value="1546" />
	<input type="hidden" name="product_id" value="1546" />
	<input type="hidden" name="variation_id" class="variation_id" value="0" />
</div>
		</div>
	
	</div></form>

				</div>
			</div>
		</div>
	</div>	
	

<ProductTabs />

 <section className="related products" style={{ padding: "40px 0" }}>
      <h2 style={{ marginBottom: "20px" }}>Related products</h2>
      <div className="row clearfix" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((related) => (
          <li
            key={related._id}
            className="shop-item col-lg-3 col-md-4 col-sm-6 product"
            style={{ listStyle: "none", marginBottom: "20px" }}
          >
            <div className="inner-box" style={{ border: "1px solid #eee", borderRadius: "8px", padding: "15px" }}>
              {/* Image */}
         <div
  className="image"
  style={{
    textAlign: "center",
    marginBottom: "15px",
    height: "250px", // fixed height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // hide overflow so it crops
  }}
>
  <img
    src={
      related.images && related.images.length > 0
        ? related.images[0]
        : "/placeholder.png"
    }
    alt={related.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover", // makes all images uniform
      borderRadius: "4px",
    }}
  />
</div>


              {/* Content */}
              <div className="lower-content" style={{ textAlign: "center" }}>
                <h6 style={{ marginBottom: "10px" }}>
                  <Link to={`/single-product/${related._id}`} style={{ color: "#333", textDecoration: "none" }}>
                    {related.name}
                  </Link>
                </h6>

                <span className="price" style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {related.discountPrice ? (
                    <>
                      <del style={{ marginRight: "8px", color: "#999" }}>${related.price}</del>
                      <ins style={{ color: "red", textDecoration: "none" }}>${related.discountPrice}</ins>
                    </>
                  ) : (
                    <ins style={{ color: "red", textDecoration: "none" }}>${related.price}</ins>
                  )}
                </span>
              </div>
            </div>
          </li>
        ))}
      </div>
    </section>
</div>

							  
		
	</div>
</section>

    <Footer />
    </>
  );
};

export default Single;
