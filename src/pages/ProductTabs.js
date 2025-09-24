import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./style.css"
import { FaChevronRight } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductTabs = () => {
  const tabsOrder = [
    "description",
    "additional_information",
    "reviews"
  ];
   const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const tabRefs = useRef([]);

  useEffect(() => {
    // ensure refs array length matches tabs
    tabRefs.current = tabRefs.current.slice(0, tabsOrder.length);
  }, []);

  const focusTabAt = (index) => {
    const el = tabRefs.current[index];
    if (el?.focus) el.focus();
  };

  const handleTabClick = (tabId, i, e) => {
    e.preventDefault();
    setActiveTab(tabId);
    focusTabAt(i);
  };

  const handleKeyDown = (e, i) => {
    // keyboard nav: ArrowLeft, ArrowRight, Home, End
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (i + 1) % tabsOrder.length;
      setActiveTab(tabsOrder[next]);
      focusTabAt(next);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (i - 1 + tabsOrder.length) % tabsOrder.length;
      setActiveTab(tabsOrder[prev]);
      focusTabAt(prev);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveTab(tabsOrder[0]);
      focusTabAt(0);
    } else if (e.key === "End") {
      e.preventDefault();
      const last = tabsOrder.length - 1;
      setActiveTab(tabsOrder[last]);
      focusTabAt(last);
    }
  };
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
    <div className="woocommerce-tabs wc-tabs-wrapper product-info-tabs">
      <div className="prod-tabs tabs-box">
    <ul
  className="tabs wc-tabs tab-btns tab-buttons clearfix flex flex-row items-center justify-center gap-6 overflow-x-auto whitespace-nowrap"
  role="tablist"
>
  <li
    className={`description_tab tab-btn ${
      activeTab === "description" ? "active-btn active" : ""
    }`}
    id="tab-title-description"
    role="presentation"
  >
    <a
      href="#tab-description"
      role="tab"
      aria-selected={activeTab === "description"}
      aria-controls="tab-description"
      tabIndex={activeTab === "description" ? 0 : -1}
      ref={(el) => (tabRefs.current[0] = el)}
      onClick={(e) => handleTabClick("description", 0, e)}
      onKeyDown={(e) => handleKeyDown(e, 0)}
      className="px-4 py-2 block"
    >
      Description
    </a>
  </li>

  <li
    className={`additional_information_tab tab-btn ${
      activeTab === "additional_information" ? "active-btn active" : ""
    }`}
    id="tab-title-additional_information"
    role="presentation"
  >
    <a
      href="#tab-additional_information"
      role="tab"
      aria-selected={activeTab === "additional_information"}
      aria-controls="tab-additional_information"
      tabIndex={activeTab === "additional_information" ? 0 : -1}
      ref={(el) => (tabRefs.current[1] = el)}
      onClick={(e) => handleTabClick("additional_information", 1, e)}
      onKeyDown={(e) => handleKeyDown(e, 1)}
      className="px-4 py-2 block"
    >
      Additional information
    </a>
  </li>

  <li
    className={`reviews_tab tab-btn ${
      activeTab === "reviews" ? "active-btn active" : ""
    }`}
    id="tab-title-reviews"
    role="presentation"
  >
    <a
      href="#tab-reviews"
      role="tab"
      aria-selected={activeTab === "reviews"}
      aria-controls="tab-reviews"
      tabIndex={activeTab === "reviews" ? 0 : -1}
      ref={(el) => (tabRefs.current[2] = el)}
      onClick={(e) => handleTabClick("reviews", 2, e)}
      onKeyDown={(e) => handleKeyDown(e, 2)}
      className="px-4 py-2 block"
    >
      Reviews (2)
    </a>
  </li>
</ul>


        <div className="tabs-content">
          {/* Description panel */}
          <div
            className="tab woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
            id="tab-description"
            role="tabpanel"
            aria-labelledby="tab-title-description"
            style={{ display: activeTab === "description" ? "block" : "none" }}
          >
            <h3 className="tb-ron-title pro-ti2">Description</h3>

            <p >
  {product?.description}
            </p>
          <h3 className="tb-ron-title pro-ti2">Features</h3>
    
     <ul>
        {product?.features
          .flatMap((f) => f.split(",")) // split string if it's comma-separated
          .map((item, idx) => (
            <li key={idx}>{item.trim()}</li> // remove extra spaces
          ))}
      </ul>
          </div>

          {/* Additional information */}
      {/* Additional information */}
