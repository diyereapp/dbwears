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


const AllProduct = () => {


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
        // Fetch current category
        const { data: category } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/category/${id}`
        );

        setName(category.name);
        setPreview(category.image || "");

        // Fetch parent if exists
        if (category.parent) {
          const { data: parentCat } = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/category/${category.parent}`
          );
          setSelectedParent(parentCat._id);
          setSelectedGrandParent(parentCat.parent || parentCat._id);
        } else {
          setSelectedGrandParent(category._id); // top-level
        }

        // Fetch all categories for dropdowns
        const { data: allCats } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/categories`
        );
        setGrandParents(allCats.filter((cat) => !cat.parent));
        setParents(
          allCats.filter((cat) => cat.parent === (category.parent || ""))
        );
        setChildren([]);
      } catch (err) {
        console.error("Failed to fetch category:", err);
      }
    };

    fetchCategory();
  }, [id]);




useEffect(() => {
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/products/category/${id}`
      );
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  fetchProducts();
}, [id]);
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
    <>
  <div id="__next"><div className="__variable_0fe379 __variable_70c4e6 font-sans">
  <Header />
    </div>
    </div>


    
    <main>


    <div class="bg-slate-100">
      
      
      <div class="text-slate-900 bg-inherit"><div class="mx-auto max-w-[1440px] px-6">
        
    <nav className="pt-4" aria-label="Breadcrumb">
  <ol className="flex items-center">
    {/* Always show All Products */}
    <li className="flex items-center">
      <Link
        className="whitespace-nowrap text-rush-blue-500 hover:text-rush-blue-600 hover:underline"
        to="/catalog"
      >
        All Products
      </Link>
      <div
        data-orientation="vertical"
        role="none"
        className="shrink-0 w-[1px] mx-2 h-3 rotate-12 bg-slate-500"
      />
    </li>

    {/* Show grandparent if exists */}
    {selectedGrandParent && (
      <li className="flex items-center">
        <Link
          to={`/category/${selectedGrandParent}`}
          className="whitespace-nowrap text-rush-blue-500 hover:text-rush-blue-600 hover:underline"
        >
          {
            grandParents.find((g) => g._id === selectedGrandParent)
              ?.name /* show grandparent name */
          }
        </Link>
        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 w-[1px] mx-2 h-3 rotate-12 bg-slate-500"
        />
      </li>
    )}

    {/* Show parent if exists */}
    {selectedParent && (
      <li className="flex items-center">
        <Link
          to={`/category/${selectedParent}`}
          className="whitespace-nowrap text-rush-blue-500 hover:text-rush-blue-600 hover:underline"
        >
          {parents.find((p) => p._id === selectedParent)?.name}
        </Link>
        <div
          data-orientation="vertical"
          role="none"
          className="shrink-0 w-[1px] mx-2 h-3 rotate-12 bg-slate-500"
        />
      </li>
    )}

    {/* Current category (child) */}
    <li className="truncate whitespace-nowrap text-slate-500">{name}</li>
  </ol>
