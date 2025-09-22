import React, {useState, useEffect} from "react";

import axios from "axios";

import { Link } from "react-router-dom";import Popular from "./Popular";
import Header from "./Header";


const Selling = () => {
      return (
    <>
    <Header />
      <section class="product-section-two" style={{backgroundColor: "white"}}>
        <div class="auto-container">
            
       
            <div class="sec-title">
                <div class="d-flex justify-content-between align-items-center flex-wrap">
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
                                <div class="d-flex align-items-center ">
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
                                <div class="d-flex align-items-center flex-wrap">
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
                                <div class="d-flex align-items-center flex-wrap">
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
                                <div class="d-flex align-items-center flex-wrap">
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
                                <div class="d-flex align-items-center flex-wrap">
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
                                <div class="d-flex align-items-center flex-wrap">
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
    </>


  );
};

export default Selling;