<div
  className="tab woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
  id="tab-additional_information"
  role="tabpanel"
  aria-labelledby="tab-title-additional_information"
  style={{
    display: activeTab === "additional_information" ? "block" : "none",
  }}
>
  <h3 className="tb-ron-title pro-ti2">Additional information</h3>

  <table
    className="woocommerce-product-attributes shop_attributes"
    aria-label="Product Details"
  >
    <tbody>
           <th
            className="woocommerce-product-attributes-item__label"
            scope="row"
          >
            Color
          </th>
      {/* Colors */}
      {product?.color?.length > 0 && (
        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
       
          <td className="woocommerce-product-attributes-item__value">
            <p>{product.color.join(", ")}</p>
          </td>
        </tr>
      )}
     <th
            className="woocommerce-product-attributes-item__label"
            scope="row"
          >
            Size
          </th>
      {/* Sizes */}
      {product?.size?.length > 0 && (
        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
     
          <td className="woocommerce-product-attributes-item__value">
            <p>{product.size.join(", ")}</p>
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>


          {/* Reviews */}
          <div
            className="tab woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
            id="tab-reviews"
            role="tabpanel"
            aria-labelledby="tab-title-reviews"
            style={{ display: activeTab === "reviews" ? "block" : "none" }}
          >
            <div id="reviews" className="woocommerce-Reviews">
              <div id="comments">
                <h2 className="woocommerce-Reviews-title">
                  2 reviews for <span>Accesories Lather Shoes</span>
                </h2>

                <ol className="commentlist">
                  <li
                    className="review even thread-even depth-1"
                    id="li-comment-7"
                  >
                    <div id="comment-7" className="comment_container">
                      <img
                        alt=""
                        src="https://secure.gravatar.com/avatar/71a77267f30008ab3eef4b020e1b29155945405731d0f1e44dbc349e0ac7723e?s=60&d=mm&r=g"
                        srcSet="https://secure.gravatar.com/avatar/71a77267f30008ab3eef4b020e1b29155945405731d0f1e44dbc349e0ac7723e?s=120&d=mm&r=g 2x"
                        className="avatar avatar-60 photo"
                        height="60"
                        width="60"
                        decoding="async"
                      />
                      <div className="comment-text">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5 out of 5"
                        >
                          <span style={{ width: "100%" }}>
                            Rated <strong className="rating">5</strong> out of 5
                          </span>
                        </div>
                        <p className="meta">
                          <strong className="woocommerce-review__author">
                            ThemeXriver{" "}
                          </strong>
                          <span className="woocommerce-review__dash">–</span>{" "}
                          <time
                            className="woocommerce-review__published-date"
                            dateTime="2022-08-18T06:07:43+00:00"
                          >
                            August 18, 2022
                          </time>
                        </p>

                        <div className="description">
                          <p>
                            How all this mistaken idea of denouncing pleasure
                            and praising pain was born and I will give you a
                            complete account of the system, and expound the
                            actual teachings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    className="review odd alt thread-odd thread-alt depth-1"
                    id="li-comment-8"
                  >
                    <div id="comment-8" className="comment_container">
                      <img
                        alt=""
                        src="https://secure.gravatar.com/avatar/97fc85f50993f1d100e10a620b226e75e197ddf3c2a302a7e0d9b097fb72419d?s=60&d=mm&r=g"
                        srcSet="https://secure.gravatar.com/avatar/97fc85f50993f1d100e10a620b226e75e197ddf3c2a302a7e0d9b097fb72419d?s=120&d=mm&r=g 2x"
                        className="avatar avatar-60 photo"
                        height="60"
                        width="60"
                        decoding="async"
                      />
                      <div className="comment-text">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label="Rated 5 out of 5"
                        >
                          <span style={{ width: "100%" }}>
                            Rated <strong className="rating">5</strong> out of 5
                          </span>
                        </div>
                        <p className="meta">
                          <strong className="woocommerce-review__author">
                            Wabidul Kader{" "}
                          </strong>
                          <span className="woocommerce-review__dash">–</span>{" "}
                          <time
                            className="woocommerce-review__published-date"
                            dateTime="2022-08-18T06:27:30+00:00"
                          >
                            August 18, 2022
                          </time>
                        </p>

                        <div className="description">
                          <p>
                            How all this mistaken idea of denouncing pleasure
                            and praising pain was born and I will give you a
                            complete account of the system, and expound the
                            actual teachings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>

              <div id="review_form_wrapper">
                <div id="review_form">
                  <div id="respond" className="comment-respond">
                    <span
                      id="reply-title"
                      className="comment-reply-title"
                      role="heading"
                      aria-level="3"
                    >
                      Add a review{" "}
                      <small>
                        <a
                          rel="nofollow"
                          id="cancel-comment-reply-link"
                          href="/wp/prinox-wp/product/accesories-lather-shoes/#respond"
                          style={{ display: "none" }}
                        >
                          Cancel reply
                        </a>
                      </small>
                    </span>

                    <form
                      action="https://themexriver.com/wp/prinox-wp/wp-comments-post.php"
                      method="post"
                      id="commentform"
                      className="comment-form"
                    >
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>{" "}
                        <span className="required-field-message">
                          Required fields are marked <span className="required">*</span>
                        </span>
                      </p>

                      <p className="comment-form-author">
                        <label htmlFor="author">
                          Name <span className="required">*</span>
                        </label>
                        <input
                          id="author"
                          name="author"
                          type="text"
                          autoComplete="name"
                          defaultValue=""
                          size="30"
                          required
                        />
                      </p>

                      <p className="comment-form-email">
                        <label htmlFor="email">
                          Email <span className="required">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          defaultValue=""
                          size="30"
                          required
                        />
                      </p>

                      <p className="comment-form-cookies-consent">
                        <input
                          id="wp-comment-cookies-consent"
                          name="wp-comment-cookies-consent"
                          type="checkbox"
                          value="yes"
                        />
                        <label htmlFor="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>

                      <div className="comment-form-rating">
                        <label htmlFor="rating" id="comment-form-rating-label">
                          Your rating <span className="required">*</span>
                        </label>
                        <p className="stars">
                          <span role="group" aria-labelledby="comment-form-rating-label">
                            <a role="radio" tabIndex="0" aria-checked="false" className="star-1" href="#">1 of 5 stars</a>
                            <a role="radio" tabIndex="-1" aria-checked="false" className="star-2" href="#">2 of 5 stars</a>
                            <a role="radio" tabIndex="-1" aria-checked="false" className="star-3" href="#">3 of 5 stars</a>
                            <a role="radio" tabIndex="-1" aria-checked="false" className="star-4" href="#">4 of 5 stars</a>
                            <a role="radio" tabIndex="-1" aria-checked="false" className="star-5" href="#">5 of 5 stars</a>
                          </span>
                        </p>
                        <select
                          name="rating"
                          id="rating"
                          required
                          style={{ display: "none" }}
                        >
                          <option value="">Rate…</option>
                          <option value="5">Perfect</option>
                          <option value="4">Good</option>
                          <option value="3">Average</option>
                          <option value="2">Not that bad</option>
                          <option value="1">Very poor</option>
                        </select>
                      </div>

                      <p className="comment-form-comment">
                        <label htmlFor="comment">
                          Your review <span className="required">*</span>
                        </label>
                        <textarea id="comment" name="comment" cols="45" rows="8" required defaultValue={""} />
                      </p>

                      <p className="form-submit">
                        <input
                          name="submit"
                          type="submit"
                          id="submit"
                          className="submit"
                          value="Submit"
                        />
                        <input
                          type="hidden"
                          name="comment_post_ID"
                          value="1546"
                          id="comment_post_ID"
                        />
                        <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                      </p>
                    </form>
                  </div>
                </div>
              </div>

              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