</nav>

    
    </div></div>
    
    </div>

    <div class="flex flex-col">
  <div class="bg-slate-100 text-slate-900"><div class="mx-auto max-w-[1440px] px-6"><div class="flex flex-col items-center justify-center"></div>

          <div class="mt-8 flex w-full flex-col md:flex-row md:items-center md:justify-between"><h1 class="text-2xl font-semibold">{name}</h1>
    
    
        <p class="text-slate-500">Design your own hoodies with fast, free shipping</p></div>
        
        <ul class="no-scrollbar flex w-full gap-6 overflow-scroll">
          <li><a href="index.html" class="group mt-4 flex flex-col items-center justify-center gap-2 text-center text-sm font-bold"><div class="flex size-24
           items-center justify-center overflow-hidden rounded-full border bg-white group-hover:border-slate-400 border-slate-400"><img alt="" loading="lazy"
            width="1024" height="1024" decoding="async" data-nimg="1" class="object-contain p-2" style={{color:"transparent"}} sizes="(max-width: 640px) 100vw,
             (max-width: 1024px) 50vw, 33vw" 
   src={image}/>
        </div><p class="max-w-[6rem]">{name}</p></a></li>
        
        
        
    
    
    
        </ul>
        
        <div class="mt-4 flex w-full justify-between gap-4"><div class="flex gap-2"><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R5bhj6m:" data-state="closed" class="hidden items-center justify-between gap-2 rounded-xl border bg-white px-4 py-2 font-medium hover:bg-slate-50 lg:flex">Brand<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"></path></svg></button><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R9bhj6m:" data-state="closed" class="hidden items-center justify-between gap-2 rounded-xl border bg-white px-4 py-2 font-medium hover:bg-slate-50 lg:flex">Color<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"></path>
        </svg></button>
        
        <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rdbhj6m:" data-state="closed" class="hidden items-center justify-between gap-2 rounded-xl border bg-white px-4 py-2 font-medium 
        hover:bg-slate-50 lg:flex">Price<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
        lucide-chevron-down"><path d="m6 9 6 6 6-6"></path></svg></button><ul class="hidden gap-2 md:flex"><li>
          
          </li><li>
          
          </li></ul><button class="flex flex-grow items-center justify-between whitespace-nowrap rounded-xl border bg-white px-4 py-2 font-medium hover:bg-slate-50 md:flex-grow-0" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R3bhj6m:" data-state="closed">All Filters<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal ml-2 h-5 w-5"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4">
        </line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg></button></div><div class="flex justify-end gap-4"><button type="button" role="combobox" aria-controls="radix-:Rjhj6m:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" class="flex h-10 w-full border-input ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 items-center justify-between gap-2 rounded-xl border bg-white px-4 py-2 text-base font-medium hover:bg-slate-50"><span style={{pointerEvents:"none"}}></span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button><select aria-hidden="true" tabindex="-1" style={{
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
    }}
    ></select></div></div>
    
    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full mt-4"></div>
    
    
             
             <ul class="mt-4 grid grid-cols-1 
    gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 mb-10">
    
    {products.map((product) => (
      <li key={product._id}>
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white hover:shadow-md">
          <Link
            to={`/single-product/${product._id}`}
            className="flex md:flex-grow md:flex-col"
          >
            {/* Product image */}
            <div className="relative flex basis-2/5 items-center md:w-full md:max-w-none">
              <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center">
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
                  className="lucide lucide-loader-circle size-16 animate-spin text-primary"
                >
             
                </svg>
              </div>
    <img alt="front with design" loading="lazy" width="550" height="550" decoding="async" data-nimg="1" class="absolute" style={{color:"transparent"}} srcSet="https://cdn.rushordertees.com/design/resources/scripts/ZoomImage.php?src=NTQyMTQxNg_f&amp;x=230&amp;y=300&amp;width=550&amp;height=550&amp;scale=1&amp;watermark=false&amp;autoInvertDesign=true&amp;style=PC78ZH&amp;colorCode=a226&amp;hideProduct=true 1x, https://cdn.rushordertees.com/design/resources/scripts/ZoomImage.php?src=NTQyMTQxNg_f&amp;x=230&amp;y=300&amp;width=550&amp;height=550&amp;scale=1&amp;watermark=false&amp;autoInvertDesign=true&amp;style=PC78ZH&amp;colorCode=a226&amp;hideProduct=true 2x" />
              {product.images?.length > 0 && (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className=" w-full h-full object-cover"
                />
              )}
            </div>
    
            {/* Product details */}
            <div className="flex basis-3/5 flex-col justify-center gap-2 px-2 py-3 md:w-full md:flex-grow md:justify-between">
              <h3 className="text-balance text-lg font-bold md:text-center">
                {product.name}
              </h3>
    
              {/* Colors */}
              <ul className="flex flex-wrap items-center gap-1 md:justify-center">
                {product.color.slice(0, 6).map((colorName) => {
                  const colorObj = availableColors.find((c) => c.name === colorName);
                  if (!colorObj) return null;
    
                  return (
                    <li key={colorName}>
                      <button
                        type="button"
                        className="relative flex items-center justify-center overflow-hidden rounded-md border border-black/15 bg-contain outline outline-2 outline-offset-2 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-rush-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rush-blue-500 hover:disabled:outline-transparent outline-transparent m-0 h-6 w-6"
                        aria-pressed="false"
                        title={colorObj.name}
                      >
                        <div className="flex h-full w-full">
                          <span
                            className="h-full w-full"
                            style={{ backgroundColor: colorObj.hex }}
                          ></span>
                        </div>
                      </button>
                    </li>
                  );
                })}
    
                {product.color.length > 6 && (
                  <li className="flex justify-end text-sm text-slate-500">
                    +{product.color.length - 6} colors
                  </li>
                )}
              </ul>
    
              {/* Reviews + Size + Price */}
              <div className="flex items-center gap-2">
                <div
                  className="relative inline-block overflow-hidden whitespace-nowrap font-sans text-lg leading-none tracking-wide text-transparent before:absolute before:left-0 before:top-0 before:whitespace-nowrap before:font-sans before:text-slate-300 before:content-['★★★★★'] md:text-2xl"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  <div
                    className="absolute left-0 top-0 overflow-hidden whitespace-nowrap font-sans text-yellow-500"
                    style={{ width: "100%" }}
                    aria-hidden="true"
                  >
                    ★★★★★
                  </div>
                  ★★★★★
                </div>
                <p className="text-sm">28 reviews</p>
              </div>
    
              <div className="flex items-center text-sm md:justify-center">
                <p>{product.size}</p>
                <div
                  data-orientation="vertical"
                  role="none"
                  className="shrink-0 w-[1px] mx-2 h-3 bg-slate-400"
                ></div>
                <p>No Minimum</p>
              </div>
    
              <div
                data-test="pricing"
                className="flex items-center gap-1 md:justify-center"
              >
                <div className="text-sm">
                  <span className="font-semibold">
                    ${product.discountPrice || ""}
                  </span>{" "}
                  each for each items
                </div>
              </div>
            </div>
          </Link>
        </article>
      </li>
    ))}
              
    </ul>
          
             <nav aria-label="Pagination" class="mt-6 flex justify-between px-4 py-4 text-sm font-medium text-slate-700 sm:px-6 lg:px-8">
          

          
          <div class="mr-6 flex-1 md:mr-8"><button class="inline-flex h-10 cursor-auto items-center rounded-md border border-slate-300 bg-white px-4 opacity-50" disabled="">Previous</button></div><div class="hidden space-x-2 md:flex"><span class="inline-flex h-10 items-center rounded-md border border-primary bg-white px-4 ring-1 ring-primary">1</span><button class="inline-flex h-10 items-center rounded-md border border-slate-300 bg-white px-4 hover:bg-slate-50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-primary">2</button><button class="inline-flex h-10 items-center rounded-md border border-slate-300 bg-white px-4 hover:bg-slate-50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-primary">3</button><button class="inline-flex h-10 items-center rounded-md border border-slate-300 bg-white px-4 hover:bg-slate-50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-primary">4</button><button class="inline-flex h-10 items-center rounded-md border border-slate-300 bg-white px-4 hover:bg-slate-50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-primary">5</button>
         <button class="inline-flex h-10 items-center rounded-md border border-slate-300 bg-white px-4 hover:bg-slate-50 focus:border-primary 
         focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-25 focus:ring-offset-1 
         focus:ring-offset-primary">6</button><button class="inline-flex h-10 items-center rounded-md border border-slate-300
          bg-white px-4 hover:bg-slate-50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary
           focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-primary">7</button></div><div class="ml-6 flex
            flex-1 justify-end md:ml-8"><button class="inline-flex h-10 items-center rounded-md border border-slate-300 bg-white px-4
             hover:bg-slate-50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-25 focus:ring-offset-1 
             focus:ring-offset-primary">Next</button></div></nav>
             
             

                      <div class="prose max-w-3xl py-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"><h2>Design {name} With Your Logo
             Or Image</h2><p>Whether you’re working or relaxing, custom hoodies are the perfect addition to your wardrobe. You can choose from a wide
                 collection of styles and fits from leading brands like <a class="" href="../brands/gildan/hoodies/index.html">Gildan</a>, <a class="" 
                 href="../brands/carhartt/hoodies/index.html">Carhartt</a>, <a class="" href="../brands/bella-canvas/hoodies/index.html">Bella &amp; Canvas
                 </a>, <a class="" href="../brands/nike/hoodies/index.html">Nike</a>, <a class="" href="../brands/champion/hoodies/index.html">Champion</a>
                  and more.</p><p>Our custom hoodies and sweatshirts are suitable for branded events, team uniforms or even as personalized gifts. 
                    From smart quarter zips to comfortable embroidered hoodies, we have options for every budget and style.</p><p>You can quickly and 
                        easily upload your own design using our intuitive Design Studio, adding your brand’s logo, team names or a unique image that
                         you’ve created. You can even develop your own design directly within our platform if you don’t already have one.</p><p>Choose 
                            between printing (no minimums) and embroidery (minimum of six), upload your design and checkout. Creating custom hoodies 
                            has never been easier - make your own hoodie today. </p></div>
                            
</div>
</div>
</div>
    </main>
    <Footer />
    </>
  );
};

export default AllProduct;
