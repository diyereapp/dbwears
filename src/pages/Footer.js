import React, {useState, useEffect} from "react";

import axios from "axios";

const Footer = () => {
    const [categories, setCategories] = useState([]);
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
    <>
<footer class="footer-style-two style-three style-four style-five ">
<div
  className="icon-layer-one"
  style={{ backgroundImage: 'url("https://themexriver.com/wp/prinox-wp/wp-content/themes/prinox/assets/images/vector-26.png")' }}
></div>

<div
  className="icon-layer-two"
  style={{ backgroundImage: 'url("https://themexriver.com/wp/prinox-wp/wp-content/themes/prinox/assets/images/vector-27.png")' }}
></div>

    <div class="auto-container">
    
        <div class="widgets-section">
            <div class="row clearfix">
         
                <div class="big-column col-lg-6 col-md-12 col-sm-12">
                    <div class="row clearfix">
                        
                      
                        <div class="footer-column col-lg-7 col-md-6 col-sm-12">
                            <div class="footer-widget links-widget">
                                <div id="text-4" class="widget_text"><h5>About Us</h5>			<div class="textwidget"><p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
</div>
		</div>                                                                <ul class="contact-list">
                                                                            <li><span class="icon"><i class="fas fa-map-marked-alt"></i></span>254 Lillian Blvd, Holbrook</li>
                                                                            <li><span class="icon"><i class="fas fa-phone"></i></span>1-800-654-3210</li>
                                                                    </ul>
                                                            </div>
                        </div>
                        
                      
                        <div class="footer-column col-lg-5 col-md-6 col-sm-12">
                            <div id="nav_menu-3" class="footer-widget links-widget widget_nav_menu"><div class="page-list"><h5>Marketplace</h5><div class="menu-market-menu-container"><ul id="menu-market-menu" class="menu"><li id="menu-item-547" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-547"><a href="#">Collectibles</a></li>
<li id="menu-item-548" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-548"><a href="#">Domain Names</a></li>
<li id="menu-item-549" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-549"><a href="#">Photography</a></li>
<li id="menu-item-550" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-550"><a href="#">Sports</a></li>
<li id="menu-item-551" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-551"><a href="#">Trading Cards</a></li>
<li id="menu-item-552" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-552"><a href="#">Utility</a></li>
</ul></div></div></div>                        </div>
                        
                    </div>
                </div>
                
              
                <div class="big-column col-lg-6 col-md-12 col-sm-12">
                    <div class="row clearfix">
                        
                     
                        <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                            <div id="nav_menu-4" class="footer-widget links-widget widget_nav_menu"><div class="page-list"><h5>My Account</h5><div class="menu-my-account-container"><ul id="menu-my-account" class="menu"><li id="menu-item-553" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-553"><a href="#">Author</a></li>
<li id="menu-item-554" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-554"><a href="#">How it Works</a></li>
<li id="menu-item-555" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-555"><a href="#">Create Item</a></li>
<li id="menu-item-556" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-556"><a href="#">Author Profile</a></li>
<li id="menu-item-557" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-557"><a href="#">Terms and conditions</a></li>
<li id="menu-item-558" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-558"><a href="#">Collection</a></li>
</ul></div></div></div>                        </div>
                        
                  
                        <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                            <div id="prinox_recent_posts_footer-2" class="footer-widget news-widget widget_prinox_recent_posts_footer">		
		<div class="news-widget">
            <h5>Recent Post</h5>            
                
<div class="widget-content">

        <div class="post">
        <div class="thumb">
            <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy-copy/"><img src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-7-2.jpg" alt="" /></a>
        </div>
        <span class="date">August 7, 2022</span>
		<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy-copy/">To engage prospects, we targeted eye.</a></h5>
    </div>
        <div class="post">
        <div class="thumb">
            <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy/"><img src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-6-2.jpg" alt="" /></a>
        </div>
        <span class="date">August 7, 2022</span>
		<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2-copy/">Finally found a work computer setup.</a></h5>
    </div>
        <div class="post">
        <div class="thumb">
            <a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2/"><img src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/blog-5-2.jpg" alt="" /></a>
        </div>
        <span class="date">August 7, 2022</span>
		<h5><a href="https://themexriver.com/wp/prinox-wp/finally-found-a-work-computer-setup-thats-practically-perf-2/">Finally found a work computer setup.</a></h5>
    </div>
    
      
</div>    
         </div>
        
        </div>                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        
      
        <div class="footer-bottom">
            <div class="footer-bottom-inner d-flex justify-content-between align-items-center flex-wrap">
            
          
                <div class="logo">
                                         <a href="https://themexriver.com/wp/prinox-wp/">
                <img src="https://themexriver.com/wp/prinox-wp/wp-content/themes/prinox/assets/images/logo.svg" alt="Logo" />
            </a>
                            </div>
                
                <div class="copyright">
                    Copyright © <span>2022</span> Theme. All Rights Reserved.                    
                </div>
                
                               
                <ul class="social-box">
                                        <li><a href="https://facebook.com"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://instagram.com"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://youtube.com"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
        
                                
            </div>
        </div>

        
    </div>
</footer>
    </>
  );
};

export default Footer;
