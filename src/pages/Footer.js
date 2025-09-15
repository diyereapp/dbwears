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
<div >
    <main>
  



                    </main>

                        
    
    <footer class="bg-slate-900 py-8 __className_0fe379" style={{backgroundColor: "black"}}><div class="h-24 bg-inherit after:-mt-12 after:block after:h-0.5 after:w-full after:bg-slate-100 after:content-[&#x27;&#x27;]">
    {/*<img alt="" loading="lazy" width="484" height="484" decoding="async" data-nimg="1" class="mx-auto h-24 w-24"   style={{
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(\"_data_image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 484 484'><filter id='b' color/><feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0'/></filter><image width='10'/></svg>\")"
  }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
    srcSet="https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w, https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=384&amp;q=75&amp;fit=min&amp;auto=format 384w, https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=640&amp;q=75&amp;fit=min&amp;auto=format 640w, https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=750&amp;q=75&amp;fit=min&amp;auto=format 750w,
     https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=828&amp;q=75&amp;fit=min&amp;auto=format 828w, https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=1080&amp;q=75&amp;fit=min&amp;auto=format 1080w, https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=1200&amp;q=75&amp;fit=min&amp;auto=format 1200w, https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=1920&amp;q=75&amp;fit=min&amp;auto=format 1920w, https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=2048&amp;q=75&amp;fit=min&amp;auto=format 2048w,
      https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format 3840w" src="https://cdn.sanity.io/images/2ahps9jc/production/163648c29436822845ac0ffa031f84ed19a1494e-484x484.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/>
      
      */}

      </div><div class="text-slate-900 bg-inherit">
      
      <div class="mx-auto max-w-[1440px] px-6"><nav class="lg:my-12"><ul class="flex flex-col items-center divide-y lg:grid lg:auto-rows-fr 
      lg:grid-cols-5 lg:gap-8 lg:divide-y-0"><li class="h-full w-full"><div class="flex flex-col items-center py-8 lg:flex-grow lg:items-stretch
       lg:py-0" data-state="closed"><div class="flex items-center gap-2"><button type="button" aria-controls="radix-:R1dmm:" aria-expanded="false"
        data-state="closed" 
      class="group flex items-center gap-2 hover:text-primary"><h4 class="text-lg font-semibold uppercase tracking-wider text-slate-100
       hover:text-primary">Apparel</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-6 w-6
         text-slate-400 group-data-[state=open]:hidden lg:hidden"><path d="m6 9 6 6 6-6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" 
         width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
       class="lucide lucide-chevron-up h-6 w-6 text-slate-400 group-data-[state=closed]:hidden lg:hidden"><path d="m18 15-6-6-6 6"></path></svg></button>
       </div><div data-state="closed" id="radix-:R1dmm:"><ul class="mt-2 flex flex-col items-center gap-2 text-slate-400 lg:items-start"><li class="flex
        flex-col items-center"><a class="flex flex-col items-center
        whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="t-shirts/index.html">T-Shirts</a></li><li class="flex flex-col
         items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2"
          href="hoodies/index.html">Hoodies</a></li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line 
          hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="sweatshirts/index.html">Sweatshirts</a></li><li class="flex flex-col
           items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2"
            href="hats/index.html">Hats</a>
        </li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row 
        lg:items-center lg:gap-2" href="polo-shirts/index.html">Polos</a></li><li class="flex flex-col items-center"><a class="flex flex-col 
        items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="jackets/index.html">Jackets</a></li></ul></div>
        </div></li><li class="h-full w-full"><div class="flex flex-col items-center py-8 lg:flex-grow lg:items-stretch lg:py-0" data-state="closed">
          <div class="flex items-center gap-2"><button type="button" aria-controls="radix-:R2dmm:" aria-expanded="false" data-state="closed" class="group 
          flex items-center gap-2 hover:text-primary"><h4 class="text-lg font-semibold uppercase tracking-wider text-slate-100 hover:text-primary">
             Products</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-6 w-6 text-slate-400 
              group-data-[state=open]:hidden lg:hidden"><path d="m6 9 6 6 6-6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" 
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
              class="lucide lucide-chevron-up h-6 w-6 text-slate-400 group-data-[state=closed]:hidden lg:hidden"><path d="m18 15-6-6-6 6">
                </path></svg></button></div><div data-state="closed" id="radix-:R2dmm:"><ul class="mt-2 flex flex-col items-center gap-2 
                text-slate-400 lg:items-start"><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line 
                hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="promotional-products/no-minimum/index.html">No Minimums</a>
        </li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="bags/index.html">Bags</a></li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="drinkware/index.html">Drinkware</a></li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="trade-shows/index.html">Trade Shows</a></li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="office/index.html">Office Supplies</a></li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="technology/index.html">Technology</a></li></ul></div></div></li><li class="h-full w-full"><div class="flex flex-col items-center py-8 lg:flex-grow lg:items-stretch lg:py-0" data-state="closed"><div class="flex items-center gap-2"><button type="button" aria-controls="radix-:R3dmm:" aria-expanded="false" data-state="closed" class="group flex items-center gap-2 hover:text-primary"><h4 class="text-lg font-semibold uppercase tracking-wider text-slate-100 hover:text-primary">About</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-6 w-6 text-slate-400 group-data-[state=open]:hidden lg:hidden"><path d="m6 9 6 6 6-6"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-6 w-6 text-slate-400 group-data-[state=closed]:hidden lg:hidden"><path d="m18 15-6-6-6 6"></path></svg></button></div><div data-state="closed" id="radix-:R3dmm:"><ul class="mt-2 flex flex-col items-center gap-2 text-slate-400 lg:items-start"><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="about/reviews/index.html">Reviews</a></li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="about/our-story/index.html">Our Story</a></li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="blog/index.html">Blog</a></li><li class="flex flex-col items-center">
        <a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="about/careers/index.html">Careers</a>
        </li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="about/index.html">View All</a>
        </li></ul></div></div></li><li class="h-full w-full"><div class="flex flex-col items-center py-8 lg:flex-grow lg:items-stretch lg:py-0" data-state="closed"><div class="flex items-center gap-2"><button type="button" aria-controls="radix-:R4dmm:" aria-expanded="false" data-state="closed" class="group flex items-center gap-2 hover:text-primary"><h4 class="text-lg font-semibold uppercase tracking-wider text-slate-100 hover:text-primary">My Account</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-6 w-6 text-slate-400 group-data-[state=open]:hidden lg:hidden"><path d="m6 9 6 6 6-6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-6 w-6 text-slate-400 group-data-[state=closed]:hidden lg:hidden"><path d="m18 15-6-6-6 6"></path></svg></button></div><div data-state="closed" id="radix-:R4dmm:"><ul class="mt-2 flex flex-col items-center gap-2 text-slate-400 lg:items-start"><li class="flex flex-col items-center"><a href="my-account/orders/index.html" class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" rel="noopener">My Orders</a></li><li class="flex flex-col items-center"><a href="my-account/orders/index.html" class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" rel="noopener">Track My Order</a></li><li class="flex flex-col items-center"><a href="my-account/designs/index.html" class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" rel="noopener">Recent Saved Designs</a></li><li class="flex flex-col items-center">
        <a href="my-account/orders/index.html" class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" rel="noopener">Reorder</a></li><li class="flex flex-col items-center"><a class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" href="help-center/index.html">Help Center</a></li></ul></div></div></li><li class="h-full w-full"><div class="flex flex-col items-center py-8 lg:flex-grow lg:items-stretch lg:py-0" data-state="closed"><div class="flex items-center gap-2"><button type="button" aria-controls="radix-:R5dmm:" aria-expanded="false" data-state="closed" class="group flex items-center gap-2 hover:text-primary"><h4 class="text-lg font-semibold uppercase tracking-wider text-slate-100 hover:text-primary">Contact</h4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-6 w-6 text-slate-400 group-data-[state=open]:hidden lg:hidden"><path d="m6 9 6 6 6-6"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up h-6 w-6 text-slate-400 group-data-[state=closed]:hidden lg:hidden"><path d="m18 15-6-6-6 6"></path></svg></button></div><div data-state="closed" id="radix-:R5dmm:"><ul class="mt-2 flex flex-col items-center gap-2 text-slate-400 lg:items-start"><li class="flex flex-col items-center">
        <a href="https://www.google.com/maps/place/RushOrderTees+Custom+T-Shirts+%26+Apparel/@40.115901,-74.9712771,16z/data=!4m5!3m4!1s0x0:0x9b7f960897e79d!8m2!3d40.112258!4d-74.979034" class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" rel="noopener"><img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="my-1 h-6 w-6" style={{color:"transparent"}} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" srcSet="https://cdn.sanity.io/images/2ahps9jc/production/85b79a82624ef9a84fc93425636c42c6773ae5e0-24x24.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w,"src="https://cdn.sanity.io/images/2ahps9jc/production/85b79a82624ef9a84fc93425636c42c6773ae5e0-24x24.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/>2727 Commerce Way
