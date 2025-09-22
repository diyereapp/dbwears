import React, {useState, useEffect} from "react";

import axios from "axios";

import { Link } from "react-router-dom";import Popular from "./Popular";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShippingFast, FaLock, FaHeadset, FaWallet, FaShoppingCart } from "react-icons/fa";

import a5 from "./a5.jpg";
import a3 from "./a3.jpg";
import Featured from "./Featured";
import DealsoftheDay from "./DealsoftheDay";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      right: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 5,
      background: "rgba(255,255,255,0.8)",
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "22px",
      color: "black",
      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    }}
  >
    ➡
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      left: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 5,
      background: "rgba(255,255,255,0.8)",
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "22px",
      color: "black",
      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    }}
  >
    ⬅
  </div>
);
const Banner = () => {

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [brands, setBrands] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
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

  // Render submenu
// Only keep children that are categories (ignore products)

 const fetchBrands = async () => {
    try {
      const res = await axios.get( `${process.env.REACT_APP_API_URL}/api/db/brands`);
      setBrands(res.data); // assuming API returns [{ _id, name, image }]
    } catch (error) {
      console.error("Failed to fetch brands:", error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <>
<body class="wp-singular page-template page-template-prinox-template page-template-prinox-template-php page page-id-1812 wp-theme-prinox theme-prinox woocommerce-js woo-variation-swatches wvs-behavior-blur wvs-theme-prinox wvs-show-label wvs-tooltip elementor-default elementor-kit-5 elementor-page elementor-page-1812 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit" data-elementor-device-mode="mobile">

  
              <div id="elementor_page_builder" style={{backgroundColor: "white"}}>
					<div data-elementor-type="wp-page" data-elementor-id="1812" class="elementor elementor-1812">
						<section class="elementor-section elementor-top-section elementor-element elementor-element-7feccb30 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="7feccb30" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7363e217" data-id="7363e217" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-6da39e4 elementor-widget elementor-widget-ack-slider-five-id" data-id="6da39e4" data-element_type="widget" data-widget_type="ack-slider-five-id.default">
				<div class="elementor-widget-container">
<section className="main-slider-five" style={{ backgroundColor: "white" }}>
      <Slider {...settings}>
        {/* -------- First Slide -------- */}
        <div>
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${a5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px",
              color: "white",
            }}
          >
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            ></div>

            {/* Centered text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                minHeight: "500px",
                position: "relative",
                zIndex: 2,
                padding: "20px",
              }}
            >
          
			      <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
               Shirt &amp; Wear Printing
              </div>
              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Starting From <span>$60.99</span>
              </div>
              <Link
                to="/shop"
                style={{
                  background: "red",
                  color: "white",
                  padding: "12px 25px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                Shop Now
              </Link>
              <div
                style={{
                  background: "red",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                29<i>%</i> OFF
              </div>
            </div>
          </div>
        </div>

        {/* -------- Second Slide -------- */}
        <div>
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${a3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px",
              color: "white",
            }}
          >
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            ></div>

            {/* Centered text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                minHeight: "500px",
                position: "relative",
                zIndex: 2,
                padding: "20px",
              }}
            >
             <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
               Shirt &amp; Wear Printing
              </div>
              <div
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Starting From <span>$60.99</span>
              </div>
              <Link
                to="/shop"
                style={{
                  background: "red",
                  color: "white",
                  padding: "12px 25px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                Shop Now
              </Link>
              <div
                style={{
                  background: "red",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
              >
                29<i>%</i> OFF
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-3190d170 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3190d170" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1bce27f2" data-id="1bce27f2" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-12e4d23 elementor-widget elementor-widget-prionx-info-box-id" data-id="12e4d23" data-element_type="widget" data-widget_type="prionx-info-box-id.default">
				<div class="elementor-widget-container">
					   
    <div class="featured-section-two">
        <div class="inner-container">
            <div class="row clearfix">
                               
                <div class="feature-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="content">
                         <div className="icon" style={{ fontSize: "40px", color: "red" }}>
                <FaShippingFast />
                                  </div>
                            <strong>Free Shipping</strong>
                            <div class="text">Free shipping over $100</div>
                        </div>
                    </div>
                </div>
                              
                <div class="feature-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="content">
                            <div className="icon" style={{ fontSize: "40px", color: "red" }}>
                <FaLock />
              </div>
                            <strong>Payment Secure</strong>
                            <div class="text">Got 100% Payment Safe</div>
                        </div>
                    </div>
                </div>
                               
                <div class="feature-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="content">
                     <div className="icon" style={{ fontSize: "40px", color: "red" }}>
                <FaHeadset />
              </div>
                            <strong>Support 24/7</strong>
                            <div class="text">Top quialty 24/7 Support</div>
                        </div>
                    </div>
                </div>
                        
                <div class="feature-block-three col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div class="inner-box">
                        <div class="content">
                        <div className="icon" style={{ fontSize: "40px", color: "red" }}>
                <FaLock />
              </div>
                            <strong>100% Money Back</strong>
                            <div class="text">Cutomers Money Backs</div>
                        </div>
                    </div>
                </div>
                            </div>
        </div>
    </div>
	
    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
<section className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default elementor-section-height-default">
  <div className="elementor-container elementor-column-gap-default grid grid-cols-1 md:grid-cols-3 gap-4">
    {categories.map((cat, index) => (
      <div key={cat._id} className="elementor-column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-widget-container">
            <div
              className="business-block"
              style={{
                minHeight: "200px",
                borderRadius: "10px",
                padding: "20px",
                overflow: "hidden",
                position: "relative",
                backgroundColor: index === 2 ? "#bcb8b8ff" : "#f8f8f8",
              }}
            >
              {/* Pattern background */}
              <div
                className="pattern-layer"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage:
                    'url("https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/vector-6.png")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  opacity: 0.2,
                  zIndex: 0,
                }}
              ></div>

              {/* Flex content: text + image */}
              <div
                className="inner-box d-flex justify-content-between align-items-center"
                style={{ position: "relative", zIndex: 1 }}
              >
                {/* Text content */}
                <div className="content">
                  <div className="save">Save 30%</div>
                  <h6>
                    <Link to={`/category/${cat._id}`}>{cat.name}</Link>
                  </h6>
                  <Link
                    to={`/category/${cat._id}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "red",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "6px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    <FaShoppingCart /> Shop Now
                  </Link>
                </div>

                {/* Image */}
                <div className="image">
                  <img
                    src={
                      cat.image ||
                      "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/business-8.png"
                    }
                    alt={cat.name}
                    style={{ maxHeight: "120px" }}
                  />
                </div>
              </div>
              {/* End inner-box */}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

				<section class="elementor-section elementor-top-section elementor-element elementor-element-6a755748 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="6a755748" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d2cee6d" data-id="d2cee6d" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-181daa1b elementor-widget elementor-widget-prinox-product-sale-id" data-id="181daa1b" data-element_type="widget" data-widget_type="prinox-product-sale-id.default">
				<div class="elementor-widget-container">
					
	<Featured />

    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-f0f0c9e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f0f0c9e" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-76991a31" data-id="76991a31" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-3ef60d42 elementor-widget elementor-widget-prinox-app-banner-id" data-id="3ef60d42" data-element_type="widget" data-widget_type="prinox-app-banner-id.default">
				<div class="elementor-widget-container">
					
	<section class="app-section">
                
        
		<div class="auto-container">
			<div class="row clearfix">
				
			
				<div class="title-column col-lg-5 col-md-12 col-sm-12">
					<div class="inner-column">
					
						<div class="sec-title">
							<div class="title alternate">User Friendly Apps</div>
							<h2>Shop From Our Application</h2>
							<div class="text">We build and activate brands through cultural insight ns of passage <br /> of Lorem Ipsum available but the majority have suffe</div>
						</div>
						<div class="apps-btn">
                            							    <a href="https://www.apple.com/store"><img decoding="async" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/app.png" alt="" /></a>
                                                        							    <a href="https://play.google.com/store/games"><img decoding="async" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/google.png" alt="" /></a>
                            
						</div>
					</div>
				</div>
				

				<div class="image-column col-lg-7 col-md-12 col-sm-12">
					<div class="inner-column">
                                                                                                    <div class="image">
                                <img decoding="async" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/app-1.png" alt="" />
                            </div>
                        					</div>
				</div>
				
			</div>
		</div>
	</section>

    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-3e25cbc2 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3e25cbc2" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-65901c1c" data-id="65901c1c" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-5c6025ee elementor-widget elementor-widget-heading" data-id="5c6025ee" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">Get 10% To 40% Upto Discount using Promo Code</h2>				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-48bafd36" data-id="48bafd36" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-69844d1c elementor-align-right elementor-widget elementor-widget-button" data-id="69844d1c" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
									<div class="elementor-button-wrapper">
					<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
						<span class="elementor-button-icon">
				<i aria-hidden="true" class="flaticon2 flaticon2-right-arrow-2"></i>			</span>
									<span class="elementor-button-text">Get Promo Code </span>
					</span>
					</a>
				</div>
								</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-8d76395 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="8d76395" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-71ad9adf" data-id="71ad9adf" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-75137201 elementor-widget elementor-widget-prinox-product-deal-id" data-id="75137201" data-element_type="widget" data-widget_type="prinox-product-deal-id.default">
				<div class="elementor-widget-container">
		
<DealsoftheDay />

    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-141c4989 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="141c4989" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-4f9efc0a" data-id="4f9efc0a" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-2beae25c elementor-widget elementor-widget-prinox-banner-v2-id" data-id="2beae25c" data-element_type="widget" data-widget_type="prinox-banner-v2-id.default">
				<div class="elementor-widget-container">
					    <div class="row clearfix">
				

				<div class="shop-item-three">
			<div class="inner-box d-flex justify-content-between align-items-center ">
				<div class="content">
											<div class="title">GET 30% OFF</div>
					
											<h3><a href="https://themexriver.com/wp/wp-testing/shop/">The rise <span>of fashionable</span> <br /> influencers and style</a></h3>
					
											<div class="price">Starting <span>560.99</span></div>
					
											<a class="buy" href="https://themexriver.com/wp/wp-testing/shop/">Shop Now</a>
									</div>
				<div class="image">
											<div class="vector-layer" 
                      
                      
                     
                      
                        style={{
    backgroundImage: 'url("https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/vector-37.png")'
  }}
                      
                      
                      ></div>
																<img decoding="async" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/shop-1.png" alt="" />
									</div>
			</div>
		</div>
			</div>
    				</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2b827ab3" data-id="2b827ab3" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-2a667357 elementor-widget elementor-widget-prinox-banner-v2-id" data-id="2a667357" data-element_type="widget" data-widget_type="prinox-banner-v2-id.default">
				<div class="elementor-widget-container">
					    <div class="row clearfix">
				
	
					<div class="shop-item-four">
				<div class="inner-box d-flex justify-content-between align-items-center">
					<div class="content">
													<div class="title">GET 30% OFF</div>
						
													<h3><a href="https://themexriver.com/wp/wp-testing/shop/">fashionable <br /> influe</a></h3>
						
													<div class="price">Starting <span>560.99</span></div>
						
													<a class="buy" href="https://themexriver.com/wp/wp-testing/shop/">Shop Now</a>
											</div>
					<div class="image">
													<div class="vector-layer" 
                          
                    
                          
                            style={{
    backgroundImage: 'url("https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/vector-37.png")'
  }}
                          ></div>
																			<img decoding="async" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/shop-2.png" alt="" />
											</div>
				</div>
			</div>
			</div>
    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-163337f3 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="163337f3" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-52284191" data-id="52284191" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-1a094896 elementor-widget elementor-widget-prinox-deal-banner-v2-id" data-id="1a094896" data-element_type="widget" data-widget_type="prinox-deal-banner-v2-id.default">
				<div class="elementor-widget-container">

	<section class="deal-section-two style-two">
        
        
        
		<div class="auto-container">
			<div class="row clearfix">
				
		
				<div class="title-column col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
		
						<div class="sec-title">
							<div class="title alternate">100% Best Printing</div>
							<h2><span>Deals OF The Week</span> <br /> Never Miss!</h2>
							<div class="text">We build and activate brands through cultural insight <br /> str vision, and the power of emotion across every</div>
						</div>
	
						<div class="product-time-countdown clearfix" data-countdown="2022-12-31 12:00"><div class="counter-column"><span class="count">00</span>Days</div> <div class="counter-column"><span class="count">00</span>Hours</div>  <div class="counter-column"><span class="count">00</span>Mins</div>  <div class="counter-column"><span class="count">00</span>Secs</div></div>
		
                        						<div class="button-box">
							<a href="https://themexriver.com/wp/wp-testing/shop/" class="theme-btn btn-style-five clearfix">
								<span class="btn-wrap">
									<span class="text-one">Shop Now</span>
									<span class="text-two">Shop Now</span>
								</span>
								<span class="icon flaticon-right-arrow"></span>
							</a>
						</div>
                        					</div>
				</div>
				

				<div class="content-column col-lg-8 col-md-12 col-sm-12">
					<div class="inner-column">
                        						    <div class="vector-shape-two"
                                         
                                           style={{
    backgroundImage: 'url("https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/vector-44.png")'
  }}
                                         
                                         ></div>
                                                						    <div class="vector-shape-three"
                                                             
                                                                 
                                                                                        style={{
    backgroundImage: 'url("https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/vector-19.png")'
  }}
                                                                 ></div>
                                                						    <div class="vector-shape-four"
                                                                                    style={{
    backgroundImage: 'url("https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/vector-45.png")'
  }}
                                                                 
                                                                 
                                                                 
                                                                 ></div>
                                                                            <div class="image">
                                <img decoding="async" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/book-2.png" alt="" />
                            </div>
                        					</div>
				</div>
				
			</div>
		</div>
	</section>
    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-4d98522 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="4d98522" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-250596f5" data-id="250596f5" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-7717e446 elementor-widget elementor-widget-prinox-product-sale-list-id" data-id="7717e446" data-element_type="widget" data-widget_type="prinox-product-sale-list-id.default">
				<div class="elementor-widget-container">
					 
    <section class="product-section-two">
        <div class="auto-container">
            
       
            <div class="sec-title">
                <div class="d-flex justify-content-between align-items-center ">
                    <div>
                                                    <div class="title alternate">100% Best Printing</div>
                                                                            <h2><span>Best Selling Product</span></h2>
                                            </div>
                    <div>
                    
                                                <div class="button-box">
                            <a href="https://themexriver.com/wp/wp-testing/shop/" class="theme-btn btn-style-five clearfix">
                                <span class="btn-wrap">
                                    <span class="text-one">See All Products</span>
                                    <span class="text-two">See All Products</span>
                                </span>
                                <span class="icon flaticon-right-arrow"></span>
                            </a>
                        </div>
                                            </div>
                </div>
            </div>
            
            <div class="row clearfix">
          
                <div class="column col-lg-9 col-md-12 col-sm-12">
                    <div class="row clearfix">
                                                                
                        <div class="product-block col-lg-6 col-md-6 col-sm-6">
                            <div class="inner-box">
                                <div class="d-flex align-items-center">
                                    <div class="image">
                                        <img loading="lazy" decoding="async" width="175" height="145" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/mog-1-175x145.jpg" class="attachment-prinox-img-size-7 size-prinox-img-size-7 wp-post-image" alt="" />                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                                                                </div>
                                        <h6><a href="https://themexriver.com/wp/prinox-wp/product/lounge-chair-fredericia/">lounge chair fredericia</a></h6>
                                        <div class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>48.00</span></del> <span class="screen-reader-text">Original price was: $48.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>40.00</span></ins><span class="screen-reader-text">Current price is: $40.00.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                             
                        <div class="product-block col-lg-6 col-md-6 col-sm-6">
                            <div class="inner-box">
                                <div class="d-flex align-items-center ">
                                    <div class="image">
                                        <img loading="lazy" decoding="async" width="175" height="145" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/Group-1000001338-1-175x145.jpg" class="attachment-prinox-img-size-7 size-prinox-img-size-7 wp-post-image" alt="" />                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                                                                </div>
                                        <h6><a href="https://themexriver.com/wp/prinox-wp/product/diptych-brochure/">Diptych brochure</a></h6>
                                        <div class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>48.00</span></del> <span class="screen-reader-text">Original price was: $48.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>40.00</span></ins><span class="screen-reader-text">Current price is: $40.00.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                         
                        <div class="product-block col-lg-6 col-md-6 col-sm-6">
                            <div class="inner-box">
                                <div class="d-flex align-items-center">
                                    <div class="image">
                                        <img loading="lazy" decoding="async" width="175" height="145" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/bookcover-1-175x145.jpg" class="attachment-prinox-img-size-7 size-prinox-img-size-7 wp-post-image" alt="" />                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                        <div class="star-rating" role="img" aria-label="Rated 1.00 out of 5"><span style={{width:"20%"}}>Rated <strong class="rating">1.00</strong> out of 5 based on <span class="rating">1</span> customer rating</span></div>                                        </div>
                                        <h6><a href="https://themexriver.com/wp/prinox-wp/product/cat-t-shirt-top/">Cat  t-shirt  Top</a></h6>
                                        <div class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>48.00</span></del> <span class="screen-reader-text">Original price was: $48.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>40.00</span></ins><span class="screen-reader-text">Current price is: $40.00.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                    
                        <div class="product-block col-lg-6 col-md-6 col-sm-6">
                            <div class="inner-box">
                                <div class="d-flex align-items-center ">
                                    <div class="image">
                                        <img loading="lazy" decoding="async" width="175" height="145" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/prob-v-1-175x145.jpg" class="attachment-prinox-img-size-7 size-prinox-img-size-7 wp-post-image" alt="" />                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                        <div class="star-rating" role="img" aria-label="Rated 2.00 out of 5"><span style={{width:"40%"}}>Rated <strong class="rating">2.00</strong> out of 5 based on <span class="rating">1</span> customer rating</span></div>                                        </div>
                                        <h6><a href="https://themexriver.com/wp/prinox-wp/product/accesories-lather-shoes-2/">Accesories Lather Shoes</a></h6>
                                        <div class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>29.00</span></del> <span class="screen-reader-text">Original price was: $29.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>19.00</span></ins><span class="screen-reader-text">Current price is: $19.00.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            
                        <div class="product-block col-lg-6 col-md-6 col-sm-6">
                            <div class="inner-box">
                                <div class="d-flex align-items-center ">
                                    <div class="image">
                                        <img loading="lazy" decoding="async" width="175" height="145" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/products-pack-1-175x145.jpg" class="attachment-prinox-img-size-7 size-prinox-img-size-7 wp-post-image" alt="" />                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                        <div class="star-rating" role="img" aria-label="Rated 3.00 out of 5"><span style={{width:"60%"}}>Rated <strong class="rating">3.00</strong> out of 5 based on <span class="rating">1</span> customer rating</span></div>                                        </div>
                                        <h6><a href="https://themexriver.com/wp/prinox-wp/product/business-card-design/">Business Card Design</a></h6>
                                        <div class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>48.00</span></del> <span class="screen-reader-text">Original price was: $48.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>40.00</span></ins><span class="screen-reader-text">Current price is: $40.00.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                               
                        <div class="product-block col-lg-6 col-md-6 col-sm-6">
                            <div class="inner-box">
                                <div class="d-flex align-items-center ">
                                    <div class="image">
                                        <img loading="lazy" decoding="async" width="175" height="145" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/coffee-1-175x145.jpg" class="attachment-prinox-img-size-7 size-prinox-img-size-7 wp-post-image" alt="" />                                    </div>
                                    <div class="content">
                                        <div class="rating">
                                        <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style={{width:"80%"}}>Rated <strong class="rating">4.00</strong> out of 5 based on <span class="rating">1</span> customer rating</span></div>                                        </div>
                                        <h6><a href="https://themexriver.com/wp/prinox-wp/product/box-packag/">Box Packag</a></h6>
                                        <div class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>48.00</span></del> <span class="screen-reader-text">Original price was: $48.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>40.00</span></ins><span class="screen-reader-text">Current price is: $40.00.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            </div>
                </div>
              
                <div class="column col-lg-3 col-md-12 col-sm-12">
    
                    <div class="shop-widget">
                        <div class="inner-box">
                            <div class="title">Get Save 30% off</div>
                            <h5><a href="https://themexriver.com/wp/wp-testing/shop/">general motors buick <br /> sonic engine</a></h5>
                            <div class="price">$ 180.99</div>
                            <a href="https://themexriver.com/wp/wp-testing/shop/" class="theme-btn shop-btn">Shop Now <span class="flaticon-right-arrow"></span></a>
                            <div class="image">
                                <img decoding="async" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/32.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-7b3e5a5e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="7b3e5a5e" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6da49bc0" data-id="6da49bc0" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-7cb0721c elementor-widget elementor-widget-prionx-post-v2-id" data-id="7cb0721c" data-element_type="widget" data-widget_type="prionx-post-v2-id.default">
				<div class="elementor-widget-container">
				
	{/*<section class="blog-section-two">
        
        
		<div class="auto-container">
			<div class="row clearfix">

				<div class="title-column col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
		
						<div class="sec-title">
                            							    <div class="title alternate">News and Blogs</div>
                            
                            							    <h2><span>Deals OF The Week</span><br /> Never Miss!</h2>
                            
                            							    <div class="text">We build and activate brands through cultural insight ns <br /> of Lorem Ipsum available but the majority have suffe</div>
                            
						</div>

                        						<div class="button-box">
							<a href="https://themexriver.com/wp/wp-testing/shop/" class="theme-btn btn-style-five clearfix">
								<span class="btn-wrap">
									<span class="text-one">More Blog</span>
									<span class="text-two">More Blog</span>
								</span>
								<span class="icon flaticon-right-arrow"></span>
							</a>
						</div>
                        					</div>
				</div>

				<div class="carousel-column col-lg-8 col-md-12 col-sm-12">
					<div class="inner-column">
						
						<div class="two-item-carousel owl-carousel owl-theme owl-loaded owl-drag">
                            							
														
														
														
														
							 
						<div class="owl-stage-outer"><div class="owl-stage" 
              style={{
    transform: "translate3d(-1335px, 0px, 0px)",
    transition: "0.5s",
    width: "4895px"
  }}
            
            ><div class="owl-item cloned" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-4-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf/">Finally found a work computer setup That’s practically perf </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item cloned"style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-5-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2/">Finally found a work computer setup That’s practically perf </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item cloned" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-6-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy/">Finally found a work computer setup That’s practically perf </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item active" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/instagram-design-is-dedicated-to-whats-new-in-design/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" srcset="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-365x215.jpg 365w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-600x353.jpg 600w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-300x177.jpg 300w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-768x452.jpg 768w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2.jpg 1000w" sizes="(max-width: 365px) 100vw, 365px" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/instagram-design-is-dedicated-to-whats-new-in-design/">Instagram design is dedicated to what’s new in design </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/instagram-design-is-dedicated-to-whats-new-in-design/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/twitter-design-is-dedicated-to-whats-new-in-design/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" srcset="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-365x215.jpg 365w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-600x353.jpg 600w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-300x177.jpg 300w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-768x452.jpg 768w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2.jpg 1000w" sizes="(max-width: 365px) 100vw, 365px" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/twitter-design-is-dedicated-to-whats-new-in-design/">Twitter design is dedicated to what’s new in design </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/twitter-design-is-dedicated-to-whats-new-in-design/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-4-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf/">Finally found a work computer setup That’s practically perf </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-5-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2/">Finally found a work computer setup That’s practically perf </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-6-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy/">Finally found a work computer setup That’s practically perf </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item cloned" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/instagram-design-is-dedicated-to-whats-new-in-design/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" srcset="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-365x215.jpg 365w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-600x353.jpg 600w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-300x177.jpg 300w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2-768x452.jpg 768w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-2-2.jpg 1000w" sizes="(max-width: 365px) 100vw, 365px" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/instagram-design-is-dedicated-to-whats-new-in-design/">Instagram design is dedicated to what’s new in design </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/instagram-design-is-dedicated-to-whats-new-in-design/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item cloned" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/twitter-design-is-dedicated-to-whats-new-in-design/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" srcset="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-365x215.jpg 365w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-600x353.jpg 600w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-300x177.jpg 300w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2-768x452.jpg 768w, https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-3-2.jpg 1000w" sizes="(max-width: 365px) 100vw, 365px" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/twitter-design-is-dedicated-to-whats-new-in-design/">Twitter design is dedicated to what’s new in design </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/twitter-design-is-dedicated-to-whats-new-in-design/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div><div class="owl-item cloned" style={{width: "415px", marginRight: "30px;"}}><div class="news-block">
								<div class="inner-box">
									<div class="image">
                                        <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf/"><img loading="lazy" decoding="async" width="365" height="215" src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-4-2-365x215.jpg" class="attachment-prinox-img-size-5 size-prinox-img-size-5 wp-post-image" alt="" /></a>
									</div>
									<div class="lower-content">
										<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf/">Finally found a work computer setup That’s practically perf </a></h5>
										<a class="read-more" href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf/">Read More <span class="flaticon-right-arrow-2"></span></a>
									</div>
								</div>
							</div></div></div></div><div class="owl-nav"><div class="owl-prev"><span class="flaticon-left-arrow-1"></span></div><div class="owl-next"><span class="flaticon-right-arrow-1"></span></div></div><div class="owl-dots"><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div><div class="owl-dot"><span></span></div><div class="owl-dot"><span></span></div><div class="owl-dot"><span></span></div></div></div>
						
					</div>
				</div>
			</div>
		</div>
	</section>*/}

    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-425ab9f6 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="425ab9f6" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-248073d8" data-id="248073d8" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-16064fba elementor-widget elementor-widget-prionx-message-box-id" data-id="16064fba" data-element_type="widget" data-widget_type="prionx-message-box-id.default">
				<div class="elementor-widget-container">
				
	<section class="message-section">
		<div class="auto-container">

			<div class="title-box">
				<h2>Never Miss A Drop! Susbcribed Us</h2>
				<div class="text">Subscribe to our ultra-exclusive drop list and be the first to know about upcoming
Nifty drops.</div>
			</div>

			<div class="subscribe-box-four">
				
<div class="wpcf7 js" id="wpcf7-f1838-p1812-o1" lang="en-US" dir="ltr" data-wpcf7-id="1838">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/wp/prinox-wp/homepage-six/#wpcf7-f1838-p1812-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
<fieldset class="hidden-fields-container"><input type="hidden" name="_wpcf7" value="1838" /><input type="hidden" name="_wpcf7_version" value="6.1.1" /><input type="hidden" name="_wpcf7_locale" value="en_US" /><input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1838-p1812-o1" /><input type="hidden" name="_wpcf7_container_post" value="1812" /><input type="hidden" name="_wpcf7_posted_data_hash" value="" />
</fieldset>
<div class="form-group">
	<p><span class="wpcf7-form-control-wrap" data-name="msg--452"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Enter your Email" value="" type="email" name="msg--452" /></span><button type="submit" class="theme-btn submit-btn">Subscribe Now</button>
	</p>
</div><div class="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
			</div>
		</div>
	</section>
	
    				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				</div>
			</div>
    
    
    
    </body>
    
    </>
  );
};

export default Banner;
