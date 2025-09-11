import React, {useEffect} from "react";
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
import axios from "axios"
import Banner from "./Banner";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHelpCircle } from "react-icons/fi"; // Feather icon (react-icons)
import { MessageCircle, Phone } from "lucide-react";

const bgImage = `url("data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
    <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
  </svg>")`;
const Header = () => {

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/categories`
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
const isCategory = (item) => {
  // A category has a 'children' property (array) and no 'price' property
  return item.children && Array.isArray(item.children) && !item.price;
};


const renderSubmenu = (category) => {
  if (!category.children || category.children.length === 0) return null;

  const categoryChildren = category.children.filter(isCategory);

  const isGrandparent = categoryChildren.some(
    (child) => child.children && child.children.filter(isCategory).length > 0
  );

 if (!isGrandparent) {
  // Simple vertical dropdown
  return (
    <div
      className={`absolute top-full mt-2 z-50 rounded-md bg-white text-gray-800 shadow-lg
      ${categoryChildren.length > 8 ? "right-0" : "left-0"}`}
    >
      <ul className="px-4 py-2 bg-white min-w-[220px]">
        {categoryChildren.map((child) => (
          <li key={child._id}>
            <a
              href={`/category/${child._id}`}
              className="block px-4 py-2 whitespace-nowrap text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded bg-white"
            >
              {child.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


  // Flex layout for grandparent categories
return (
  <div
    className="absolute left-1/2 top-full -translate-x-1/2 mt-2 z-50 rounded-md bg-white text-gray-800 shadow-lg"
  >
    <ul className="flex justify-between gap-12 px-8 py-6 bg-white">
      {categoryChildren.map((parent) => (
        <li key={parent._id} className="min-w-[150px] bg-white">
          <a
            href={`/category/${parent._id}`}
            className="block font-semibold mb-3 text-gray-900 hover:text-blue-600 bg-white"
          >
            {parent.name}
          </a>
          {parent.children && parent.children.filter(isCategory).length > 0 && (
            <ul className="flex flex-col gap-1 border-t pt-2 bg-white">
              {parent.children
                .filter(isCategory)
                .map((child) => (
                  <li key={child._id}>
                    <a
                      href={`/category/${child._id}`}
                      className="flex items-center gap-2 whitespace-nowrap rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 bg-white"
                    >
                      {child.name}
                    </a>
                  </li>
                ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
);

};


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
 
 <div className="flex items-center gap-6 lg:hidden ">
      {/* Search button */}
      <button className="flex flex-col items-center text-xs font-bold uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search size-8"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        Search
      </button>

      {/* Help button */}
     <button className="flex flex-col items-center text-xs font-bold uppercase">
      <FiHelpCircle className="h-8 w-8 text-black-600" />
      <div className="flex items-center tracking-tight">
        <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
        Help
      </div>
    </button>
      {/* Hamburger button */}
      <button
        type="button"
        className="group flex flex-col items-center text-xs font-bold uppercase"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x h-8 w-8"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu h-8 w-8"
          >
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        )}
        Menu
      </button>

 {/* Mobile menu panel */}


  
 {/* Mobile menu panel */}
<div
  className={`absolute top-full left-0 right-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out
    ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
>
  <div className="p-4 border-t">
    <ul className="flex flex-col divide-y">
      {categories.map((cat) => {
        const hasChildren = cat.children && cat.children.length > 0;
        const hasGrandchild =
          hasChildren &&
          cat.children.some(
            (child) => child.children && child.children.length > 0
          );

        // Case 1: Show grandparent
        if (hasGrandchild) {
          return (
            <li key={cat._id}>
              <a
                href={`/shop-category/${cat._id}`}
                className="block px-4 py-3 text-center font-semibold text-gray-900 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {cat.name}
              </a>
            </li>
          );
        }

        // Case 2: Show parent (has children but no grandchildren)
        if (hasChildren && !hasGrandchild) {
          return (
            <li key={cat._id}>
              <a
                href={`/category/${cat._id}`}
            
                  className="block px-4 py-3 text-center font-semibold text-gray-900 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                {cat.name}
              </a>
            </li>
          );
        }

        return null;
      })}
     <li> <a     className="block px-4 py-3 text-center font-semibold text-gray-900 hover:bg-gray-100">Brands</a></li>
    </ul>

    {/* Example "Design Now" button */}
    <div className="mt-4 flex justify-center">
      <a
        href="/design-now"
        className="px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition"
        onClick={() => setOpen(false)}
      >
        Design Now
      </a>
    </div>
  </div>
</div>

    </div>
                     
                     <div className="hidden items-center gap-4 lg:flex"><nav aria-label="Main Navigation" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
                      
               <div style={{ position: "relative" }} >
<nav className="group flex flex-1 list-none items-center justify-center space-x-1"  >
  {categories.map((cat) => {
    const isOpen = openCategory === cat._id;
    return (
 <div
  key={cat._id}
  className="relative"
  onMouseEnter={() => setOpenCategory(cat._id)}
  // onMouseLeave={() => setOpenCategory(null)}
>
  {/* Button */}
  <button className="inline-flex items-center font-medium hover:text-blue-400">
    {cat.name}
    {cat.children && cat.children.length > 0 && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
          openCategory === cat._id ? "rotate-180" : ""
        }`}
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    )}
  </button>

  {/* Submenu must be inside the same wrapper */}
  {openCategory === cat._id && renderSubmenu(cat)}
</div>

    );
  })}
</nav>



    </div>
                                            
                                            <div className="absolute left-0 top-full flex w-full justify-center"></div>
                                            
                                            </nav>
                                            
                                            <a className="inline-flex
                                             items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-colors
                                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                                              disabled:pointer-events-none disabled:opacity-50 border-2 border-primary text-primary hover:bg-primary
                                               hover:text-white h-11 rounded-2xl px-4 py-2" href="design-t-shirts/index.html">Design Now</a>
                                               <div className="relative ml-4 flex min-w-[200px] items-center gap-4">
                                                
                                                {/* Chat Button */}
      <button className="absolute flex animate-[fade-v1_10s_infinite_linear] items-center xl:relative xl:animate-none">
        <MessageCircle className="mr-2 h-10 w-10 text-green-600" />
        <div>
          <p className="text-lg/5 font-semibold text-primary">Live Chat Now</p>
          <p className="flex items-center text-sm font-medium">
            <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
            Chat With an Expert
          </p>
        </div>
      </button>


                            
                            <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] hidden h-10 xl:block"></div>
                       <a
        href="tel:8006201233"
        className="absolute flex animate-[fade-v2_10s_infinite_linear] items-center xl:relative xl:animate-none"
      >
        <Phone className="mr-2 h-10 w-10 text-green-600" />
        <div className="flex flex-col">
          <p className="text-lg/5 font-semibold text-primary">(800) 620-1233</p>
          <div className="relative whitespace-nowrap">
            <p className="flex items-center text-sm font-medium xl:animate-[fade-v1_10s_infinite_linear]">
              <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
              Talk to an Expert
            </p>
            <p className="hidden items-center text-sm font-medium xl:absolute xl:left-0 xl:top-0 xl:flex xl:animate-[fade-v2_10s_infinite_linear]">
              Wait time: <span className="font-bold">0 min</span>
            </p>
          </div>
        </div>
      </a>
                               
                               </div></div>
                               
                               
                               
                               
                               
                               
                               </div></div></div></header>
    
    </div>
    </div>

    </>
  );
};

export default Header;
