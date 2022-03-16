import "./App.css";
import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";

export const RecipeContext = createContext();

function App() {
  const [selectedIngrResult, setSelectedIngrResult] = useState();
  return (
    <div>
      <RecipeContext.Provider
        value={{ selectedIngrResult, setSelectedIngrResult }}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recipes" element={<Recipe />} />
          {/* <Route path="/recipes/:id" element={<></>}></Route> */}
        </Routes>
        <Footer />
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
