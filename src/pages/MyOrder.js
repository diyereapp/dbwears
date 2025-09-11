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
import Header from "./Header";


const bgImage = `url("data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 150'>
    <image href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nLVTPWtVQRBNTCCKBhSTJiKJip8oVoqK+CoxTYyFMYUhj3ff3TMzuzu79yYxJKg8TSM2goqFIGKdxkIQrGwVwUZQK0Xx619E9uELL0UiERw4zNwtDuecO9PRsXZ1/kH73P62rupsNBobEpaWlpbn9rd1kZVluQlAn3Nue5ZlvdVq3ApM9dVq2p+6tXbL4uJi11rEy3bGxsa6nHMDIlohCmdhw2nmeA5SjEDiBXZFNXWReDARrxZBy063qvaIyE6yOko2GrLBMxfXwWGOJC6ILZ6zLV6yjbdhp89k2ZXeFaTJXpa5gTz3u4jCXua434gcg/hxSGBDOmOM3jCk8+B4BxJek8Sf1pXvrS/vEZXHq9XqxiZpUpXsGePOA45zCnUgTORwCvZzOXQqwRg/a4zOG+gjw+ENcfjEUny3rnxLtiiToGaeiZCo3EGkF5MCI8UM4AMQGs1v8mRMQvCAnwPpE1B8Zzh8A8cvZONX4uIx4I60bHemYPPc7TNGTuWko8aEMoe/1lRH3uTk60TBJuugcBccXoHDj0QI1l+Q+IxZTyRxzQzTMDysPWk9auSPgjVPdkG6YEivQgLA6gz5WZDeAocXkPCRJHyAhM9ki6dAPJm2Y8XapGBrIruN0QqgIzn5yaSuDj+ek14i0stEvg4ON3PWBxC9TxIeGtF5wB9YVtiqSqXSneyLyLaaan8KmoiG0t/PrB20mR0kikMpnhrpoYSM+fAksGdiYnrzX6+ldWbJSvvZ/estryBv66vh/9RvTxMh3UHKN/wAAAAASUVORK5CYII='/>
  </svg>")`;
const MyOrder = () => {

  return (
    <>


 <Header />
    
    
    
    
    

    <main><section><div class="text-slate-900 bg-slate-100 py-8"><div class="mx-auto max-w-[1440px] px-6"><div class="flex flex-col gap-2
     md:flex-row md:gap-8"><nav class="w-full md:hidden"><button type="button" role="combobox" aria-controls="radix-:R1j6m:" aria-expanded="false" 
     aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-10 w-full items-center justify-between rounded-md border border-input
      px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
      disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 bg-white text-base font-medium"><span style={{pointerEvents:"none"}}>
      </span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6">
       </path></svg></button><select aria-hidden="true" tabindex="-1"  style={{
    position: "absolute",
    border: 0,
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }}></select></nav><aside class="hidden h-fit basis-1/4 rounded border 
       border-slate-200 bg-white md:flex lg:min-w-72"><div><h1 class="border-b border-slate-200 p-4 text-xl font-semibold">My Account</h1>
       <nav class="border-b border-slate-200"><ul><li class="flex"><a class="w-full border-l-4 border-transparent p-4 transition ease-in-out
        hover:text-rush-blue-500" href="../designs/index.html">My Designs</a></li><li class="flex"><a class="w-full border-l-4 p-4 transition ease-in-out
         hover:text-rush-blue-500 border-rush-blue-500 text-rush-blue-500" href="index.html">Order History</a></li><li class="flex">
         <a class="w-full border-l-4 border-transparent p-4 transition ease-in-out hover:text-rush-blue-500" href="../group-orders/index.html">
         Group Orders</a></li><li class="flex"><button class="w-full border-l-4 border-transparent p-4 text-left transition ease-in-out
          hover:text-rush-blue-500">Log Out</button></li></ul></nav><section class="p-4"><h2 class="mb-2 text-lg font-semibold">Get Help</h2>
          <p>All of your designs are saved here for easy access. If you have any questions or need help with an order, please get in touch with us!</p>
          <ul class="flex flex-col space-y-4 pt-6 text-rush-blue-500"><li class="flex"><a href="tel:8006201233" class="flex items-center justify-center 
          whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call mr-2 size-6"><path d="M22 16.92v3a2 2
           0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84
            0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
            </path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>Call (800) 620-1233</a></li>
            <li class="flex"><button class="flex items-center justify-center whitespace-nowrap"><svg xmlns="http://www.w3.org/2000/svg" width="24"
             height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-message-square-more mr-2 size-6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
              </path><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path></svg>Chat with an Expert</button></li>
              <li class="flex"><a href="mailto:sales@rushordertees.com" class="flex items-center justify-center whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-open mr-2 size-6"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0
                 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10">
                    </path></svg>Email Us</a></li></ul></section></div></aside><section class="min-h-screen basis-3/4">
                    <div class="mb-4 flex flex-col border-b border-slate-200 pb-4 md:flex-row md:justify-between"><h1 class="pb-2 text-2xl font-semibold 
                    md:pb-0 md:text-3xl">Order History</h1><div class="flex items-center md:w-1/2">
                        <p class="align-center text-nowrap pr-4 font-semibold">Sort By:</p><button type="button" role="combobox"
                         aria-controls="radix-:R57j6m:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" 
                         class="flex h-10 w-full items-center justify-between rounded-md border border-input px-3 py-2 ring-offset-background 
                         placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed
                          disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 bg-white text-base font-medium"><span style={{pointerEvents:"none"}}></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                           stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                            aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button><select aria-hidden="true" tabindex="-1"
                             style={{
    position: "absolute",
    border: 0,
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
  }}></select></div></div><ul class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                                <li class="flex min-h-80 animate-pulse items-center justify-center rounded border border-slate-200 bg-white p-8 text-center 
                                lg:col-span-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle
                                 size-12 animate-spin text-rush-blue-500"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg></li></ul></section>
                                 </div></div></div></section></main>
    
    
    <Footer />
    </>
  );
};

export default MyOrder;
