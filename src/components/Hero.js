import React from "react";
import "../components/Hero.css";
import CheckboxIng from "./Checkbox";
import { Button } from "@mui/material";

function Hero() {
  return (
    <>
      <div class="hero-image">
        <div class="hero-text">
          <h1>Website Title</h1>
          <CheckboxIng />
          <Button style={{ color: "white" }}>Submit</Button>
        </div>
      </div>
    </>
  );
}
export default Hero;
