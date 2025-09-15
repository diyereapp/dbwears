import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import "./style.css";
import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";
import AppLoader from "./AppLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Fetch all your endpoints in parallel
        await Promise.all([
          axios.get(`${process.env.REACT_APP_API_URL}/api/db/categories`),
          axios.get(`${process.env.REACT_APP_API_URL}/api/db/products/best-sellers`),
          axios.get(`${process.env.REACT_APP_API_URL}/api/db/products/trending`),
          axios.get(`${process.env.REACT_APP_API_URL}/api/db/products/featured`),
          axios.get(`${process.env.REACT_APP_API_URL}/api/db/brands`),
        ]);

        // Wait until all assets (images, fonts, css) are fully loaded
        if (document.readyState === "complete") {
          setLoading(false);
        } else {
          window.addEventListener("load", () => setLoading(false));
        }
      } catch (err) {
        console.error("Error loading data:", err);
        setLoading(false); // fallback
      }
    };

    fetchAll();

    // cleanup listener
    return () => window.removeEventListener("load", () => setLoading(false));
  }, []);

  if (loading) {
    return <AppLoader />;
  }

  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
