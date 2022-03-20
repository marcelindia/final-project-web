import React from "react";
import "../home/Hero.css";
import CheckboxIng from "./CheckboxIng";

function Hero() {
  return (
    <>
      <div class="hero-image">
        <div class="hero-text">
          <h1>Inspired Cooking</h1>
          <CheckboxIng />
        </div>
      </div>
    </>
  );
}
export default Hero;
