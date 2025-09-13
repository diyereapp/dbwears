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
const ShopCategory = () => {

    const { id } = useParams();
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
useEffect(() => {
  const fetchCategory = async () => {
    try {
      // 🔹 Fetch current category
      const { data: category } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/category/${id}`
      );
      console.log("📌 Current category:", category);

      setName(category.name);
      setPreview(category.image || "");

      // 🔹 Fetch all categories (with nested children)
      const { data: allCats } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/categories`
      );
      console.log("📌 All categories:", allCats);

      // Get all grandparent-level categories (no parent)
      setGrandParents(allCats.filter((cat) => !cat.parent));

      let grandParentId;

      if (!category.parent) {
        // Current category IS a grandparent
        grandParentId = category._id;
        console.log("✅ Current category is a GRANDPARENT:", grandParentId);
      } else {
        // Walk up one level
        const { data: parentCat } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/category/${category.parent}`
        );
        console.log("📌 Parent category:", parentCat);

        if (!parentCat.parent) {
          grandParentId = parentCat._id;
          console.log("✅ Parent is GRANDPARENT:", grandParentId);
        } else {
          const { data: grandCat } = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/db/category/${parentCat.parent}`
          );
          console.log("📌 Resolved grandparent category:", grandCat);
          grandParentId = grandCat._id;
        }
      }

      setSelectedGrandParent(grandParentId);
      console.log("🎯 Final grandParentId:", grandParentId);

      // ✅ Find the grandparent inside allCats (this one has children populated!)
      const grandParentCategory = allCats.find(
        (cat) => cat._id.toString() === grandParentId.toString()
      );

      // ✅ Use children of grandparent
      let resolvedParents = [];
      if (grandParentCategory && grandParentCategory.children) {
        resolvedParents = grandParentCategory.children.filter(
          (child) => !child.price // optional filter: exclude products
        );
      }

      console.log(
        "📌 Parents to display (from grandparent.children):",
        resolvedParents
      );

      setParents(resolvedParents);
      setChildren([]);
    } catch (err) {
      console.error("❌ Failed to fetch category:", err);
    }
  };

  fetchCategory();
}, [id]);





useEffect(() => {
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/products/category/${id}`
      );
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  fetchProducts();
}, [id]);


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




    
    
    
    <main>
      
      
      <div class="bg-slate-100"><div class="text-slate-900 bg-inherit"><div class="mx-auto max-w-[1440px] px-6"><nav class="pt-4" aria-label="Breadcrumb"><ol class="flex items-center"><li class="flex items-center"><a class="whitespace-nowrap text-rush-green-500
     hover:text-rush-green-600 hover:underline" href="../catalog/index.html">All Products</a>
     
     <div data-orientation="vertical" role="none" class="shrink-0 w-[1px] mx-2 h-3 rotate-12 bg-slate-500"></div>
     
     </li><li class="truncate whitespace-nowrap text-slate-500">     {name}</li></ol></nav></div></div></div><div class="bg-slate-100 text-slate-900 py-4"><div class="mx-auto max-w-[1440px] px-6">
      
      <div class="grid grid-cols-4 gap-8">
        
        <aside class="hidden h-fit flex-col divide-y rounded-2xl bg-white px-8 md:inline-flex">
      
<section className="py-8">
  <h2 className="pb-2 text-lg font-semibold">Shop By Style</h2>
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

      

       <section className="py-8">
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
</section>

      

      
      

      
      </aside>
      
      
      <main class="col-span-full flex flex-col gap-8 md:col-span-3">

       
       
       <section class="flex flex-col gap-4"><div class="flex flex-col gap-1">
        
        
        <h2 class="text-3xl font-bold">Shop By Style</h2><p>Find the perfect {name} to customize</p></div>
        
        
     <section className="py-8">


  <ul className="mt-4 grid grid-cols-2 gap-4 overflow-hidden rounded-2xl">
    {parents.map((parent, index) => (
      <li
        key={parent._id}
        style={{
          background: parent.bgColor || ["#e4f4f1", "#b8dcfc", "#9dadbc", "#ffeccc"][index % 4], // fallback colors
        }}
      >
        <a
          href={`/category/${parent._id}`}
          className="relative flex justify-center transition-opacity duration-200 hover:opacity-75"
        >
          <img
            alt={parent.name}
            loading="lazy"
            decoding="async"
            className="object-contain p-2 lg:max-w-72"
            src={parent.image || "https://via.placeholder.com/600x600?text=No+Image"}
          />
          <h3 className="absolute bottom-0 left-0 mb-4 rounded-r-lg bg-white px-2 py-1 text-lg font-bold md:px-4 md:py-2 md:text-xl">
            {parent.name}
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

export default ShopCategory;
