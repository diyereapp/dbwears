import React from "react";
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
import { useState } from "react";


const bgImage = `url("data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
    <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
  </svg>")`;
const Header3 = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
  <div id="__next"><div className="__variable_0fe379 __variable_70c4e6 font-sans">
      
      <header className="relative z-10 bg-white shadow-lg">
        <div className="bg-slate-100 text-slate-900"><div className="mx-auto max-w-[1440px] px-6">
          
          <div className="flex items-center justify-end py-2 text-sm md:justify-between">
            <div className="hidden md:block">100,000+ Customers Nationwide w/ 99.5% Satisfaction</div><nav aria-label="account and cart" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center"><div style={{position: "relative"}}><ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-1 gap-4 lg:gap-0" dir="ltr">
              <div><div className="relative hidden lg:flex" aria-labelledby="search-trigger-label" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rbkmm:" data-state="closed"><div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search size-5 text-slate-400">
                <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div><label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only" id="search-trigger-label" for="site-search-input">Search for products</label><input id="site-search-input" placeholder="Search for products" className="w-full rounded-xl border border-slate-400 py-2 pl-10 pr-9 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" value=""/></div></div><li><a className="flex items-center gap-1 font-medium lg:hidden" href="my-account" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round w-5"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>My Account</a><button id="radix-:Rkmm:-trigger-radix-:Rjkmm:" data-state="closed" aria-expanded="false" aria-controls="radix-:Rkmm:-content-radix-:Rjkmm:" className="group h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group hidden bg-transparent lg:inline-flex" data-radix-collection-item=""><a className="flex items-center gap-1 font-medium" href="my-account" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round w-5"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4">

                </circle><circle cx="12" cy="12" r="10"></circle></svg>My Account</a> </button></li><li><a className="flex items-center gap-2 font-medium lg:hidden" href="https://www.rushordertees.com/cart/" data-radix-collection-item=""><svg xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart w-5"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2
                  0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>Cart<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-loader-circle size-6 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg></a><button id="radix-:Rkmm:-trigger-radix-:Rrkmm:" data-state="closed" aria-expanded="false" aria-controls="radix-:Rkmm:-content-radix-:Rrkmm:" className="group h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group hidden bg-transparent pr-0 lg:inline-flex" data-radix-collection-item=""><a className="flex items-center gap-2 font-medium" href="https://www.rushordertees.com/cart/" data-radix-collection-item="">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart w-5"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>Cart<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-loader-circle size-6 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                    </a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></li></ul></div><div className="absolute left-0 top-full flex w-full justify-center"></div></nav></div></div></div><div className="text-slate-900 bg-white py-3"><div className="mx-auto max-w-[1440px] px-6"><div className="flex justify-between"><a className="flex items-center" href="/">
                  {/*<img alt="Rush Order Tees Logo" loading="eager" 
                  width="300" height="120" decoding="async" data-nimg="1" className="w-28"
                 style={{
    color: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 120'></svg>")`,
  }}
 />*/}
