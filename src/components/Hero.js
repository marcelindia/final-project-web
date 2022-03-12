import React from "react";
import "../components/Hero.css";
import CheckboxIng from "./CheckboxIng";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Hero() {
  // const navigate = useNavigate();
  return (
    <>
      <div class="hero-image">
        <div class="hero-text">
          <h1>Website Title</h1>
          <CheckboxIng />
          {/* //change link */}
          {/* <Link to="/recipes"> */}
          {/* <button onClick={() => navigate("/recipes")}>
            Let's Get Cooking
          </button> */}
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}
export default Hero;