Philadelphia PA 19154</a></li><li class="flex flex-col items-center"><a href="tel:8006201233" class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" rel="noopener">
<img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="my-1 h-6 w-6"  style={{color:"transparent"}}  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" srcSet="https://cdn.sanity.io/images/2ahps9jc/production/2133d58e06b60e27b38eea098484e39006b95ee8-24x24.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w"/>
Call (800) 620-1233</a></li><li class="flex flex-col items-center"><button type="button" class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2"><img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="my-1 h-6 w-6"  style={{color:"transparent"}}  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" srcSet="https://cdn.sanity.io/images/2ahps9jc/production" />Chat With An Expert</button></li><li class="flex flex-col items-center"><a href="mailto:sales@rushordertees.com" class="flex flex-col items-center whitespace-pre-line hover:text-primary lg:flex-row lg:items-center lg:gap-2" rel="noopener"><img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" class="my-1 h-6 w-6"  style={{color:"transparent"}}  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" srcSet="https://cdn.sanity.io/images/2ahps9jc/production/a34e24a8a1b9da0af8308320ac9437abcd69940a-24x24.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w, https://cdn.sanity.io/images/2ahps9jc/production/a34e24a8a1b9da0af8308320ac9437abcd69940a-24x24.png?w=384&amp;q=75&amp;fit=min&amp;auto=format 384w,"/>
Email Us</a></li></ul></div></div></li></ul></nav><div class="flex flex-col items-center justify-between border-t py-6 lg:flex-row lg:border-none"><nav class="flex flex-col items-center gap-2 text-slate-500 lg:flex-row"><button type="button" class="hover:text-primary" data-acsb-custom-trigger="true">Accessibility</button><a class="hover:text-primary" href="help-center/user-agreement/index.html">User Agreement</a><a class="hover:text-primary" href="help-center/privacy-policy/index.html">Privacy Policy</a><a class="hover:text-primary" href="help-center/ccpa-privacy-policy/index.html">CCPA</a><a class="hover:text-primary" href="help-center/copyright-infringement-form/index.html">Copyright Infringement</a><a class="hover:text-primary" href="help-center/intellectual-property-policy/index.html">IP Policy</a><a class="hover:text-primary" href="sitemap/index.html">Sitemap</a></nav><nav class="flex gap-4 pt-10 lg:pt-0"><a href="https://www.facebook.com/rushordertees/" class="rounded-full outline-primary hover:shadow hover:outline" rel="noopener">
<img alt="" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" class="h-9 w-9"   style={{
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(\"_data_image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><filter id='b' color-i/><feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0'/></filter><image width='10'/></svg>\")"
  }} srcSet="https://cdn.sanity.io/images/2ahps9jc/production/2ba182fccba747afba87411446ad4f383bb4cf95-50x50.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w,"/>
