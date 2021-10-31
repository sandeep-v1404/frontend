import React from "react";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import ImageSlider from "../../components/ImageSlider";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <ImageSlider />
      <CTA />

      <Footer />
    </>
  );
};

export default Home;
