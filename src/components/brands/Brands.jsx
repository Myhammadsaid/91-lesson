import React from "react";
import brandImg1 from "../../assets/brand__img1.png";
import brandImg2 from "../../assets/brand__img2.png";
import brandImg3 from "../../assets/brand__img3.png";
import "./Brands.css";

const Brands = () => {
  return (
    <div>
      <section id="brands" className="brands">
        <div className="container">
          <div className="brands__cards">
            <div className="brands__card">
              <img src={brandImg1} alt="brands__img" />
              <div className="brands__content">
                <h1 className="brands__title">Apple</h1>
                <p className="brands__text">
                  Apple is one of the most famous smart watches providing
                  company.
                </p>
              </div>
            </div>
            <div className="brands__card">
              <img src={brandImg2} alt="brands__img" />
              <div className="brands__content">
                <h1 className="brands__title">Xiaomi</h1>
                <p className="brands__text">
                  Xiaomi smart watches are produced by MI company.
                </p>
              </div>
            </div>
            <div className="brands__card">
              <img src={brandImg3} alt="brands__img" />
              <div className="brands__content">
                <h1 className="brands__title">FitBit</h1>
                <p className="brands__text">
                  FitBit smart watches are best for there health and fitness
                  features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
