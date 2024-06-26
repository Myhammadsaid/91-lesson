import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.png";
import person from "../../assets/person.png";
import cart from "../../assets/cart.png";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <div className="nav__logo">
              <img src={logo} alt="header__icon" />
            </div>
            <div
              className={`nav__items ${toggle ? "open" : ""}`}
              id="navbar-responsive"
            >
              <Link className="nav__item" to={"/"}>
                Home
              </Link>
              <a href="#brands" className="nav__item">
                Brands
              </a>
              <a href="#product" className="nav__item">
                Recent Products
              </a>
              <a href="#contact" className="nav__item">
                Contact
              </a>
              <a href="#about" className="nav__item">
                About
              </a>
            </div>
            <div className="nav__images">
              <img src={search} alt="header__search" />
              <img src={person} alt="header__person" />
              <img src={cart} alt="header__cart" />
            </div>
            <button
              onClick={() => setToggle(!toggle)}
              className="menu-btn"
              id="menu-btn"
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