<h1 class="text-center font-extrabold  md:text-left" style={{fontSize: "30px"}}>DIYERE</h1>
 
 </a>
 
 
 <div className="flex items-center gap-6 lg:hidden">
  
  <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R1mmm:" data-state="closed" className="flex flex-col 
  items-center text-xs font-bold uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search size-8"><circle cx="11"
   cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>Search</button><button type="button" aria-haspopup="dialog" aria-expanded="false" 
                     aria-controls="radix-:R2mmm:" data-state="closed" className="flex flex-col items-center text-xs font-bold uppercase">
                      <img alt="Call Or Help Icon" loading="eager" width="48" height="48" decoding="async" data-nimg="1" className="h-8 w-8" 
                      style={{color: "transparent"}} srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-help-icon.be42a8e6.png&amp;w=48&amp;q=75 1x,
                       /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-help-icon.be42a8e6.png&amp;w=96&amp;q=75 2x" 
                       src="_next/image/index69a5.html?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-help-icon.be42a8e6.png&amp;w=96&amp;q=75"/>
                       <div className="flex items-center tracking-tight"><span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>Help</div>
                       </button>
                       <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R3mmm:" data-state="closed"
                        className="group flex flex-col items-center text-xs font-bold uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          className="lucide lucide-menu h-8 w-8 group-data-[state=open]:hidden"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20"
                           y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg><svg xmlns="http://www.w3.org/2000/svg" 
                     width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                     className="lucide lucide-x h-8 w-8 group-data-[state=closed]:hidden"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>Menu</button>


                     </div>
                     
                     <div className="hidden items-center gap-4 lg:flex"><nav aria-label="Main Navigation" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
                      
                      <div style={{position:"relative"}}>
                      
                      <ul data-orientation="horizontal" 
                     className="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
                      
                   <li className="relative">
  <button
    onClick={() => setOpen(!open)}
    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors 
               hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground 
               focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 
               data-[state=open]:bg-accent/50 group text-base"
  >
    <a href="t-shirts/index.html">Custom T-Shirts</a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  </button>

  {open && (
    <div
      className="absolute left-0 top-full w-64 rounded-md border bg-popover text-popover-foreground shadow-lg mt-2 z-50"
    >
      <ul className="flex flex-col gap-1 p-1">
        <li>
          <a
            className="flex items-center gap-4 whitespace-nowrap rounded-md px-4 py-2 text-sm leading-none no-underline
                       hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            href="t-shirts/short-sleeve/index.html"
          >
            Short Sleeve T-Shirts
            <span className="rounded bg-primary px-1.5 py-0.5 text-xs text-white">
              Popular
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-4 whitespace-nowrap rounded-md px-4 py-2 text-sm leading-none no-underline
                       hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            href="t-shirts/long-sleeve/index.html"
          >
            Long Sleeve T-Shirts
          </a>
        </li>
        {/* Add the rest of your links here */}
      </ul>
    </div>
  )}
</li>

           <li className="relative">
  <button
    onClick={() => setOpen(!open)}
    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors 
               hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground 
               focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 
               data-[state=open]:bg-accent/50 group text-base"
  >
    <a href="t-shirts/index.html">Custom T-Shirts</a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  </button>

  {open && (
    <div
      className="absolute left-0 top-full w-64 rounded-md border bg-popover text-popover-foreground shadow-lg mt-2 z-50"
    >
      <ul className="flex flex-col gap-1 p-1">
        <li>
          <a
            className="flex items-center gap-4 whitespace-nowrap rounded-md px-4 py-2 text-sm leading-none no-underline
                       hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            href="t-shirts/short-sleeve/index.html"
          >
            Short Sleeve T-Shirts
            <span className="rounded bg-primary px-1.5 py-0.5 text-xs text-white">
              Popular
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-4 whitespace-nowrap rounded-md px-4 py-2 text-sm leading-none no-underline
                       hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            href="t-shirts/long-sleeve/index.html"
          >
            Long Sleeve T-Shirts
          </a>
        </li>
        {/* Add the rest of your links here */}
      </ul>
    </div>
  )}
