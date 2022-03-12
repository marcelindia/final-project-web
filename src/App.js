import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import AllRecipes from "./scenes/AllRecipes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<AllRecipes />} />
      {/* <Route path="/recipes/:id" element={<></>}></Route> */}
    </Routes>
  );
}

export default App;
