import React from "react";
import heroImg from "../../assets/hero__img.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero__style">
            <div className="hero__content">
              <h1 className="hero__text">Discover Most Suitable Watches</h1>
              <p className="hero__par">
                Find the best, reliable, and cheap smart watches here. We focus
                on product quality. Here you can find smart watches of almost
                all brands. So why you are waiting? Just order now!
              </p>
              <form className="hero__form">
                <input
                  type="text"
                  className="hero__input"
                  placeholder="Find the best brands"
                />
                <button className="hero__btn">Search</button>
              </form>
            </div>
            <img src={heroImg} alt="heroImg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
