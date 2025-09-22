import React from "react";
import Slider from "react-slick";

// Example deals (replace with API later if needed)
const deals = [
  {
    id: 1,
    name: "Coffees Mugs",
    oldPrice: 48,
    price: 40,
    discount: "17%",
    image: "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/branding-1-300x300.jpg",
  },
  {
    id: 2,
    name: "Box Packag",
    oldPrice: 48,
    price: 40,
    discount: "17%",
    image: "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/coffee-1-300x300.jpg",
  },
  {
    id: 3,
    name: "Print Book Cover",
    oldPrice: 32,
    price: 16,
    discount: "50%",
    image: "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/bookcover-1-300x300.jpg",
  },
  {
    id: 4,
    name: "Lounge Chair Fredericia",
    oldPrice: 48,
    price: 40,
    discount: "17%",
    image: "https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/08/mog-1-300x300.jpg",
  },
];

const DealsoftheDay = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="deal-section" style={{ padding: "50px 0", background: "#fff" }}>
      <div className="auto-container">
        {/* Title */}
        <div className="sec-title">
          <div className="d-flex align-items-center flex-column flex-md-row">
            <h2 style={{ marginRight: "20px" }}>
              <span>Deals Of The Day</span>
            </h2>
            <div className="text" style={{ color: "#666", fontSize: "14px" }}>
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form.
            </div>
          </div>
        </div>

        <div className="row clearfix">
          {/* Left Column */}
          <div className="arrival-column col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner-box d-flex justify-content-between align-items-center"
              style={{
                border: "1px solid #eee",
                borderRadius: "8px",
                padding: "20px",
                background: "#f9f9f9",
              }}
            >
              <div className="content">
                <div className="title" style={{ color: "#999", marginBottom: "5px" }}>
                  New Arrival
                </div>
                <h3>
                  <a href="/" style={{ textDecoration: "none", color: "#333" }}>
                    Lavie Quee Book <br /> Cover Print
                  </a>
                </h3>
                <div className="text" style={{ marginBottom: "15px", color: "#666" }}>
                  We build and activate brands
                </div>
                <a
                  className="shop-now"
                  href="/shop"
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    background: "#ff4d4d",
                    color: "#fff",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                >
                  Shop Now
                </a>

                {/* Countdown placeholder */}
                <div
                  className="product-time-countdown clearfix"
                  style={{ marginTop: "20px", display: "flex", gap: "10px" }}
                >
                  {["Days", "Hours", "Mins", "Secs"].map((label, i) => (
                    <div
                      key={i}
                      className="counter-column"
                      style={{
                        textAlign: "center",
                        background: "#fff",
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        minWidth: "60px",
                      }}
                    >
                      <span className="count" style={{ fontWeight: "bold", fontSize: "18px" }}>
                        00
                      </span>
                      <div style={{ fontSize: "12px" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="image">
                <img
                  src="https://themexriver.com/wp/prinox-wp/wp-content/uploads/2022/10/deal.png"
                  alt="deal"
                  style={{ maxWidth: "250px" }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Slider */}
          <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
            <Slider {...settings}>
              {deals.map((deal) => (
                <div key={deal.id} className="shop-item-five" style={{ padding: "15px" }}>
                  <div
                    className="inner-box"
                    style={{
                      border: "1px solid #eee",
                      borderRadius: "8px",
                      padding: "15px",
                      background: "#fff",
                      textAlign: "center",
                    }}
                  >
                    <div className="image" style={{ position: "relative" }}>
                      <div
                        className="hot"
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          background: "red",
                          color: "#fff",
                          padding: "2px 8px",
                          borderRadius: "3px",
                          fontSize: "12px",
                        }}
                      >
                        {deal.discount}
                      </div>
                      <img
                        src={deal.image}
                        alt={deal.name}
                        style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}
                      />
                    </div>
                    <div className="lower-content" style={{ marginTop: "15px" }}>
                      <h6>
                        <a href={`/product/${deal.id}`} style={{ textDecoration: "none", color: "#333" }}>
                          {deal.name}
                        </a>
                      </h6>
                      <div className="price" style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                        <del style={{ marginRight: "8px", color: "#999" }}>${deal.oldPrice}</del>
                        <ins style={{ color: "red", textDecoration: "none" }}>${deal.price}</ins>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsoftheDay;
