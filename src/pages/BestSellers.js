import React, { useEffect, useState } from "react";
import axios from "axios";

const BestSellers = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // ✅ define fetchProducts outside useEffect
  const fetchProducts = async (categoryId) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/products/category/${categoryId}`
      );
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/categories`
        );
        setCategories(data);

        // find Custom T-shirt → Long Sleeve T-shirts
        const customTshirt = data.find((c) => c.name === "Custom T-shirt");
        if (customTshirt && customTshirt.children) {
          const longSleeve = customTshirt.children.find(
            (child) => child.name === "Long Sleeve T-shirts"
          );
          if (longSleeve) {
            fetchProducts(longSleeve._id); // ✅ now defined
          }
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-3xl font-bold">Explore Best Sellers</h2>
        <p>The most-loved products that customers can’t get enough of</p>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <ul className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li
              key={product._id}
              className="flex h-full flex-col overflow-hidden rounded-2xl border bg-white hover:shadow-md"
            >
              <a
                href={`/product/${product._id}`}
                className="flex md:flex-grow md:flex-col"
              >
                <div className="relative flex basis-2/5 items-center md:w-full">
                  <img
                    src={product.images?.[0] || "/default.jpg"}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex basis-3/5 flex-col justify-center gap-2 px-2 py-3 md:w-full md:flex-grow md:justify-between">
                  <h3 className="text-lg font-bold md:text-center">
                    {product.name}
                  </h3>
                  <p className="text-center text-sm text-gray-600">
                    {product.price ? `$${product.price}` : "Contact for price"}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex pb-8 justify-center">
          <a
            href="/category/long-sleeve-tshirts"
            className="inline-flex items-center justify-center font-bold bg-primary text-white hover:bg-primary/90 h-12 rounded-2xl px-8 text-lg"
          >
            Shop Long Sleeve T-shirts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
