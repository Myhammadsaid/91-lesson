import React from "react";
import Hero from "../../components/hero/Hero";
import Brands from "../../components/brands/Brands";
import Product from "../../components/product/Product";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Product />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
