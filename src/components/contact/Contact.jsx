import React from "react";
import contactImg from "../../assets/contact__img.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact__style">
            <div className="contact__content">
              <h1 className="contact__text">Subscribe To Newsletter</h1>
              <p className="contact__par">
                Get free guide about smart watches daily.
              </p>
              <form className="contact__form">
                <input
                  type="text"
                  className="contact__input"
                  placeholder="Enter Email Address"
                />
                <button className="contact__btn">Subscribe</button>
              </form>
            </div>
            <img src={contactImg} alt="contactImg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
