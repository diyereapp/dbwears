
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Featured = () => {
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/products/featured`
        );
        setProducts(data);
      } catch (err) {
        console.error("Error fetching best sellers:", err);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <section className="flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-2xl font-bold" >Featured</h2>
      
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <ul className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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


      </div>
    </section>
  );
};

export default Featured;