</a>
<a href="https://twitter.com/rushordertees/" class="rounded-full outline-primary hover:shadow hover:outline" rel="noopener">

<img alt="" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" class="h-9 w-9"   style={{
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(\"_data_image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'><filter id='b' color/><feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0'/></filter><image width='10'/></svg>\")"
  }}srcSet="https://cdn.sanity.io/images/2ahps9jc/production/de999c985765afa046f72957c778ddf3d2c7625e-300x300.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w," src="https://cdn.sanity.io/images/2ahps9jc/production/de999c985765afa046f72957c778ddf3d2c7625e-300x300.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/>


</a><a href="https://www.instagram.com/rushordertees/" class="rounded-full outline-primary hover:shadow hover:outline" rel="noopener"><img alt="" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" class="h-9 w-9"   style={{
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(\"_data_image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'><filter id='b' color/><feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0'/></filter><image width='10'/></svg>\")"
  }}  srcSet="https://cdn.sanity.io/images/2ahps9jc/production/1b28c43f3446e0b4c02f73ac765f8b92b5ed5089-50x50.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w,"/>

</a><a href="https://www.linkedin.com/company/rushordertees" class="rounded-full outline-primary hover:shadow hover:outline" rel="noopener"><img alt="" loading="lazy" width="2048" height="2048" decoding="async" data-nimg="1" class="h-9 w-9"   style={{
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(\"_data_image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'><filter id='b' color/><feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0'/></filter><image width='10'/></svg>\")"
  }} srcSet="https://cdn.sanity.io/images/2ahps9jc/production/daf1ef868bf29f71d9ae9c6c7a069d2811ea8ad0-2048x2048.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w,"/>
</a><a href="https://www.youtube.com/channel/UCv1hGV41gybeYrfv4UUP4QA" class="rounded-full outline-primary hover:shadow hover:outline" rel="noopener"><img alt="" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" class="h-9 w-9"   style={{
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(\"_data_image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'><filter id='b' color/><feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0'/></filter><image width='10'/></svg>\")"
  }} srcSet="https://cdn.sanity.io/images/2ahps9jc/production/3607c37704168616f364e9e92fe5dc1d3fb1fc3d-50x50.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w," src="https://cdn.sanity.io/images/2ahps9jc/production/3607c37704168616f364e9e92fe5dc1d3fb1fc3d-50x50.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/>
