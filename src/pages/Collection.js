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
const Collection = () => {

 const [open, setOpen] = useState(false);
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





useEffect(() => {
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/products/category`
      );
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  fetchProducts();
}, );


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




    
    
    
    <main><div class="bg-slate-100"><div class="text-slate-900 bg-inherit"><div class="mx-auto max-w-[1440px] px-6"><nav class="pt-4" aria-label="Breadcrumb"><ol class="flex items-center"><li class="flex items-center"><a class="whitespace-nowrap text-rush-green-500
     hover:text-rush-green-600 hover:underline" href="../catalog/index.html">All Products</a>
     
     <div data-orientation="vertical" role="none" class="shrink-0 w-[1px] mx-2 h-3 rotate-12 bg-slate-500"></div>
     
     </li><li class="truncate whitespace-nowrap text-slate-500">     {name}</li></ol></nav></div></div></div><div class="bg-slate-100 text-slate-900 py-4"><div class="mx-auto max-w-[1440px] px-6"><div class="grid grid-cols-4 gap-8"><aside class="hidden h-fit flex-col divide-y rounded-2xl bg-white px-8 md:inline-flex">
      
<section className="py-8">
  <h2 className="pb-2 text-lg font-semibold">Shop By Category</h2>
  <ul className="flex flex-col">



 {categories.map((cat) => (
                    <li key={cat._id}>
                      <a
                        href={`/category/${cat._id}`}
       className="block select-none rounded-md px-3 py-1 outline-none transition-colors
            hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => setOpen(false)}
                      >
                        {cat.name}
                      </a>
                    </li>
                  ))}

    
  </ul>
</section>


 <section className="py-8">
  <h2 className="pb-2 text-lg font-semibold">Shop By Brand</h2>
  <ul className="flex flex-col">
    {brands.map((parent) => (
      <li key={parent._id}>
        <a
          href={`/category/${parent._id}`}
          className="block select-none rounded-md px-3 py-1 outline-none transition-colors
            hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          {parent.name}
        </a>
      </li>
    ))}
  </ul>
</section>

      

       {/*<section className="py-8">
  <h2 className="pb-2 text-lg font-semibold">Shop By category</h2>
  <ul className="flex flex-col">
    {parents.map((parent) => (
      <li key={parent._id}>
        <a
          href={`/category/${parent._id}`}
          className="block select-none rounded-md px-3 py-1 outline-none transition-colors
            hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          {parent.name}
        </a>
      </li>
    ))}
  </ul>
</section>*/}

      

      
      

      
      </aside>
      
      
      <main class="col-span-full flex flex-col gap-8 md:col-span-3"><section class="flex flex-col overflow-hidden rounded-2xl bg-gradient-to-r text-white md:flex-row" style={{backgroundColor: "green"}}><div class="flex flex-col gap-4 px-4 py-6 md:max-w-1/2 md:justify-center md:px-12"><h1 class="text-4xl font-extrabold md:text-5xl">{name}</h1><p class="text-lg font-semibold text-slate-200">Design customized {name} in minutes. Pick your style, upload your logo, and we&#x27;ll handle the rest.</p><ul class="flex flex-col gap-2 text-lg"><li><a class="inline-flex items-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-12 rounded-2xl px-8 text-lg w-full justify-center border-rush-green-900 bg-rush-green-900 py-3 font-bold transition-opacity duration-200 hover:bg-rush-green-900 hover:opacity-75" href="all/index.html">Shop All {name}</a>
      </li></ul><div class="relative flex w-full flex-col gap-4 lg:flex-row"><div class="flex w-full flex-row gap-4 lg:basis-1/2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck size-10 shrink-0 rounded-full bg-slate-200/25 p-2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><div><p class="font-bold text-white">Free Delivery</p>
      <p class="text-sm text-slate-200 md:text-nowrap">As soon as <span class="text-nowrap">...</span></p></div></div></div></div><div class="flex justify-center md:w-full md:max-w-1/2"><img alt="" 
      width="900" height="733" decoding="async" data-nimg="1" class="object-none object-top sm:w-full sm:object-cover"
      
  style={{
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(_data_image/svg%2bxml%3bcharset%3dutf-8%2c_svg%20xmlns%3d%27http_/www.w3.org/2000/svg%27%20viewBox%3d%270%200%201080%20720%27__filter%20id%3d%27b%27%20colo/__feColorMatrix%20values%3d%271%200%200%200%200%200%201/filter__image%20width%3d%2710);')"
  }}sizes="(max-width: 640px) 100vw,
       (max-width: 1024px) 50vw, 33vw" srcSet="https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=256&amp;q=75&amp;fit=min&amp;auto=format 256w, https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=384&amp;q=75&amp;fit=min&amp;auto=format 384w, https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=640&amp;q=75&amp;fit=min&amp;auto=format 640w, https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=750&amp;q=75&amp;fit=min&amp;auto=format 750w, https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=828&amp;q=75&amp;fit=min&amp;auto=format 828w, https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=1080&amp;q=75&amp;fit=min&amp;auto=format 1080w, https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=1200&amp;q=75&amp;fit=min&amp;auto=format 1200w, https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=1920&amp;q=75&amp;fit=min&amp;auto=format 1920w, https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=2048&amp;q=75&amp;fit=min&amp;auto=format 2048w, https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format 3840w" src="https://cdn.sanity.io/images/2ahps9jc/production/4f8e23b096b788908340549d5bb9cf1865cfda2d-1004x733.png?w=3840&amp;q=75&amp;fit=min&amp;auto=format"/></div>
       
       </section>
       
       
       
       <section class="flex flex-col gap-4"><div class="flex flex-col gap-1">
        
        
        <h2 class="text-3xl font-bold">Shop By Style</h2><p>Find the perfect {name} to customize</p></div>
        
        
     <section className="py-8">


  <ul className="mt-4 grid grid-cols-2 gap-4 overflow-hidden rounded-2xl">
 {categories.map((cat) => (
      <li
key={cat._id}
        // style={{
        //   background: cat.bgColor || ["#e4f4f1", "#b8dcfc", "#9dadbc", "#ffeccc"][index % 4], // fallback colors
        // }}
      >
        <a
        href={`/category/${cat._id}`}
          className="relative flex justify-center transition-opacity duration-200 hover:opacity-75"
        >
          <img
            alt={cat.name}
            loading="lazy"
            decoding="async"
            className="object-contain p-2 lg:max-w-72"
            src={cat.image || "https://via.placeholder.com/600x600?text=No+Image"}
          />
          <h3 className="absolute bottom-0 left-0 mb-4 rounded-r-lg bg-white px-2 py-1 text-lg font-bold md:px-4 md:py-2 md:text-xl">
            {cat.name}
          </h3>
        </a>
      </li>
    ))}
  </ul>
</section>
</section>



<section className="flex flex-col gap-4">
      {/* Heading */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Popular Brands</h2>
          <a
            href="/brands"
            className="text-sm font-bold transition-opacity duration-200 hover:opacity-75"
          >
            View All Brands
          </a>
        </div>
        <p>Shop top brands that you know and love</p>
      </div>

      {/* Brand Grid */}
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {brands.map((brand) => (
          <li
            key={brand._id}
            className="flex items-center justify-center rounded-2xl border bg-white transition duration-200 hover:shadow-md"
          >
            <a
              href={`/brands/${brand._id}/jackets`}
              className="w-full p-6 flex items-center justify-center"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
              
              
              
              
              
                    </main>
                    
                    
                    
                    
                    </div></div></div></main>
    


    <Footer />
    </>
  );
};

export default Collection;
