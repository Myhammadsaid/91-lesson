import React from "react";
import aboutImg1 from "../../assets/about__img1.png";
import aboutImg2 from "../../assets/about__img2.png";
import star from "../../assets/star.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <h4 className="about__title">
            Here are our some of the best clients.
          </h4>
          <h1 className="about__text">What People Say About Us</h1>
          <div className="about__cards">
            <div className="about__card">
              <img src={aboutImg1} alt="aboutImg" />
              <div className="about__content">
                <h2 className="about__card__text">Hamza Faizi</h2>
                <p className="about__par">
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <img src={star} alt="star" />
              </div>
            </div>
            <div className="about__card">
              <img src={aboutImg2} alt="aboutImg" />
              <div className="about__content">
                <h2 className="about__card__text">Hafiz Huzaifa</h2>
                <p className="about__par">
                  I’ve been purchasing smart watches of Mohid for a long time.
                  All the products are good quality.
                </p>
                <img src={star} alt="star" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
