import React from "react";
import "./slider.scss";
const Slide = () => {
  return (
    <div className="slide">
      <img
        src="https://c.files.bbci.co.uk/31F0/production/_117548721_nfts2.jpg"
        alt="slide1"
      />
      <div className="info">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          quibusdam.
        </p>
      </div>
    </div>
  );
};
const Slider = () => {
  return (
    <>
      <div className="slider">
        <Slide />
        <Slide />
        <div className="navigation">
          <i className="fas fa-chevron-left prev__btn"></i>
          <i className="fas fa-chevron-right next__btn"></i>
        </div>
      </div>
    </>
  );
};
export default Slider;