</li>


                            
                              
                              <li>




                              <button id="radix-:R1umm:-trigger-As17RvIPCrS48mQI6Fx3F0" data-state="closed" aria-expanded="false" aria-controls="radix-:R1umm:-content-As17RvIPCrS48mQI6Fx3F0" 
                              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group text-base" data-radix-collection-item=""><a href="promotional-products/index.html">Promo Products</a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button><div id="radix-:R1umm:-content-As17RvIPCrS48mQI6Fx3F0" aria-labelledby="radix-:R1umm:-trigger-As17RvIPCrS48mQI6Fx3F0" data-orientation="horizontal" data-state="closed" className="data-[state=open]:block data-[state=closed]:hidden data-[state=closed]:opacity-0 data-[state=open]:opacity-100 left-0 top-0 w-full rounded-md border bg-popover text-popover-foreground shadow-lg data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto border-t-8 border-t-primary aria-hidden:hidden" aria-hidden="true" style={{pointerEvents:"none"}} dir="ltr"><ul className="flex justify-between gap-16 px-8 py-4"><li><ul><li><a className="block select-none space-y-1 whitespace-nowrap rounded-md px-3 py-2 font-semibold leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="drinkware/index.html">Drinkware</a><ul className="flex flex-col gap-1 p-1 border-t"><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                            focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="drinkware/water-bottles/index.html">Water Bottles<span className="rounded bg-primary px-1.5 py-0.5 text-xs text-white">Popular</span></a></li><li><a className="flex select-none 
                            items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                             focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="drinkware/tumblers-travel-mugs/index.html">Tumblers &amp; Travel Mugs</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap 
                             rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50
                              data-[active]:font-bold py-1.5" data-radix-collection-item="" href="drinkware/mugs/index.html">Mugs</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap
                               rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground 
                               data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item=""
                                href="brands/stanley/index.html">Stanley</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground
                                 focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="drinkware/can-coolers-koozies/index.html">Can Coolers &amp; Koozies</a></li><li><a className="flex select-none
                                  items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50
                                   data-[active]:font-bold py-1.5" data-radix-collection-item="" href="drinkware/glassware/index.html">Glassware</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="drinkware/cups/index.html">Cups</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="kitchenware/bottle-openers/index.html">Bottle Openers</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="drinkware/shaker-bottles/index.html">Shaker Bottles</a></li></ul></li></ul></li><li><ul><li><a className="block select-none space-y-1 whitespace-nowrap rounded-md px-3 py-2 font-semibold leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="bags/index.html">Bags</a><ul className="flex flex-col gap-1 p-1 border-t"><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="bags/tote/index.html">Tote Bags<span className="rounded bg-primary px-1.5 py-0.5 text-xs text-white">Popular</span></a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent
                             hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="bags/backpacks/index.html">Backpacks</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap 
                             rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="bags/drawstring/index.html">Drawstring Bags</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="bags/gym-duffel/index.html">Gym &amp; Duffle Bags</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="bags/lunch-boxes/index.html">Lunch Boxes</a></li></ul></li><li><a className="block select-none space-y-1 whitespace-nowrap rounded-md px-3 py-2 font-semibold leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="office/index.html">Office Supplies</a><ul className="flex flex-col gap-1 p-1 border-t"><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="office/notebooks/index.html">Notebooks</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="office/pens/index.html">Pens</a></li><li><a className="flex select-none items-center gap-4
                              whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="office/lanyards/index.html">Lanyards</a></li></ul></li></ul></li><li><ul><li><a className="block select-none space-y-1 whitespace-nowrap rounded-md px-3 py-2 font-semibold leading-none no-underline outline-none transition-colors hover:bg-accent 
                              hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="technology/index.html">Technology</a><ul className="flex flex-col gap-1 p-1 border-t"><li><a className="flex select-none
                               items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground 
                               focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="technology/headphones-earbuds/index.html">Headphones &amp; Earbuds<span className="rounded bg-primary px-1.5 py-0.5 text-xs text-white">Popular</span></a></li><li>
                               <a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors
                                hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item=""
                                 href="technology/power-banks/index.html">Power Banks</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none 
                                 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" 
                                 href="technology/speakers/index.html">Speakers</a></li></ul></li><li><a className="block select-none space-y-1
                                  whitespace-nowrap rounded-md px-3 py-2 font-semibold leading-none no-underline outline-none transition-colors
                                   hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                                    href="trade-shows/index.html">Trade Shows</a><ul className="flex flex-col gap-1 p-1 border-t"><li><a className="flex select-none items-center
                                     gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground
                                      focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="promotional-products/signs-banners/index.html">
                                      Banners</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                                       focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" 
                                       href="trade-shows/tents/index.html">Tents &amp; Canopies</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline 
                                       outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="trade-shows/table-covers/index.html">
                                       Table Covers</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" 
                                       data-radix-collection-item="" href="trade-shows/flags/index.html">Flags</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground
                                        data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="trade-shows/signs/index.html">Signs</a></li></ul></li></ul></li><li><ul><li><a className="block select-none space-y-1 whitespace-nowrap rounded-md px-3 py-2 
                                        font-semibold leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="promotional-products/index.html">More Promo</a><ul className="flex flex-col gap-1 p-1 border-t"><li><a className="flex select-none items-center
                                         gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent 
                                         focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="promotional-products/no-minimum/index.html">No Minimums<span className="rounded bg-primary px-1.5 py-0.5 text-xs text-white">Popular</span></a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                                          focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="home/blankets-throws/index.html">Blankets &amp; Throws</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item=""
                                           href="food-snacks/index.html">Food &amp; Snacks</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="footwear/index.html">Footwear</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4
                                            text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="health-wellness/index.html">Health &amp; Wellness</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item=""
                                             href="kitchenware/index.html">Kitchenware</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="outdoor/index.html">Outdoor</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5" data-radix-collection-item="" href="travel/index.html">Travel
                                             </a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold py-1.5"
                                              data-radix-collection-item="" href="new-products/promo-products/index.html">New Arrivals</a></li></ul></li></ul></li></ul></div></li>
                                              
                                              
                                              
                                              <li><button id="radix-:R1umm:-trigger-nni4ogGXepawy-hnwHk6d" data-state="closed" aria-expanded="false" aria-controls="radix-:R1umm:-content-nni4ogGXepawy-hnwHk6d" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group text-base" 
                                              data-radix-collection-item=""><a href="brands/index.html">Brands</a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button><div id="radix-:R1umm:-content-nni4ogGXepawy-hnwHk6d" aria-labelledby="radix-:R1umm:-trigger-nni4ogGXepawy-hnwHk6d" data-orientation="horizontal" data-state="closed" className="data-[state=open]:block data-[state=closed]:hidden data-[state=closed]:opacity-0 data-[state=open]:opacity-100 
                                              left-0 top-0 w-full rounded-md border bg-popover text-popover-foreground shadow-lg data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto border-t-8 border-t-primary aria-hidden:hidden" aria-hidden="true"   style={{ pointerEvents: 'none' }} dir="ltr"><ul className="flex gap-4 flex-col"><li><div className="flex flex-1 gap-4 p-4 border-b"><a className="flex aspect-square w-[110px] flex-1 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent data-[active]:bg-accent/50" data-radix-collection-item="" href="brands/nike/index.html">
                                                <img alt="" loading="lazy" width="200" height="150" decoding="async" data-nimg="1" className="object-contain"
                              
                              
                    style={{
    color: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
        <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAABv0lEQVQ4ja1UsWpVQRB978WYIKKohaISUInYCCJoI0gkRQoLW8XCFHPmFM7RH1ALeytBEAQbe60kXUjnN9ha+QNiKbN792ZfyEMLF4ad3TtnZs7szJ1M/vcCdYhE2Rfae8zZoZPx0lI8JsYoO7w6LPohwGLbHHuVPJdo6aSPPBoeFO/3ZqtMZgZqyahpczY1ajkv52lXSVADlwQ80n7VPE6BOgfqLKgTiW+pngR1GdTp4nygXGmNGR8ZQGugboC6a9Q9MG4XrJdvswQeNY87oB4b42pHJWkcGzK4bq4tUNtGPQf1DNQjUIlbA+N4Y5fgC+bxAtQnUA/hugLqGqgN83gC6hWod3B9APUG1FNQm6AuWXU06x8oC5pRvoD6AdcOvIA/gvHVPPZA7YB6D1dUmnERjNVaCs09YJ5T2bQEuX6D+gXqJ1zfwdg1j7dwbYO6aR5nwFjaL8n+K6O13UB53TxegtoF9Q3UZ1CvzeMBXOugktaYzcKW4jAIoFbg5TG2wLgP6hZc581jpbXPmE03AH0XTPo1RJ6i9uGyeW2bfmqq3qgtHsvqsCvo3Hz2U9PR/fvPoY1eGaEDNer0f11/AA4/SbeWeJ56AAAAAElFTkSuQmCC'/>
      </svg>")`,
  }}
                               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" srcSet="https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w, https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=384&amp;q=75&amp;fit=min&amp;auto=format 384w, https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=640&amp;q=75&amp;fit=min&amp;auto=format 640w, https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=750&amp;q=75&amp;fit=min&amp;auto=format 750w, https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=828&amp;q=75&amp;fit=min&amp;auto=format 828w, https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=1080&amp;q=75&amp;fit=min&amp;auto=format 1080w, https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=1200&amp;q=75&amp;fit=min&amp;auto=format 1200w, https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=1920&amp;q=75&amp;fit=min&amp;auto=format 1920w, https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=2048&amp;q=75&amp;fit=min&amp;auto=format 2048w, https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format 3840w" src="https://cdn.sanity.io/images/2ahps9jc/production/68e9867b4a48e9e3e8db11e9e0cc715f3f294abd-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/></a><a className="flex aspect-square w-[110px] flex-1 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent data-[active]:bg-accent/50" data-radix-collection-item="" href="brands/under-armour/index.html"><img alt="" loading="lazy" width="200" height="150" decoding="async" data-nimg="1" className="object-contain"
                               
                 style={{
    color: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
        <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLUlEQVQ4jV1UT+NYRC9eqttRFqNW1IlsUB8pFVBGurqFUGI8Bsac+YgcxoLiZWEnyAktoRYWAq2YiXWWPFjZJ73o297k8nz3plnznyep2eMXgqoHvL0/K+eeaOvda5yVve6EsWW98svP9ACVGcFUEnrWDt1gYofa19XBbj9slF9uGZAHQI1gGu8VFHZx0HNVbaYAaPfJJABqgxLhLaEdDhmLgP1zDxumWtXU7J57AZ1Bx7PQd0DdcQ8+qU1TclNhjXgFKiboL4Y9QvUE6MOgJo0xqR5HAT1FK4/oD6Buo5KX/xbwE4f+6BOg3oF6rcx3oC6DY9FMJbAuAvqfdpAvQC1WDLcDthOrxrEAlyPzeOneXwGdR/UZVBr5vEQjK/G+AHqkXnMb/a+nXIzpdKHCTDS+SOov6BemmsFrgVQWe4FMF4b4x8YH8xjFR47u9MvyB3FBKgr5vHOPL7B9QDUnnZPPWZBbZjrOzzemsdaAnbXrLPAGsvm1+tywzzWkQ7UtLH0NjcgAUeg1kFdy8wtB+nqtxnWEx6rox81ahnUeVBDUBdBHQd1GNQJMM6BumTU0DzOgDoF10lQ+5H72wHM6POgzho1Mo8RvGQyBGPZ0pFaKdm5rhpjVAdbrYKXdUqMBCzl7oCXHZw1j7kUuPbBNQCTNTFdbIy9qbciMUipezxliVGGUtOmoV8yp8vfZqU61Nz6OGySoqJfQ7tm2g3RW+K3L9HW16ZD1w5o9P4DenqLTafVY9oAAAAASUVORK5CYII='/>
      </svg>")`,
  }}
                               
                               
                               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                               
                               
                               srcSet="https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w, https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=384&amp;q=75&amp;fit=min&amp;auto=format 384w, https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=640&amp;q=75&amp;fit=min&amp;auto=format 640w, https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=750&amp;q=75&amp;fit=min&amp;auto=format 750w, https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=828&amp;q=75&amp;fit=min&amp;auto=format 828w, https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=1080&amp;q=75&amp;fit=min&amp;auto=format 1080w, https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=1200&amp;q=75&amp;fit=min&amp;auto=format 1200w, https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=1920&amp;q=75&amp;fit=min&amp;auto=format 1920w, https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=2048&amp;q=75&amp;fit=min&amp;auto=format 2048w, https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format 3840w" src="https://cdn.sanity.io/images/2ahps9jc/production/65b923e79e305b886b5106c32183ec305bc7268f-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/></a><a className="flex aspect-square w-[110px] flex-1 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent data-[active]:bg-accent/50" data-radix-collection-item="" href="brands/carhartt/index.html"><img alt="" loading="lazy" width="200" height="150" decoding="async" data-nimg="1" className="object-contain"
                               
            style={{
    color: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
        <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVQ4jeVSzWqUQRCc7GY3LGZvCXhzUSPJmkWR4CEEDyLIIlkPQo45hK4ukK4HyDnP4Wv4fNLzzbf7CckL6EAx093VP/RUKf/kAVXMo4AJdfC8oxRrziTkuyOqWCUOEoZoyeaZt7Mz9mhC36QvvLXbVH3TDrEHagrGfi3YTaaReYyMUW9QYzAmoBJjeMYrZwwqE6cVHjNQr4z6BOo0fdnhCNQiA6CW5lqZa2mMFah31hHf5hvUWcMHUO+NcQHqJ6hfoAjqOAsm8YtRG7juzCMDP8xjDcZ3UDfWkZV+UJ9BXYP6Zq6voO5B/QbjAdTL0qbLjlfmWiea/RqMc1CXmQzGBtQFXC9AnYB6A9cCro+gbkFtzPU8C07aLp7BNTePw7ajsXnd46z55kYd5C7hNdZ2GxNzzeE6NI/9/lN2v9rLYCCFnVw6adWffkJKpQ9UDQ7lUTFM+lsuVU5bu4sl/sPzB37V9JnMHRBoAAAAAElFTkSuQmCC'/>
      </svg>")`,
  }}
                               
                               
                               
                               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" srcSet="https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w, https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=384&amp;q=75&amp;fit=min&amp;auto=format 384w, https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=640&amp;q=75&amp;fit=min&amp;auto=format 640w, https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=750&amp;q=75&amp;fit=min&amp;auto=format 750w, https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=828&amp;q=75&amp;fit=min&amp;auto=format 828w, https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=1080&amp;q=75&amp;fit=min&amp;auto=format 1080w,
                         https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=1200&amp;q=75&amp;fit=min&amp;auto=format 1200w,
                          https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=1920&amp;q=75&amp;fit=min&amp;auto=format 1920w,
                           https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=2048&amp;q=75&amp;fit=min&amp;auto=format 2048w,
                            https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format 3840w"
                             src="https://cdn.sanity.io/images/2ahps9jc/production/dff5a2e74cc6c5a332da47cd9cad96090df0c9c5-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/></a><a className="flex aspect-square w-[110px] flex-1 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent data-[active]:bg-accent/50" data-radix-collection-item="" href="brands/the-north-face/index.html"><img alt="" loading="lazy" width="200" height="150" decoding="async" data-nimg="1" className="object-contain" 
                             
                             
                             
                             
                             
                           style={{
        color: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: bgImage,
      }}
                             
                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" srcSet="https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w, https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=384&amp;q=75&amp;fit=min&amp;auto=format 384w, https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=640&amp;q=75&amp;fit=min&amp;auto=format 640w, https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=750&amp;q=75&amp;fit=min&amp;auto=format 750w, https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=828&amp;q=75&amp;fit=min&amp;auto=format 828w, https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=1080&amp;q=75&amp;fit=min&amp;auto=format 1080w, https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=1200&amp;q=75&amp;fit=min&amp;auto=format 1200w, https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=1920&amp;q=75&amp;fit=min&amp;auto=format 1920w, https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=2048&amp;q=75&amp;fit=min&amp;auto=format 2048w, https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format 3840w" src="https://cdn.sanity.io/images/2ahps9jc/production/4dc9662f60f2cca9390a06ed9558cb0c94cf9787-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/></a><a className="flex aspect-square w-[110px] flex-1 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent data-[active]:bg-accent/50" data-radix-collection-item="" href="brands/champion/index.html"><img alt="" loading="lazy" width="200" height="150" decoding="async" data-nimg="1" className="object-contain"
                             
                           style={{
        color: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: bgImage,
      }}
                             
                             
                             
                             
                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" srcSet="https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w, https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=384&amp;q=75&amp;fit=min&amp;auto=format 384w, https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=640&amp;q=75&amp;fit=min&amp;auto=format 640w, https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=750&amp;q=75&amp;fit=min&amp;auto=format 750w, https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=828&amp;q=75&amp;fit=min&amp;auto=format 828w, https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=1080&amp;q=75&amp;fit=min&amp;auto=format 1080w, https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=1200&amp;q=75&amp;fit=min&amp;auto=format 1200w, https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=1920&amp;q=75&amp;fit=min&amp;auto=format 1920w, https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=2048&amp;q=75&amp;fit=min&amp;auto=format 2048w, https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format 3840w" src="https://cdn.sanity.io/images/2ahps9jc/production/d65be0b68b7b43841c11f789796661027faaa964-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/></a><a className="flex aspect-square w-[110px] flex-1 items-center justify-center rounded-lg transition-colors duration-300 hover:bg-accent data-[active]:bg-accent/50" data-radix-collection-item="" href="brands/adidas/index.html"><img alt="" loading="lazy" width="200" height="150" decoding="async" data-nimg="1" className="object-contain"
                             
                             
      style={{
        color: 'transparent',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: bgImage,
      }}
                             
                             
                             
                             
                             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              srcSet="https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w,
                               https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=384&amp;q=75&amp;fit=min&amp;auto=format 384w, 
                               https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=640&amp;q=75&amp;fit=min&amp;auto=format 640w,
                                https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=750&amp;q=75&amp;fit=min&amp;auto=format 750w, 
                                https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=828&amp;q=75&amp;fit=min&amp;auto=format 828w, 
                                https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=1080&amp;q=75&amp;fit=min&amp;auto=format 1080w,
                                 https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=1200&amp;q=75&amp;fit=min&amp;auto=format 1200w,
                                  https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=1920&amp;q=75&amp;fit=min&amp;auto=format 1920w, 
                                  https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=2048&amp;q=75&amp;fit=min&amp;auto=format 2048w, 
                                  https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format 3840w" 
                                  src="https://cdn.sanity.io/images/2ahps9jc/production/82a633e7adae679c55d4d7b5425f9719d9fdbdab-200x150.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/></a></div></li><li><ul className="flex
                                   items-center gap-4 px-4 pb-4"><li><ul className="flex justify-between gap-4"><li><ul className="flex flex-col gap-1 p-1"><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none
                                    transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/adidas/index.html">Adidas</a>
                                    </li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" 
                                    data-radix-collection-item="" href="brands/american-giant/index.html">American Giant</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 
                                    text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold"
                                     data-radix-collection-item="" href="brands/american-apparel/index.html">American Apparel</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors
                                      hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/arctic-zone/index.html">Arctic Zone</a>
                                      </li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground
                                       data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/bella-canvas/index.html">Bella + Canvas</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none
                                        no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                                         href="brands/berne/index.html">Berne</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent 
                                         focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/brooks-brothers/index.html">Brooks Brothers</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 
                                         text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/bose/all/index.html">Bose</a></li><li><a className="flex
                                          select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/bullet/index.html">Bullet</a></li>
                                          <li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/camelbak/index.html">
                                          CamelBak</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/carhartt/index.html">
                                          Carhartt</a></li></ul></li><li><ul className="flex flex-col gap-1 p-1"><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                                           href="brands/champion/index.html">Champion</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/columbia/index.html">
                                           Columbia</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/comfort-colors/index.html">Comfort Colors</a></li><li><a className="flex
                                            select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/cornerstone/index.html">CornerStone</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap
                                             rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/cotopaxi/index.html">Cotopaxi</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline 
                                             outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/cutter-buck/index.html">Cutter &amp; Buck</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/dickies/index.html">Dickies</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/district/index.html">District</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/eddie-bauer/index.html">Eddie Bauer</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/g-fore/index.html">G/FORE</a></li>
                         <li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5
                          text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground 
                          focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                           href="brands/gildan/index.html">Gildan</a></li></ul></li><li><ul className="flex flex-col gap-1 p-1"><li><a className="flex
                            select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none
                             transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50
                              data-[active]:font-bold" data-radix-collection-item="" href="brands/hanes/index.html">Hanes</a></li><li><a className="flex
                               select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/helly-hansen/index.html">Helly Hansen</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/hydro-flask/index.html">Hydro Flask</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/jbl/index.html">JBL</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/jerzees/index.html">Jerzees</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/koozie/index.html">Koozie</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/marine-layer/index.html">Marine Layer</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent
                          hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" 
                          data-radix-collection-item="" href="brands/marmot/index.html">Marmot</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/mophie/index.html">Mophie</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/nautica/index.html">Nautica</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/new-era/index.html">New Era</a></li></ul></li><li><ul className="flex flex-col gap-1 p-1"><li><a className="flex select-none items-center gap-4 
                         whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/next-level-apparel/index.html">Next Level</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/nike/index.html">Nike</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/oakley/index.html">Oakley</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/ogio/index.html">OGIO</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/outdoor-research/index.html">Outdoor Research</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                          href="brands/patagonia/index.html">Patagonia</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap 
                          rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground 
                          focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                           href="brands/peter-millar/index.html">Peter Millar</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap 
                           rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground 
                           focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                            href="brands/port-authority/index.html">Port Authority</a></li><li><a className="flex select-none items-center gap-4
                             whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent
                              hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" 
                              data-radix-collection-item="" href="brands/puma/index.html">Puma</a></li><li><a className="flex select-none items-center 
                              gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent
                               hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" 
                               data-radix-collection-item="" href="brands/richardson/index.html">Richardson</a></li><li><a className="flex select-none
                                items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors
                                 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50
                                  data-[active]:font-bold" data-radix-collection-item="" href="brands/russell-athletic/index.html">Russell Athletic</a>
                                  </li></ul></li><li><ul className="flex flex-col gap-1 p-1"><li><a className="flex select-none items-center gap-4 
                                  whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent
                                   hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold"
                                    data-radix-collection-item="" href="brands/skullcandy/index.html">Skullcandy</a></li><li><a className="flex select-none 
                                    items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none
                                     transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/sport-tek/index.html">Sport-Tek</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/spyder/index.html">Spyder</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/stanley/index.html">Stanley</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item="" href="brands/stio/index.html">Stio</a></li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                          href="brands/team-365/index.html">Team 365</a></li><li>
                            <a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5
                             text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                              focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                               href="brands/the-north-face/index.html">The North Face</a></li><li><a className="flex select-none items-center
                                gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors
                                 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50
                                  data-[active]:font-bold" data-radix-collection-item="" href="brands/travismathew/index.html">TravisMathew</a>
                                  </li><li><a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm
                                   leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent
                                    focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                                     href="brands/under-armour/index.html">Under Armour</a></li><li><a className="flex select-none items-center gap-4
                                      whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent
                                       hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold"
                                        data-radix-collection-item="" href="brands/vineyard-vines/index.html">Vineyard Vines</a></li><li>
                                          <a className="flex select-none items-center gap-4 whitespace-nowrap rounded-md px-4 py-1.5 text-sm leading-none
                                           no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent 
                                           focus:text-accent-foreground data-[active]:bg-accent/50 data-[active]:font-bold" data-radix-collection-item=""
                                            href="brands/yeti/index.html">YETI</a></li></ul></li></ul></li></ul></li></ul></div></li></ul></div>

                                            
                                            <div className="absolute left-0 top-full flex w-full justify-center"></div></nav><a className="inline-flex
                                             items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-colors
                                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-primary text-primary hover:bg-primary hover:text-white h-11 rounded-2xl px-4 py-2" href="design-t-shirts/index.html">Design Now</a><div className="relative ml-4 flex min-w-[200px] items-center gap-4"><button className="absolute flex animate-[fade-v1_10s_infinite_linear] items-center xl:relative xl:animate-none"><img alt="Chat Icon" loading="eager" width="96" height="96" decoding="async" data-nimg="1" className="mr-2 h-10 w-10" style={{color:"transparent"}} srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fchat-icon.fa32fade.png&amp;w=96&amp;q=75 1x, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fchat-icon.fa32fade.png&amp;w=256&amp;q=75 2x"
                             src="_next/image/index1538.html?url=%2F_next%2Fstatic%2Fmedia%2Fchat-icon.fa32fade.png&amp;w=256&amp;q=75"/>
                            <div><p className="text-lg/5 font-semibold text-primary">Live Chat Now</p><p className="flex items-center text-sm font-medium"><span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>Chat With an Expert</p></div></button><div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] hidden h-10 xl:block"></div><a href="tel:8006201233" className="absolute flex animate-[fade-v2_10s_infinite_linear] items-center xl:relative xl:animate-none"><img alt="Call Icon" loading="eager" width="96" height="96" decoding="async" data-nimg="1" className="mr-2 h-10 w-10" 
                           style={{ color: 'transparent' }}
                            
                            srcSet="/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcall-icon.d25750d8.png&amp;w=96&amp;q=75 1x, /_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcall-icon.d25750d8.png&amp;w=256&amp;q=75 2x"
                             src="_next/image/index04b3.html?url=%2F_next%2Fstatic%2Fmedia%2Fcall-icon.d25750d8.png&amp;w=256&amp;q=75"/>
                             
                             <div className="flex flex-col"><p className="text-lg/5 font-semibold text-primary">(800) 620-1233</p><div className="relative whitespace-nowrap"><p className="flex items-center text-sm font-medium xl:animate-[fade-v1_10s_infinite_linear]"><span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>Talk to an Expert</p><p className="hidden items-center text-sm font-medium xl:absolute xl:left-0 xl:top-0 xl:flex xl:animate-[fade-v2_10s_infinite_linear]">Wait time:
                               <span className="font-bold">0 min</span></p></div></div></a></div></div>
                               
                               
                               
                               
                               
                               
                               </div></div></div></header>
    
    </div>
    </div>

    </>
  );
};

export default Header3;