</a><a href="https://www.tiktok.com/@rushordertees" class="rounded-full outline-primary hover:shadow hover:outline" rel="noopener"><img alt="" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" class="h-9 w-9"   style={{
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(\"_data_image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'><filter id='b' color/><feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0'/></filter><image width='10'/></svg>\")"
  }} srcSet="https://cdn.sanity.io/images/2ahps9jc/production/12f64c9af9ee325a4d97007ea9a924038c866626-128x128.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w," src="https://cdn.sanity.io/images/2ahps9jc/production/12f64c9af9ee325a4d97007ea9a924038c866626-128x128.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/></a>
<a href="https://www.trustpilot.com/review/rushordertees.com" class="rounded-full outline-primary hover:shadow hover:outline" rel="noopener"><img alt="" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" class="h-9 w-9"   style={{
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url(\"_data_image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'><filter id='b' color/><feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0'/></filter><image width='10'/></svg>\")"
  }} src="https://cdn.sanity.io/images/2ahps9jc/production/49126a1fda1a17a759096eaf646c3dcb060f9c7d-128x128.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/></a></nav></div><div class="flex flex-col items-center border-t pt-6 text-sm text-slate-500 lg:flex-row lg:justify-end lg:gap-1"><p>© Copyright  DbWears.</p><p>All rights reserved.</p></div></div></div>





</footer>
</div>
    </>
  );
};

export default Footer;
